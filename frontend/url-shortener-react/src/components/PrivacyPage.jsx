import { motion } from "framer-motion";
import { fadeUpMountProps } from "../utils/motionVariants";

const PrivacyPage = () => {
  return (
    <div className="lx-page-inner lx-page-narrow lx-section-y">
      <motion.div {...fadeUpMountProps(0.04)} className="lx-card rounded-2xl p-10 sm:p-12">
        <h1 className="text-[1.875rem] font-extrabold tracking-tight text-[#0f172a] sm:text-[2.125rem] dark:text-[#f8fafc]">
          Privacy <span className="lx-text-brand-gradient">policy</span>
        </h1>
        <p className="mt-7 text-[0.9375rem] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
          This Privacy Policy explains how Lynkforge (“we”, “us”, “our”) handles
          information when you use our URL shortening and analytics service.
        </p>

        <div className="mt-10 space-y-8 text-[0.9375rem] leading-relaxed text-slate-600 dark:text-[#94a3b8]">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc]">
              What we collect
            </h2>
            <p>
              We collect only the information needed to operate Lynkforge and
              provide analytics. This may include:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Account information you provide (such as username and email
                address).
              </li>
              <li>
                Link data you create (the original URL you submit and the short
                link we generate).
              </li>
              <li>
                Basic usage and analytics data (for example, click counts and
                timestamps) to show performance trends.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc]">
              What we don’t collect
            </h2>
            <p>
              We do not intentionally collect or store sensitive personal
              information (such as government IDs, banking details, or payment
              card data) as part of the product experience.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc]">
              Sharing with third parties
            </h2>
            <p>
              We do not sell your personal information. We do not share your
              data with third parties for advertising or marketing purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc]">
              Security
            </h2>
            <p>
              We take reasonable measures to protect the information we process.
              However, no method of transmission or storage is 100% secure. If
              you believe your account has been compromised, contact us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-[#f8fafc]">
              Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we’ll update this page to reflect the latest version.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPage;
