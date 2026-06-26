"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, MessageSquare, Clock, QrCode, Cpu, Plus, Wifi, WifiOff, Moon } from "lucide-react";

/* ─── Mock Data ───────────────────────────────────────────────────── */
const KPI_DATA = [
  {
    label: "Total Conversations Today",
    value: "1,284",
    trend: "+18%",
    up: true,
    icon: <MessageSquare size={18} className="text-brand-amber" />,
  },
  {
    label: "Avg Response Time",
    value: "2.4 sec",
    trend: "-0.3s",
    up: true,
    icon: <Clock size={18} className="text-brand-amber" />,
  },
  {
    label: "QR Scans",
    value: "342",
    trend: "+24%",
    up: true,
    icon: <QrCode size={18} className="text-brand-amber" />,
  },
  {
    label: "Active Devices",
    value: "7 / 9",
    trend: "-2 offline",
    up: false,
    icon: <Cpu size={18} className="text-brand-amber" />,
  },
];

const CONVERSATIONS = [
  { id: 1, device: "Shelf A3", time: "2 min ago",  preview: "Do you have the mango variant?",        active: true  },
  { id: 2, device: "Shelf B1", time: "7 min ago",  preview: "Is this product gluten-free?",          active: false },
  { id: 3, device: "Shelf C2", time: "14 min ago", preview: "What's the price difference between...", active: false },
  { id: 4, device: "Shelf A1", time: "22 min ago", preview: "Show me the family pack options",        active: false },
  { id: 5, device: "Shelf D4", time: "31 min ago", preview: "Yeh product kab tak expire hoga?",       active: false },
];

const TRANSCRIPT = [
  { role: "customer", text: "Do you have the mango variant of this juice?" },
  { role: "muzu",     text: "Yes! The Mango Burst variant is available in 200ml and 1L packs right here on this shelf. The 1L pack is currently ₹89, and we also have a combo of 3×200ml packs at ₹65." },
  { role: "customer", text: "Which one is better value?" },
  { role: "muzu",     text: "The 3-pack combo works out to ₹21.67 per 200ml, while the 1L pack is ₹8.9 per 100ml — so the 1L is better value if you enjoy it regularly. Want me to send this comparison to your WhatsApp?" },
  { role: "customer", text: "Haan, bhej do." },
  { role: "muzu",     text: "Sure! Scan the QR code below and I'll send you the full range, today's offers, and the nutritional comparison. 🟡" },
];

const DEVICES = [
  { id: "MZ-001", name: "Shelf A3 — Juices",     status: "online", led: "Amber Pulse",  uptime: "99.8%", location: "Aisle 3, Bay 2", last: "Just now"  },
  { id: "MZ-002", name: "Shelf B1 — Dairy",       status: "online", led: "Soft White",  uptime: "98.2%", location: "Aisle 5, Bay 1", last: "3 min ago" },
  { id: "MZ-003", name: "Shelf C2 — Snacks",      status: "idle",   led: "Breathing",   uptime: "97.5%", location: "Aisle 2, Bay 3", last: "12 min ago"},
  { id: "MZ-004", name: "Shelf D4 — Coffee",      status: "online", led: "Amber Pulse", uptime: "99.1%", location: "Aisle 1, Bay 4", last: "1 min ago" },
  { id: "MZ-005", name: "Shelf A1 — Water",       status: "offline", led: "Off",        uptime: "72.0%", location: "Aisle 3, Bay 1", last: "2 hrs ago" },
  { id: "MZ-006", name: "Shelf E2 — Personal Care",status: "online", led: "Soft White", uptime: "99.9%", location: "Aisle 7, Bay 2", last: "Just now"  },
];

const STATUS_STYLE = {
  online:  { dot: "bg-emerald-400", text: "Online",  icon: <Wifi     size={12} /> },
  idle:    { dot: "bg-brand-amber", text: "Idle",    icon: <Moon     size={12} /> },
  offline: { dot: "bg-red-400",     text: "Offline", icon: <WifiOff  size={12} /> },
};

/* ─── KPI Card ────────────────────────────────────────────────────── */
function KPICard({ label, value, trend, up, icon }: typeof KPI_DATA[0]) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="bg-white rounded-card p-6 shadow-card flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <span className="font-nunito font-medium text-[12px] uppercase tracking-[0.08em] text-brand-gray">{label}</span>
        {icon}
      </div>
      <span className="font-mono text-[32px] font-medium text-brand-charcoal leading-none">{value}</span>
      <div className={`flex items-center gap-1 text-[12px] font-nunito font-medium ${up ? "text-emerald-600" : "text-red-500"}`}>
        {up ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
        {trend} vs yesterday
      </div>
    </motion.div>
  );
}

