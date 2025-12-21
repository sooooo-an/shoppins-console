// 5. Refresh API Route (유일한 API Route)
// app/api/auth/refresh/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { graphqlRequest } from "@/lib/apollo-client";

const REFRESH_MUTATION = `
  mutation RefreshAccessToken($refreshToken: String!) {
    refreshAccessToken(refreshToken: $refreshToken) {
      accessToken
      refreshToken
      expiresAt
    }
  }
`;

export async function POST() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("cafe24_refresh_token")?.value;

  if (!refreshToken) {
    return NextResponse.json({ error: "No refresh token" }, { status: 401 });
  }

  try {
    const data = await graphqlRequest<{
      refreshAccessToken: {
        accessToken: string;
        refreshToken: string;
        expiresAt: string;
      };
    }>(REFRESH_MUTATION, { refreshToken });
    const {
      accessToken,
      refreshToken: newRefreshToken,
      expiresAt,
    } = data.refreshAccessToken;

    cookieStore.set("cafe24_refresh_token", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    return NextResponse.json({ accessToken, expiresAt });
  } catch (error) {
    cookieStore.delete("cafe24_refresh_token");
    return NextResponse.json({ error: "Refresh failed" }, { status: 401 });
  }
}
