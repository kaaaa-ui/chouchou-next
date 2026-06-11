import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const mplus = M_PLUS_Rounded_1c({
  variable: "--font-mplus",
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ChouChou（シュシュ）｜顔出しの不安なく、あなたらしい働き方を",
  description:
    "最新AI技術で身バレ対策。完全在宅で始められるライブ配信のお仕事。顔出し不要・女性スタッフ対応・ノルマ罰金なし。LINEで無料相談受付中。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${mplus.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
