import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface FadeInUpProps {
  children: React.ReactElement;
  duration?: number;
  easing?: number[];
}



const FadeInUp = ({
    children,
    duration = 2,
    easing = [0,.48,.12,.98]
  }:FadeInUpProps) => {

    const transition = useMemo(
      () => ({
        duration,
        ease: easing
      }),
      [duration, easing]
    );
  
    const variants = {
      hidden: {
        opacity: 0,
        y: 50,
        transition
      },
      show: {
        opacity: 1,
        y: 0,
        transition
      }
    };
  
    return (
      <motion.div
        initial={"hidden"}
        animate={"show"}
        variants={variants}
    >
      {children}
    </motion.div>
    );
};

export default FadeInUp;