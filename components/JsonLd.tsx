import { SITE_URL, BRAND } from "@/app/site-config";

type Faq = { q: string; a: string };

/**
 * 構造化データ（JSON-LD）。AI検索/AI Overviews がエンティティと回答を
 * 機械可読に抽出できるようにする = AEOの土台。
 * - Organization: ChouChou を一意のエンティティとして確立（同名サイトとの混同対策）
 * - WebSite: サイト全体の定義
 * - FAQPage: よくある質問をそのままAIの回答候補に乗せる
 */
export function JsonLd({ faqs }: { faqs: readonly Faq[] }) {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND.name,
      alternateName: BRAND.alternateName,
      url: SITE_URL,
      description: BRAND.description,
      sameAs: BRAND.sameAs,
      areaServed: "JP",
      knowsLanguage: "ja",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND.name,
      inLanguage: "ja",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
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
