import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { Reveal, CountUp, FaqItem } from "@/components/motion";
import {
  IcoNoFace, IcoHome, IcoFemale, IcoBanYen, IcoCheck, IcoX, IcoMask,
  IcoTag, IcoLock, IcoSnsOff, IcoPhoneBan, IcoClock, IcoLaptop, IcoHeadset,
  IcoMegaphone, IcoCalc, IcoScale, IcoDocSearch, IcoChart, IcoPeople,
  IcoGauge, IcoHandCoin, IcoLine, IcoCrown, IcoVideo, IcoGear, IcoPlay,
  IcoChat, IcoArrowR, IcoRibbon, IcoSparkle,
} from "@/components/icons";

const LINE_URL = "https://chouchou-live.com/r/?rid=rt_d8cf37f0";

/* ============================== shared bits ============================== */

function Logo() {
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

function LineButton({
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

function Card({
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

/* ============================== header ============================== */

const NAV = [
  { label: "ChouChouとは", Ico: IcoFemale },
  { label: "お仕事の仕組み", Ico: IcoLaptop },
  { label: "サポート体制", Ico: IcoHeadset },
  { label: "報酬制度", Ico: IcoHandCoin },
  { label: "よくある質問", Ico: IcoChat },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-[0_2px_12px_rgba(190,120,90,.12)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between gap-2 px-4">
        <a href="#top" aria-label="ChouChou トップ">
          <Logo />
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {NAV.map(({ label, Ico }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-1.5 text-[12.5px] font-bold text-ink transition-colors hover:text-brand"
            >
              <Ico className="size-4 text-brand" />
              {label}
            </a>
          ))}
        </nav>
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

/* ============================== hero ============================== */

const HERO_CHIPS = [
  { label: "顔出し不要", Ico: IcoNoFace },
  { label: "完全在宅", Ico: IcoHome },
  { label: "女性スタッフ対応", Ico: IcoFemale },
  { label: "ノルマ・罰金なし", Ico: IcoBanYen },
];

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-[#fdf7f3] via-[#fcefe8] to-[#fbe9e2]"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-x-4 px-4 pb-7 pt-4 md:grid-cols-[5fr_7fr]">
        {/* photo + vertical copy */}
        <div className="relative mx-auto flex w-full max-w-[430px] items-start justify-center">
          <p
            className="mr-1 mt-16 hidden shrink-0 text-[15px] font-bold leading-[1.9] tracking-[0.18em] text-rose md:block"
            style={{ writingMode: "vertical-rl" }}
          >
            私らしく、安心して働ける場所。
          </p>
          <Reveal className="w-full">
            <Image
              src="/images/hero.png"
              alt="ChouChouで働く女性"
              width={1088}
              height={1184}
              preload
              className="w-full max-w-[400px]"
            />
          </Reveal>
        </div>

        {/* copy */}
        <div className="relative pt-2 md:pt-6">
          {/* circle badge */}
          <div className="animate-floaty absolute -top-1 right-0 z-10 hidden size-[110px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#f0a5ad] to-[#e2828d] text-center text-[12px] font-bold leading-[1.5] text-white shadow-[0_8px_20px_-6px_rgba(226,130,141,.6)] md:flex lg:size-[124px]">
            女性スタッフ
            <br />
            対応で安心♪
          </div>

          <Reveal>
            <p className="relative inline-block bg-[#d9707c] px-5 py-1 text-[13px] font-bold tracking-wide text-white [clip-path:polygon(8px_0,100%_0,calc(100%-8px)_50%,100%_100%,8px_100%,0_50%)]">
              顔出ししなくても大丈夫！
            </p>
            <h1 className="mt-2 text-[30px] font-extrabold leading-[1.42] tracking-wide text-ink sm:text-[36px] lg:text-[40px]">
              顔出しの不安なく、
              <br />
              <span className="text-pink">あなたらしい</span>働き方を。
            </h1>
            <p className="mt-3 text-[14px] font-bold leading-relaxed text-ink-soft sm:text-[15px]">
              最新AI技術で身バレ対策。
              <br />
              完全在宅で始められます。
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-4 flex w-full max-w-[560px] flex-wrap overflow-hidden rounded-xl border border-brand-soft bg-white">
              {HERO_CHIPS.map(({ label, Ico }) => (
                <span
                  key={label}
                  className="flex grow basis-[calc(50%-2px)] items-center justify-center gap-1.5 border border-brand-soft/60 px-2 py-2.5 text-[11.5px] font-bold text-ink sm:basis-0"
                >
                  <Ico className="size-4 shrink-0 text-brand" />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-4 flex w-full max-w-[560px] flex-col items-center rounded-2xl bg-white/80 px-5 py-4 shadow-[0_6px_20px_-10px_rgba(190,120,90,.35)]">
              <p className="mb-2 text-[13px] font-extrabold text-brand">
                ＼ まずは相談だけでもOK！ ／
              </p>
              <div className="flex w-full items-center justify-center gap-3">
                <LineButton />
                <p className="hidden shrink-0 -rotate-3 text-[12px] font-bold leading-[1.7] text-pink lg:block">
                  無理な勧誘は
                  <br />
                  <span className="underline decoration-pink-soft decoration-4 underline-offset-2">
                    一切ありません
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================== row 1 ============================== */

const AI_POINTS = [
  "最新AIで顔を変換",
  "身バレリスクを大幅に軽減",
  "すっぴんでもOK",
  "キャラクター設定で活動可能",
];
const MASK_POINTS = ["顔を隠して配信", "AIが苦手な方にも対応", "初心者でも始めやすい"];

function StyleCard() {
  return (
    <Card title="選べる2つの配信スタイル" sub="あなたに合った方法で始められます">
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {/* AI */}
        <div className="rounded-xl border border-brand-soft bg-[#fff8f3] p-2.5">
          <p className="flex items-center justify-center gap-0.5 whitespace-nowrap rounded-md bg-brand-soft px-1 py-1 text-center text-[10px] font-extrabold tracking-tight text-brand-deep">
            <IcoSparkle className="size-3 shrink-0" />
            AI配信（顔出しなし）
          </p>
          <div className="mt-2 flex gap-2">
            <Image
              src="/images/ai_face.png"
              alt="AI配信のイメージ"
              width={228}
              height={308}
              className="w-[42%] shrink-0 self-start rounded-lg object-cover"
            />
            <ul className="space-y-1 text-[10px] font-bold leading-snug text-ink">
              {AI_POINTS.map((p) => (
                <li key={p} className="flex gap-1">
                  <span className="mt-px shrink-0 text-brand">・</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-2 text-center text-[10.5px] font-extrabold text-brand">
            AIが自然に表情を再現！
          </p>
        </div>
        {/* Mask */}
        <div className="rounded-xl border border-pink-soft bg-[#fff6f7] p-2.5">
          <p className="rounded-md bg-pink-soft px-1 py-1 text-center text-[10.5px] font-extrabold text-pink-deep">
            マスク配信
          </p>
          <div className="mt-2 flex gap-2">
            <Image
              src="/images/mask_face.png"
              alt="マスク配信のイメージ"
              width={228}
              height={308}
              className="w-[42%] shrink-0 self-start rounded-lg object-cover"
            />
            <ul className="space-y-1 text-[10px] font-bold leading-snug text-ink">
              {MASK_POINTS.map((p) => (
                <li key={p} className="flex gap-1">
                  <span className="mt-px shrink-0 text-pink">・</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-2 text-center text-[10.5px] font-extrabold text-pink">
            マスクや小物でしっかりガード！
          </p>
        </div>
      </div>
      <p className="mt-3 text-center text-[11px] font-bold text-ink-soft">
        あなたの希望に合わせて最適な方法をご提案します
      </p>
    </Card>
  );
}

const PRIVACY_ITEMS = [
  { label: "AI配信対応", Ico: IcoNoFace },
  { label: "マスク配信対応", Ico: IcoMask },
  { label: "顔出し不要相談可", Ico: IcoChat },
  { label: "ニックネーム活動", Ico: IcoTag },
  { label: "個人情報非公開", Ico: IcoLock },
  { label: "SNS連携不要", Ico: IcoSnsOff },
  { label: "連絡先交換禁止", Ico: IcoPhoneBan },
  { label: "24時間モニタリング", Ico: IcoClock },
];

function PrivacyCard() {
  return (
    <Card title="徹底した身バレ対策で安心">
      <div className="mt-3 grid grid-cols-2 gap-2">
        {PRIVACY_ITEMS.map(({ label, Ico }, i) => (
          <Reveal key={label} delay={i * 50}>
            <div className="flex items-center gap-2 rounded-lg border border-brand-soft bg-[#fffaf6] px-2.5 py-2.5">
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                <Ico className="size-4" />
              </span>
              <span className="text-[10.5px] font-extrabold leading-tight text-ink">
                {label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Card>
  );
}

const PROMISES = [
  "ノルマなし",
  "罰金・ペナルティなし",
  "登録料・入会金なし",
  "強制出勤なし",
  "退会はいつでも自由",
  "個人情報を厳重管理",
];

function PromiseCard() {
  return (
    <Card title="ChouChouのお約束">
      <ul className="mt-2">
        {PROMISES.map((p, i) => (
          <Reveal key={p} delay={i * 60}>
            <li className="flex items-center gap-2.5 border-b border-dashed border-brand-soft py-2.5 last:border-b-0">
              <span className="grid size-6 shrink-0 place-items-center rounded-md bg-gradient-to-br from-[#f7903e] to-[#ee5a1a] text-white">
                <IcoCheck className="size-3.5" />
              </span>
              <span className="text-[13px] font-extrabold text-ink">{p}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Card>
  );
}

/* ============================== support ============================== */

const SUPPORTS: {
  label: string;
  Ico?: React.FC<{ className?: string }>;
  img?: string;
}[] = [
  { label: "女性マネージャーが専属サポート", img: "/images/manager.png" },
  { label: "AI設定・機材設定を無料で代行", Ico: IcoLaptop },
  { label: "24時間いつでも相談OK", Ico: IcoHeadset },
  { label: "配信アドバイス・ファン獲得サポート", Ico: IcoMegaphone },
  { label: "税理士による税務サポート", Ico: IcoCalc },
  { label: "顧問弁護士による法務サポート", Ico: IcoScale },
  { label: "トラブル時も迅速に対応", Ico: IcoDocSearch },
];

function Support() {
  return (
    <Card>
      <h2 className="text-center text-[17px] font-extrabold text-brand-deep sm:text-[19px]">
        業界トップクラスのサポート体制
      </h2>
      <p className="mt-0.5 text-center text-[11.5px] text-ink-soft">
        未経験の方でも安心して続けられる環境です
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
        {SUPPORTS.map(({ label, Ico, img }, i) => (
          <Reveal key={label} delay={i * 60}>
            <div className="lift flex h-full flex-col items-center gap-2 rounded-xl border border-brand-soft bg-[#fffaf6] px-2 py-3">
              {img ? (
                <Image
                  src={img}
                  alt=""
                  width={208}
                  height={208}
                  className="size-12 rounded-full object-cover"
                />
              ) : (
                Ico && (
                  <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-[#fde3d3] to-[#fbd0d4] text-brand">
                    <Ico className="size-6" />
                  </span>
                )
              )}
              <p className="text-center text-[10.5px] font-extrabold leading-snug text-ink">
                {label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Card>
  );
}

/* ============================== row 2 ============================== */

function WhyCard() {
  return (
    <Card title="なぜ高時給なの？">
      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-stretch gap-1.5">
        <div className="flex flex-col rounded-xl bg-[#f4f0ee] p-2.5">
          <p className="mx-auto w-fit rounded-md bg-[#8a7a72] px-2 py-0.5 text-center text-[10px] font-extrabold leading-tight text-white">
            一般的なアルバイト
          </p>
          <p className="mt-1.5 text-center text-[10px] font-bold text-ink-soft">
            1対1の接客が基本
          </p>
          <Image
            src="/images/illu_1on1.png"
            alt="1対1の接客イラスト"
            width={400}
            height={400}
            className="mx-auto mt-auto w-[92px]"
          />
        </div>
        <div className="flex items-center">
          <IcoArrowR className="animate-bob size-6 text-brand" />
        </div>
        <div className="flex flex-col rounded-xl border-2 border-brand-soft bg-[#fff7f1] p-2.5">
          <p className="mx-auto w-fit rounded-md bg-gradient-to-r from-[#f7903e] to-[#ee5a1a] px-2 py-0.5 text-center text-[10px] font-extrabold leading-tight text-white">
            ライブ配信（ChouChou）
          </p>
          <p className="mt-1.5 text-center text-[10px] font-extrabold text-brand-deep">
            同時に複数人と会話ができる
          </p>
          <Image
            src="/images/illu_live.png"
            alt="複数人と同時に会話するイラスト"
            width={536}
            height={412}
            className="mx-auto mt-auto w-[118px]"
          />
        </div>
      </div>
      <p className="mt-3 text-[11px] font-bold leading-relaxed text-ink-soft">
        一度に複数の方とコミュニケーションを取れるため、短時間でも効率よく報酬が積み上がります。
      </p>
    </Card>
  );
}

const GROW_STEPS = [
  { label: "配信経験が増える", Ico: IcoChart },
  { label: "ファンが増える", Ico: IcoPeople },
  { label: "接客効率が上がる", Ico: IcoGauge },
  { label: "報酬がアップする", Ico: IcoHandCoin },
];

function GrowCard() {
  return (
    <Card title="報酬が伸びる仕組み" sub="続けるほどしっかり収入アップ！">
      <div className="mt-4 grid grid-cols-4 items-start justify-items-center gap-x-1 px-0.5">
        {GROW_STEPS.map(({ label, Ico }, i) => (
          <Reveal key={label} delay={i * 110} className="relative w-full">
            <div className="flex flex-col items-center gap-1.5">
              <span className="grid size-[54px] place-items-center rounded-full bg-gradient-to-br from-[#fde3d3] to-[#fbd0d4] text-brand shadow-[0_4px_12px_-4px_rgba(238,90,26,.35)] sm:size-[60px]">
                <Ico className="size-6" />
              </span>
              <p className="text-center text-[9.5px] font-extrabold leading-snug text-ink sm:text-[10px]">
                {label}
              </p>
            </div>
            {i < 3 && (
              <IcoArrowR className="absolute -right-1.5 top-5 size-3 text-brand/60" />
            )}
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-[11px] font-bold leading-relaxed text-ink-soft">
        マネージャーが成長をサポートするので、未経験からでも着実にステップアップできます。
      </p>
    </Card>
  );
}

const REWARD_TIERS = [
  "基本報酬（時間報酬＋成果報酬）",
  "売上インセンティブ（業界初の制度）",
  "月1回 全所属キャスト対象ボーナスキャンペーン",
  "継続ボーナス・特別イベント報酬",
];

function RewardCard() {
  return (
    <Card title="頑張りを正当に評価する報酬制度">
      <p className="mt-2 text-center text-[12.5px] font-extrabold text-ink">
        業界初！売上インセンティブ制度導入
      </p>
      <div className="mt-3 flex flex-col items-center">
        {REWARD_TIERS.map((t, i) => (
          <Reveal key={t} delay={i * 100} className="flex w-full flex-col items-center">
            {i > 0 && (
              <span className="my-1 text-[16px] font-extrabold text-brand">＋</span>
            )}
            <p className="w-full rounded-lg bg-gradient-to-r from-[#fbe0d2] to-[#fbd6da] px-3 py-2.5 text-center text-[11.5px] font-extrabold text-ink">
              {t}
            </p>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-center text-[12px] font-extrabold text-brand-deep">
        努力や継続がしっかり収入に反映されます！
      </p>
    </Card>
  );
}

/* ============================== earnings ============================== */

const EARNERS = [
  {
    name: "Aさん",
    meta: "24歳・会社員",
    img: "/images/avatar_a.png",
    m1: 8,
    m3: 18,
    m6: 32,
    note: "未経験からスタート！\nスキマ時間でコツコツ続けて月30万円超えに！",
  },
  {
    name: "Bさん",
    meta: "32歳・主婦",
    img: "/images/avatar_b.png",
    m1: 12,
    m3: 28,
    m6: 55,
    note: "家事や育児の合間に配信♪\n安定して月50万円以上をキープ！",
  },
  {
    name: "Cさん",
    meta: "21歳・学生",
    img: "/images/avatar_c.png",
    m1: 6,
    m3: 15,
    m6: 25,
    note: "学業と両立しながら無理なく配信！\nアルバイトより効率的に稼げています♪",
  },
];

function Earnings() {
  return (
    <Card>
      <h2 className="text-center text-[17px] font-extrabold text-pink-deep sm:text-[19px]">
        実際の収益推移
        <span className="ml-1 text-[12px] font-bold text-pink">
          （モデルケース）
        </span>
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
        {EARNERS.map(({ name, meta, img, m1, m3, m6, note }, ci) => (
          <Reveal key={name} delay={ci * 120}>
            <div className="lift h-full rounded-xl border border-pink-soft bg-[#fffafa] p-3.5">
              <div className="flex items-center gap-2.5">
                <Image
                  src={img}
                  alt={`${name}の写真`}
                  width={152}
                  height={152}
                  className="size-10 rounded-full object-cover"
                />
                <p className="text-[13.5px] font-extrabold text-ink">
                  {name}
                  <span className="ml-1 text-[11px] font-bold text-ink-soft">
                    （{meta}）
                  </span>
                </p>
              </div>
              <div className="mt-3 flex items-end justify-between gap-1 border-t border-dashed border-pink-soft pt-3">
                {[
                  { l: "1ヶ月目", v: m1, big: false },
                  { l: "3ヶ月目", v: m3, big: false },
                  { l: "6ヶ月目", v: m6, big: true },
                ].map(({ l, v, big }, i) => (
                  <div key={l} className="flex items-end gap-1">
                    <div className="text-center">
                      <p className="text-[10px] font-bold text-ink-soft">{l}</p>
                      <p
                        className={`font-extrabold leading-tight text-pink-deep ${big ? "text-[24px]" : "text-[17px]"}`}
                      >
                        <CountUp to={v} />
                        <span className="text-[11px]">万円</span>
                      </p>
                    </div>
                    {i < 2 && (
                      <IcoArrowR className="mb-2 size-3.5 shrink-0 text-pink" />
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-2.5 whitespace-pre-line rounded-lg bg-pink-soft/40 px-2.5 py-2 text-[10.5px] font-bold leading-relaxed text-ink-soft">
                {note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Card>
  );
}

/* ============================== row 3 ============================== */

const FORMER_JOBS = ["会社員", "学生", "主婦", "フリーター", "美容関係", "販売・接客業"];

function BeginnerCard() {
  return (
    <Card title="ほとんどが未経験スタート！">
      <p className="mt-3 text-center text-[14px] font-extrabold text-ink">
        未経験者が
        <span className="mx-1 text-[34px] font-extrabold text-brand">
          <CountUp to={90} />
          <span className="text-[18px]">%</span>
        </span>
        以上！
      </p>
      <div className="my-3 flex items-center gap-2 text-[11px] font-bold text-ink-soft">
        <span className="h-px flex-1 bg-brand-soft" />
        前職の一例
        <span className="h-px flex-1 bg-brand-soft" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {FORMER_JOBS.map((j, i) => (
          <Reveal key={j} delay={i * 60}>
            <span className="block rounded-lg bg-gradient-to-b from-[#fbe0d2] to-[#fbd6da] px-1 py-2 text-center text-[11px] font-extrabold text-ink">
              {j}
            </span>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-center text-[12px] font-extrabold text-brand-deep">
        特別なスキルや経験は不要です！
      </p>
    </Card>
  );
}

const STATS = [
  { label: "未経験スタート率", v: 92 },
  { label: "女性スタッフ率", v: 100 },
  { label: "在宅ワーク率", v: 95 },
  { label: "キャスト継続率", v: 88 },
];

function StatsCard() {
  return (
    <Card title="数字で見るChouChou">
      <div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-4">
        {STATS.map(({ label, v }, i) => (
          <Reveal key={label} delay={i * 100}>
            <div className="flex flex-col items-center gap-1.5">
              <div className="relative flex size-[88px] flex-col items-center justify-center rounded-full border-[3px] border-brand-soft bg-[#fffaf6]">
                <IcoCrown className="absolute -top-3 size-5 rounded-full bg-white p-0.5 text-[#e8b54a]" />
                <p className="text-[24px] font-extrabold leading-none text-brand">
                  <CountUp to={v} />
                  <span className="text-[12px]">%</span>
                </p>
              </div>
              <p className="text-center text-[10.5px] font-extrabold text-ink">
                {label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-3 text-center text-[9.5px] text-ink-soft">
        ※2024年4月時点 自社調べ
      </p>
    </Card>
  );
}

const COMPARE_ROWS: [string, boolean][] = [
  ["AI配信", true],
  ["マスク配信", true],
  ["税理士サポート", false],
  ["顧問弁護士サポート", false],
  ["売上インセンティブ制度", false],
  ["月1回ボーナスキャンペーン", false],
  ["女性スタッフ対応", true],
];

function CompareCard() {
  return (
    <Card title="他社との違い">
      <div className="mt-3 overflow-hidden rounded-xl border border-pink-soft text-[10.5px]">
        <div className="grid grid-cols-[1fr_64px_72px] bg-[#fff3f0] font-extrabold">
          <span className="px-2 py-2" />
          <span className="bg-gradient-to-b from-[#f7903e] to-[#ee5a1a] px-1 py-2 text-center text-white">
            ChouChou
          </span>
          <span className="px-1 py-2 text-center text-ink-soft">
            一般的な事務所
          </span>
        </div>
        {COMPARE_ROWS.map(([label, triangle], i) => (
          <div
            key={label}
            className={`grid grid-cols-[1fr_64px_72px] items-center ${i % 2 ? "bg-[#fffafa]" : "bg-white"}`}
          >
            <span className="px-2 py-[7px] font-bold text-ink">{label}</span>
            <span className="text-center text-[13px] font-extrabold text-brand">
              〇
            </span>
            <span className="text-center text-[12px] font-bold text-[#99a]">
              {triangle ? "△" : "×"}
            </span>
          </div>
        ))}
        <div className="grid grid-cols-[1fr_64px_72px] items-center border-t border-pink-soft bg-[#fff3f0]">
          <span className="px-2 py-[7px] font-extrabold text-ink">
            ノルマ・罰金
          </span>
          <span className="text-center text-[12px] font-extrabold text-pink-deep">
            無し
          </span>
          <span className="text-center text-[11px] font-bold text-[#888]">
            有り
          </span>
        </div>
      </div>
    </Card>
  );
}

/* ============================== row 4 ============================== */

const TAX_POINTS = [
  "確定申告のやり方がわからなくてもOK",
  "必要書類の準備もサポートします",
  "節税アドバイスも受けられます",
  "面倒な税務処理をしっかりサポート",
];
const LEGAL_POINTS = [
  "トラブル時は弁護士が対応",
  "契約内容の相談も可能",
  "安心して長く続けられる環境です",
  "法的リスクを最小限にサポート",
];

function CheckPhotoCard({
  title,
  lead,
  points,
  img,
  imgAlt,
  imgClass = "h-[88px] w-full object-cover",
}: {
  title: string;
  lead: string;
  points: string[];
  img: string;
  imgAlt: string;
  imgClass?: string;
}) {
  return (
    <Card title={title}>
      <p className="mt-1.5 text-center text-[12px] font-extrabold text-pink-deep">
        {lead}
      </p>
      <ul className="mt-3 space-y-2">
        {points.map((p) => (
          <li
            key={p}
            className="flex items-start gap-1.5 text-[11px] font-bold text-ink"
          >
            <IcoCheck className="mt-0.5 size-3.5 shrink-0 text-brand" />
            {p}
          </li>
        ))}
      </ul>
      <Image
        src={img}
        alt={imgAlt}
        width={600}
        height={200}
        className={`mt-3 rounded-lg ${imgClass}`}
      />
    </Card>
  );
}

const WARN_ITEMS = [
  "サポートがなく放置される",
  "ノルマや罰金がある",
  "稼げるまで教えてもらえない",
  "税務や法律の相談ができない",
];

function WarnCard() {
  return (
    <Card title="こんな事務所にはご注意ください">
      <ul className="mt-3 space-y-2.5">
        {WARN_ITEMS.map((w, i) => (
          <Reveal key={w} delay={i * 80}>
            <li className="flex items-center gap-2.5 rounded-lg border border-pink-soft bg-white px-3 py-2.5">
              <IcoX className="size-4 shrink-0 text-pink-deep" />
              <span className="text-[12px] font-extrabold text-ink">{w}</span>
            </li>
          </Reveal>
        ))}
      </ul>
      <Reveal delay={360}>
        <p className="mt-4 rounded-lg bg-gradient-to-r from-[#f2a3ab] to-[#e8838f] py-2.5 text-center text-[13.5px] font-extrabold text-white shadow-[0_6px_14px_-6px_rgba(232,131,143,.6)]">
          ChouChouはすべて解決できます！
        </p>
      </Reveal>
    </Card>
  );
}

/* ============================== flow & faq ============================== */

const FLOW_STEPS = [
  { t: "LINEで相談", d: "気軽にLINEでお問い合わせ", Ico: IcoLine },
  { t: "面談（オンライン）", d: "ご希望や不安をヒアリング", Ico: IcoVideo },
  { t: "配信方法のご提案", d: "AI・マスク配信など最適な方法をご提案", Ico: IcoChat },
  { t: "AI設定・機材準備", d: "スタッフが設定をサポート", Ico: IcoGear },
  { t: "テスト配信", d: "不安な点を確認しながら練習できます", Ico: IcoPlay },
];

function Flow() {
  return (
    <Card>
      <h2 className="text-center text-[16px] font-extrabold text-brand-deep sm:text-[17px]">
        お仕事開始までの流れ
        <span className="ml-2 text-[11px] font-bold text-ink-soft">
          最短当日からスタート可能！
        </span>
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {FLOW_STEPS.map(({ t, d, Ico }, i) => (
          <Reveal key={t} delay={i * 90} className="relative">
            <div className="lift h-full rounded-xl border border-pink-soft bg-[#fffafa] px-3 py-3.5 text-center">
              <p className="flex items-center justify-center gap-1 text-[11px] font-extrabold text-pink-deep">
                <Ico className="size-4" />
                STEP{i + 1}
              </p>
              <p className="mt-1.5 text-[12.5px] font-extrabold leading-snug text-ink">
                {t}
              </p>
              <p className="mt-1 text-[10px] font-bold leading-snug text-ink-soft">
                {d}
              </p>
            </div>
            {i < 4 && (
              <IcoArrowR className="absolute -right-2.5 top-1/2 z-10 size-4 -translate-y-1/2 text-pink max-lg:hidden" />
            )}
          </Reveal>
        ))}
      </div>
    </Card>
  );
}

const FAQS = [
  {
    q: "本当に身バレしませんか？",
    a: "はい。AI配信では骨格から別人の顔を生成するため、本人特定はできません。マスク配信や各種身バレ対策も徹底しています。",
  },
  {
    q: "地方在住でもできますか？",
    a: "ネット環境さえあれば全国どこでも、海外でも可能です。完全在宅なので場所を選びません。",
  },
  {
    q: "スマホだけで配信できますか？",
    a: "推奨はPCですが、機材がない方にはご相談に応じて最適な環境をご提案・サポートします。",
  },
  {
    q: "お金はかかりますか？",
    a: "登録料・入会金・システム利用料など費用は一切かかりません。完全無料で始められます。",
  },
  {
    q: "税金はどうなりますか？",
    a: "顧問税理士が確定申告までしっかりサポートしますので、初めての方もご安心ください。",
  },
  {
    q: "男性と会うことはありますか？",
    a: "ありません。画面越しのライブ配信のみのお仕事で、連絡先の交換も禁止されています。",
  },
];

function Faq() {
  return (
    <Card>
      <h2 className="text-center text-[16px] font-extrabold text-brand-deep">
        よくある質問
      </h2>
      <p className="mt-0.5 text-center text-[10.5px] text-ink-soft">
        不安や疑問もすべて解消します！
      </p>
      <div className="mt-2">
        {FAQS.map(({ q, a }) => (
          <FaqItem key={q} q={q} a={a} />
        ))}
      </div>
    </Card>
  );
}

/* ============================== footer cta ============================== */

function FooterCta() {
  return (
    <section className="relative mt-4 overflow-hidden bg-gradient-to-br from-[#fbe3de] via-[#fbdcd9] to-[#f9d2d2]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-4 px-4 pb-8 pt-7 md:flex-row md:items-end md:gap-6 md:pb-0 md:pt-8">
        <div className="relative hidden shrink-0 md:block">
          <span className="animate-wiggle absolute -right-6 top-2 z-10 grid size-[88px] place-items-center rounded-full bg-white text-center text-[10.5px] font-extrabold leading-[1.6] text-pink-deep shadow-[0_6px_16px_-6px_rgba(214,58,82,.4)]">
            まずは
            <br />
            相談だけでも
            <br />
            大歓迎！
          </span>
          <Image
            src="/images/footer_woman.png"
            alt="案内する女性スタッフ"
            width={440}
            height={544}
            className="w-[180px]"
          />
        </div>
        <div className="flex-1 pb-2 text-center md:pb-8 md:text-left">
          <Reveal>
            <h2 className="text-[21px] font-extrabold leading-snug text-ink sm:text-[24px] xl:whitespace-nowrap">
              新しい働き方を、
              <span className="text-pink-deep">安心して</span>
              始めませんか？
            </h2>
            <p className="mt-2 text-[13px] font-bold text-ink-soft">
              女性マネージャーがあなたの第一歩をサポートします。
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1.5 md:justify-start">
              {HERO_CHIPS.map(({ label, Ico }) => (
                <span
                  key={label}
                  className="flex items-center gap-1 text-[11px] font-extrabold text-ink"
                >
                  <Ico className="size-3.5 text-brand" />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="flex w-full max-w-[400px] flex-col items-center pb-3 md:pb-10">
          <Reveal delay={150} className="w-full">
            <p className="mb-2 text-center text-[12.5px] font-extrabold text-pink-deep">
              ＼ 相談は無料・24時間受付中！ ／
            </p>
            <LineButton arrow />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================== page ============================== */

export default function Page() {
  return (
    <>
      <JsonLd faqs={FAQS} />
      <Header />
      <main>
        <Hero />
        <div className="mx-auto max-w-[1100px] space-y-4 px-3 py-4 sm:px-4">
          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
            <Reveal><StyleCard /></Reveal>
            <Reveal delay={100}><PrivacyCard /></Reveal>
            <Reveal delay={200}><PromiseCard /></Reveal>
          </div>
          <Reveal><Support /></Reveal>
          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
            <Reveal><WhyCard /></Reveal>
            <Reveal delay={100}><GrowCard /></Reveal>
            <Reveal delay={200}><RewardCard /></Reveal>
          </div>
          <Reveal><Earnings /></Reveal>
          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
            <Reveal><BeginnerCard /></Reveal>
            <Reveal delay={100}><StatsCard /></Reveal>
            <Reveal delay={200}><CompareCard /></Reveal>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
            <Reveal>
              <CheckPhotoCard
                title="税務サポートについて"
                lead="顧問税理士が確定申告までサポート！"
                points={TAX_POINTS}
                img="/images/tax_photo.png"
                imgAlt="税務サポートのイメージ"
              />
            </Reveal>
            <Reveal delay={100}>
              <CheckPhotoCard
                title="法務サポートについて"
                lead="顧問弁護士が在籍しているから安心！"
                points={LEGAL_POINTS}
                img="/images/legal_photo.png"
                imgAlt="法務サポートのイメージ"
                imgClass="mx-auto h-[110px] w-auto object-contain"
              />
            </Reveal>
            <Reveal delay={200}><WarnCard /></Reveal>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[7fr_5fr]">
            <Reveal><Flow /></Reveal>
            <Reveal delay={100}><Faq /></Reveal>
          </div>
        </div>
        <FooterCta />
      </main>
      <footer className="bg-[#fbe7df] py-4">
        <nav className="mx-auto mb-2 flex max-w-[1100px] flex-wrap justify-center gap-x-4 gap-y-1 px-4 text-[11.5px] font-bold text-ink-soft">
          <a href="/compare" className="hover:text-brand">
            チャトレ事務所の比較
          </a>
          <a href="/column" className="hover:text-brand">
            コラム
          </a>
          <a href="/column/mibare-taisaku" className="hover:text-brand">
            身バレ対策
          </a>
          <a href="/column/tedori-houshu" className="hover:text-brand">
            手取り・報酬
          </a>
          <a href="/column/zaitaku-anzen" className="hover:text-brand">
            在宅の安全性
          </a>
        </nav>
        <p className="mx-auto max-w-[1100px] px-4 text-center text-[10px] leading-relaxed text-ink-soft">
          ※本サービスは「ライブ配信」サービスであり、面接・サービス提供において年齢確認を行います。18歳未満の方のご利用はお断りしております。
        </p>
      </footer>
    </>
  );
}
