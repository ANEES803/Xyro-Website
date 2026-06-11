"use client";

import { motion } from "framer-motion";
import { MoreVertical, TrendingUp, User } from "lucide-react";
import "./hero-glass-cards.css";

const REVENUE_BARS = [
  { label: "Jan", value: 52, active: false },
  { label: "Feb", value: 68, active: false },
  { label: "Mar", value: 61, active: false },
  { label: "Apr", value: 100, active: true },
  { label: "May", value: 74, active: false },
];

function NewCustomersCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.35 }}
      className="hero-glass-card p-5 sm:p-6"
    >
      <p className="text-sm font-medium text-slate-600">New Customers</p>
      <div className="mt-2 flex items-center gap-3">
        <p className="text-4xl font-bold tracking-tight text-slate-900 sm:text-[2.75rem]">
          352+
        </p>
        <span className="hero-glass-trend">
          <TrendingUp className="h-3 w-3" aria-hidden="true" />
          7.4%
        </span>
      </div>
      <div className="my-4 h-px bg-slate-300/70" />
      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
        <span className="hero-glass-pill">73%</span>
        <span>Since Previous 30 days</span>
      </div>
    </motion.article>
  );
}

function TotalRevenueCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.5 }}
      className="hero-glass-card p-5 sm:p-6"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="hero-glass-icon-wrap">
            <User className="h-4 w-4" aria-hidden="true" />
          </span>
          <p className="text-sm font-medium text-slate-600">Total Revenue</p>
        </div>
        <button
          type="button"
          className="rounded-lg p-1 text-slate-500 transition-colors hover:bg-white/40"
          aria-label="More options"
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>

      <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        $ 45,234
      </p>

      <div
        className="mt-6 flex h-28 items-end justify-between gap-2 sm:gap-3"
        role="img"
        aria-label="Monthly revenue bar chart"
      >
        {REVENUE_BARS.map((bar, i) => (
          <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
            <motion.div
              className={`hero-glass-bar w-full ${bar.active ? "hero-glass-bar--active" : ""}`}
              initial={{ height: 0 }}
              animate={{ height: `${bar.value}%` }}
              transition={{ duration: 0.75, delay: 0.65 + i * 0.08, ease: "easeOut" }}
            />
            <span className="text-[10px] font-medium text-slate-600 sm:text-xs">
              {bar.label}
            </span>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

export function HeroGlassCards() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
      <div className="grid gap-5 sm:gap-6 lg:relative lg:h-[420px]">
        <div className="lg:absolute lg:left-0 lg:top-0 lg:w-[88%]">
          <NewCustomersCard />
        </div>
        <div className="lg:absolute lg:right-0 lg:top-[9.5rem] lg:w-[92%]">
          <TotalRevenueCard />
        </div>
      </div>
    </div>
  );
}
