"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with Glows */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 inline-block">
            Next Generation Platform
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
            Build Faster. <br />
            <span className="text-gradient">Scale Smarter.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12">
            The all-in-one platform for modern development teams. Streamline
            your workflow with our advanced orchestration engine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/30">
              Start Building Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto glass hover:bg-white/5 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="glass rounded-2xl p-2 aspect-video overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            <div className="w-full h-full bg-zinc-900 rounded-xl flex items-center justify-center border border-white/5">
              {/* Mock Dashboard Content */}
              <div className="grid grid-cols-12 gap-4 w-full h-full p-8 opacity-50">
                <div className="col-span-3 space-y-4">
                  <div className="h-8 bg-white/10 rounded w-3/4" />
                  <div className="h-4 bg-white/5 rounded w-1/2" />
                  <div className="h-4 bg-white/5 rounded w-2/3" />
                </div>
                <div className="col-span-9 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                </div>
              </div>
            </div>
          </div>
          {/* Subtle Glow behind the dashboard */}
          <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}
