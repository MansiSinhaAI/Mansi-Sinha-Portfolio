"use client";

import { motion } from "framer-motion";

type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-skyglass-100">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-lavender-300 via-skyglass-300 to-mint-300"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
