import type { Metadata } from "next";
import { SiteHeader, Card } from "@/components/chrome";
import { SITE_URL } from "@/app/site-config";
import { COLUMNS } from "./columns";

const TITLE = "コラム｜チャットレディの不安をやさしく解消";
const DESCRIPTION =
  "身バレ・手取り・安全性など、チャットレディを始める前の不安に答えるコラム一覧。顔出しなしで働く方法や事務所の選び方をわかりやすく解説します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/column" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: `${SITE_URL}/column`,
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ColumnIndex() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[760px] space-y-5 px-4 py-7">
        <nav className="text-[11px] text-ink-soft" aria-label="パンくず">
          <a href="/" className="hover:text-brand">
            ホーム
          </a>
          <span className="mx-1">›</span>
          <span>コラム</span>
        </nav>

        <header className="space-y-2">
          <h1 className="text-[23px] font-extrabold leading-snug text-ink sm:text-[27px]">
            コラム｜チャットレディの不安をやさしく解消
          </h1>
          <p className="text-[13px] leading-relaxed text-ink-soft">
            身バレ・手取り・安全性など、始める前の不安に一つずつお答えします。
          </p>
        </header>

        <div className="space-y-3">
          {COLUMNS.map((c) => (
            <a key={c.slug} href={`/column/${c.slug}`} className="block">
              <Card>
                <h2 className="text-[15px] font-extrabold leading-snug text-ink">
                  {c.title}
                </h2>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft">
                  {c.description}
                </p>
                <span className="mt-2 inline-block text-[12px] font-bold text-brand-deep">
                  続きを読む ›
                </span>
              </Card>
            </a>
          ))}
          <a href="/compare" className="block">
            <Card>
              <h2 className="text-[15px] font-extrabold leading-snug text-ink">
                チャトレ事務所の比較｜在宅・通勤・身バレ対策で選ぶポイント
              </h2>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-soft">
                事務所をタイプ別に比較。何を見て選べばいいかを結論ファーストで解説します。
              </p>
              <span className="mt-2 inline-block text-[12px] font-bold text-brand-deep">
                比較を見る ›
              </span>
            </Card>
          </a>
        </div>
      </main>

      <footer className="bg-[#fbe7df] py-3">
        <p className="mx-auto max-w-[760px] px-4 text-center text-[10px] leading-relaxed text-ink-soft">
          ※本サービスは「ライブ配信」サービスであり、面接・サービス提供において年齢確認を行います。18歳未満の方のご利用はお断りしております。
        </p>
      </footer>
    </>
  );
}
