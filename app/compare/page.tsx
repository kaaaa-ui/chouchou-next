import type { Metadata } from "next";
import { SiteHeader, Card, LineButton } from "@/components/chrome";
import { SITE_URL, BRAND } from "@/app/site-config";

const TITLE = "チャトレ事務所の比較｜在宅・通勤・身バレ対策で選ぶポイント";
const DESCRIPTION =
  "チャットレディ事務所をタイプ別（通勤型／一般在宅型／ChouChou）に比較。身バレ対策・報酬の仕組み・登録費用・ノルマ・サポート体制で何を見て選べばいいかを、結論ファーストで解説します。";
const PATH = "/compare";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    locale: "ja_JP",
    url: `${SITE_URL}${PATH}`,
    title: TITLE,
    description: DESCRIPTION,
  },
};

/* ---------- 比較データ ---------- */

const COLS = ["通勤型の事務所", "一般的な在宅事務所", "ChouChou"] as const;

const ROWS: { item: string; cells: [string, string, string] }[] = [
  {
    item: "働く場所",
    cells: ["店舗に通勤", "在宅（事務所による）", "完全在宅・全国/海外OK"],
  },
  {
    item: "身バレ対策",
    cells: [
      "店舗内のみで配信",
      "事務所により差が大きい",
      "AI配信で別人の顔を生成＋マスク配信を選択可",
    ],
  },
  {
    item: "登録・初期費用",
    cells: ["事務所による", "事務所による", "0円（登録料・入会金・システム利用料なし）"],
  },
  {
    item: "ノルマ・罰金",
    cells: ["ある場合も", "事務所により差がある", "なし"],
  },
  {
    item: "サポート体制",
    cells: [
      "店舗スタッフが対応",
      "メール中心の場合も",
      "女性スタッフが24時間対応＋顧問税理士・弁護士",
    ],
  },
  {
    item: "報酬の仕組み",
    cells: [
      "時給または歩合",
      "歩合が中心",
      "基本報酬（時間＋成果）＋継続ボーナス＋特別イベント報酬",
    ],
  },
];

/* ---------- 選び方 ---------- */

const CRITERIA: { q: string; a: string }[] = [
  {
    q: "身バレが不安なら、どこを見て選ぶ？",
    a: "顔を映さずに働ける仕組みがあるかを最優先で確認します。AI配信（骨格から別人の顔を生成）やマスク配信に対応していれば、本人特定のリスクを大きく下げられます。SNS連携の遮断や連絡先交換の禁止など、運用ルールが整っているかも要チェックです。",
  },
  {
    q: "在宅と通勤、どちらがいい？",
    a: "通いやすさや人と直接会いたいかで選びます。完全在宅なら通勤の手間がなく、ネット環境さえあれば全国どこでも、海外でも働けます。家から出たくない・周囲に知られたくない人は在宅型が向いています。",
  },
  {
    q: "費用やノルマで損しないには？",
    a: "登録料・入会金・システム利用料が本当に0円か、ノルマや罰金がないかを契約前に必ず確認します。「無料」と書いてあっても後から費用が発生する事務所もあるため、報酬から何が差し引かれるのかまで具体的に聞くのが安全です。",
  },
  {
    q: "初めてでも続けられる事務所は？",
    a: "サポートの手厚さで決まります。配信のやり方を教えてくれる女性スタッフがいるか、確定申告を税理士がサポートしてくれるか、トラブル時に相談できる体制があるか。初心者ほどサポート体制を重視すると失敗しにくいです。",
  },
];

/* ---------- FAQ ---------- */

const FAQS: { q: string; a: string }[] = [
  {
    q: "チャトレ事務所選びで一番大事なことは？",
    a: "「身バレ対策」「費用・ノルマの有無」「サポート体制」の3点です。特に顔出しに不安がある場合は、AI配信やマスク配信など顔を映さずに働ける仕組みがあるかを最優先で確認しましょう。",
  },
  {
    q: "在宅のチャトレ事務所は安全ですか？",
    a: "事務所により差があります。男性と直接会わない（画面越しの配信のみ）、連絡先交換が禁止されている、女性スタッフのサポートがある事務所を選べば、安全に働きやすくなります。",
  },
  {
    q: "顔出しなしでも稼げますか？",
    a: "はい。AI配信で別人の顔を生成したり、マスク配信を選んだりすることで、顔を映さずに働けます。顔出しの有無と報酬は直結しないため、対策のある事務所を選べば安心して始められます。",
  },
];

