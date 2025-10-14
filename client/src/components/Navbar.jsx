import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { 
  BellIcon, 
  LogOutIcon, 
  ShipWheelIcon, 
  MenuIcon, 
  XIcon, 
  HomeIcon, 
  UsersIcon, 
  SparklesIcon,
  HelpCircleIcon,
  ShieldIcon,
  BookOpenIcon,
  StarIcon,
  ContactIcon,
  WholeWordIcon
} from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";
import { useState } from "react";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { logoutMutation } = useLogout();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check if we should show desktop navbar (only when sidebar is not present)
  // Typically, sidebar is hidden on chat pages and mobile
  const shouldShowDesktopNavbar = !isChatPage;

  // Clean 3D styles
  const clean3DStyle = "transform transition-all duration-300 hover:translate-y-[-1px] active:translate-y-[0px] shadow-lg hover:shadow-xl";
  const glassBackground = "bg-base-100/80 backdrop-blur-md border border-white/5";
  const cleanHover = "hover:bg-base-200/60 hover:border-white/10";
  
  // Navigation items - only the specified ones
  const mainNavItems = [
    { path: "/", icon: HomeIcon, label: "Home" },
    { path: "/friends", icon: UsersIcon, label: "Friends" },
    { path: "/notifications", icon: BellIcon, label: "Notifications" },
  ];

  const supportNavItems = [
    { path: "/about", icon: WholeWordIcon, label: "About Us" },
    { path: "/help", icon: HelpCircleIcon, label: "Help & Support" },
    { path: "/privacy", icon: ShieldIcon, label: "Privacy Policy" },
    { path: "/terms", icon: BookOpenIcon, label: "Terms of Service" },
    { path: "/contact", icon: ContactIcon, label: "Contact us" },
    { path: "/feedback", icon: StarIcon, label: "Send Feedback" },
  ];

  // Subtle gradient overlay
  const SubtleGradient = () => (
    <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-[inherit] pointer-events-none" />
  );

  // Minimal texture
  const MinimalTexture = () => (
    <div className="absolute inset-0 opacity-[0.01] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:12px_12px] pointer-events-none rounded-[inherit]" />
  );

  const NavItem = ({ item, isActive, onClick }) => {
    const Icon = item.icon;
    return (
      <Link 
        to={item.path} 
        className={`
          flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 
          ${clean3DStyle} ${glassBackground} ${cleanHover} relative overflow-hidden group
          ${isActive ? "bg-primary/10 border-primary/20" : ""}
        `}
        onClick={onClick}
      >
        <div className={`
          p-1.5 rounded-md transition-all duration-300
          ${isActive ? "bg-primary/10" : "bg-base-100/50 group-hover:bg-base-200"}
        `}>
          <Icon className={`
            size-5 transition-all duration-300
            ${isActive ? "text-primary scale-105" : "text-base-content/70 group-hover:text-base-content group-hover:scale-105"}
          `} />
        </div>
        <span className={`
          font-semibold transition-all duration-300
          ${isActive ? "text-primary" : "text-base-content"}
        `}>
          {item.label}
        </span>
        <SubtleGradient />
        <MinimalTexture />
      </Link>
    );
  };

  return (
    <>
      {/* Show navbar only in mobile OR when sidebar is not present (like on chat pages) */}
      <nav className={`bg-base-100/70 backdrop-blur-md border-b border-base-300/30 sticky top-0 z-50 h-16 flex items-center shadow-sm ${
        shouldShowDesktopNavbar ? 'lg:hidden' : ''
      }`}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between w-full">
            
            {/* Logo Section - Always show on mobile */}
            <div className="flex items-center">
              {/* Mobile Logo */}
              <div className="flex lg:hidden items-center">
                <Link 
                  to="/" 
                  className={`flex items-center gap-3 group transition-all duration-300 ${clean3DStyle} p-2 rounded-2xl ${glassBackground} ${cleanHover} relative overflow-hidden`}
                >
                  <div className="relative">
                    <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                      <ShipWheelIcon className="size-5 text-primary-content" />
                    </div>
                    <SparklesIcon className="absolute -top-1 -right-1 size-3 text-yellow-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-tight">
                      Conversa
                    </span>
                    <span className="text-[10px] text-base-content/50 font-medium tracking-wide">PRO</span>
                  </div>
                  <SubtleGradient />
                  <MinimalTexture />
                </Link>
              </div>

              {/* Desktop Logo - Only show when no sidebar (like on chat pages) */}
              {!shouldShowDesktopNavbar && (
                <div className="hidden lg:flex items-center">
                  <Link 
                    to="/" 
                    className={`flex items-center gap-3 group transition-all duration-300 ${clean3DStyle} p-2 rounded-2xl ${glassBackground} ${cleanHover} relative overflow-hidden`}
                  >
                    <div className="relative">
                      <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                        <ShipWheelIcon className="size-5 text-primary-content" />
                      </div>
                      <SparklesIcon className="absolute -top-1 -right-1 size-3 text-yellow-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-tight">
                        Conversa
                      </span>
                      <span className="text-[10px] text-base-content/50 font-medium tracking-wide">PRO</span>
                    </div>
                    <SubtleGradient />
                    <MinimalTexture />
                  </Link>
                </div>
              )}
            </div>

            {/* Desktop Actions - Only show when no sidebar */}
            {!shouldShowDesktopNavbar && (
              <div className="hidden lg:flex items-center gap-2 ml-auto">
                
                {/* Notifications */}
                <Link to="/notifications">
                  <button className={`btn btn-circle transition-all duration-300 ${clean3DStyle} ${glassBackground} ${cleanHover} relative overflow-hidden group`}>
                    <div className="relative">
                      <BellIcon className="h-5 w-5 text-base-content/70 group-hover:text-base-content transition-all duration-300" />
                      {/* Notification Indicator */}
                      <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary rounded-full animate-pulse ring-1 ring-base-100" />
                    </div>
                    <SubtleGradient />
                    <MinimalTexture />
                  </button>
                </Link>

                {/* Theme Selector */}
                <div className="px-1">
                  <div className={`rounded-xl ${glassBackground} p-0.5 ${clean3DStyle}`}>
                    <ThemeSelector />
                  </div>
                </div>

                {/* User Avatar */}
                <div className={`avatar ${clean3DStyle} rounded-2xl p-1.5 ${glassBackground} ${cleanHover} relative overflow-hidden group cursor-pointer transition-all duration-300`}>
                  <div className="w-8 rounded-full ring-1 ring-primary/30 ring-offset-1 ring-offset-base-100/50 group-hover:ring-primary/40 transition-all duration-300">
                    <img 
                      src={authUser?.profilePic} 
                      alt="User Avatar" 
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Online Status */}
                  <div className="absolute bottom-0.5 right-0.5 w-2 h-2 bg-success rounded-full ring-1 ring-base-100" />
                  <SubtleGradient />
                  <MinimalTexture />
                </div>

                {/* Logout Button */}
                <button 
                  className={`btn btn-circle transition-all duration-300 ${clean3DStyle} ${glassBackground} ${cleanHover} relative overflow-hidden group`}
                  onClick={logoutMutation}
                >
                  <LogOutIcon className="h-5 w-5 text-base-content/70 group-hover:text-base-content transition-all duration-300" />
                  <SubtleGradient />
                  <MinimalTexture />
                </button>
              </div>
            )}

            {/* Mobile Menu Button - Always show on mobile */}
            <div className="flex lg:hidden items-center gap-2 ml-auto">
              {/* Theme Selector */}
              <div className="px-1">
                <div className={`rounded-xl ${glassBackground} p-0.5 ${clean3DStyle}`}>
                  <ThemeSelector />
                </div>
              </div>
              
              <button 
                className={`btn btn-circle transition-all duration-300 ${clean3DStyle} ${glassBackground} ${cleanHover} relative overflow-hidden group`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <XIcon className="h-5 w-5 text-base-content/70 group-hover:scale-105 transition-all duration-300" />
                ) : (
                  <MenuIcon className="h-5 w-5 text-base-content/70 group-hover:scale-105 transition-all duration-300" />
                )}
                <SubtleGradient />
                <MinimalTexture />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 z-50 bg-base-100/95 backdrop-blur-md border-b border-base-300/20 shadow-lg overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            
            {/* User Profile Section */}
            <div className={`flex items-center gap-3 p-4 rounded-xl bg-base-200/30 mb-4 ${clean3DStyle} ${glassBackground} relative overflow-hidden group`}>
              <div className="relative">
                <div className="avatar">
                  <div className="w-12 rounded-xl ring-2 ring-primary/30 ring-offset-1 ring-offset-base-100 group-hover:ring-primary/40 transition-all duration-300">
                    <img src={authUser?.profilePic} alt="User Avatar" />
                  </div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success rounded-full border-2 border-base-100" />
              </div>

              <div className="flex-1">
                <p className="font-bold text-base text-base-content">{authUser?.fullName}</p>
                <p className="text-sm text-success font-semibold flex items-center gap-1 mt-1">
                  <span className="w-2 h-2 bg-success rounded-full" />
                  Online • Pro Member
                </p>
              </div>
              <SparklesIcon className="size-5 text-yellow-500" />
              <SubtleGradient />
              <MinimalTexture />
            </div>

            {/* Main Navigation */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-base-content/70 uppercase tracking-wider px-2 mb-3">
                Navigation
              </h3>
              <div className="space-y-2">
                {mainNavItems.map((item) => (
                  <NavItem 
                    key={item.path} 
                    item={item} 
                    isActive={location.pathname === item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </div>
            </div>

            {/* Support & Feedback */}
            <div className="mb-6">
              <h3 className="text-sm font-bold text-base-content/70 uppercase tracking-wider px-2 mb-3">
                Support & Legal
              </h3>
              <div className="space-y-2">
                {supportNavItems.map((item) => (
                  <NavItem 
                    key={item.path} 
                    item={item} 
                    isActive={location.pathname === item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </div>
            </div>

            {/* Logout Button */}
            <button 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${clean3DStyle} bg-error/10 border-error/20 hover:bg-error/15 hover:border-error/30 relative overflow-hidden group text-left w-full mb-4`}
              onClick={() => {
                logoutMutation();
                setIsMobileMenuOpen(false);
              }}
            >
              <div className="p-1.5 rounded-md bg-error/10 group-hover:bg-error/20 transition-all duration-300">
                <LogOutIcon className="size-5 text-error group-hover:scale-105 transition-all duration-300" />
              </div>
              <span className="font-semibold text-error">Logout</span>
              <SubtleGradient />
              <MinimalTexture />
            </button>

            {/* Version Info */}
            <div className="pt-4 border-t border-base-300/30">
              <div className="flex items-center justify-between text-xs text-base-content/40 px-2">
                <span>Version 2.1.0</span>
                <span>© 2025 Conversa</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;