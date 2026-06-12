"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Briefcase,
  Calculator,
  Package,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { erpShowcaseItems } from "@/lib/constants";
import "./erp-showcase.css";

const iconMap = {
  "bar-chart": BarChart3,
  calculator: Calculator,
  package: Package,
  briefcase: Briefcase,
};

function SalesDashboardMock() {
  const bars = [42, 58, 51, 72, 65, 88, 79, 94];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

  return (
    <div className="erp-mock-screen">
      <div className="erp-mock-topbar">
        <span>Sales Overview</span>
        <span className="erp-mock-badge">Live</span>
      </div>
      <div className="erp-mock-stats">
        <div>
          <p className="erp-mock-stat-label">Total Revenue</p>
          <p className="erp-mock-stat-value">$284,520</p>
        </div>
        <div>
          <p className="erp-mock-stat-label">Orders</p>
          <p className="erp-mock-stat-value">1,842</p>
        </div>
        <div>
          <p className="erp-mock-stat-label">Growth</p>
          <p className="erp-mock-stat-value erp-mock-stat-value--up">+18.4%</p>
        </div>
      </div>
      <div className="erp-mock-chart-area">
        <p className="erp-mock-chart-title">Monthly Sales Performance</p>
        <div className="erp-mock-bars">
          {bars.map((value, i) => (
            <div key={months[i]} className="erp-mock-bar-col">
              <motion.div
                className={`erp-mock-bar ${i === bars.length - 1 ? "erp-mock-bar--active" : ""}`}
                initial={{ height: 0 }}
                whileInView={{ height: `${value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              />
              <span>{months[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FinanceDashboardMock() {
  const linePoints = [30, 38, 35, 48, 44, 56, 52, 64, 60, 72];

  return (
    <div className="erp-mock-screen">
      <div className="erp-mock-topbar">
        <span>Finance Dashboard</span>
        <span className="erp-mock-badge">Q2 Report</span>
      </div>
      <div className="erp-mock-split">
        <div className="erp-mock-donut-wrap">
          <svg viewBox="0 0 120 120" className="erp-mock-donut">
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#1e93fc"
              strokeWidth="14"
              strokeDasharray="175 283"
              transform="rotate(-90 60 60)"
            />
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="14"
              strokeDasharray="108 283"
              strokeDashoffset="-175"
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div className="erp-mock-donut-center">
            <span>Net</span>
            <strong>$96k</strong>
          </div>
        </div>
        <div className="erp-mock-line-wrap">
          <p className="erp-mock-chart-title">Cash Flow Trend</p>
          <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="erp-mock-line-chart">
            <polyline
              fill="none"
              stroke="#1e93fc"
              strokeWidth="2.5"
              strokeLinecap="round"
              points={linePoints
                .map((v, i) => `${(i / (linePoints.length - 1)) * 200},${80 - v * 0.75}`)
                .join(" ")}
            />
          </svg>
        </div>
      </div>
      <div className="erp-mock-legend">
        <span>
          <i style={{ background: "#1e93fc" }} />
          Revenue
        </span>
        <span>
          <i style={{ background: "#94a3b8" }} />
          Expenses
        </span>
      </div>
    </div>
  );
}

function InventoryDashboardMock() {
  const items = [
    { name: "Warehouse A", level: 86 },
    { name: "Warehouse B", level: 64 },
    { name: "Warehouse C", level: 92 },
    { name: "Retail Stock", level: 71 },
  ];

  return (
    <div className="erp-mock-screen">
      <div className="erp-mock-topbar">
        <span>Inventory Analytics</span>
        <span className="erp-mock-badge erp-mock-badge--warn">3 Alerts</span>
      </div>
      <div className="erp-mock-stats erp-mock-stats--compact">
        <div>
          <p className="erp-mock-stat-label">SKUs Tracked</p>
          <p className="erp-mock-stat-value">4,280</p>
        </div>
        <div>
          <p className="erp-mock-stat-label">Stock Accuracy</p>
          <p className="erp-mock-stat-value erp-mock-stat-value--up">98.2%</p>
        </div>
      </div>
      <div className="erp-mock-progress-list">
        {items.map((item, i) => (
          <div key={item.name} className="erp-mock-progress-row">
            <div className="erp-mock-progress-head">
              <span>{item.name}</span>
              <span>{item.level}%</span>
            </div>
            <div className="erp-mock-progress-track">
              <motion.div
                className="erp-mock-progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HrDashboardMock() {
  const attendance = [88, 91, 87, 93, 90, 95, 92, 94, 89, 96, 93, 97];

  return (
    <div className="erp-mock-screen">
      <div className="erp-mock-topbar">
        <span>HR & Payroll</span>
        <span className="erp-mock-badge">This Month</span>
      </div>
      <div className="erp-mock-stats erp-mock-stats--compact">
        <div>
          <p className="erp-mock-stat-label">Employees</p>
          <p className="erp-mock-stat-value">248</p>
        </div>
        <div>
          <p className="erp-mock-stat-label">Attendance</p>
          <p className="erp-mock-stat-value erp-mock-stat-value--up">94.6%</p>
        </div>
      </div>
      <div className="erp-mock-chart-area">
        <p className="erp-mock-chart-title">Attendance Rate (12 weeks)</p>
        <div className="erp-mock-area-chart">
          <svg viewBox="0 0 240 90" preserveAspectRatio="none">
            <defs>
              <linearGradient id="hr-area-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e93fc" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#1e93fc" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <polygon
              fill="url(#hr-area-fill)"
              points={`0,90 ${attendance
                .map((v, i) => `${(i / (attendance.length - 1)) * 240},${90 - v * 0.85}`)
                .join(" ")} 240,90`}
            />
            <polyline
              fill="none"
              stroke="#1e93fc"
              strokeWidth="2.5"
              strokeLinecap="round"
              points={attendance
                .map((v, i) => `${(i / (attendance.length - 1)) * 240},${90 - v * 0.85}`)
                .join(" ")}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

const previewMap = {
  sales: SalesDashboardMock,
  finance: FinanceDashboardMock,
  inventory: InventoryDashboardMock,
  hr: HrDashboardMock,
};

export function ErpShowcaseSection() {
  const [activeId, setActiveId] = useState(erpShowcaseItems[0].id);
  const active = erpShowcaseItems.find((item) => item.id === activeId) ?? erpShowcaseItems[0];
  const Preview = previewMap[active.preview as keyof typeof previewMap];

  return (
    <section className="border-y border-slate-200/80 bg-slate-50 py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="ERP Dashboard"
          title="See your business in real-time graphs"
          description="Interactive dashboards for sales, finance, inventory, and HR — all in one place. No switching tools."
          className="mb-12"
        />

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14">
          <div className="flex flex-col gap-2">
            {erpShowcaseItems.map((item) => {
              const Icon = iconMap[item.icon];
              const isActive = item.id === activeId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`erp-showcase-tab ${isActive ? "erp-showcase-tab--active" : ""}`}
                >
                  <span className="erp-showcase-tab-icon">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-slate-600">
                      {item.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="erp-showcase-preview-wrap">
            <div className="erp-showcase-browser">
              <div className="erp-showcase-browser-bar">
                <span />
                <span />
                <span />
                <p>Xyro ERP — {active.title}</p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="erp-showcase-browser-body"
                >
                  <Preview />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="erp-showcase-floating-stat">
              <TrendingUp className="h-4 w-4 text-brand" />
              <div>
                <p className="text-xs font-medium text-slate-600">{active.highlight.label}</p>
                <p className="text-lg font-bold text-slate-900">{active.highlight.value}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
