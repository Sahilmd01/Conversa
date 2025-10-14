import { useState } from "react";
import { ShipWheelIcon, Eye, EyeOff, Users, MessageCircle, Globe, Star, Lock, Mail, User, Sparkles, MessageSquare, Languages, Globe2 } from "lucide-react";
import { Link } from "react-router";
import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState({ fullName: false, email: false, password: false });
  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  const features = [
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Global Community",
      description: "Connect with learners from 150+ countries",
      color: "from-blue-500 to-cyan-500",
      stat: "50K+ Users"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Real Conversations",
      description: "Practice with native speakers daily",
      color: "from-purple-500 to-pink-500",
      stat: "1M+ Chats"
    },
    {
      icon: <Languages className="w-6 h-6" />,
      title: "120+ Languages",
      description: "From Spanish to Japanese and beyond",
      color: "from-orange-500 to-yellow-500",
      stat: "120+ Languages"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/30 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-40 animate-float-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-40 animate-float-slow delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-float-slow delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Enhanced Signup Form */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-md">
              {/* Mobile Header */}
              <div className="text-center mb-8 lg:hidden">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-2xl shadow-lg">
                      <ShipWheelIcon className="size-8 text-white" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Conversa
                    </span>
                    <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">
                  Join Conversa
                </h1>
                <p className="text-slate-600 text-lg">
                  Start your language journey today
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-2xl rounded-3xl border border-white/70 shadow-2xl shadow-blue-100/50 p-8 lg:p-10 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500">
                {/* Desktop Header */}
                <div className="hidden lg:block text-center mb-10">
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                      <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-2xl shadow-lg">
                        <ShipWheelIcon className="size-8 text-white" />
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                       Conversa
                      </span>
                      <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
                    <p className="text-slate-600 text-lg">Start your language learning adventure</p>
                  </div>
                </div>

                {error && (
                  <div className="mb-8 p-4 bg-red-50/80 border border-red-200 rounded-2xl backdrop-blur-sm animate-shake">
                    <div className="flex items-center gap-3 text-red-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">{error.response?.data?.message || "Signup failed"}</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSignup} className="space-y-7">
                  <div className="space-y-5">
                    {/* Full Name Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 px-1">Full Name</label>
                      <div className="relative group">
                        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl transition-all duration-500 ${isFocused.fullName ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}></div>
                        <div className="relative flex items-center">
                          <User className={`absolute left-4 w-5 h-5 transition-all duration-300 ${isFocused.fullName ? 'text-cyan-500 scale-110' : 'text-slate-400'}`} />
                          <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full pl-12 pr-4 py-4 bg-white/70 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 backdrop-blur-sm"
                            value={signupData.fullName}
                            onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                            onFocus={() => setIsFocused({ ...isFocused, fullName: true })}
                            onBlur={() => setIsFocused({ ...isFocused, fullName: false })}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 px-1">Email Address</label>
                      <div className="relative group">
                        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl transition-all duration-500 ${isFocused.email ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}></div>
                        <div className="relative flex items-center">
                          <Mail className={`absolute left-4 w-5 h-5 transition-all duration-300 ${isFocused.email ? 'text-cyan-500 scale-110' : 'text-slate-400'}`} />
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-12 pr-4 py-4 bg-white/70 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 backdrop-blur-sm"
                            value={signupData.email}
                            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                            onFocus={() => setIsFocused({ ...isFocused, email: true })}
                            onBlur={() => setIsFocused({ ...isFocused, email: false })}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 px-1">Password</label>
                      <div className="relative group">
                        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl transition-all duration-500 ${isFocused.password ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}></div>
                        <div className="relative flex items-center">
                          <Lock className={`absolute left-4 w-5 h-5 transition-all duration-300 ${isFocused.password ? 'text-cyan-500 scale-110' : 'text-slate-400'}`} />
                          <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            className="w-full pl-12 pr-12 py-4 bg-white/70 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all duration-300 backdrop-blur-sm"
                            value={signupData.password}
                            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                            onFocus={() => setIsFocused({ ...isFocused, password: true })}
                            onBlur={() => setIsFocused({ ...isFocused, password: false })}
                            required
                            minLength={6}
                          />
                          <button
                            type="button"
                            className="absolute right-4 p-1 text-slate-400 hover:text-cyan-500 transition-all duration-200 hover:scale-110"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 px-1">
                        Password must be at least 6 characters long
                      </p>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start space-x-3 p-3 bg-slate-50/80 rounded-xl border border-slate-200/60">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 w-4 h-4 text-cyan-600 bg-white border-slate-300 rounded focus:ring-cyan-500 focus:ring-2"
                      />
                      <label className="text-sm text-slate-700">
                        I agree to the{" "}
                        <span className="text-cyan-600 hover:text-cyan-500 font-medium cursor-pointer hover:underline">
                          Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="text-cyan-600 hover:text-cyan-500 font-medium cursor-pointer hover:underline">
                          Privacy Policy
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    {isPending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <>
                        <span>Join Conversa</span>
                        <div className="w-1 h-1 bg-white rounded-full group-hover:animate-ping"></div>
                      </>
                    )}
                  </button>
                </form>

                {/* Sign In Link */}
                <div className="mt-8 text-center">
                  <p className="text-slate-600">
                    Already have an account?{" "}
                    <Link 
                      to="/login" 
                      className="text-cyan-600 hover:text-cyan-500 font-semibold transition-all duration-200 inline-flex items-center gap-2 group"
                    >
                      Sign in
                      <div className="w-1 h-1 bg-cyan-500 rounded-full group-hover:animate-bounce"></div>
                    </Link>
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 pt-8 border-t border-slate-200/60">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-slate-900 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">50K+</div>
                      <div className="text-sm text-slate-600 font-medium">Active Users</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">120+</div>
                      <div className="text-sm text-slate-600 font-medium">Languages</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">1M+</div>
                      <div className="text-sm text-slate-600 font-medium">Conversations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Hero Section */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-2xl space-y-12">
              {/* Main Hero Content */}
              <div className="text-center lg:text-left space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 shadow-lg text-slate-700 text-sm font-medium mb-6">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    Join 50,000+ language learners worldwide
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                    Start Your
                    <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                      Language Journey
                    </span>
                  </h1>
                </div>
                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                  Join our global community and start speaking confidently from day one. 
                  Connect with native speakers and make real progress.
                </p>
              </div>

              {/* Interactive Demo Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl p-8 border border-white/60 backdrop-blur-sm shadow-2xl shadow-blue-200/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((item) => (
                        <div 
                          key={item}
                          className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-2 border-white shadow-lg"
                        ></div>
                      ))}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-800">New learners joining</div>
                      <div className="text-xs text-slate-600">Welcome to our community!</div>
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 rounded-full">
                      <span className="text-green-600 text-sm font-medium">+24 Today</span>
                    </div>
                  </div>
                  
                  {/* Welcome Demo */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                      <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm">
                        <p className="text-slate-700">Welcome to Conversa! Ready to start learning?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl rounded-tr-none p-4 shadow-sm">
                        <p className="text-white">Yes! Excited to begin my language journey! 🎉</p>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex-shrink-0"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full shadow-lg"></div>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 hover:border-blue-200 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-blue-100/30"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-xl`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm mb-3 leading-relaxed">{feature.description}</p>
                    <div className="text-xs font-semibold text-slate-500 bg-slate-100 rounded-full px-3 py-1 inline-block">
                      {feature.stat}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg italic mb-6 leading-relaxed">
                    "I was nervous about speaking at first, but the friendly community made it so easy! 
                    In just 2 months, I'm having real conversations in French."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg"></div>
                    <div>
                      <p className="text-slate-900 font-bold text-lg">Alex Rodriguez</p>
                      <p className="text-slate-500">Started learning French 2 months ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SignUpPage;