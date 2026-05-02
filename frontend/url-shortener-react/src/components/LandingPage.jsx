import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Link as LinkIcon,
  Link2,
  Share2,
  SquarePen,
} from "lucide-react";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";
import {
  fadeUpMountProps,
  fadeUpProps,
  staggerParent,
  tapScale,
} from "../utils/motionVariants";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();

  const goStart = () => navigate(token ? "/dashboard" : "/register");
  const goLearn = () => navigate("/about");

  return (
    <div className="lx-page-inner pb-24 pt-12 sm:pt-16 lg:pb-28">
      <motion.div
        {...fadeUpMountProps(0)}
        className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-16 xl:gap-24"
      >
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <motion.span
            {...fadeUpProps(0.02)}
            className="lx-badge mx-auto lg:mx-0"
          >
            URL shortener + analytics
          </motion.span>

          <motion.h1
            {...fadeUpProps(0.06)}
            className="mx-auto max-w-xl text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0f172a] sm:text-5xl lg:mx-0 lg:max-w-2xl"
          >
            <span className="dark:text-[#f8fafc]">Shorten links. </span>
            <span className="lx-text-brand-gradient">Track everything.</span>
          </motion.h1>

          <motion.p
            {...fadeUpProps(0.1)}
            className="mx-auto max-w-lg text-[1rem] leading-relaxed text-slate-600 dark:text-[#94a3b8] lg:mx-0"
          >
            Lynkforge shortens URLs and surfaces engagement in one calm
            dashboard — built for clarity, not clutter.
          </motion.p>

          <motion.div
            {...fadeUpProps(0.14)}
            className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.button
              type="button"
              className="lx-btn-primary inline-flex gap-2 rounded-xl px-8 py-3.5 text-[0.9375rem]"
              onClick={goStart}
              {...tapScale}
            >
              Get started
              <ArrowRight className="size-[1.125rem]" aria-hidden />
            </motion.button>
            <motion.button
              type="button"
              className="lx-btn-outline-hero px-8 py-3.5"
              onClick={goLearn}
              {...tapScale}
            >
              Learn more
            </motion.button>
          </motion.div>

          <motion.div
            {...fadeUpProps(0.18)}
            className="mx-auto grid max-w-md grid-cols-3 gap-3 pt-2 sm:max-w-xl lg:mx-0"
          >
            {[
              ["Real-time", "redirects"],
              ["Click", "analytics"],
              ["Reliable", "uptime"],
            ].map(([a, b]) => (
              <div
                key={a}
                className="rounded-xl border border-slate-200 bg-white/95 px-3 py-4 text-center text-[0.6875rem] font-semibold uppercase tracking-wide text-slate-700 shadow-soft dark:border-white/[0.1] dark:bg-[rgb(21_31_53)] dark:text-[#cbd5e1]"
              >
                <div>{a}</div>
                <div className="mt-0.5 font-normal lowercase text-slate-500 dark:text-[#64748b]">
                  {b}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          {...fadeUpProps(0.08)}
          className="relative flex w-full max-w-[348px] flex-1 justify-center lg:max-w-[360px] lg:justify-end"
        >
          {/* Product preview — downsized to sit closer to hero heading scale */}
          <div className="relative w-full rounded-2xl border border-white/[0.1] bg-gradient-to-b from-[#151d2f] via-[#0f1624] to-[#0c111d] p-4 shadow-[0_22px_48px_-18px_rgb(0_0_0_/_0.6)] ring-1 ring-white/[0.05] dark:border-white/[0.12] sm:p-5">
            <div className="mb-4 flex items-center gap-2.5 border-b border-white/[0.08] pb-3">
              <span className="flex gap-1">
                <span className="size-2 rounded-full bg-[#ec6b5f]" aria-hidden />
                <span className="size-2 rounded-full bg-[#f4bf4f]" aria-hidden />
                <span className="size-2 rounded-full bg-[#61c554]" aria-hidden />
              </span>
              <span className="flex-1 rounded-md bg-black/25 py-[3px] text-center text-[10px] font-medium tracking-wide text-[#64748b]">
                lynkforge.app
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-black/35 px-3 py-2.5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-blue-500/18 text-[#93c5fd]">
                  <LinkIcon className="size-4" aria-hidden />
                </div>
                <p className="truncate text-[11px] leading-snug text-[#94a3b8]">
                  very-long-example-url.com/dashboard/settings/invite…
                </p>
              </div>
              <div className="rounded-lg bg-gradient-to-r from-[#2563eb] to-[#4f46e5] px-3 py-2 shadow-md shadow-blue-950/35">
                <p className="truncate text-[11px] font-semibold text-white leading-snug">
                  lynkforge.app/s/your-link
                </p>
              </div>
              <div className="relative flex justify-center pt-4 pb-1">
                <div className="absolute inset-x-10 top-[32%] h-24 rounded-[2rem] bg-blue-500/10 blur-[28px]" aria-hidden />
                <img
                  className="relative z-[1] h-auto w-[min(100%,152px)] object-contain drop-shadow-[0_14px_32px_-10px_rgb(59_130_246_/_0.4)] sm:w-[168px]"
                  src="/images/lynkforge-logo.png"
                  alt=""
                  width={176}
                  height={176}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <section
        aria-labelledby="landing-features"
        className="mt-24 space-y-6 py-14 sm:mt-28 sm:py-20"
      >
        <motion.h2
          id="landing-features"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight text-[#0f172a] dark:text-[#f8fafc] sm:text-[1.875rem]"
        >
          Ship links your team trusts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px 0px" }}
          transition={{
            duration: 0.42,
            delay: 0.05,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="mx-auto max-w-xl text-center text-[0.9375rem] leading-relaxed text-slate-600 dark:text-[#94a3b8]"
        >
          One surface for shortening, sharing, and reading the signal behind
          every click.
        </motion.p>
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-70px 0px -80px 0px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <Card
            Icon={Link2}
            title="Simple URL Shortening"
            desc="Create short, memorable links in seconds. Clean interface, zero friction."
            iconShell="flex size-12 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/14 text-[#2563eb] shadow-inner shadow-blue-900/15 dark:border-blue-400/25 dark:bg-blue-950/75 dark:text-[#60a5fa]"
          />
          <Card
            Icon={BarChart3}
            title="Powerful Analytics"
            desc="Track every click. Visualize traffic over time and understand your audience."
            iconShell="flex size-12 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/14 text-emerald-600 shadow-inner shadow-emerald-900/15 dark:border-emerald-400/22 dark:bg-emerald-950/70 dark:text-emerald-400"
          />
          <Card
            Icon={SquarePen}
            title="Edit anytime"
            desc="Rename and retarget short links anytime — reshape campaigns without breaking shared URLs."
            iconShell="flex size-12 items-center justify-center rounded-xl border border-violet-500/25 bg-violet-500/14 text-violet-600 shadow-inner shadow-violet-900/15 dark:border-violet-400/25 dark:bg-violet-950/75 dark:text-violet-400"
          />
          <Card
            Icon={Share2}
            title="Share everywhere"
            desc="Drop into chats, decks, email, or QR codes. Lightning-fast redirects with 99.9% uptime."
            iconShell="flex size-12 items-center justify-center rounded-xl border border-orange-400/35 bg-orange-500/14 text-orange-600 shadow-inner shadow-orange-950/25 dark:border-orange-400/22 dark:bg-[rgb(62_39_31)] dark:text-orange-400"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
