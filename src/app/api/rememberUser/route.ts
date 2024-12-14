import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const requestJson = await req.json();
  const userName = requestJson.userName;

  const cookieStore = await cookies();
  cookieStore.set("userName", userName, { maxAge: 60 * 60 * 24 });

  if (!cookieStore.get("userName")) {
    return new NextResponse(
      JSON.stringify({ message: "Could not memorize the submitted name" }),
      { status: 500 }
    );
  }

  return new NextResponse(JSON.stringify({ message: "Name saved" }), {
    status: 200,
  });
}
