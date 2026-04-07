"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Globe,
  Layers,
  MessageSquare,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ─── Navbar ──────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "功能", href: "#features" },
    { label: "定价", href: "#pricing" },
    { label: "客户评价", href: "#testimonials" },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 glass-strong rounded-2xl px-4 py-3 shadow-lg shadow-black/[0.04]">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#" className="flex items-center gap-2 cursor-pointer">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white">
            <Zap className="h-4 w-4" />
          </div>
          <span className="text-lg font-bold text-slate-900">FlowSync</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-700 cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-slate-700">
            登录
          </Button>
          <Button
            size="sm"
            className="bg-teal-600 text-white hover:bg-teal-700 cursor-pointer"
          >
            免费开始
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-3 border-t border-slate-200/60 pt-3 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-200/60 pt-3">
              <Button variant="ghost" size="sm" className="w-full text-slate-700">
                登录
              </Button>
              <Button
                size="sm"
                className="w-full bg-teal-600 text-white hover:bg-teal-700 cursor-pointer"
              >
                免费开始
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background decoration */}
      <div className="gradient-mesh absolute inset-0 -z-10" />
      <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-orange-200/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <Badge className="mb-6 bg-teal-50 text-teal-700 border-teal-200 px-3 py-1 text-sm font-medium">
          <Sparkles className="mr-1 h-3.5 w-3.5" />
          全新 2.0 版本发布
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
          团队协作，
          <br />
          <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
            从未如此简单
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
          FlowSync
          将项目管理、实时协作和智能工作流合为一体。告别混乱的沟通和分散的工具，让团队专注于真正重要的事。
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="h-12 px-8 text-base bg-teal-600 text-white hover:bg-teal-700 rounded-full shadow-lg shadow-teal-600/25 cursor-pointer"
          >
            免费开始使用
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 px-8 text-base rounded-full border-slate-300 text-slate-700 hover:bg-white/60 cursor-pointer"
          >
            观看演示
          </Button>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          无需信用卡 · 14 天免费试用 · 随时取消
        </p>

        {/* Hero visual */}
        <div className="relative mt-16 mx-auto max-w-4xl">
          <div className="glass-card rounded-2xl p-2 shadow-xl">
            <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-slate-400">FlowSync Dashboard</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "进行中", value: "24", color: "bg-teal-500" },
                  { label: "已完成", value: "156", color: "bg-green-500" },
                  { label: "团队成员", value: "38", color: "bg-blue-500" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-xl p-4 text-center"
                  >
                    <div
                      className={`mx-auto mb-2 h-2 w-8 rounded-full ${stat.color}`}
                    />
                    <p className="text-2xl font-bold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-3">
                {[85, 60, 40].map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 w-20 shrink-0">
                      {["设计系统", "API 开发", "用户测试"][i]}
                    </span>
                    <div className="h-2 flex-1 rounded-full bg-slate-200">
                      <div
                        className="h-2 rounded-full bg-teal-500 transition-all duration-700"
                        style={{ width: `${w}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-700 w-8">
                      {w}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Features ────────────────────────────────────────── */
const features = [
  {
    icon: Layers,
    title: "看板管理",
    desc: "直观的拖拽看板，支持自定义工作流，让每个任务的状态一目了然。",
  },
  {
    icon: MessageSquare,
    title: "实时沟通",
    desc: "内置即时通讯，任务讨论与上下文绑定，再也不会找不到关键信息。",
  },
  {
    icon: Clock,
    title: "时间追踪",
    desc: "自动记录项目耗时，生成详细报告，帮助团队合理分配时间和资源。",
  },
  {
    icon: BarChart3,
    title: "数据洞察",
    desc: "实时数据看板，可视化项目进度、团队效率和瓶颈分析。",
  },
  {
    icon: Globe,
    title: "跨团队协作",
    desc: "支持多部门、多项目并行管理，打破信息孤岛，实现高效协同。",
  },
  {
    icon: Shield,
    title: "企业级安全",
    desc: "SOC 2 认证，端到端加密，细粒度权限控制，保障企业数据安全。",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200">
            核心功能
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            一站式团队效率平台
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            FlowSync
            整合了现代团队所需的一切工具，让协作更流畅、决策更明智。
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card group rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/[0.06] hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-100">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─────────────────────────────────────────── */
const plans = [
  {
    name: "Starter",
    price: "免费",
    period: "",
    desc: "适合个人和小团队快速上手",
    features: [
      "最多 5 名成员",
      "3 个活跃项目",
      "基础看板视图",
      "1 GB 存储空间",
      "社区支持",
    ],
    cta: "免费开始",
    popular: false,
  },
  {
    name: "Pro",
    price: "¥99",
    period: "/成员/月",
    desc: "适合成长中的团队",
    features: [
      "无限团队成员",
      "无限项目",
      "高级看板 + 甘特图",
      "时间追踪 & 报告",
      "50 GB 存储空间",
      "优先技术支持",
      "API 访问",
    ],
    cta: "开始试用",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "定制",
    period: "",
    desc: "适合大型组织的定制方案",
    features: [
      "Pro 全部功能",
      "SSO 单点登录",
      "高级权限管理",
      "自定义集成",
      "无限存储空间",
      "专属客户经理",
      "SLA 保障",
    ],
    cta: "联系销售",
    popular: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200">
            定价方案
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            简单透明的定价
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            无隐藏费用，按需选择适合团队的方案，随时升级或降级。
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-card rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-200 hover:shadow-lg ${
                plan.popular
                  ? "ring-2 ring-teal-500 shadow-lg shadow-teal-500/[0.08]"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-teal-600 text-white border-teal-600 px-3 py-0.5 text-xs font-medium">
                    最受欢迎
                  </Badge>
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{plan.desc}</p>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm text-slate-500">{plan.period}</span>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 w-full rounded-full cursor-pointer ${
                  plan.popular
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "FlowSync 彻底改变了我们团队的协作方式。以前需要 5 个工具才能完成的事情，现在一个平台就搞定了。",
    name: "张明",
    role: "CTO · 星辰科技",
    avatar: "ZM",
  },
  {
    quote:
      "作为产品经理，我最喜欢的是实时数据看板。项目进度一目了然，再也不用每周开同步会了。",
    name: "李雪",
    role: "产品总监 · 云帆网络",
    avatar: "LX",
  },
  {
    quote:
      "我们从 Jira 迁移到 FlowSync 后，团队的采纳速度超出预期。界面简洁，上手零成本。",
    name: "王鹏",
    role: "工程副总裁 · 极光数据",
    avatar: "WP",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <Badge className="mb-4 bg-teal-50 text-teal-700 border-teal-200">
            客户评价
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            深受数千团队信赖
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            来自各行各业的企业正在使用 FlowSync 提升团队效率。
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/[0.06]"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-sm font-semibold text-teal-700">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 to-teal-700 px-6 py-16 sm:px-16 sm:py-20 text-center shadow-xl shadow-teal-600/20">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-teal-400/20 blur-2xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              准备好提升团队效率了吗？
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-teal-100">
              加入超过 10,000+ 个团队的行列，从今天开始用
              FlowSync 重新定义协作方式。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="h-12 px-8 text-base bg-white text-teal-700 hover:bg-teal-50 rounded-full shadow-lg cursor-pointer font-semibold"
              >
                免费开始使用
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base rounded-full border-white/30 text-white hover:bg-white/10 cursor-pointer"
              >
                联系销售团队
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────── */
function Footer() {
  const footerLinks = {
    产品: ["功能", "定价", "更新日志", "路线图", "集成"],
    公司: ["关于我们", "博客", "招聘", "联系我们", "品牌"],
    资源: ["文档", "API 参考", "社区", "状态页", "安全"],
    法律: ["隐私政策", "服务条款", "Cookie 政策", "GDPR"],
  };

  return (
    <footer className="border-t border-slate-200/60 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 cursor-pointer">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600 text-white">
                <Zap className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold text-slate-900">
                FlowSync
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              新一代团队效率平台，
              <br />
              让协作从未如此简单。
            </p>
            <div className="mt-4 flex items-center gap-2 text-slate-400">
              <Users className="h-4 w-4" />
              <span className="text-sm">10,000+ 团队信赖</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
              <ul className="mt-3 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 transition-colors hover:text-teal-600 cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/60 pt-8">
          <p className="text-sm text-slate-400">
            &copy; 2026 FlowSync. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-slate-400 transition-colors hover:text-teal-600 cursor-pointer"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="gradient-mesh min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
