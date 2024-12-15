import { motion } from "motion/react";
import { ReactNode } from "react";

export const FadeInOutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      exit={{
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
};
