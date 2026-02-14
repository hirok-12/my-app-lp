"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 glass h-16"
    >
      <div className="flex items-center gap-2">
        <div className="bg-primary p-1.5 rounded-lg">
          <Zap className="w-5 h-5 text-white fill-white" />
        </div>
        <span className="text-xl font-bold tracking-tight">NovaStream</span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <Link
          href="#features"
          className="hover:text-foreground transition-colors"
        >
          Features
        </Link>
        <Link href="#about" className="hover:text-foreground transition-colors">
          About
        </Link>
        <Link
          href="#pricing"
          className="hover:text-foreground transition-colors"
        >
          Pricing
        </Link>
        <Link href="#faq" className="hover:text-foreground transition-colors">
          FAQ
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="text-sm font-medium hover:text-foreground transition-colors">
          Login
        </button>
        <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20">
          Get Started
        </button>
      </div>
    </motion.header>
  );
}
