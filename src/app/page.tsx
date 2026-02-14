import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Features />

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 -z-10" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to transform Your flow?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                Join 10,000+ developers shipping faster than ever before. Start
                your free 14-day trial today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto">
                  Get Started for Free
                </button>
                <button className="glass hover:bg-white/5 px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
