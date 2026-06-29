import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./site-config";

const mplus = M_PLUS_Rounded_1c({
  variable: "--font-mplus",
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "ChouChou（シュシュ）｜顔出しの不安なく、あなたらしい働き方を";
const DESCRIPTION =
  "最新AI技術で身バレ対策。完全在宅で始められるライブ配信のお仕事。顔出し不要・女性スタッフ対応・ノルマ罰金なし・登録費用0円。LINEで無料相談受付中。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  keywords: [
    "チャトレ 事務所",
    "チャットレディ 在宅",
    "ライブ配信 仕事",
    "身バレ対策",
    "Stripchat 事務所",
    "顔出しなし 副業",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "ChouChou（シュシュ）",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
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
