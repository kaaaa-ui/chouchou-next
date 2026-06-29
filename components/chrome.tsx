// 共有クローム（ヘッダー / LINEボタン / カード / ロゴ）。
// page.tsx と下層ページ（比較・コラム等）で見た目を揃えるための部品。
import { IcoRibbon, IcoLine } from "@/components/icons";
import { LINE_URL } from "@/app/site-config";

export function Logo() {
  return (
    <div className="flex flex-col items-start leading-none">
      <IcoRibbon className="h-5 w-9 text-brand" />
      <span className="text-[22px] font-extrabold tracking-tight text-brand">
        ChouChou
      </span>
      <span className="ml-7 text-[9px] font-bold tracking-[0.3em] text-brand">
        シュシュ
      </span>
    </div>
  );
}

export function LineButton({
  label = "LINEで無料相談する",
  arrow = false,
  className = "",
}: {
  label?: string;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <a
      href={LINE_URL}
      className={`btn-shine animate-pulse-soft inline-flex w-full max-w-[420px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-[#3ecf5e] to-[#1aa83a] px-6 py-3.5 text-[17px] font-extrabold text-white shadow-[0_8px_22px_-6px_rgba(31,181,60,.65),inset_0_1.5px_0_rgba(255,255,255,.4)] transition-transform hover:scale-[1.03] ${className}`}
    >
      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white/95 text-line">
        <IcoLine className="size-5" />
      </span>
      {label}
      {arrow && <span className="animate-bob text-[15px]">›</span>}
    </a>
  );
}

export function Card({
  title,
  sub,
  children,
  className = "",
}: {
  title?: string;
  sub?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`lift h-full w-full rounded-2xl bg-white p-4 shadow-[0_4px_18px_-8px_rgba(190,120,90,.25)] sm:p-5 ${className}`}
    >
      {title && (
        <h2 className="text-center text-[16px] font-extrabold text-brand-deep sm:text-[17px]">
          {title}
        </h2>
      )}
      {sub && (
        <p className="mt-0.5 text-center text-[11px] text-ink-soft">{sub}</p>
      )}
      {children}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-[0_2px_12px_rgba(190,120,90,.12)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between gap-2 px-4">
        <a href="/" aria-label="ChouChou トップ">
          <Logo />
        </a>
        <a
          href={LINE_URL}
          className="btn-shine flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-b from-[#f7903e] to-[#ee5a1a] px-4 py-2 text-[12px] font-extrabold text-white shadow-[0_4px_12px_-4px_rgba(238,90,26,.6)] transition-transform hover:scale-105"
        >
          <IcoLine className="size-4" />
          LINEで無料相談する
        </a>
      </div>
    </header>
  );
}
