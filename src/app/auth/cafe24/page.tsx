import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type SearchParams = {
  access_token?: string;
  refresh_token?: string;
  expires_at?: string;
};

const AuthCafe24Page = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { access_token, refresh_token, expires_at } = searchParams;

  if (!access_token || !expires_at) {
    redirect("/signin?message=invalid_auth");
  }

  const cookieStore = await cookies();
  const expiresInSeconds = Number(expires_at) - Math.floor(Date.now() / 1000);

  cookieStore.set("cafe24_access_token", access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: expiresInSeconds,
    path: "/",
  });

  if (refresh_token) {
    cookieStore.set("cafe24_refresh_token", refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30일
      path: "/",
    });
  }

  redirect("/console");
};

export default AuthCafe24Page;
