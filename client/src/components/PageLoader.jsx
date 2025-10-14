import { LoaderIcon, Sparkles } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

const PageLoader = () => {
  const { theme } = useThemeStore();
  
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-base-100 transition-colors duration-300"
      data-theme={theme}
    >
      {/* Main loader container */}
      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-150 animate-pulse" />
        
        {/* Orbiting rings */}
        <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-spin-slow" />
        <div className="absolute -inset-6 border-2 border-secondary/30 rounded-full animate-spin-slow-reverse" />
        
        {/* Central loader with enhanced design */}
        <div className="relative p-6 rounded-2xl bg-base-100/80 backdrop-blur-sm border border-base-300 shadow-lg">
          <div className="relative">
            <LoaderIcon className="animate-spin size-12 text-primary" />
            {/* Sparkle accent */}
            <Sparkles className="absolute -top-1 -right-1 size-4 text-secondary animate-pulse" />
          </div>
        </div>
        
        {/* Floating dots */}
        <div className="absolute -top-2 -left-2 size-4 bg-accent rounded-full animate-bounce" />
        <div className="absolute -bottom-2 -right-2 size-4 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
        <div className="absolute -top-2 -right-2 size-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.6s' }} />
        <div className="absolute -bottom-2 -left-2 size-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.9s' }} />
      </div>

      {/* Loading text with gradient */}
      <div className="mt-8 text-center space-y-4">
        <p className="text-lg font-semibold text-base-content bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Loading...
        </p>
        
        {/* Animated progress dots */}
        <div className="flex justify-center space-x-2">
          <div className="size-2 bg-primary rounded-full animate-bounce" />
          <div className="size-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="size-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>

      {/* Theme indicator */}
      <div className="mt-6 px-3 py-1 rounded-full bg-base-200 border border-base-300">
        <span className="text-xs text-base-content/60 font-medium">
          {theme} theme
        </span>
      </div>
    </div>
  );
};

export default PageLoader;