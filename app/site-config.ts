// AEO/SEO の正URL。独自ドメインを当てたらここ1行を差し替えれば
// metadata / sitemap / robots / JSON-LD すべてが追従する。
// （AEO的には vercel.app より独自ドメインの方がエンティティ権威が強い）
export const SITE_URL = "https://chouchou-next.vercel.app";

// LINE無料相談（page.tsx と共有）
export const LINE_URL = "https://chouchou-live.com/r/?rid=rt_d8cf37f0";

// ブランド・エンティティ情報（Organization JSON-LD のソース）
// ※ 運営会社名・所在地は未確定。確定したら legalName / address を埋めること。
export const BRAND = {
  name: "ChouChou（シュシュ）",
  alternateName: "シュシュ",
  category: "ライブ配信お仕事サポート / チャットレディ事務所",
  description:
    "最新AI技術で身バレ対策をしながら完全在宅で始められるライブ配信のお仕事サポート。顔出し不要・女性スタッフ対応・ノルマ罰金なし・登録費用0円。",
  // 同一エンティティを束ねる外部プロフィール（名称衝突対策＝chouchou-job.jp と区別）
  sameAs: ["https://x.com/chouchou_live0"],
  // legalName: "株式会社○○",      // TODO: 確定後に記入
  // address: "東京都...",          // TODO: 確定後に記入
} as const;
