import { motion } from "framer-motion";
import ShortenItem from "./ShortenItem";
import { staggerChild, staggerParent } from "../../utils/motionVariants";

const ShortenUrlList = ({ data }) => {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      animate="show"
      className="my-8 flex flex-col gap-6"
    >
      {data.map((item) => (
        <motion.div key={item.id} variants={staggerChild} layout={false}>
          <ShortenItem {...item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ShortenUrlList;
