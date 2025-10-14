import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api";
import { Link } from "react-router";
import { UsersIcon, Search, Filter } from "lucide-react";
import { useState } from "react";

import FriendCard from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";

const FriendsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: friends = [], isLoading: loadingFriends } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  // Filter friends based on search term
  const filteredFriends = friends.filter(friend =>
    friend.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    friend.nativeLanguage?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    friend.learningLanguage?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate real stats from actual data
  const onlineFriends = friends.filter(friend => friend.isOnline).length;
  const activeThisWeek = friends.filter(friend => {
    // This would typically check friend.lastActive timestamp
    return friend.isActive;
  }).length;

  return (
    <div className="min-h-screen bg-base-100">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto space-y-6 sm:space-y-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-base-content">
                Your Friends
              </h1>
              <p className="text-sm sm:text-base text-base-content/60">
                Connect and practice languages with your friends
              </p>
            </div>
            
            <Link 
              to="/notifications" 
              className="btn btn-primary btn-sm sm:btn-md w-full sm:w-auto"
            >
              <UsersIcon className="mr-2 size-4 sm:size-5" />
              Friend Requests
            </Link>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/40 size-4 sm:size-5" />
              <input
                type="text"
                placeholder="Search friends by name or language..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input input-bordered w-full pl-10 pr-4 py-2 sm:py-3"
              />
            </div>
            <button className="btn btn-outline btn-sm sm:btn-md gap-2">
              <Filter className="size-4 sm:size-5" />
              Filter
            </button>
          </div>

          {/* Stats Summary - Only show if friends exist */}
          {friends.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="stat bg-base-200 rounded-lg p-3 sm:p-4 text-center">
                <div className="stat-value text-lg sm:text-xl font-bold text-primary">{friends.length}</div>
                <div className="stat-desc text-xs sm:text-sm text-base-content/60">Total Friends</div>
              </div>
              <div className="stat bg-base-200 rounded-lg p-3 sm:p-4 text-center">
                <div className="stat-value text-lg sm:text-xl font-bold text-secondary">{onlineFriends}</div>
                <div className="stat-desc text-xs sm:text-sm text-base-content/60">Online Now</div>
              </div>
              <div className="stat bg-base-200 rounded-lg p-3 sm:p-4 text-center">
                <div className="stat-value text-lg sm:text-xl font-bold text-accent">{activeThisWeek}</div>
                <div className="stat-desc text-xs sm:text-sm text-base-content/60">Active This Week</div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {loadingFriends ? (
            <div className="flex flex-col items-center justify-center py-12 sm:py-16 space-y-4">
              <span className="loading loading-spinner loading-lg text-primary" />
              <p className="text-base-content/60 text-sm sm:text-base">Loading your friends...</p>
            </div>
          ) : filteredFriends.length === 0 && !searchTerm ? (
            <NoFriendsFound />
          ) : (
            <>
              {/* Results Count */}
              <div className="flex items-center justify-between">
                <p className="text-sm sm:text-base text-base-content/60">
                  {searchTerm ? `Found ${filteredFriends.length} friends` : `Your friends (${friends.length})`}
                </p>
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="text-xs sm:text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    Clear search
                  </button>
                )}
              </div>

              {/* Friends Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredFriends.map((friend) => (
                  <FriendCard key={friend._id} friend={friend} />
                ))}
              </div>
            </>
          )}

          {/* Empty Search State */}
          {!loadingFriends && searchTerm && filteredFriends.length === 0 && (
            <div className="text-center py-12 sm:py-16 space-y-4">
              <div className="size-16 sm:size-20 mx-auto bg-base-200 rounded-full flex items-center justify-center">
                <Search className="size-8 sm:size-10 text-base-content/40" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-base-content">No friends found</h3>
              <p className="text-base-content/60 text-sm sm:text-base max-w-md mx-auto">
                No friends match your search for "<span className="font-medium">{searchTerm}</span>".
              </p>
              <button 
                onClick={() => setSearchTerm("")}
                className="btn btn-ghost btn-sm sm:btn-md mt-4"
              >
                View All Friends
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;