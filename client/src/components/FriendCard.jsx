import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants";
import { useState } from "react";

const PremiumFriendCard = ({ friend }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="card bg-gradient-to-br from-base-100 to-primary/5 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20 rounded-2xl group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -mr-10 -mt-10"></div>
      </div>

      {/* Unique Premium Badge */}
      <div className="absolute top-3 right-3 z-10">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
          POLYGLOT
        </div>
      </div>

      <div className="card-body p-5 relative z-10">
        {/* Compact User Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="avatar relative">
            <div className="size-12 rounded-xl ring-2 ring-primary/30 group-hover:ring-primary/50 transition-all duration-300">
              <img src={friend.profilePic} alt={friend.fullName} />
            </div>
            {/* Online Status */}
            <div className="absolute -bottom-1 -right-1 size-2.5 bg-success rounded-full ring-1 ring-base-100"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base text-base-content truncate">{friend.fullName}</h3>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-xs font-semibold text-base-content">4.9</span>
            </div>
          </div>
        </div>

        {/* Compact Languages */}
        <div className="space-y-2 mb-4">
          {/* Native Language */}
          <div className="flex items-center justify-between p-2 bg-primary/5 rounded-lg border border-primary/10">
            <div className="flex items-center gap-2">
              {getLanguageFlag(friend.nativeLanguage)}
              <span className="text-sm font-medium text-base-content">{friend.nativeLanguage}</span>
            </div>
            <span className="text-xs font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded">Native</span>
          </div>

          {/* Learning Language */}
          <div className="flex items-center justify-between p-2 bg-secondary/5 rounded-lg border border-secondary/10">
            <div className="flex items-center gap-2">
              {getLanguageFlag(friend.learningLanguage)}
              <span className="text-sm font-medium text-base-content">{friend.learningLanguage}</span>
            </div>
            <span className="text-xs font-bold text-secondary bg-secondary/10 px-1.5 py-0.5 rounded">Learning</span>
          </div>
        </div>

        {/* Quick Stats - Minimal */}
        <div className="flex justify-between items-center mb-4 px-1">
          <div className="text-center">
            <div className="text-xs font-bold text-primary">98%</div>
            <div className="text-[10px] text-base-content/60">Response</div>
          </div>
          <div className="text-center">
            <div className="text-xs font-bold text-secondary">5min</div>
            <div className="text-[10px] text-base-content/60">Reply</div>
          </div>
          <div className="text-center">
            <div className="text-xs font-bold text-accent">2yrs</div>
            <div className="text-[10px] text-base-content/60">Exp</div>
          </div>
        </div>

        {/* Main Action Button */}
        <Link 
          to={`/chat/${friend._id}`} 
          className="btn btn-primary btn-sm w-full gap-2 font-semibold hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Start Chat
        </Link>

        {/* Availability Indicator */}
        <div className="flex items-center justify-center gap-1 mt-2">
          <div className="size-1.5 bg-success rounded-full animate-pulse"></div>
          <span className="text-[10px] text-base-content/40">Available now</span>
        </div>
      </div>
    </div>
  );
};

export default PremiumFriendCard;

export function getLanguageFlag(language) {
  if (!language) return null;

  const langLower = language.toLowerCase();
  const countryCode = LANGUAGE_TO_FLAG[langLower];

  if (countryCode) {
    return (
      <img
        src={`https://flagcdn.com/20x15/${countryCode}.png`}
        alt={`${langLower} flag`}
        className="h-4 w-5 object-cover rounded shadow-sm border border-base-300"
      />
    );
  }
  return null;
}