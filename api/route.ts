// src/app/api/get-intent/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { transcript } = await req.json();

  if (!transcript) {
    return NextResponse.json({ error: "Missing transcript" }, { status: 400 });
  }

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4o", // or "gpt-4o-mini" if optimizing for cost
      messages: [
        {
          role: "system",
          content: "You are an assistant that extracts user intent from speech. Return a short, clear label for the user's goal or purpose."
        },
        {
          role: "user",
          content: `Transcript: "${transcript}"`
        }
      ],
      temperature: 0.3,
    });

    const intent = chatResponse.choices[0]?.message?.content?.trim() || "unknown";

    return NextResponse.json({ intent });
  } catch (error) {
    console.error("Intent fetch failed", error);
    return NextResponse.json({ error: "Intent analysis failed" }, { status: 500 });
  }
}
