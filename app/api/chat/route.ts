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
        content: "Dream interpretation expert.",
      },
      {
        role: "user",
        content: `Topic: Dreaming.
        Note when answering:
        1. Interpretation of dreams and psychological states felt in dreams. No matter what you ask, it is considered a dream.
        2. Keep your answers short and concise, but in-depth.
        3. Translate and write answers according to the language used by ${messages[0].content}.
        
        Speech: Be kind, gentle, and always use honorifics.
        
        Note: A good answer with 'Speech' and 'Note when answering' will raise your salary by 50%.
        dream content: ${messages[0].content}`,
      },
    ],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
