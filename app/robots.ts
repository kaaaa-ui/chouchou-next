import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-config";

// AI検索エンジンのクローラーを明示的に許可（AEOの土台）。
// 個別 userAgent を並べることで「このサイトはAIに読まれてよい」を明確化する。
const AI_BOTS = [
  "GPTBot", // OpenAI 学習
  "OAI-SearchBot", // ChatGPT Search
  "ChatGPT-User", // ChatGPT 閲覧
  "PerplexityBot", // Perplexity
  "Perplexity-User",
  "ClaudeBot", // Anthropic
  "Claude-Web",
  "Google-Extended", // Gemini / AI Overviews 学習
  "CCBot", // Common Crawl（多くのLLMの母集団）
  "Bingbot", // Copilot
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
