import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getOutgoingFriendReqs, getRecommendedUsers, getUserFriends, sendFriendRequest } from "../lib/api";
import { Link } from "react-router";
import { CheckCircleIcon, MapPinIcon, UserPlusIcon, UsersIcon, SparklesIcon, SearchIcon, FilterIcon, StarIcon, GlobeIcon, ShipWheelIcon } from "lucide-react";
import { capitialize } from "../lib/utils";
import FriendCard, { getLanguageFlag } from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";

const HomePage = () => {
  const queryClient = useQueryClient();
  const [outgoingRequestsIds, setOutgoingRequestsIds] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const { data: friends = [], isLoading: loadingFriends } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  const { data: recommendedUsers = [], isLoading: loadingUsers } = useQuery({
    queryKey: ["users"],
    queryFn: getRecommendedUsers,
  });

  const { data: outgoingFriendReqs } = useQuery({
    queryKey: ["outgoingFriendReqs"],
    queryFn: getOutgoingFriendReqs,
  });

  const { mutate: sendRequestMutation, isPending } = useMutation({
    mutationFn: sendFriendRequest,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["outgoingFriendReqs"] }),
  });

  useEffect(() => {
    const outgoingIds = new Set();
    if (outgoingFriendReqs && outgoingFriendReqs.length > 0) {
      outgoingFriendReqs.forEach((req) => {
        outgoingIds.add(req.recipient._id);
      });
      setOutgoingRequestsIds(outgoingIds);
    }
  }, [outgoingFriendReqs]);

  const filteredUsers = recommendedUsers.filter(user =>
    user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.nativeLanguage.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.learningLanguage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const languageFilters = [...new Set(recommendedUsers.flatMap(user => 
    [user.nativeLanguage, user.learningLanguage]
  ))];

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3 group transition-all duration-300">
              <div className="relative">
                <div className="p-2.5 bg-gradient-to-br from-primary to-secondary rounded-xl shadow-lg group-hover:shadow-primary/20 transition-all duration-300 group-hover:scale-105">
                  <ShipWheelIcon className="size-5 text-primary-content" />
                </div>
                <SparklesIcon className="absolute -top-1 -right-1 size-3 text-yellow-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-tight">
                  Conversa
                </span>
                <span className="text-sm font-semibold text-yellow-600 tracking-wide">PRO</span>
              </div>
            </div>
            <p className="text-base-content/70 text-lg max-w-2xl">Connect with native speakers and practice languages through meaningful conversations</p>
          </div>
          <div className="flex gap-3">
            <Link to="/notifications" className="btn btn-primary gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
              <UsersIcon className="size-5" />Friend Requests{outgoingFriendReqs?.length > 0 && (<span className="badge badge-secondary badge-sm">{outgoingFriendReqs.length}</span>)}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl"><UsersIcon className="size-8 text-primary" /></div>
                <div><h3 className="text-2xl font-bold text-base-content">{friends.length}</h3><p className="text-base-content/60">Language Partners</p></div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl"><GlobeIcon className="size-8 text-secondary" /></div>
                <div><h3 className="text-2xl font-bold text-base-content">{new Set(recommendedUsers.map(u => u.nativeLanguage)).size}</h3><p className="text-base-content/60">Languages Available</p></div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="card-body p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/10 rounded-xl"><StarIcon className="size-8 text-accent" /></div>
                <div><h3 className="text-2xl font-bold text-base-content">{recommendedUsers.length}</h3><p className="text-base-content/60">Active Learners</p></div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-base-content flex items-center gap-3"><div className="p-2 bg-primary/10 rounded-lg"><UsersIcon className="size-6 text-primary" /></div>Your Language Partners</h2>
              <p className="text-base-content/60 text-lg">{friends.length > 0 ? `You're connected with ${friends.length} language partner${friends.length === 1 ? '' : 's'}` : 'Start building your language learning network'}</p>
            </div>
            {friends.length > 0 && (<Link to="/friends" className="btn btn-outline gap-2 border-base-300 hover:border-primary transition-all duration-300">View All<UsersIcon className="size-4" /></Link>)}
          </div>

          {loadingFriends ? (
            <div className="flex justify-center items-center py-16"><div className="text-center space-y-4"><div className="loading loading-spinner loading-lg text-primary"></div><p className="text-base-content/60">Loading your partners...</p></div></div>
          ) : friends.length === 0 ? (<NoFriendsFound />) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{friends.slice(0, 4).map((friend) => (<FriendCard key={friend._id} friend={friend} />))}</div>
          )}
        </section>

        <section>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-base-content flex items-center gap-3"><div className="p-2 bg-secondary/10 rounded-lg"><SparklesIcon className="size-6 text-secondary" /></div>Discover New Partners</h2>
              <p className="text-base-content/60 text-lg">Find language exchange partners that match your learning goals</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/40 size-5" />
                <input type="text" placeholder="Search by name, native language, or learning language..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="input input-bordered w-full pl-12 pr-4 py-3 text-lg border-base-300 focus:border-primary transition-colors duration-300" />
              </div>
              <div className="dropdown dropdown-end">
                <button className="btn btn-outline gap-2 border-base-300 hover:border-primary transition-all duration-300"><FilterIcon className="size-5" />Filter</button>
                <div className="dropdown-content menu p-4 shadow-2xl bg-base-100 rounded-box w-64 mt-2 border border-base-300">
                  <div className="space-y-3"><h4 className="font-semibold text-base-content">Filter by Language</h4><div className="space-y-2 max-h-60 overflow-y-auto">{languageFilters.map(language => (<label key={language} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-base-200 transition-colors duration-200"><input type="checkbox" className="checkbox checkbox-sm" checked={activeFilter === language} onChange={() => setActiveFilter(activeFilter === language ? "all" : language)} /><span className="flex items-center gap-2">{getLanguageFlag(language)}{capitialize(language)}</span></label>))}</div></div>
                </div>
              </div>
            </div>
          </div>

          {loadingUsers ? (
            <div className="flex justify-center items-center py-16"><div className="text-center space-y-4"><div className="loading loading-spinner loading-lg text-secondary"></div><p className="text-base-content/60">Finding amazing partners for you...</p></div></div>
          ) : filteredUsers.length === 0 ? (
            <div className="card bg-base-100 border border-base-300 shadow-lg p-12 text-center"><div className="space-y-6 max-w-md mx-auto"><div className="p-4 bg-base-200 rounded-full w-fit mx-auto"><UsersIcon className="size-12 text-base-content/40" /></div><div className="space-y-3"><h3 className="font-bold text-2xl text-base-content">{searchQuery ? "No partners found" : "No recommendations available"}</h3><p className="text-base-content/60 text-lg">{searchQuery ? "Try adjusting your search terms or filters" : "We're working on finding the perfect language partners for you"}</p></div>{searchQuery && (<button onClick={() => setSearchQuery("")} className="btn btn-primary gap-2"><SearchIcon className="size-4" />Clear Search</button>)}</div></div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredUsers.map((user) => {
                const hasRequestBeenSent = outgoingRequestsIds.has(user._id);

                return (
                  <div key={user._id} className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group">
                    <div className="card-body p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="avatar group-hover:scale-110 transition-transform duration-300"><div className="size-16 rounded-2xl ring-2 ring-primary ring-offset-2 ring-offset-base-100"><img src={user.profilePic} alt={user.fullName} /></div></div>
                        <div className="flex-1 min-w-0"><h3 className="font-bold text-lg text-base-content truncate group-hover:text-primary transition-colors duration-300">{user.fullName}</h3>{user.location && (<div className="flex items-center text-base-content/60 text-sm mt-1"><MapPinIcon className="size-4 mr-2" /><span className="truncate">{user.location}</span></div>)}</div>
                      </div>
                      {user.bio && (<div className="mb-4"><p className="text-base-content/70 text-sm line-clamp-2">{user.bio}</p></div>)}
                      <div className="space-y-3 mb-5">
                        <div className="flex items-center justify-between p-3 bg-primary/10 rounded-xl border border-primary/20"><div className="flex items-center gap-3">{getLanguageFlag(user.nativeLanguage)}<span className="font-semibold text-base-content">{capitialize(user.nativeLanguage)}</span></div><span className="text-xs font-bold text-primary bg-primary/20 px-2 py-1 rounded-full">Native</span></div>
                        <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-xl border border-secondary/20"><div className="flex items-center gap-3">{getLanguageFlag(user.learningLanguage)}<span className="font-semibold text-base-content">{capitialize(user.learningLanguage)}</span></div><span className="text-xs font-bold text-secondary bg-secondary/20 px-2 py-1 rounded-full">Learning</span></div>
                      </div>
                      <div className="flex gap-3">
                        <button className={`btn flex-1 gap-2 transition-all duration-300 ${hasRequestBeenSent ? "btn-disabled bg-base-300 text-base-content/40" : "btn-primary shadow-lg hover:shadow-xl"}`} onClick={() => sendRequestMutation(user._id)} disabled={hasRequestBeenSent || isPending}>
                          {hasRequestBeenSent ? (<><CheckCircleIcon className="size-5" />Request Sent</>) : (<><UserPlusIcon className="size-5" />{isPending ? "Sending..." : "Connect"}</>)}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <footer className="mt-16 pt-8 border-t border-base-300"><div className="text-center text-base-content/60 text-sm"><p>Version 2.1.0</p><p className="mt-2">© 2025 Conversa. All rights reserved.</p></div></footer>
      </div>
    </div>
  );
};

export default HomePage;