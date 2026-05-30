"use client";

import { SimpleBadge } from "@/ascendra-ui/components/common-ui/simple-badge";
import { MainSection } from "@/ascendra-ui/components/layout/main-section";
import { MainSectionHeader } from "@/ascendra-ui/components/layout/main-section-header";
import { MainSectionHeaderSubtitle } from "@/ascendra-ui/components/layout/main-section-header-subtitle";
import { MainSectionHeaderTitle } from "@/ascendra-ui/components/layout/main-section-header-title";
import { MainSectionPanel } from "@/ascendra-ui/components/layout/main-section-panel";
import { MainSectionFooter } from "@/ascendra-ui/components/layout/main-section-footer";
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from "@/ascendra-ui/shadcn/components/ui/chart";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import {
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  XAxis,
  YAxis
} from "recharts";

// ─── Types ────────────────────────────────────────────────────────────────────

type Candle = {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
  // derived for recharts stacked-bar trick
  bodyBase: number;    // min(open, close)
  bodyHeight: number;  // |close - open|
  wickBase: number;    // low
  wickTop: number;     // high - low (full wick extent)
  bullish: boolean;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

function makeCandle(date: string, open: number, high: number, low: number, close: number, volume?: number): Candle {
  return {
    date, open, high, low, close, volume,
    bodyBase: Math.min(open, close),
    bodyHeight: Math.abs(close - open),
    wickBase: low,
    wickTop: high - low,
    bullish: close >= open,
  };
}

const ohlcData: Candle[] = [
  makeCandle("Jan 6",  142, 148, 139, 146),
  makeCandle("Jan 7",  146, 151, 144, 143),
  makeCandle("Jan 8",  143, 147, 140, 145),
  makeCandle("Jan 9",  145, 153, 144, 151),
  makeCandle("Jan 10", 151, 155, 149, 150),
  makeCandle("Jan 13", 150, 154, 147, 148),
  makeCandle("Jan 14", 148, 156, 147, 154),
  makeCandle("Jan 15", 154, 159, 152, 158),
  makeCandle("Jan 16", 158, 161, 154, 156),
  makeCandle("Jan 17", 156, 160, 153, 159),
  makeCandle("Jan 20", 159, 164, 157, 162),
  makeCandle("Jan 21", 162, 165, 158, 160),
];

const volumeData: Candle[] = [
  makeCandle("Jan 6",  142, 148, 139, 146, 18400),
  makeCandle("Jan 7",  146, 151, 144, 143, 23100),
  makeCandle("Jan 8",  143, 147, 140, 145, 15600),
  makeCandle("Jan 9",  145, 153, 144, 151, 31200),
  makeCandle("Jan 10", 151, 155, 149, 150, 19800),
  makeCandle("Jan 13", 150, 154, 147, 148, 22400),
  makeCandle("Jan 14", 148, 156, 147, 154, 28700),
  makeCandle("Jan 15", 154, 159, 152, 158, 34500),
  makeCandle("Jan 16", 158, 161, 154, 156, 26300),
  makeCandle("Jan 17", 156, 160, 153, 159, 21900),
  makeCandle("Jan 20", 159, 164, 157, 162, 38100),
  makeCandle("Jan 21", 162, 165, 158, 160, 29600),
];

const GREEN = "var(--chart-2)";
const RED   = "var(--chart-5)";

// ─── Shared tooltip ───────────────────────────────────────────────────────────

function OHLCTooltip({ payload, label }: { payload?: Array<{ payload: Candle }>; label?: string | number }) {
  if (!payload?.length) return null;
  const d = payload[0].payload;
  const color = d.bullish ? GREEN : RED;
  return (
    <div className="rounded-lg border bg-background px-3 py-2 text-xs shadow-md min-w-[130px]">
      <div className="font-medium text-foreground mb-1.5">{label}</div>
      {[
        { k: "Open",  v: d.open  },
        { k: "High",  v: d.high  },
        { k: "Low",   v: d.low   },
        { k: "Close", v: d.close },
      ].map(({ k, v }) => (
        <div key={k} className="flex justify-between gap-4 text-muted-foreground">
          {k}
          <span className="font-medium" style={{ color }}>${v.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Chart configs ─────────────────────────────────────────────────────────────

const ohlcConfig: ChartConfig = {
  bodyHeight: { label: "Body", color: "var(--chart-1)" },
  wickTop:    { label: "Wick", color: "var(--muted-foreground)" },
};

const volumeConfig: ChartConfig = {
  bodyHeight: { label: "Body", color: "var(--chart-1)" },
  wickTop:    { label: "Wick", color: "var(--muted-foreground)" },
  volume:     { label: "Volume", color: "var(--chart-4)" },
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function CandlestickChartsPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-12">
      <Link
        href="/showcase/charts"
        className="text-muted-foreground hover:text-foreground mb-8 flex w-fit items-center gap-1.5 text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      >
        <LuArrowLeft className="size-3 stroke-2" />
        Chart Gallery
      </Link>

      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Charts
        </div>
        <h1 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">Candlestick</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          OHLC price action built with ComposedChart — a transparent base bar establishes the wick range, a coloured body bar shows open-to-close movement. Green candles close higher; red candles close lower.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* 1 — OHLC Candlestick */}
        <MainSection>
          <MainSectionHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <MainSectionHeaderTitle>OHLC Candlestick</MainSectionHeaderTitle>
                <MainSectionHeaderSubtitle>
                  12 trading days — green candles indicate bullish closes, red bearish. Thin wicks show the intraday high/low range outside the body.
                </MainSectionHeaderSubtitle>
              </div>
              <SimpleBadge variant="default" className="shrink-0 mt-px">OHLC</SimpleBadge>
            </div>
          </MainSectionHeader>
          <MainSectionPanel>
            <div className="p-5">
              <ChartContainer config={ohlcConfig} className="h-80 w-full">
                <ComposedChart data={ohlcData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="var(--border)" strokeOpacity={0.4} vertical={false} />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} dy={6} />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 11 }}
                    width={44}
                    domain={[136, 168]}
                    tickFormatter={(v) => `$${v}`}
                  />
                  <ChartTooltip content={(props) => <OHLCTooltip payload={props.payload as unknown as Array<{ payload: Candle }>} label={props.label} />} />
                  {/* Wick: transparent base + full-range bar rendered as thin line via small barSize */}
                  <Bar dataKey="wickBase" stackId="candle" fill="transparent" legendType="none" isAnimationActive={false} />
                  <Bar dataKey="wickTop" stackId="candle" barSize={2} radius={0} legendType="none" isAnimationActive={false}>
                    {ohlcData.map((d, i) => (
                      <Cell key={i} fill={d.bullish ? GREEN : RED} fillOpacity={0.5} />
                    ))}
                  </Bar>
                  {/* Body: transparent base lifts the coloured bar to min(open,close) */}
                  <Bar dataKey="bodyBase" stackId="body" fill="transparent" legendType="none" isAnimationActive={false} />
                  <Bar dataKey="bodyHeight" stackId="body" barSize={12} radius={[1, 1, 1, 1]} legendType="none" isAnimationActive={false}>
                    {ohlcData.map((d, i) => (
                      <Cell key={i} fill={d.bullish ? GREEN : RED} />
                    ))}
                  </Bar>
                </ComposedChart>
              </ChartContainer>
            </div>
          </MainSectionPanel>
          <MainSectionFooter>
            <div className="flex justify-center gap-6 w-full">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-3 w-3 rounded-sm shrink-0" style={{ background: GREEN }} />
                Bullish (close &gt; open)
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-3 w-3 rounded-sm shrink-0" style={{ background: RED }} />
                Bearish (close &lt; open)
              </div>
            </div>
          </MainSectionFooter>
        </MainSection>

        {/* 2 — Candlestick + Volume */}
        <MainSection>
          <MainSectionHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <MainSectionHeaderTitle>Candlestick + Volume</MainSectionHeaderTitle>
                <MainSectionHeaderSubtitle>
                  Price candles in the upper pane and volume bars below — higher volume on Jan 20 confirms the breakout move to new highs.
                </MainSectionHeaderSubtitle>
              </div>
              <SimpleBadge variant="blue" className="shrink-0 mt-px">+Volume</SimpleBadge>
            </div>
          </MainSectionHeader>
          <MainSectionPanel>
            <div className="p-5 flex flex-col gap-1">
              {/* Price pane */}
              <ChartContainer config={volumeConfig} className="h-56 w-full">
                <ComposedChart data={volumeData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="var(--border)" strokeOpacity={0.4} vertical={false} />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fontSize: 10 }} dy={6} />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 11 }}
                    width={44}
                    domain={[136, 168]}
                    tickFormatter={(v) => `$${v}`}
                  />
                  <ChartTooltip content={(props) => <OHLCTooltip payload={props.payload as unknown as Array<{ payload: Candle }>} label={props.label} />} />
                  <Bar dataKey="wickBase" stackId="candle" fill="transparent" legendType="none" isAnimationActive={false} />
                  <Bar dataKey="wickTop" stackId="candle" barSize={2} radius={0} legendType="none" isAnimationActive={false}>
                    {volumeData.map((d, i) => (
                      <Cell key={i} fill={d.bullish ? GREEN : RED} fillOpacity={0.5} />
                    ))}
                  </Bar>
                  <Bar dataKey="bodyBase" stackId="body" fill="transparent" legendType="none" isAnimationActive={false} />
                  <Bar dataKey="bodyHeight" stackId="body" barSize={12} radius={[1, 1, 1, 1]} legendType="none" isAnimationActive={false}>
                    {volumeData.map((d, i) => (
                      <Cell key={i} fill={d.bullish ? GREEN : RED} />
                    ))}
                  </Bar>
                </ComposedChart>
              </ChartContainer>

              {/* Volume pane */}
              <ChartContainer config={{ volume: { label: "Volume", color: "var(--chart-4)" } }} className="h-20 w-full">
                <ComposedChart data={volumeData} margin={{ top: 0, right: 8, left: 0, bottom: 0 }}>
                  <XAxis dataKey="date" hide />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 9 }}
                    width={44}
                    tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
                    tickCount={2}
                  />
                  <Bar dataKey="volume" barSize={12} radius={[2, 2, 0, 0]} isAnimationActive={false}>
                    {volumeData.map((d, i) => (
                      <Cell key={i} fill={d.bullish ? GREEN : RED} fillOpacity={0.45} />
                    ))}
                  </Bar>
                </ComposedChart>
              </ChartContainer>

            </div>
          </MainSectionPanel>
          <MainSectionFooter>
            <div className="flex justify-center gap-6 w-full">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-3 w-3 rounded-sm shrink-0" style={{ background: GREEN }} />
                Bullish
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-3 w-3 rounded-sm shrink-0" style={{ background: RED }} />
                Bearish
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-3 rounded-sm shrink-0" style={{ background: "var(--chart-4)", opacity: 0.5 }} />
                Volume
              </div>
            </div>
          </MainSectionFooter>
        </MainSection>
      </div>
    </div>
  );
}
