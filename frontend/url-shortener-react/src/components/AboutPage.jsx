import { motion } from "framer-motion";
import { BarChart3, Link2, Share2, SquarePen } from "lucide-react";
import { fadeUpProps, staggerChild, staggerParent } from "../utils/motionVariants";

const blocks = [
  {
    Icon: Link2,
    title: "Simple URL Shortening",
    body: "Create short, memorable links in seconds. Clean interface, zero friction.",
    iconBg:
      "border border-blue-500/25 bg-blue-500/14 text-[#2563eb] shadow-inner shadow-blue-900/15 dark:border-blue-400/25 dark:bg-blue-950/75 dark:text-[#60a5fa]",
  },
  {
    Icon: BarChart3,
    title: "Powerful Analytics",
    body: "Track every click. Visualize traffic over time and understand your audience.",
    iconBg:
      "border border-emerald-500/25 bg-emerald-500/14 text-emerald-600 shadow-inner shadow-emerald-900/15 dark:border-emerald-400/22 dark:bg-emerald-950/70 dark:text-emerald-400",
  },
  {
    Icon: SquarePen,
    title: "Edit anytime",
    body: "Rename and retarget short links anytime — reshape campaigns without breaking shared URLs.",
    iconBg:
      "border border-violet-500/25 bg-violet-500/14 text-violet-600 shadow-inner shadow-violet-900/15 dark:border-violet-400/25 dark:bg-violet-950/75 dark:text-violet-400",
  },
  {
    Icon: Share2,
    title: "Share everywhere",
    body: "Drop into chats, decks, email, or QR codes. Lightning-fast redirects with 99.9% uptime.",
    iconBg:
      "border border-orange-400/35 bg-orange-500/14 text-orange-600 shadow-inner shadow-orange-950/25 dark:border-orange-400/22 dark:bg-[rgb(62_39_31)] dark:text-orange-400",
  },
];

const AboutPage = () => {
  return (
    <div className="lx-page-inner lx-section-y">
      <motion.div
        {...fadeUpProps(0)}
        className="mx-auto mb-14 max-w-3xl space-y-5 text-center sm:mb-16 sm:text-left"
      >
        <h1 className="text-[2rem] font-extrabold leading-tight tracking-tight text-[#0f172a] sm:text-4xl lg:text-[2.6rem] dark:text-[#f8fafc]">
          About{" "}
          <span className="lx-text-brand-gradient">
            Lynkforge
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-[1rem] leading-relaxed text-slate-600 dark:text-[#94a3b8] sm:mx-0">
          A URL shortener with analytics tuned for clarity — spacing you can trust,
          blue accents where they count, and themes that stay tasteful whether the
          room is lit or dark.
        </p>
      </motion.div>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px 0px" }}
        className="grid gap-5 sm:grid-cols-2 sm:gap-6"
      >
        {blocks.map(({ Icon, title, body, iconBg }) => (
          <motion.div
            key={title}
            variants={staggerChild}
            className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-soft dark:border-white/[0.1] dark:bg-[rgb(21_31_53)] dark:shadow-[inset_0_1px_0_rgb(255_255_255_/_0.04)]"
          >
            <div
              className={`flex size-14 shrink-0 items-center justify-center rounded-xl ${iconBg}`}
            >
              <Icon className="size-6 stroke-current" aria-hidden strokeWidth={1.85} />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-[#0f172a] dark:text-[#f8fafc]">
                {title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#94a3b8]">{body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutPage;
