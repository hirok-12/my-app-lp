"use client";

import { motion } from "framer-motion";
import { Shield, Rocket, Cpu, Globe, Layers, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Instant Deployment",
    description:
      "Push to main and we handle the rest. Zero-downtime deployments globally in seconds.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description:
      "Built-in DDoS protection, automatic SSL, and end-to-end encryption for all your data.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Auto-Scaling",
    description:
      "Handle millions of requests without breaking a sweat. Our platform scales with your growth.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Edge Network",
    description:
      "Deliver content from over 300 locations worldwide for the lowest possible latency.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Flexible Stack",
    description:
      "Connect your favorite frameworks and tools with our unified API and plugin system.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Real-time Metrics",
    description:
      "Deep insights into every request. Monitor performance and errors in real-time.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Powering the <span className="text-gradient">Future</span> of Dev
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to build, deploy, and scale high-performance
            applications on the web.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6 p-3 bg-primary/10 rounded-xl w-fit text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
