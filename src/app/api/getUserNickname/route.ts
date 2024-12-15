import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const nicknameCookie = cookieStore.get("userName");

  if (!nicknameCookie) {
    return new NextResponse(
      JSON.stringify({ message: "There is no nickname" }),
      { status: 500 }
    );
  }

  return new NextResponse(JSON.stringify({ message: nicknameCookie.value }), {
    status: 200,
  });
}
