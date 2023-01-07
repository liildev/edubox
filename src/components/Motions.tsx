import { motion } from "framer-motion";
import { textContainer, mainVariant } from "../utils/motion";
import { IMotionEl, IMotionHeading } from "../types";

const MotionHeading = ({ title, textStyles }: IMotionHeading) => {
  return (
    <motion.h3 variants={textContainer} className={textStyles}>
      {Array.from(title).map((letter, index) => (
        <motion.span variants={mainVariant} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h3>
  );
};

const MotionTitle = ({ children, ...props }:IMotionEl) => {
  return (
    <motion.h2 variants={mainVariant} {...props}>
      {children}
    </motion.h2>
  );
};

const MotionDesc = ({ children, ...props }: IMotionEl) => {
  return (
    <motion.p
      transition={{ duration: 1 }}
      whileInView={{ opacity: [0, 1] }}
      {...props}
    >
      {children}
    </motion.p>
  );
};

const MotionDiv = ({ children, ...props }: IMotionEl) => {
  return (
    <motion.div variants={mainVariant} {...props}>
      {children}
    </motion.div>
  );
};

export { MotionHeading, MotionTitle, MotionDesc, MotionDiv };