function JsonLd() {
  const graph = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "チャトレ事務所の比較", item: `${SITE_URL}${PATH}` },
      ],
    },
    {
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      inLanguage: "ja",
      mainEntityOfPage: `${SITE_URL}${PATH}`,
      author: { "@type": "Organization", name: BRAND.name },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  const jsonLd = { "@context": "https://schema.org", "@graph": graph };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function ComparePage() {
  return (
    <>
      <JsonLd />
      <SiteHeader />
      <main className="mx-auto max-w-[860px] space-y-6 px-4 py-7">
        {/* パンくず */}
        <nav className="text-[11px] text-ink-soft" aria-label="パンくず">
          <a href="/" className="hover:text-brand">
            ホーム
          </a>
          <span className="mx-1">›</span>
          <span>チャトレ事務所の比較</span>
        </nav>

        {/* 見出し＋結論ファースト */}
        <header className="space-y-3">
          <h1 className="text-[24px] font-extrabold leading-snug text-ink sm:text-[28px]">
            チャトレ事務所の比較｜在宅・通勤・身バレ対策で選ぶポイント
          </h1>
          <Card className="!bg-brand-soft/60">
            <p className="text-[14px] font-bold leading-relaxed text-ink">
              結論：チャトレ事務所は
              <span className="text-brand-deep">
                「身バレ対策」「費用・ノルマの有無」「サポート体制」
              </span>
              の3点で選ぶのが失敗しにくいです。
              顔出しに不安があるなら、AI配信やマスク配信など
              <span className="text-brand-deep">顔を映さずに働ける仕組み</span>
              があるかを最優先で確認しましょう。
            </p>
          </Card>
        </header>

        {/* 比較表 */}
        <section className="space-y-3">
          <h2 className="text-[18px] font-extrabold text-brand-deep">
            タイプ別の比較表
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-brand-soft">
            <table className="w-full min-w-[560px] border-collapse text-[12.5px]">
              <thead>
                <tr className="bg-brand-soft/70 text-ink">
                  <th className="p-3 text-left font-extrabold">比較項目</th>
                  {COLS.map((c) => (
                    <th
                      key={c}
                      className={`p-3 text-left font-extrabold ${
                        c === "ChouChou" ? "text-brand-deep" : ""
                      }`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.item} className="border-t border-brand-soft/70 align-top">
                    <th className="p-3 text-left font-bold text-ink">{r.item}</th>
                    {r.cells.map((cell, i) => (
                      <td
                        key={i}
                        className={`p-3 leading-relaxed ${
                          COLS[i] === "ChouChou"
                            ? "bg-brand-soft/30 font-semibold text-ink"
                            : "text-ink-soft"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-ink-soft">
            ※通勤型・一般在宅型は事務所により条件が大きく異なります。実際の契約内容は各事務所にご確認ください。
          </p>
        </section>

        {/* 選び方 */}
        <section className="space-y-3">
          <h2 className="text-[18px] font-extrabold text-brand-deep">
            失敗しない選び方の4つの基準
          </h2>
          <div className="space-y-3">
            {CRITERIA.map((c) => (
              <Card key={c.q}>
                <h3 className="text-[14.5px] font-extrabold text-ink">{c.q}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                  {c.a}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-3">
          <h2 className="text-[18px] font-extrabold text-brand-deep">
            よくある質問
          </h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <Card key={f.q}>
                <h3 className="text-[14.5px] font-extrabold text-ink">Q. {f.q}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                  A. {f.a}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="flex flex-col items-center gap-2 rounded-2xl bg-brand-soft/50 px-4 py-6 text-center">
          <p className="text-[14px] font-bold text-ink">
            ChouChouが自分に合うか、まずは気軽に相談してみませんか？
          </p>
          <p className="text-[11.5px] text-ink-soft">
            登録費用0円・ノルマや罰金なし。相談だけでも大歓迎です。
          </p>
          <LineButton label="LINEで無料相談する" arrow className="mt-1" />
        </section>
      </main>

      <footer className="bg-[#fbe7df] py-3">
        <p className="mx-auto max-w-[860px] px-4 text-center text-[10px] leading-relaxed text-ink-soft">
          ※本サービスは「ライブ配信」サービスであり、面接・サービス提供において年齢確認を行います。18歳未満の方のご利用はお断りしております。
        </p>
      </footer>
    </>
  );
}
