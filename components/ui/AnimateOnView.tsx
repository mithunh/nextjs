"use client";

import { ReactNode, Children, isValidElement, cloneElement } from "react";
import { motion } from "motion/react";

type AnimateOnViewProps = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number; // only used for multiple children
};

export const AnimateOnView = ({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  distance = 20,
  stagger = 0.15,
}: AnimateOnViewProps) => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "up":
      y = distance;
      break;
    case "down":
      y = -distance;
      break;
    case "left":
      x = distance;
      break;
    case "right":
      x = -distance;
      break;
  }

  // Check if multiple children
  const childArray = Children.toArray(children);

  if (childArray.length > 1) {
    // Multiple children: stagger animation
    return (
      <>
        {Children.map(childArray, (child, index) => {
          if (isValidElement(child)) {
            return (
              <motion.div
                initial={{ opacity: 0, x, y }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration,
                  delay: delay + index * stagger,
                  ease: "easeOut",
                }}
              >
                {cloneElement(child)}
              </motion.div>
            );
          }
          return child;
        })}
      </>
    );
  }

  // Single child: simple fade-in
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
export default AnimateOnView;