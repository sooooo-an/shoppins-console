// 6. 로그아웃
// app/api/auth/logout/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { graphqlRequest } from "@/lib/apollo-client";

const LOGOUT_MUTATION = `
  mutation Logout($refreshToken: String!) {
    logout(refreshToken: $refreshToken)
  }
`;

export async function POST() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("cafe24_refresh_token")?.value;

  if (refreshToken) {
    try {
      await graphqlRequest(LOGOUT_MUTATION, { refreshToken });
    } catch (error) {
      console.error("Logout mutation failed:", error);
    }
  }

  // ✅ 쿠키 삭제
  cookieStore.delete("cafe24_refresh_token");

  return NextResponse.json({ success: true });
}
