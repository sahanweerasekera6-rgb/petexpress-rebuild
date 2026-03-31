"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-12 flex flex-col gap-4",
        {
          "text-left items-start": alignment === "left",
          "text-center items-center mx-auto": alignment === "center",
          "text-right items-end": alignment === "right",
        },
        className
      )}
    >
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-black">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>
      )}
      <div className="h-1.5 w-16 bg-brand-red mt-2" />
    </motion.div>
  );
}
