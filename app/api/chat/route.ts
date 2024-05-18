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

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();
  console.log("User question:", messages);

  const userMessage = messages[0].content;
  const detectedLanguage = detectLanguage(userMessage);

  const languageMap: { [key: string]: string } = {
    eng: "English",
    kor: "Korean",
    jpn: "Japanese",
  };

  const languageName = languageMap[detectedLanguage] || "English";

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content: "Dream interpretation.",
      },
      {
        role: "user",
        content: `Topic: Dream interpretation.
        Gpt role: Dream Interpretation Specialist.
        Note when answering:
          1. Primarily focus on interpreting dreams and discussing the mental state related to dreams. If a question is clearly unrelated to dreams, gently redirect by saying "I can primarily answer questions about dreams."
          2. Answer in a short, concise but in-depth manner.
          3. Translate your entire answer to the same language used by the user in the message. The user's message is in ${languageName}. Respond entirely in ${languageName}.
        Speech: Be kind, gentle, and always use honorifics.
        
        Note: Pay increases by 50% if you stick to the guidelines in 'Talk' and 'Note when answering'.
        dream content: ${userMessage}`,
      },
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
