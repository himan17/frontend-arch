import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

const Block: React.FC<{ className: string; children: React.ReactNode }> = ({
  className,
  ...rest
}) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge("rounded-lg border p-6", className)}
      {...rest}
    />
  );
};

export const Card: React.FC<{
  children: React.ReactNode;
  bgColor?: string;
  borderColor?: string;
}> = ({ children, bgColor, borderColor }) => (
  <Block
    className={`${bgColor ? bgColor : "bg-zinc-800"} ${
      borderColor ? borderColor : "border-zinc-700"
    }`}
  >
    {children}
  </Block>
);
