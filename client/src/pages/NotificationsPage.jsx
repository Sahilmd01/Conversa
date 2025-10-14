import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { acceptFriendRequest, getFriendRequests } from "../lib/api";
import { BellIcon, ClockIcon, MessageSquareIcon, UserCheckIcon, CheckCircle, Users, UserPlus, Search } from "lucide-react";
import NoNotificationsFound from "../components/NoNotificationsFound";
import { useState } from "react";

const NotificationsPage = () => {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  const { data: friendRequests, isLoading } = useQuery({
    queryKey: ["friendRequests"],
    queryFn: getFriendRequests,
  });

  const { mutate: acceptRequestMutation, isPending } = useMutation({
    mutationFn: acceptFriendRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["friendRequests"] });
      queryClient.invalidateQueries({ queryKey: ["friends"] });
    },
  });

  const incomingRequests = friendRequests?.incomingReqs || [];
  const acceptedRequests = friendRequests?.acceptedReqs || [];

  // Filter notifications based on search and type
  const filteredIncoming = incomingRequests.filter(request =>
    request.sender.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.sender.nativeLanguage.toLowerCase().includes(searchTerm.toLowerCase()) ||
    request.sender.learningLanguage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAccepted = acceptedRequests.filter(notification =>
    notification.recipient.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.recipient.nativeLanguage.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.recipient.learningLanguage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showIncoming = selectedType === "all" || selectedType === "requests";
  const showAccepted = selectedType === "all" || selectedType === "accepted";

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-100 to-base-200">
      {/* Glass Morphism Header */}
      <div className="sticky top-0 z-40 bg-base-100/80 backdrop-blur-xl border-b border-base-300/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-content shadow-lg">
                  <BellIcon className="h-6 w-6" />
                </div>
                {(incomingRequests.length > 0 || acceptedRequests.length > 0) && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-secondary-content rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                    {incomingRequests.length + acceptedRequests.length}
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Notifications
                </h1>
                <p className="text-base-content/60 text-sm">
                  Manage your connections and requests
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{incomingRequests.length}</div>
                <div className="text-xs text-base-content/60">Pending</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">{acceptedRequests.length}</div>
                <div className="text-xs text-base-content/60">Accepted</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="sticky top-[88px] z-30 bg-base-100/60 backdrop-blur-lg border-b border-base-300/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-base-content/40" />
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input input-bordered w-full pl-10 pr-4 bg-base-200/50 border-base-300/50 focus:border-primary/50"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedType("all")}
                className={`btn btn-sm gap-2 ${selectedType === "all" ? "btn-primary" : "btn-ghost"}`}
              >
                <BellIcon className="h-4 w-4" />
                All
              </button>
              <button
                onClick={() => setSelectedType("requests")}
                className={`btn btn-sm gap-2 ${selectedType === "requests" ? "btn-primary" : "btn-ghost"}`}
              >
                <UserPlus className="h-4 w-4" />
                Requests
                {incomingRequests.length > 0 && (
                  <span className="badge badge-sm badge-primary">{incomingRequests.length}</span>
                )}
              </button>
              <button
                onClick={() => setSelectedType("accepted")}
                className={`btn btn-sm gap-2 ${selectedType === "accepted" ? "btn-primary" : "btn-ghost"}`}
              >
                <Users className="h-4 w-4" />
                Accepted
                {acceptedRequests.length > 0 && (
                  <span className="badge badge-sm badge-success">{acceptedRequests.length}</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
            <p className="text-base-content/60">Loading your notifications...</p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            {/* Friend Requests Section */}
            {showIncoming && filteredIncoming.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <UserPlus className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">Friend Requests</h2>
                  <span className="badge badge-primary badge-lg">{filteredIncoming.length}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredIncoming.map((request) => (
                    <div
                      key={request._id}
                      className="card bg-base-100 shadow-lg border border-base-300/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="card-body p-5">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="avatar">
                            <div className="w-12 h-12 rounded-xl ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                              <img
                                src={request.sender.profilePic}
                                alt={request.sender.fullName}
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg leading-tight">{request.sender.fullName}</h3>
                            <p className="text-base-content/60 text-sm">Wants to connect</p>
                          </div>
                        </div>

                        {/* Language Info */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-base-content/60">Native Language:</span>
                            <span className="font-semibold text-primary">{request.sender.nativeLanguage}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-base-content/60">Learning:</span>
                            <span className="font-semibold text-secondary">{request.sender.learningLanguage}</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <button
                          onClick={() => acceptRequestMutation(request._id)}
                          disabled={isPending}
                          className="btn btn-primary btn-sm w-full gap-2"
                        >
                          {isPending ? (
                            <span className="loading loading-spinner loading-xs"></span>
                          ) : (
                            <CheckCircle className="h-4 w-4" />
                          )}
                          Accept Request
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Accepted Requests Section */}
            {showAccepted && filteredAccepted.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-success/10">
                    <Users className="h-5 w-5 text-success" />
                  </div>
                  <h2 className="text-xl font-semibold">New Connections</h2>
                  <span className="badge badge-success badge-lg">{filteredAccepted.length}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {filteredAccepted.map((notification) => (
                    <div
                      key={notification._id}
                      className="card bg-base-100 shadow-lg border border-success/20 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="card-body p-5">
                        <div className="flex items-center gap-4">
                          {/* Avatar with Status */}
                          <div className="relative">
                            <div className="avatar online">
                              <div className="w-16 h-16 rounded-xl ring-2 ring-success ring-offset-2 ring-offset-base-100">
                                <img
                                  src={notification.recipient.profilePic}
                                  alt={notification.recipient.fullName}
                                  className="object-cover"
                                />
                              </div>
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1.5 shadow-lg">
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="mb-2">
                              <h3 className="font-bold text-lg">{notification.recipient.fullName}</h3>
                              <p className="text-base-content/70">Accepted your friend request</p>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-sm text-base-content/60">
                                <div className="flex items-center gap-1">
                                  <ClockIcon className="h-3 w-3" />
                                  Recently
                                </div>
                                <div className="flex gap-1">
                                  <span className="badge badge-xs badge-primary">{notification.recipient.nativeLanguage}</span>
                                  <span className="badge badge-xs badge-secondary">{notification.recipient.learningLanguage}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Empty State */}
            {(filteredIncoming.length === 0 && filteredAccepted.length === 0) && (
              <div className="text-center py-16">
                <NoNotificationsFound />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      {(incomingRequests.length > 0 || acceptedRequests.length > 0) && (
        <div className="fixed bottom-6 right-6 z-30">
          <div className="dropdown dropdown-top dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-primary btn-circle shadow-2xl w-14 h-14">
              <BellIcon className="h-6 w-6" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu menu-sm p-2 shadow-2xl bg-base-200 rounded-box w-56 mb-4">
              <li className="menu-title">
                <span>Quick Actions</span>
              </li>
              <li>
                <button onClick={() => setSelectedType("requests")} className="justify-between">
                  <UserPlus className="h-4 w-4" />
                  View Friend Requests
                  <span className="badge badge-primary">{incomingRequests.length}</span>
                </button>
              </li>
              <li>
                <button onClick={() => setSelectedType("accepted")} className="justify-between">
                  <Users className="h-4 w-4" />
                  View Connections
                  <span className="badge badge-success">{acceptedRequests.length}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;