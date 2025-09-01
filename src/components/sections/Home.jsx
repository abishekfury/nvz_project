import logo from "../../assets/logo.jpg";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-stone-950"
    >
      {/* Architectural Grid System */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:48px_48px]" />

        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[0, 20, 40, 60, 80].map((x, i) => (
              <path
                key={i}
                d={`M${x},100 L100,${x}`}
                stroke="#d4a017"
                strokeWidth="0.15"
                strokeDasharray="1,0.5"
              />
            ))}
          </svg>
        </div>

        <div className="absolute inset-0 overflow-hidden opacity-3">
          <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_60deg,#d4a01710_120deg,transparent_180deg)] animate-rotate-slow transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Floating Architecture Elements - Hidden on mobile */}
      <div className="absolute top-20 left-10 w-32 h-32 border-t border-r border-amber-400/10 transform rotate-45 opacity-30 hidden lg:block" />
      <div className="absolute bottom-28 right-16 w-48 h-48 border-b border-l border-amber-400/15 transform -rotate-12 opacity-25 hidden lg:block" />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-amber-400/5 transform rotate-15 opacity-20 hidden md:block" />

      {/* Subtle Texture */}
      <div className="absolute inset-0 z-0 opacity-3 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall-3.png')]" />

      {/* Light Beams - Adjusted for mobile */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 rounded-full bg-amber-600/3 blur-3xl" />
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4 relative w-full max-w-[90vw] md:max-w-2xl mx-auto">
          {/* Logo with effects */}
          <div className="mb-6 sm:mb-10 transform perspective-1000">
            <div className="relative w-32 sm:w-40 md:w-52 lg:w-64 mx-auto mb-4 sm:mb-6 group">
              <img
                src={logo}
                alt="Nivuzz Logo"
                className="w-full h-auto object-contain rounded-md shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full blur-2xl opacity-20 bg-amber-400/40 scale-110 -z-10" />
            </div>

            {/* Design Line */}
            <div className="relative inline-block">
              <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-amber-400/70 font-medium relative 
                before:absolute before:-left-5 sm:before:-left-7 before:top-1/2 before:w-4 sm:before:w-6 before:h-px 
                before:bg-gradient-to-r before:from-transparent before:to-amber-400/40 
                after:absolute after:-right-5 sm:after:-right-7 after:top-1/2 after:w-4 sm:after:w-6 after:h-px 
                after:bg-gradient-to-l after:from-transparent after:to-amber-400/40">
                NIVUZZ DESIGN & BUILD
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="relative mx-auto mb-8 sm:mb-12">
            <div className="absolute -left-10 top-0 h-full w-px bg-gradient-to-b from-transparent via-amber-400/10 to-transparent hidden lg:block" />
            <p className="text-stone-300 text-sm sm:text-lg md:text-xl font-light leading-relaxed sm:leading-relaxed text-center">
              At <span className="font-medium text-white">Nivuzz</span>, we don't just design spaces — 
              we <span className="text-amber-400">shape experiences</span>. Every line, material, and detail 
              is guided by <span className="italic text-amber-300">your vision</span>, grounded in 
              <span className="text-amber-400"> craftsmanship</span>, and elevated by our 
              <span className="font-medium text-white"> passion for innovation</span>.
            </p>
            <div className="absolute -right-10 top-0 h-full w-px bg-gradient-to-b from-transparent via-amber-400/10 to-transparent hidden lg:block" />
          </div>

          {/* CTA Buttons - Stacked on mobile */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="relative bg-amber-600/90 text-stone-900 hover:text-stone-950 py-2 sm:py-3 px-6 sm:px-8 font-medium transition-all duration-300 
              hover:bg-amber-500 hover:shadow-lg group overflow-hidden rounded-sm text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                VIEW WORKS
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-700/50 group-hover:h-1 group-hover:bg-amber-500 transition-all duration-300" />
            </a>

            <a
              href="#contact"
              className="relative bg-stone-800/60 text-white py-2 sm:py-3 px-6 sm:px-8 font-medium transition-all duration-300
              border border-stone-600/30 hover:border-stone-500/50 hover:bg-stone-700/70 hover:shadow-lg group overflow-hidden rounded-sm text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                START A PROJECT
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-stone-700/50 to-stone-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-amber-400/30 group-hover:h-[2px] group-hover:bg-amber-400/60 transition-all duration-300" />
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Scale & Footer Effects */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-4 z-10">
        <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
        <span className="text-[0.6rem] xs:text-xs text-amber-400/40 tracking-widest font-mono">ESTABLISHED 2023</span>
        <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent via-amber-400/30 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent z-0" />
    </section>
  );
};