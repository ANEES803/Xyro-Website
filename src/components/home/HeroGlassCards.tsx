"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { BarChart3, Package, TrendingUp } from "lucide-react";
import "./hero-glass-cards.css";

const REVENUE_BARS = [
  { label: "Jan", value: 48 },
  { label: "Feb", value: 62 },
  { label: "Mar", value: 55 },
  { label: "Apr", value: 78 },
  { label: "May", value: 71 },
  { label: "Jun", value: 92, active: true },
];

const SALES_TREND = [28, 36, 32, 44, 40, 52, 48, 58, 54, 64, 70, 76];

const MODULE_USAGE = [
  { label: "Inventory", value: 86 },
  { label: "Finance", value: 92 },
  { label: "HR & Payroll", value: 74 },
];

type AnimatedNumberProps = {
  value: number;
  isInView: boolean;
  animKey: number;
  format: (value: number) => string;
  delay?: number;
  duration?: number;
};

function AnimatedNumber({
  value,
  isInView,
  animKey,
  format,
  delay = 0,
  duration = 1.1,
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setDisplay(0);
      return;
    }

    const controls = animate(0, value, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest),
    });

    return () => controls.stop();
  }, [isInView, animKey, value, delay, duration]);

  return <>{format(display)}</>;
}

function buildLinePath(values: number[], width: number, height: number) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const step = width / (values.length - 1);

  return values
    .map((value, index) => {
      const x = index * step;
      const y = height - ((value - min) / range) * (height - 8) - 4;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function buildAreaPath(values: number[], width: number, height: number) {
  const line = buildLinePath(values, width, height);
  return `${line} L ${width} ${height} L 0 ${height} Z`;
}

const CARD_EASE = [0.16, 1, 0.3, 1] as const;

const cardMotion = {
  hidden: { opacity: 0, y: 64, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const leftCardMotion = {
  hidden: { opacity: 0, x: -56, y: 16, scale: 0.98 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1 },
};

function cardTransition(delay: number) {
  return {
    duration: 0.95,
    delay,
    ease: CARD_EASE,
  };
}

type ChartCardProps = {
  isInView: boolean;
  animKey: number;
  enterDelay: number;
};

function RevenueTrendCard({ isInView, animKey, enterDelay }: ChartCardProps) {
  const chartWidth = 280;
  const chartHeight = 56;
  const linePath = buildLinePath(SALES_TREND, chartWidth, chartHeight);
  const areaPath = buildAreaPath(SALES_TREND, chartWidth, chartHeight);

  return (
    <motion.article
      key={`revenue-card-${animKey}`}
      initial={leftCardMotion.hidden}
      animate={isInView ? leftCardMotion.visible : leftCardMotion.hidden}
      transition={cardTransition(enterDelay)}
      className="hero-glass-card p-3.5 sm:p-4"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-medium text-slate-600">Revenue Trend</p>
          <div className="mt-1 flex items-center gap-2">
            <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              <AnimatedNumber
                isInView={isInView}
                animKey={animKey}
                value={128.4}
                delay={0.25}
                format={(v) => `$${v.toFixed(1)}k`}
              />
            </p>
            <span className="hero-glass-trend">
              <TrendingUp className="h-2.5 w-2.5" aria-hidden="true" />
              <AnimatedNumber
                isInView={isInView}
                animKey={animKey}
                value={12.8}
                delay={0.35}
                duration={0.9}
                format={(v) => `${v.toFixed(1)}%`}
              />
            </span>
          </div>
        </div>
        <span className="hero-glass-icon-wrap">
          <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-3" role="img" aria-label="Revenue trend line chart">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="h-12 w-full overflow-visible sm:h-14"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="hero-line-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e93fc" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#1e93fc" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <motion.path
            key={`area-${animKey}`}
            d={areaPath}
            fill="url(#hero-line-fill)"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          />
          <motion.path
            key={`line-${animKey}`}
            d={linePath}
            fill="none"
            stroke="#1e93fc"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0.6 }}
            animate={
              isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.6 }
            }
            transition={{ duration: 1.1, delay: 0.3, ease: "easeOut" }}
          />
        </svg>
        <div className="mt-0.5 flex justify-between text-[9px] font-medium text-slate-500 sm:text-[10px]">
          <span>Jan</span>
          <span>Jun</span>
          <span>Dec</span>
        </div>
      </div>
    </motion.article>
  );
}

function MonthlySalesCard({ isInView, animKey, enterDelay }: ChartCardProps) {
  return (
    <motion.article
      key={`sales-card-${animKey}`}
      initial={cardMotion.hidden}
      animate={isInView ? cardMotion.visible : cardMotion.hidden}
      transition={cardTransition(enterDelay)}
      className="hero-glass-card p-3.5 sm:p-4"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="hero-glass-icon-wrap">
            <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-medium text-slate-600">Monthly Sales</p>
            <p className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              <AnimatedNumber
                isInView={isInView}
                animKey={animKey}
                value={45234}
                delay={0.3}
                format={(v) =>
                  `$${Math.round(v).toLocaleString("en-US")}`
                }
              />
            </p>
          </div>
        </div>
        <span className="hero-glass-pill">
          <AnimatedNumber
            isInView={isInView}
            animKey={animKey}
            value={8.2}
            delay={0.4}
            duration={0.9}
            format={(v) => `+${v.toFixed(1)}%`}
          />
        </span>
      </div>

      <div
        className="mt-3 flex h-24 items-end justify-between gap-1 sm:h-28 sm:gap-1.5"
        role="img"
        aria-label="Monthly sales bar chart"
      >
        {REVENUE_BARS.map((bar, i) => (
          <div key={bar.label} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
            <div className="flex w-full flex-1 items-end">
              <motion.div
                key={`bar-${bar.label}-${animKey}`}
                className={`hero-glass-bar w-full ${bar.active ? "hero-glass-bar--active" : ""}`}
                initial={{ height: 0 }}
                animate={isInView ? { height: `${bar.value}%` } : { height: 0 }}
                transition={{ duration: 0.75, delay: 0.45 + i * 0.07, ease: "easeOut" }}
              />
            </div>
            <span className="text-[9px] font-medium text-slate-600 sm:text-[10px]">
              {bar.label}
            </span>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

function ModuleUsageCard({ isInView, animKey, enterDelay }: ChartCardProps) {
  return (
    <motion.article
      key={`module-card-${animKey}`}
      initial={leftCardMotion.hidden}
      animate={isInView ? leftCardMotion.visible : leftCardMotion.hidden}
      transition={cardTransition(enterDelay)}
      className="hero-glass-card p-3.5 sm:p-4"
    >
      <div className="flex items-center gap-2">
        <span className="hero-glass-icon-wrap hero-glass-icon-wrap--teal">
          <Package className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-medium text-slate-600">Module Activity</p>
          <p className="text-[10px] text-slate-500">Live usage across ERP modules</p>
        </div>
      </div>

      <div className="mt-3 space-y-2.5" role="img" aria-label="ERP module usage chart">
        {MODULE_USAGE.map((item, i) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between text-[10px] sm:text-xs">
              <span className="font-medium text-slate-700">{item.label}</span>
              <span className="font-semibold text-slate-900">
                <AnimatedNumber
                  isInView={isInView}
                  animKey={animKey}
                  value={item.value}
                  delay={0.5 + i * 0.1}
                  duration={0.9}
                  format={(v) => `${Math.round(v)}%`}
                />
              </span>
            </div>
            <div className="hero-glass-progress-track">
              <motion.div
                key={`progress-${item.label}-${animKey}`}
                className="hero-glass-progress-fill"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${item.value}%` } : { width: 0 }}
                transition={{ duration: 0.85, delay: 0.5 + i * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export function HeroGlassCards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-xs lg:mx-0 lg:max-w-sm">
      <div className="grid gap-3.5 sm:gap-4 lg:relative lg:h-[400px]">
        <div className="lg:absolute lg:left-0 lg:top-0 lg:w-[86%]">
          <RevenueTrendCard isInView={isInView} animKey={0} enterDelay={0.05} />
        </div>
        <div className="lg:absolute lg:-right-52 lg:top-[8.25rem] lg:w-[84%] xl:-right-56">
          <MonthlySalesCard isInView={isInView} animKey={0} enterDelay={0.18} />
        </div>
        <div className="lg:absolute lg:left-3 lg:top-[16.5rem] lg:w-[80%]">
          <ModuleUsageCard isInView={isInView} animKey={0} enterDelay={0.31} />
        </div>
      </div>
    </div>
  );
}
