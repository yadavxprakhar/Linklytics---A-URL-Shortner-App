import { useState } from "react";
import Graph from "./Graph";
import { motion } from "framer-motion";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useFetchMyShortUrls, useFetchTotalClicks } from "../../hooks/useQuery";
import ShortenPopUp from "./ShortenPopUp";
import { Link2 } from "lucide-react";
import ShortenUrlList from "./ShortenUrlList";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { fadeUpMountProps, tapScale } from "../../utils/motionVariants";

const DashboardLayout = () => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const [shortenPopUp, setShortenPopUp] = useState(false);

  const { isLoading, data: myShortenUrls, refetch } = useFetchMyShortUrls(
    token,
    onError
  );

  const { isLoading: loader, data: totalClicks } = useFetchTotalClicks(
    token,
    onError
  );

  function onError() {
    navigate("/error");
  }

  return (
    <div className="lx-page-inner lx-dashboard-shell">
      {loader ? (
        <Loader />
      ) : (
        <div className="space-y-14">
          <motion.header {...fadeUpMountProps(0.03)} className="space-y-2">
            <h1 className="text-[1.85rem] font-extrabold tracking-tight text-lx-foreground sm:text-[2rem]">
              Dashboard
            </h1>
            <p className="max-w-prose text-[0.9375rem] leading-relaxed text-lx-muted">
              Monitor clicks over time and manage shortcuts.
            </p>
          </motion.header>

          <motion.div {...fadeUpMountProps(0.08)} className="relative">
            <div className="lx-card relative min-h-[23rem] overflow-hidden p-5 sm:min-h-[25rem] sm:p-8">
              {totalClicks.length === 0 && (
                <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
                  <p className="text-base font-semibold text-lx-foreground sm:text-lg">
                    No data for this period
                  </p>
                  <p className="mt-2 max-w-md text-[0.9375rem] text-lx-muted">
                    Share shortcuts to populate daily totals.
                  </p>
                </div>
              )}
              <Graph graphData={totalClicks} />
            </div>
          </motion.div>

          <motion.div
            {...fadeUpMountProps(0.1)}
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-[0.9375rem] text-lx-muted">
              {(myShortenUrls?.length ?? 0) > 0
                ? `${myShortenUrls.length} short link${myShortenUrls.length === 1 ? "" : "s"}`
                : "No links yet"}
            </p>
            <motion.button
              type="button"
              className="lx-btn-primary self-start sm:self-auto"
              onClick={() => setShortenPopUp(true)}
              {...tapScale}
            >
              Create short URL
            </motion.button>
          </motion.div>

          <div>
            {!isLoading && (myShortenUrls?.length ?? 0) === 0 ? (
              <motion.div
                {...fadeUpMountProps(0.12)}
                className="lx-card flex flex-col items-center justify-center gap-4 px-8 py-20 text-center"
              >
                <Link2
                  className="size-9 text-blue-600 dark:text-blue-400"
                  aria-hidden
                />
                <p className="text-base font-semibold text-lx-foreground">
                  You haven&apos;t created a short link yet
                </p>
                <p className="max-w-md text-[0.9375rem] leading-relaxed text-lx-muted">
                  Use the button above to paste a URL and copy your first
                  Lynkforge link.
                </p>
              </motion.div>
            ) : (
              <ShortenUrlList data={myShortenUrls} />
            )}
          </div>
        </div>
      )}

      <ShortenPopUp
        refetch={refetch}
        open={shortenPopUp}
        setOpen={setShortenPopUp}
      />
    </div>
  );
};

export default DashboardLayout;
