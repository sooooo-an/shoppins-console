import type { Metadata } from "next";
import "./globals.css";
import { ApolloProviderWrapper } from "@/providers/apollo-provider";

export const metadata: Metadata = {
  title: "Shoppins Console",
  description: "Shoppins Console Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <ApolloProviderWrapper>{children}</ApolloProviderWrapper>
      </body>
    </html>
  );
}