/* ─── Dashboard Page ──────────────────────────────────────────────── */
export default function DashboardPage() {
  const [activeConv, setActiveConv] = useState(1);
  const [activeDevice, setActiveDevice] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-20 bg-brand-gray-light border-b border-black/[0.06] px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="font-syne font-bold text-[24px] text-brand-black tracking-[-0.01em]">Overview</h1>
          <p className="font-nunito text-[13px] text-brand-gray mt-0.5">
            {new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-amber text-brand-charcoal font-nunito font-bold text-[14px] rounded-ui hover:shadow-amber-glow transition-all duration-200">
          <Plus size={15} />
          Add Device
        </button>
      </header>

      <div className="flex-1 p-8 flex flex-col gap-8">
        {/* KPI Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {KPI_DATA.map((k, i) => <KPICard key={i} {...k} />)}
        </div>

        {/* Conversation Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* List */}
          <div className="lg:col-span-2 bg-white rounded-card shadow-card overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-b border-black/[0.05]">
              <h2 className="font-nunito font-bold text-[15px] text-brand-black">Live Conversations</h2>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-black/[0.04]">
              {CONVERSATIONS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveConv(c.id)}
                  className={`w-full text-left px-5 py-4 transition-colors duration-150 relative ${
                    activeConv === c.id ? "bg-brand-amber/[0.07]" : "hover:bg-black/[0.02]"
                  }`}
                >
                  {activeConv === c.id && (
                    <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-brand-amber rounded-r-full" />
                  )}
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-nunito font-semibold text-[13px] text-brand-charcoal">{c.device}</span>
                    <span className="font-nunito text-[11px] text-brand-gray">{c.time}</span>
                  </div>
                  <p className="font-nunito text-[13px] text-brand-gray truncate">{c.preview}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Transcript */}
          <div className="lg:col-span-3 bg-white rounded-card shadow-card overflow-hidden flex flex-col">
            <div className="px-5 py-4 border-b border-black/[0.05] flex items-center justify-between">
              <h2 className="font-nunito font-bold text-[15px] text-brand-black">
                {CONVERSATIONS.find((c) => c.id === activeConv)?.device} — Transcript
              </h2>
              <span className="flex items-center gap-1.5 text-[12px] text-emerald-600 font-nunito font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Live
              </span>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-3">
              {TRANSCRIPT.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "customer" ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[78%] px-4 py-3 rounded-[12px] font-nunito text-[14px] leading-[1.65] ${
                      msg.role === "customer"
                        ? "bg-brand-gray-light text-brand-charcoal rounded-tl-[4px]"
                        : "bg-brand-amber-soft text-brand-charcoal rounded-tr-[4px]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Device Status Grid */}
        <div>
          <h2 className="font-syne font-bold text-[18px] text-brand-black mb-5">Device Status</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {DEVICES.map((d) => {
              const s = STATUS_STYLE[d.status as keyof typeof STATUS_STYLE];
              return (
                <motion.button
                  key={d.id}
                  whileHover={{ scale: 1.005 }}
                  onClick={() => setActiveDevice(activeDevice === d.id ? null : d.id)}
                  className={`text-left bg-white rounded-card p-6 shadow-card border transition-all duration-200 ${
                    activeDevice === d.id ? "border-brand-amber/50 shadow-amber-glow-sm" : "border-transparent"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="font-nunito font-bold text-[14px] text-brand-charcoal">{d.name}</p>
                      <p className="font-nunito text-[12px] text-brand-gray mt-0.5">{d.location}</p>
                    </div>
                    <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-nunito font-medium ${
                      d.status === "online"  ? "bg-emerald-50 text-emerald-700" :
                      d.status === "idle"    ? "bg-amber-50 text-amber-700" :
                                               "bg-red-50 text-red-600"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                      {s.text}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "LED",     val: d.led      },
                      { label: "Uptime",  val: d.uptime   },
                      { label: "Last Msg",val: d.last      },
                    ].map(({ label, val }) => (
                      <div key={label}>
                        <p className="font-nunito text-[10px] uppercase tracking-wide text-brand-gray mb-0.5">{label}</p>
                        <p className="font-mono text-[12px] text-brand-charcoal">{val}</p>
                      </div>
                    ))}
                  </div>

                  {/* Expanded config panel */}
                  {activeDevice === d.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-5 pt-5 border-t border-brand-amber/20"
                    >
                      <p className="font-nunito font-semibold text-[13px] text-brand-charcoal mb-3">Personality Settings</p>
                      <div className="flex flex-col gap-2">
                        {["Voice: Warm & Friendly", "Language: Auto-detect", "LED: Amber Pulse", "Persona: Product Expert"].map((s) => (
                          <div key={s} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-amber shrink-0" />
                            <span className="font-nunito text-[12px] text-brand-gray">{s}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
