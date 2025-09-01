import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const [showBlueprint, setShowBlueprint] = useState(false);

  const designPhases = [
    {
      title: "Vision Crafting",
      subtitle: "Translating your personality into spatial design",
      icon: "✨",
      visual: (
        <div className="relative w-64 h-48 flex items-center justify-center">
          <div className={`absolute w-40 h-40 border-2 border-white/30 transition-all duration-500 ${progress > 10 ? 'opacity-100 rotate-45' : 'opacity-0 rotate-0'}`}></div>
          <div className={`absolute w-40 h-40 border-2 border-white/30 transition-all duration-700 ${progress > 15 ? 'opacity-100 -rotate-45' : 'opacity-0 rotate-0'}`}></div>
          <div className={`absolute text-4xl transition-opacity duration-300 ${progress > 20 ? 'opacity-100' : 'opacity-0'}`}>💡</div>
        </div>
      )
    },
    {
      title: "Innovative Design",
      subtitle: "Blending aesthetics with cutting-edge functionality",
      icon: "✏️",
      visual: (
        <div className="relative w-64 h-48">
          <div className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${progress > 30 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 bg-white/10 backdrop-blur-sm border border-white/20"></div>
            <div className="absolute top-1/2 left-1/4 w-1/4 h-1/4 bg-white/10 backdrop-blur-sm border border-white/20"></div>
            <div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-white/10 backdrop-blur-sm border border-white/20"></div>
          </div>
          <div className={`absolute top-0 left-0 w-full h-full transition-all duration-700 delay-200 ${progress > 40 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 bg-gradient-to-br from-blue-400/30 to-purple-400/30 backdrop-blur-sm"></div>
            <div className="absolute top-1/2 left-1/4 w-1/4 h-1/4 bg-gradient-to-br from-amber-400/30 to-red-400/30 backdrop-blur-sm"></div>
          </div>
        </div>
      )
    },
    {
      title: "Precision Crafting",
      subtitle: "Meticulous execution with premium materials",
      icon: "🛠️",
      visual: (
        <div className="relative w-64 h-48 flex items-end justify-center">
          <div className={`absolute bottom-0 w-40 h-32 transition-all duration-500 ${progress > 50 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-full h-full bg-gradient-to-b from-stone-700/80 to-stone-900/90 border-t border-stone-600/50">
              <div className={`absolute top-4 left-4 w-8 h-8 bg-blue-400/20 border border-blue-400/40 transition-all duration-300 ${progress > 60 ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`absolute top-4 right-4 w-8 h-8 bg-amber-400/20 border border-amber-400/40 transition-all duration-500 ${progress > 65 ? 'opacity-100' : 'opacity-0'}`}></div>
              <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-stone-600/50 border-t border-stone-500/50 transition-all duration-700 ${progress > 70 ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Final Touches",
      subtitle: "Perfecting every detail to exceed expectations",
      icon: "🎨",
      visual: (
        <div className="relative w-64 h-48 flex items-center justify-center">
          <div className={`absolute w-48 h-48 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm transition-all duration-500 ${progress > 80 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
          <div className={`absolute text-5xl transition-all duration-300 ${progress > 85 ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}>✨</div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 0.5;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        
        // Show blueprint during initial phase
        if (newProgress > 5 && !showBlueprint) {
          setShowBlueprint(true);
        }
        
        // Rotate through phases every 25% progress
        const newPhase = Math.floor(newProgress / 25);
        if (newPhase !== activePhase) {
          setActivePhase(newPhase);
        }
        
        return newProgress;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete, activePhase, showBlueprint]);

  const currentPhase = designPhases[activePhase % designPhases.length];

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 to-stone-900 text-white flex flex-col items-center justify-center px-4 py-8 md:px-12 md:py-16 overflow-hidden">
      {/* Animated blueprint background (subtle) */}
      {showBlueprint && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"></div>
        </div>
      )}
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
        {/* Logo/Title area */}
        <div className="mb-8 text-center">
          <div className="text-2xl md:text-3xl font-light tracking-widest mb-1">NIVUZZ</div>
          <div className="text-xs md:text-sm tracking-widest opacity-70">DESIGN & BUILD</div>
        </div>
        
        {/* Phase visualization */}
        <div className="w-full h-48 md:h-64 mb-8 flex items-center justify-center">
          {currentPhase.visual}
        </div>
        
        {/* Phase info */}
        <div className="text-center mb-8 transition-all duration-300">
          <div className="text-xl md:text-2xl font-medium flex items-center justify-center">
            <span className="mr-3 text-2xl">{currentPhase.icon}</span>
            {currentPhase.title}
          </div>
          <div className="text-sm md:text-base opacity-80 mt-2">{currentPhase.subtitle}</div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full max-w-md mb-2">
          <div className="w-full h-px bg-white/20 mb-1">
            <div 
              className="h-px bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-100 ease-linear" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs opacity-60">
            <span>CONCEPT</span>
            <span>DEVELOPMENT</span>
            <span>EXECUTION</span>
            <span>COMPLETION</span>
          </div>
        </div>
        
        {/* Percentage */}
        <div className="text-3xl font-light tracking-tighter mt-4">
          {Math.round(progress)}<span className="text-xl opacity-70">%</span>
        </div>
      </div>
      
     
    </div>
  );
};