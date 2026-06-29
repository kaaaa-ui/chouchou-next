import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-config";
import { COLUMNS } from "./column/columns";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/compare`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/column`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...COLUMNS.map((c) => ({
      url: `${SITE_URL}/column/${c.slug}`,
      lastModified: c.updated,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
