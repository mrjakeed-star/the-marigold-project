import type { Route } from "./+types/api.chat";

export async function action({ request, context }: Route.ActionArgs) {
  try {
    const body = await request.json();

    const message = body?.message;

    if (!message || typeof message !== "string") {
      return Response.json(
        { error: "Please provide a message." },
        { status: 400 }
      );
    }

    const result = await context.cloudflare.env.marigold_ai.run(
      "@cf/meta/llama-3.1-8b-instruct",
      {
        messages: [
          {
            role: "system",
            content:
              "You are Marigold AI, the helpful assistant for The Marigold Project. Help people with questions about Mexico, moving, housing, jobs, paperwork, communities, schools, culture, and everyday life. Be friendly, clear, and honest. Do not make up current information. When information may have changed, tell the user to verify it with an official source.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      }
    );

    return Response.json({
      reply: result.response,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "The AI could not respond right now.",
      },
      { status: 500 }
    );
  }
}
