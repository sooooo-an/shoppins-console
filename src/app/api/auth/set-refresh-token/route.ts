import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { refreshToken, expiresAt } = await request.json();

    if (!refreshToken) {
      return NextResponse.json({ error: "No refresh token" }, { status: 400 });
    }

    const cookieStore = await cookies();

    cookieStore.set("cafe24_refresh_token", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30일
      path: "/",
    });

    if (expiresAt) {
      cookieStore.set("token_expires_at", expiresAt, {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Set refresh token error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
