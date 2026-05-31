export type AccentColor =
  | "blue"
  | "amber"
  | "purple"
  | "red"
  | "teal"
  | "orange"
  | "indigo"
  | "slate";

export type BorderSide = "t" | "l" | "r" | "b";
export type BorderStroke = 1 | 2 | 3;

export type BorderConfig = {
  side?: BorderSide;
  stroke?: BorderStroke;
  color?: AccentColor;
};

export type BgStyle = "linear" | "radial" | "conic";
export type BgTo =
  | "transparent"
  | "white"
  | "black"
  | AccentColor;

export type BgConfig = {
  style?: BgStyle;
  side?: BorderSide;
  color?: AccentColor;
  to?: BgTo;
};

const BORDER_WIDTH: Record<BorderSide, Record<BorderStroke, string>> = {
  t: { 1: "border-t", 2: "border-t-2", 3: "border-t-[3px]" },
  l: { 1: "border-l", 2: "border-l-2", 3: "border-l-[3px]" },
  r: { 1: "border-r", 2: "border-r-2", 3: "border-r-[3px]" },
  b: { 1: "border-b", 2: "border-b-2", 3: "border-b-[3px]" },
};

const BORDER_COLOR: Record<BorderSide, Record<AccentColor, string>> = {
  t: {
    blue: "border-t-blue-500/60",
    amber: "border-t-amber-500/60",
    purple: "border-t-purple-500/60",
    red: "border-t-red-500/60",
    teal: "border-t-teal-500/60",
    orange: "border-t-orange-500/60",
    indigo: "border-t-indigo-500/60",
    slate: "border-t-slate-500/60",
  },
  l: {
    blue: "border-l-blue-500/60",
    amber: "border-l-amber-500/60",
    purple: "border-l-purple-500/60",
    red: "border-l-red-500/60",
    teal: "border-l-teal-500/60",
    orange: "border-l-orange-500/60",
    indigo: "border-l-indigo-500/60",
    slate: "border-l-slate-500/60",
  },
  r: {
    blue: "border-r-blue-500/60",
    amber: "border-r-amber-500/60",
    purple: "border-r-purple-500/60",
    red: "border-r-red-500/60",
    teal: "border-r-teal-500/60",
    orange: "border-r-orange-500/60",
    indigo: "border-r-indigo-500/60",
    slate: "border-r-slate-500/60",
  },
  b: {
    blue: "border-b-blue-500/60",
    amber: "border-b-amber-500/60",
    purple: "border-b-purple-500/60",
    red: "border-b-red-500/60",
    teal: "border-b-teal-500/60",
    orange: "border-b-orange-500/60",
    indigo: "border-b-indigo-500/60",
    slate: "border-b-slate-500/60",
  },
};

const BG_GRADIENT_DIR: Record<BgStyle, Record<BorderSide, string>> = {
  linear: {
    t: "bg-linear-to-t",
    l: "bg-linear-to-l",
    r: "bg-linear-to-r",
    b: "bg-linear-to-b",
  },
  radial: { t: "bg-radial", l: "bg-radial", r: "bg-radial", b: "bg-radial" },
  conic: { t: "bg-conic", l: "bg-conic", r: "bg-conic", b: "bg-conic" },
};

const BG_FROM: Record<AccentColor, string> = {
  blue: "from-blue-500/[0.07]",
  amber: "from-amber-500/[0.07]",
  purple: "from-purple-500/[0.07]",
  red: "from-red-500/[0.07]",
  teal: "from-teal-500/[0.07]",
  orange: "from-orange-500/[0.07]",
  indigo: "from-indigo-500/[0.07]",
  slate: "from-slate-500/[0.07]",
};

const BG_TO: Record<BgTo, string> = {
  transparent: "to-transparent",
  white: "to-white",
  black: "to-black",
  blue: "to-blue-500/60",
  amber: "to-amber-500/60",
  purple: "to-purple-500/60",
  red: "to-red-500/60",
  teal: "to-teal-500/60",
  orange: "to-orange-500/60",
  indigo: "to-indigo-500/60",
  slate: "to-slate-500/60",
};

export function buildBorderClasses(border: BorderConfig): string {
  const side = border.side ?? "t";
  const stroke = border.stroke ?? 3;
  const color = border.color ?? "orange";
  return [
    "overflow-hidden",
    BORDER_WIDTH[side][stroke],
    BORDER_COLOR[side][color],
  ].join(" ");
}

export function buildBgClasses(bg: BgConfig): string {
  const style = bg.style ?? "linear";
  const side = bg.side ?? "b";
  const color = bg.color ?? "orange";
  const to = bg.to ?? "transparent";
  return [BG_GRADIENT_DIR[style][side], BG_FROM[color], BG_TO[to]].join(" ");
}
