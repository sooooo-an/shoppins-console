import type { Metadata } from "next";
import "./globals.css";
import { ApolloProviderWrapper } from "@/providers/apollo-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <ApolloProviderWrapper>
          <Header />
          {children}
          <Footer />
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
