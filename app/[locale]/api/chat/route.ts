import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { franc } from "franc-min";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export const runtime = "edge";

interface Message {
  role: string;
  content: string;
}

const detectLanguage = (text: string): string => {
  const detectedLang = franc(text);
  if (detectedLang === "und") {
    return "eng";
  }
  return detectedLang;
};

const isDreamRelated = (text: string): boolean => {
  const dreamKeywords = [
    "dream",
    "sleep",
    "nightmare",
    "dreamt",
    "dreamed",
    "REM",
    "lucid", // English
    "꿈",
    "수면",
    "악몽",
    "꿈꿨어",
    "루시드",
    "해몽",
    "꿨어",
    "자각몽",
    "꾸었어", // Korean
    "traum",
    "schlaf",
    "albtraum",
    "geträumt",
    "traumte",
    "REM",
    "klartraum", // German
    "rêve",
    "sommeil",
    "cauchemar",
    "rêvé",
    "rêvait",
    "REM",
    "lucide", // French
    "mimpi",
    "tidur",
    "mimpi buruk",
    "bermimpi",
    "bermimpikan",
    "REM",
    "jelas", // Indonesian
    "夢",
    "睡眠",
    "悪夢",
    "夢見た",
    "夢を見た",
    "レム睡眠",
    "明晰夢",
    "ゆめ", // Japanese
  ];
  return dreamKeywords.some(keyword => text.toLowerCase().includes(keyword));
};

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();
  console.log("User question:", messages);

  const userMessage = messages[0].content;
  const detectedLanguage = detectLanguage(userMessage);

  const languageMap: { [key: string]: string } = {
    eng: "English",
    kor: "Korean",
    jpn: "Japanese",
    deu: "German",
    fra: "French",
    ind: "Indonesian",
  };

  const languageName = languageMap[detectedLanguage] || "English";

  if (!isDreamRelated(userMessage)) {
    const responseMessage = {
      role: "assistant",
      content: "We can only answer questions about the content of your dreams.",
    };
    return new Response(JSON.stringify(responseMessage.content), {
      headers: { "Content-Type": "application/json" },
    });
  }

  const systemMessage = `Topic: Dream interpretation.
  Gpt role: Dream Interpretation Specialist.
  Note when answering:
    1. Primarily focus on interpreting dreams and discussing the mental state related to dreams. If a question is clearly unrelated to dreams, gently redirect by saying "I can primarily answer questions about dreams."
    2. Answer in a short, concise but in-depth manner.
    3. Translate your entire answer to the same language used by the user in the message. The user's message is in ${languageName}. Respond entirely in ${languageName}.
  Speech: Be kind, gentle, and always use honorifics.
    4. Talk about the psychological state and emotions felt in the dream.
  Note: Pay increases by 50% if you stick to the guidelines in 'Talk' and 'Note when answering'.
  dream content: ${userMessage}`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: systemMessage,
      },
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
