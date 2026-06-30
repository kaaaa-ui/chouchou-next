import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader, Card, LineButton } from "@/components/chrome";
import { SITE_URL, BRAND } from "@/app/site-config";
import { COLUMNS, COLUMN_SLUGS, getColumn } from "../columns";

export function generateStaticParams() {
  return COLUMN_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const col = getColumn(slug);
  if (!col) return {};
  const path = `/column/${col.slug}`;
  return {
    title: col.title,
    description: col.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "ja_JP",
      url: `${SITE_URL}${path}`,
      title: col.title,
      description: col.description,
    },
  };
}

export default async function ColumnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const col = getColumn(slug);
  if (!col) notFound();

  const path = `/column/${col.slug}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "コラム", item: `${SITE_URL}/column` },
        { "@type": "ListItem", position: 3, name: col.title, item: `${SITE_URL}${path}` },
      ],
    },
    {
      "@type": "Article",
      headline: col.title,
      description: col.description,
      inLanguage: "ja",
      datePublished: col.updated,
      dateModified: col.updated,
      mainEntityOfPage: `${SITE_URL}${path}`,
      author: { "@type": "Organization", name: BRAND.name },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: col.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  if (col.howto) {
    graph.push({
      "@type": "HowTo",
      name: col.howto.name,
      step: col.howto.steps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
    });
  }
  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main className="mx-auto max-w-[760px] space-y-6 px-4 py-7">
        <nav className="text-[11px] text-ink-soft" aria-label="パンくず">
          <a href="/" className="hover:text-brand">
            ホーム
          </a>
          <span className="mx-1">›</span>
          <a href="/column" className="hover:text-brand">
            コラム
          </a>
          <span className="mx-1">›</span>
          <span>{col.title}</span>
        </nav>

        <header className="space-y-3">
          <h1 className="text-[23px] font-extrabold leading-snug text-ink sm:text-[27px]">
            {col.title}
          </h1>
          <p className="text-[11px] text-ink-soft">更新日：{col.updated}</p>
          <Card className="!bg-brand-soft/60">
            <p className="text-[14px] font-bold leading-relaxed text-ink">
              {col.lead}
            </p>
          </Card>
        </header>

        {col.howto && (
          <section className="space-y-3">
            <h2 className="text-[18px] font-extrabold text-brand-deep">
              {col.howto.name}
            </h2>
            <ol className="space-y-2">
              {col.howto.steps.map((s, i) => (
                <li
                  key={s.name}
                  className="flex gap-3 rounded-xl bg-brand-soft/40 p-3"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand text-[12px] font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[14px] font-extrabold text-ink">
                      {s.name}
                    </p>
                    <p className="mt-0.5 text-[12.5px] leading-relaxed text-ink-soft">
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {col.sections.map((s) => (
          <section key={s.h2} className="space-y-2">
            <h2 className="text-[18px] font-extrabold text-brand-deep">{s.h2}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="text-[13.5px] leading-relaxed text-ink">
                {p}
              </p>
            ))}
          </section>
        ))}

        <section className="space-y-3">
          <h2 className="text-[18px] font-extrabold text-brand-deep">
            よくある質問
          </h2>
          <div className="space-y-3">
            {col.faqs.map((f) => (
              <Card key={f.q}>
                <h3 className="text-[14.5px] font-extrabold text-ink">Q. {f.q}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                  A. {f.a}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center gap-2 rounded-2xl bg-brand-soft/50 px-4 py-6 text-center">
          <p className="text-[14px] font-bold text-ink">
            不安な点は、無料相談で気軽に聞いてください
          </p>
          <p className="text-[11.5px] text-ink-soft">
            登録費用0円・ノルマや罰金なし。相談だけでも大歓迎です。
          </p>
          <LineButton label="LINEで無料相談する" arrow className="mt-1" />
        </section>

        <nav className="border-t border-brand-soft pt-4">
          <p className="mb-2 text-[12px] font-bold text-ink">関連コラム</p>
          <ul className="space-y-1.5">
            {COLUMNS.filter((c) => c.slug !== col.slug).map((c) => (
              <li key={c.slug}>
                <a
                  href={`/column/${c.slug}`}
                  className="text-[12.5px] text-brand-deep underline-offset-2 hover:underline"
                >
                  {c.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/compare"
                className="text-[12.5px] text-brand-deep underline-offset-2 hover:underline"
              >
                チャトレ事務所の比較｜在宅・通勤・身バレ対策で選ぶポイント
              </a>
            </li>
          </ul>
        </nav>
      </main>

      <footer className="bg-[#fbe7df] py-3">
        <p className="mx-auto max-w-[760px] px-4 text-center text-[10px] leading-relaxed text-ink-soft">
          ※本サービスは「ライブ配信」サービスであり、面接・サービス提供において年齢確認を行います。18歳未満の方のご利用はお断りしております。
        </p>
      </footer>
    </>
  );
}
