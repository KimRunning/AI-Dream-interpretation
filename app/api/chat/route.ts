import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json(); // 사용자 질문 파싱
  console.log("User question:", messages);

  // Ask OpenAI for a streaming chat completion given the prompt
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
          1. Interpretation of Dreams and Mental State Only answer questions about dreams. If it is not about dreams, answer "I can only answer about the contents of my dream."
          2. Answer your answers in a short, concise but in-depth manner.
          3. Translate your answers to the same language used by the user in the message. If the user's message is in Korean, respond in Korean. If the message is in Japanese, respond in Japanese. If the message is in English, respond in English.
        Speech: Be kind, gentle, and always use honorifics.
        
        Note: Pay increases by 50% if you stick to the things in 'Talk' and 'Note when answering'.
        dream content: ${messages[0].content}`,
      },
    ],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
