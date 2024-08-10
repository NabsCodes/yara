import { motion, useScroll } from "framer-motion";
import React from "react";

function ScrollBar() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 top-0 z-50 h-[5px] w-full origin-left bg-[#7854F7]"
      />
    </>
  );
}

export default ScrollBar;
