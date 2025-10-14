import { Link, useLocation, useNavigate } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import useLogout from "../hooks/useLogout";
import { 
  BellIcon, 
  HomeIcon, 
  ShipWheelIcon, 
  UsersIcon, 
  SparklesIcon,
  HelpCircleIcon,
  ShieldIcon,
  LogOutIcon,
  BookOpenIcon,
  StarIcon,
  PaletteIcon,
  ContactIcon,
  AmpersandIcon,
  WholeWordIcon
} from "lucide-react";
import ThemeSelector from "./ThemeSelector";

const Sidebar = () => {
  const { authUser } = useAuthUser();
  const { logoutMutation } = useLogout();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const mainNavItems = [
    { path: "/", icon: HomeIcon, label: "Home" },
    { path: "/friends", icon: UsersIcon, label: "Friends" },
    { path: "/notifications", icon: BellIcon, label: "Notifications" },
  ];

  const supportNavItems = [
    { path: "/about", icon: WholeWordIcon, label: "About Us" },
    { path: "/help", icon: HelpCircleIcon, label: "Help & Support" },
    { path: "/privacy", icon: ShieldIcon, label: "Privacy & Policy" },
    { path: "/terms", icon: BookOpenIcon, label: "Terms of Service" },
    { path: "/contact", icon: ContactIcon, label: "Contact Support" },

  ];

  const NavItem = ({ item, isActive }) => {
    const Icon = item.icon;
    return (
      <Link
        to={item.path}
        className={`
          flex items-center gap-3 w-full px-3 py-2.5 rounded-lg 
          transition-all duration-300 group relative
          ${isActive 
            ? "bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 shadow-sm" 
            : "hover:bg-base-200/60 hover:shadow-sm"
          }
        `}
      >
        {/* Active Indicator */}
        {isActive && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-primary rounded-r-full" />
        )}

        {/* Icon */}
        <div className={`
          p-1.5 rounded-md transition-all duration-300
          ${isActive 
            ? "bg-primary/10" 
            : "bg-base-100/50 group-hover:bg-base-200"
          }
        `}>
          <Icon className={`
            size-4 transition-all duration-300
            ${isActive 
              ? "text-primary scale-105" 
              : "text-base-content/60 group-hover:text-base-content group-hover:scale-105"
            }
          `} />
        </div>

        {/* Label */}
        <span className={`
          font-semibold text-sm transition-all duration-300
          ${isActive ? "text-primary" : "text-base-content/80"}
        `}>
          {item.label}
        </span>
      </Link>
    );
  };

  const handleLogout = async () => {
    try {
      await logoutMutation();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <aside className="w-64 bg-base-100 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0 shadow-lg">
      
      {/* Brand Header */}
      <div className="p-5 border-b border-base-300/20">
        <Link 
          to="/" 
          className="flex items-center gap-3 group transition-all duration-300"
        >
          <div className="relative">
            <div className="p-2.5 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg group-hover:shadow-primary/20 transition-all duration-300 group-hover:scale-105">
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
        </Link>
      </div>

      {/* Scrollable Navigation Area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <nav className="p-3">
          {/* Main Navigation */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-base-content/50 uppercase tracking-wider px-3 mb-2">
              Main
            </h3>
            <div className="space-y-1">
              {mainNavItems.map((item) => (
                <NavItem 
                  key={item.path} 
                  item={item} 
                  isActive={currentPath === item.path} 
                />
              ))}
            </div>
          </div>

          {/* Support Navigation */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-base-content/50 uppercase tracking-wider px-3 mb-2">
              Support & Legal
            </h3>
            <div className="space-y-1">
              {supportNavItems.map((item) => (
                <NavItem 
                  key={item.path} 
                  item={item} 
                  isActive={currentPath === item.path} 
                />
              ))}
            </div>
          </div>

          {/* Feedback Section */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-base-content/50 uppercase tracking-wider px-3 mb-2">
              Feedback
            </h3>
            <Link
              to="/feedback"
              className={`
                flex items-center gap-3 w-full px-3 py-2.5 rounded-lg 
                transition-all duration-300 group relative
                ${currentPath === "/feedback" 
                  ? "bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 shadow-sm" 
                  : "hover:bg-base-200/60 hover:shadow-sm"
                }
              `}
            >
              <div className={`
                p-1.5 rounded-md transition-all duration-300
                ${currentPath === "/feedback" 
                  ? "bg-primary/10" 
                  : "bg-base-100/50 group-hover:bg-base-200"
                }
              `}>
                <StarIcon className={`
                  size-4 transition-all duration-300
                  ${currentPath === "/feedback" 
                    ? "text-primary scale-105" 
                    : "text-base-content/60 group-hover:text-base-content group-hover:scale-105"
                  }
                `} />
              </div>
              <span className={`
                font-semibold text-sm transition-all duration-300
                ${currentPath === "/feedback" ? "text-primary" : "text-base-content/80"}
              `}>
                Send Feedback
              </span>
            </Link>
          </div>

          {/* Theme Selector Section */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-base-content/50 uppercase tracking-wider px-3 mb-2">
              Appearance
            </h3>
            <div className={`
              flex items-center justify-between w-full px-3 py-2.5 rounded-lg 
              transition-all duration-300 group
              hover:bg-base-200/60 hover:shadow-sm
            `}>
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded-md bg-base-100/50 group-hover:bg-base-200 transition-all duration-300">
                  <PaletteIcon className="size-4 text-base-content/60 group-hover:text-base-content group-hover:scale-105 transition-all duration-300" />
                </div>
                <span className="font-semibold text-sm text-base-content/80">
                  Theme
                </span>
              </div>
              <div className="flex-shrink-0">
                <ThemeSelector />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* User Profile & Logout */}
      <div className="p-3 border-t border-base-300/20 space-y-2">
        {/* User Profile */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-base-200/30 hover:bg-base-200/50 transition-all duration-300 group">
          <div className="relative">
            <div className="avatar">
              <div className="w-10 rounded-lg ring-1 ring-primary/30 ring-offset-1 ring-offset-base-100 group-hover:ring-primary/40 transition-all duration-300">
                <img 
                  src={authUser?.profilePic} 
                  alt="User Avatar" 
                  className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-success rounded-full border-[1.5px] border-base-100" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm truncate text-base-content">
              {authUser?.fullName}
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 bg-success rounded-full" />
              <span className="text-xs text-success font-medium">Online • Pro</span>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button 
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 w-full px-3 py-2.5 text-sm font-medium text-error/70 hover:text-error hover:bg-error/10 rounded-lg transition-all duration-300 group border border-error/20 hover:border-error/30"
        >
          <LogOutIcon className="size-4" />
          <span>Logout</span>
        </button>

        {/* Version Info */}
        <div className="pt-2 border-t border-base-300/20">
          <div className="flex items-center justify-between text-xs text-base-content/40">
            <span>made by sahil</span>
            <span>© 2025 Conversa</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;