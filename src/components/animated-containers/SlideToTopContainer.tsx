import { motion } from "motion/react";
import { ReactNode } from "react";

export const SlideToTopContainer = ({
  children,
  delay,
}: {
  children: ReactNode;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{
        transform: "translateY(2px)",
        opacity: 0,
      }}
      animate={{
        transform: "translateY(0px)",
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      exit={{
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
};
