import { LoaderIcon, MessageCircle, VideoIcon, Sparkles } from "lucide-react";

function ChatLoader() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-4 bg-base-100">
      {/* Main loader container with enhanced design */}
      <div className="relative mb-8">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full scale-150 animate-pulse" />
        
        {/* Animated orbit rings */}
        <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow" />
        <div className="absolute inset-2 border-2 border-secondary/30 rounded-full animate-spin-slow-reverse" />
        
        {/* Central loader with gradient border */}
        <div className="relative p-8 rounded-2xl bg-base-100 border border-base-300 shadow-lg backdrop-blur-sm">
          {/* Rotating gear-like loader */}
          <div className="relative">
            <LoaderIcon className="animate-spin size-12 text-primary" />
            <Sparkles className="absolute -top-1 -right-1 size-4 text-secondary animate-pulse" />
          </div>
        </div>

        {/* Orbiting icons with enhanced design */}
        <div className="absolute -top-6 -left-6 p-3 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg animate-bounce">
          <MessageCircle className="size-6 text-primary-content" />
          <div className="absolute -top-1 -right-1 size-2 bg-accent rounded-full animate-ping" />
        </div>
        
        <div className="absolute -bottom-4 -right-4 p-3 rounded-2xl bg-gradient-to-br from-secondary to-accent shadow-lg animate-bounce" style={{ animationDelay: '0.3s' }}>
          <VideoIcon className="size-6 text-secondary-content" />
          <div className="absolute -top-1 -right-1 size-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
        </div>

        {/* Additional floating elements */}
        <div className="absolute top-2 -right-8 p-2 rounded-full bg-accent/20 backdrop-blur-sm">
          <div className="size-3 bg-accent rounded-full animate-pulse" />
        </div>
        
        <div className="absolute -bottom-8 left-4 p-2 rounded-full bg-primary/20 backdrop-blur-sm">
          <div className="size-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>

      {/* Enhanced text content */}
      <div className="text-center space-y-4">
        <p className="text-xl font-semibold text-base-content bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Connecting to chat...
        </p>
        
        {/* Animated progress bar */}
        <div className="w-48 h-1 bg-base-300 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent animate-progress" />
        </div>
      </div>

      {/* Enhanced dots animation */}
      <div className="mt-8 flex space-x-3">
        <div className="size-3 bg-primary rounded-full animate-bounce" />
        <div className="size-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
        <div className="size-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="size-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
      </div>

      {/* Connection status */}
      <p className="mt-6 text-sm text-base-content/60 font-mono animate-pulse">
        Establishing secure connection...
      </p>
    </div>
  );
}

export default ChatLoader;