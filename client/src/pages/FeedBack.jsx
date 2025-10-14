import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  SearchIcon, 
  MessageSquareIcon,
  StarIcon,
  BugIcon,
  LightbulbIcon,
  SendIcon,
  ImageIcon,
  PaperclipIcon,
  SmileIcon,
  FrownIcon,
  MehIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  DownloadIcon,
  FilterIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  SettingsIcon
} from 'lucide-react';

const FeedbackPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState({});
  const [statusFilter, setStatusFilter] = useState('all');
  const [rating, setRating] = useState(0);
  const [feedbackType, setFeedbackType] = useState('general');
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState([]);

  const toggleItem = (category, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  const handleRatingClick = (stars) => {
    setRating(stars);
  };

  const handleAttachment = (e) => {
    const files = Array.from(e.target.files);
    setAttachments(prev => [...prev, ...files]);
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const feedbackCategories = {
    'feature-request': {
      title: 'Feature Requests',
      icon: '💡',
      description: 'Suggest new features and improvements',
      color: 'primary',
      count: 12,
      items: [
        {
          question: 'Add group video calls for language practice',
          answer: 'We\'re actively working on group calling features! Expected release in Q2 2024. This will allow up to 6 participants in language practice sessions.',
          status: 'planned',
          votes: 156,
          comments: 23,
          date: '2 days ago'
        },
        {
          question: 'Offline dictionary and phrasebook',
          answer: 'This feature is in development. Premium users will get access to downloadable content for offline use during travel or poor connectivity.',
          status: 'in-progress',
          votes: 89,
          comments: 15,
          date: '1 week ago'
        },
        {
          question: 'Integration with language learning apps',
          answer: 'We\'re exploring partnerships with Duolingo, Babbel, and other platforms. No confirmed timeline yet.',
          status: 'under-review',
          votes: 67,
          comments: 8,
          date: '3 weeks ago'
        }
      ]
    },
    'bug-reports': {
      title: 'Bug Reports',
      icon: '🐛',
      description: 'Report technical issues and problems',
      color: 'error',
      count: 8,
      items: [
        {
          question: 'Audio cutting out during video calls',
          answer: 'We\'ve identified the issue and deployed a fix. Update to the latest version (v2.3.1) to resolve this problem.',
          status: 'resolved',
          votes: 234,
          comments: 45,
          date: '1 day ago'
        },
        {
          question: 'Messages not syncing across devices',
          answer: 'Our engineering team is investigating this synchronization issue. Temporary workaround: refresh the app when switching devices.',
          status: 'in-progress',
          votes: 78,
          comments: 12,
          date: '5 days ago'
        },
        {
          question: 'Profile pictures not loading',
          answer: 'This appears to be a CDN caching issue. We\'re working on improving our image delivery system.',
          status: 'confirmed',
          votes: 45,
          comments: 6,
          date: '2 weeks ago'
        }
      ]
    },
    'ui-ux': {
      title: 'UI/UX Feedback',
      icon: '🎨',
      description: 'Design and user experience suggestions',
      color: 'accent',
      count: 6,
      items: [
        {
          question: 'Improve mobile app navigation',
          answer: 'Redesigned navigation is in beta testing. Join our beta program to try the new interface.',
          status: 'in-progress',
          votes: 92,
          comments: 18,
          date: '4 days ago'
        },
        {
          question: 'Dark mode theme improvements',
          answer: 'We\'ve collected all feedback and will implement changes in the next design update.',
          status: 'planned',
          votes: 124,
          comments: 22,
          date: '1 week ago'
        }
      ]
    },
    'content': {
      title: 'Content & Learning',
      icon: '📚',
      description: 'Learning materials and content feedback',
      color: 'warning',
      count: 5,
      items: [
        {
          question: 'Add more business language content',
          answer: 'Business language modules are scheduled for Q3 2024 release. This will include industry-specific vocabulary and scenarios.',
          status: 'planned',
          votes: 167,
          comments: 31,
          date: '3 days ago'
        },
        {
          question: 'Improve pronunciation feedback',
          answer: 'We\'re enhancing our AI pronunciation analysis with better accent detection and more detailed feedback.',
          status: 'in-progress',
          votes: 98,
          comments: 14,
          date: '2 weeks ago'
        }
      ]
    }
  };

  const userFeedback = [
    {
      id: 1,
      title: 'Love the new matching algorithm!',
      type: 'feature-request',
      status: 'acknowledged',
      rating: 5,
      date: '2 hours ago',
      comments: 2
    },
    {
      id: 2,
      title: 'Issue with video call quality',
      type: 'bug-reports',
      status: 'in-progress',
      rating: 2,
      date: '1 day ago',
      comments: 5
    },
    {
      id: 3,
      title: 'Suggestion for conversation topics',
      type: 'content',
      status: 'under-review',
      rating: 4,
      date: '3 days ago',
      comments: 1
    }
  ];

  const statusConfig = {
    'planned': { color: 'info', text: 'Planned', icon: '📅' },
    'in-progress': { color: 'warning', text: 'In Progress', icon: '⚡' },
    'under-review': { color: 'secondary', text: 'Under Review', icon: '👀' },
    'completed': { color: 'success', text: 'Completed', icon: '✅' },
    'resolved': { color: 'success', text: 'Resolved', icon: '✅' },
    'confirmed': { color: 'error', text: 'Confirmed', icon: '🐛' },
    'acknowledged': { color: 'primary', text: 'Acknowledged', icon: '👍' }
  };

  const allFeedbackItems = Object.entries(feedbackCategories).flatMap(([category, data]) =>
    data.items.map((item, index) => ({
      ...item,
      category,
      categoryTitle: data.title,
      categoryIcon: data.icon,
      categoryColor: data.color,
      index
    }))
  );

  const filteredFeedbackItems = searchQuery 
    ? allFeedbackItems.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeCategory === 'all'
    ? allFeedbackItems
    : feedbackCategories[activeCategory]?.items || [];

  const popularFeedback = allFeedbackItems
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 4);

  const getStatusBadge = (status) => {
    const config = statusConfig[status] || { color: 'neutral', text: status, icon: '❓' };
    return (
      <div className={`badge badge-${config.color} badge-sm gap-1`}>
        <span>{config.icon}</span>
        {config.text}
      </div>
    );
  };

  const getRatingStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon
            key={star}
            className={`size-4 ${
              star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    // Handle feedback submission
    console.log({
      type: feedbackType,
      rating,
      message,
      attachments
    });
    // Reset form
    setRating(0);
    setMessage('');
    setAttachments([]);
    setFeedbackType('general');
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-base-content">
              Feedback & Suggestions
            </h1>
            <p className="text-base-content/60">
              Help us improve Conversa with your feedback
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/help" className="btn btn-outline gap-2">
              <HelpCircleIcon className="size-5" />Help Center
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search Box */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/40 size-4" />
                  <input 
                    type="text" 
                    placeholder="Search feedback..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input input-bordered w-full pl-10 pr-4 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Feedback Categories */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Feedback Categories</h3>
                <div className="space-y-2">
                  <button
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeCategory === 'all' 
                        ? 'bg-primary text-primary-content' 
                        : 'hover:bg-base-200'
                    }`}
                    onClick={() => setActiveCategory('all')}
                  >
                    <div className="flex justify-between items-center">
                      <span>All Feedback</span>
                      <span className="text-sm opacity-70">{allFeedbackItems.length}</span>
                    </div>
                  </button>
                  
                  {Object.entries(feedbackCategories).map(([key, category]) => (
                    <button
                      key={key}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        activeCategory === key 
                          ? 'bg-primary text-primary-content' 
                          : 'hover:bg-base-200'
                      }`}
                      onClick={() => setActiveCategory(key)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span>{category.icon}</span>
                          <span>{category.title}</span>
                        </div>
                        <span className="text-sm opacity-70">{category.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Your Feedback */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Your Feedback</h3>
                <div className="space-y-3">
                  {userFeedback.map((feedback) => (
                    <div key={feedback.id} className="p-3 border border-base-300 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-sm line-clamp-2">{feedback.title}</span>
                        {getStatusBadge(feedback.status)}
                      </div>
                      <div className="flex justify-between items-center">
                        {getRatingStars(feedback.rating)}
                        <span className="text-xs text-base-content/60">{feedback.date}</span>
                      </div>
                      {feedback.comments > 0 && (
                        <div className="flex items-center gap-1 text-xs text-base-content/60 mt-2">
                          <MessageSquareIcon className="size-3" />
                          {feedback.comments} comments
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button className="btn btn-outline btn-sm w-full mt-4">
                  View All Your Feedback
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Feedback Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Suggestions</span>
                    <span className="font-semibold">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Implemented</span>
                    <span className="font-semibold">42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">In Progress</span>
                    <span className="font-semibold">23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Your Contributions</span>
                    <span className="font-semibold">8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Filter</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="status" 
                      className="radio radio-sm" 
                      checked={statusFilter === 'all'}
                      onChange={() => setStatusFilter('all')}
                    />
                    <span>All Status</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="status" 
                      className="radio radio-sm" 
                      checked={statusFilter === 'in-progress'}
                      onChange={() => setStatusFilter('in-progress')}
                    />
                    <span>In Progress</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="status" 
                      className="radio radio-sm" 
                      checked={statusFilter === 'planned'}
                      onChange={() => setStatusFilter('planned')}
                    />
                    <span>Planned</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="status" 
                      className="radio radio-sm" 
                      checked={statusFilter === 'completed'}
                      onChange={() => setStatusFilter('completed')}
                    />
                    <span>Completed</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Feedback Form */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
              <div className="card-body">
                <h2 className="card-title text-lg mb-4">
                  <MessageSquareIcon className="size-5 text-primary" />
                  Send Us Your Feedback
                </h2>
                
                <form onSubmit={handleSubmitFeedback} className="space-y-6">
                  {/* Feedback Type */}
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">What type of feedback do you have?</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                      {[
                        { value: 'general', label: 'General', icon: '💬', color: 'primary' },
                        { value: 'bug', label: 'Bug Report', icon: '🐛', color: 'error' },
                        { value: 'feature', label: 'Feature Idea', icon: '💡', color: 'success' },
                        { value: 'ui', label: 'UI/UX', icon: '🎨', color: 'accent' }
                      ].map((type) => (
                        <label key={type.value} className="cursor-pointer">
                          <input 
                            type="radio" 
                            name="feedbackType" 
                            className="peer hidden" 
                            value={type.value}
                            checked={feedbackType === type.value}
                            onChange={(e) => setFeedbackType(e.target.value)}
                          />
                          <div className={`p-4 border-2 rounded-lg text-center transition-all peer-checked:border-${type.color} peer-checked:bg-${type.color}/10 hover:bg-base-200`}>
                            <div className="text-2xl mb-2">{type.icon}</div>
                            <div className="font-medium">{type.label}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">How would you rate your experience?</span>
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingClick(star)}
                          className="p-3 hover:scale-110 transition-transform"
                        >
                          {star <= rating ? (
                            <StarIcon className="size-8 text-yellow-400 fill-yellow-400" />
                          ) : (
                            <StarIcon className="size-8 text-gray-300" />
                          )}
                        </button>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-base-content/60 mt-2">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">Your feedback</span>
                    </label>
                    <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your experience, suggest improvements, or report issues..."
                      className="textarea textarea-bordered w-full h-32"
                      required
                    />
                  </div>

                  {/* Attachments */}
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">Attachments (optional)</span>
                    </label>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <label className="btn btn-outline btn-sm gap-2 cursor-pointer">
                          <ImageIcon className="size-4" />
                          Add Screenshot
                          <input 
                            type="file" 
                            className="hidden" 
                            accept="image/*"
                            onChange={handleAttachment}
                          />
                        </label>
                        <label className="btn btn-outline btn-sm gap-2 cursor-pointer">
                          <PaperclipIcon className="size-4" />
                          Add File
                          <input 
                            type="file" 
                            className="hidden" 
                            onChange={handleAttachment}
                          />
                        </label>
                      </div>
                      
                      {attachments.length > 0 && (
                        <div className="space-y-2">
                          {attachments.map((file, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 bg-base-200 rounded-lg">
                              <PaperclipIcon className="size-4 text-base-content/60" />
                              <span className="text-sm flex-1 truncate">{file.name}</span>
                              <span className="text-xs text-base-content/60">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </span>
                              <button 
                                type="button"
                                onClick={() => removeAttachment(index)}
                                className="btn btn-ghost btn-xs"
                              >
                                <XCircleIcon className="size-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-3">
                    <button type="submit" className="btn btn-primary gap-2">
                      <SendIcon className="size-4" />
                      Send Feedback
                    </button>
                    <button type="button" className="btn btn-ghost">
                      Save Draft
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Popular Feedback */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
              <div className="card-body">
                <h2 className="card-title text-lg mb-4">
                  <ThumbsUpIcon className="size-5 text-warning" />
                  Popular Feedback
                </h2>
                <div className="space-y-4">
                  {popularFeedback.map((item, index) => (
                    <div key={index} className="border border-base-300 rounded-lg p-4 hover:border-primary transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-base-content flex-1">
                          {item.question}
                        </h3>
                        <div className="flex gap-2 ml-4">
                          {getStatusBadge(item.status)}
                        </div>
                      </div>
                      
                      <p className="text-base-content/70 text-sm mb-4">
                        {item.answer}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4 text-sm text-base-content/60">
                          <div className="flex items-center gap-1">
                            <ThumbsUpIcon className="size-4" />
                            {item.votes} votes
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquareIcon className="size-4" />
                            {item.comments} comments
                          </div>
                          <span>{item.date}</span>
                        </div>
                        
                        <button 
                          className="btn btn-ghost btn-sm"
                          onClick={() => toggleItem(item.category, item.index)}
                        >
                          {openItems[`${item.category}-${item.index}`] ? 'Show Less' : 'View Details'}
                          <ChevronDownIcon className={`size-4 transition-transform ${
                            openItems[`${item.category}-${item.index}`] ? 'rotate-180' : ''
                          }`} />
                        </button>
                      </div>

                      {openItems[`${item.category}-${item.index}`] && (
                        <div className="mt-4 p-4 bg-base-200 rounded-lg">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="font-semibold mb-2">Official Response</h4>
                              <p className="text-base-content/70 text-sm">{item.answer}</p>
                            </div>
                            {getStatusBadge(item.status)}
                          </div>
                          
                          <div className="flex gap-2">
                            <button className="btn btn-primary btn-sm gap-2">
                              <ThumbsUpIcon className="size-4" />
                              Vote for this ({item.votes})
                            </button>
                            <button className="btn btn-outline btn-sm">
                              Add Comment
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Community Feedback */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="card-title text-lg">
                    {activeCategory === 'all' ? 'All Community Feedback' : feedbackCategories[activeCategory]?.title}
                    <span className="text-base font-normal text-base-content/60 ml-2">
                      ({filteredFeedbackItems.length} items)
                    </span>
                  </h2>
                  
                  <div className="flex gap-2">
                    <div className="dropdown dropdown-end">
                      <button className="btn btn-outline btn-sm gap-2">
                        <FilterIcon className="size-4" />
                        Sort by: Popular
                      </button>
                    </div>
                  </div>
                </div>

                {filteredFeedbackItems.length === 0 ? (
                  <div className="text-center py-8">
                    <MessageSquareIcon className="size-12 text-base-content/40 mx-auto mb-4" />
                    <h3 className="font-semibold text-base-content mb-2">No feedback found</h3>
                    <p className="text-base-content/60 text-sm mb-4">
                      {searchQuery ? "Try different search terms" : "No feedback in this category"}
                    </p>
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="btn btn-primary btn-sm"
                      >
                        Clear Search
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredFeedbackItems.map((item, index) => (
                      <div key={index} className="border border-base-300 rounded-lg p-4 hover:border-primary transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-base-content flex-1">
                            {item.question}
                          </h3>
                          <div className="flex gap-2 ml-4">
                            {getStatusBadge(item.status)}
                            <div className="badge badge-outline badge-sm">
                              {item.categoryIcon} {item.categoryTitle}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-base-content/70 text-sm mb-4 line-clamp-2">
                          {item.answer}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <div className="flex gap-4 text-sm text-base-content/60">
                            <div className="flex items-center gap-1">
                              <ThumbsUpIcon className="size-4" />
                              {item.votes} votes
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquareIcon className="size-4" />
                              {item.comments} comments
                            </div>
                            <span>{item.date}</span>
                          </div>
                          
                          <div className="flex gap-2">
                            <button className="btn btn-ghost btn-sm gap-1">
                              <ThumbsUpIcon className="size-4" />
                              Vote
                            </button>
                            <button 
                              className="btn btn-ghost btn-sm"
                              onClick={() => toggleItem(item.category, item.index)}
                            >
                              Details
                              <ChevronDownIcon className={`size-4 transition-transform ${
                                openItems[`${item.category}-${item.index}`] ? 'rotate-180' : ''
                              }`} />
                            </button>
                          </div>
                        </div>

                        {openItems[`${item.category}-${item.index}`] && (
                          <div className="mt-4 p-4 bg-base-200 rounded-lg">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h4 className="font-semibold mb-2">Official Response</h4>
                                <p className="text-base-content/70 text-sm">{item.answer}</p>
                              </div>
                              {getStatusBadge(item.status)}
                            </div>
                            
                            <div className="flex gap-2 flex-wrap">
                              <button className="btn btn-primary btn-sm gap-2">
                                <ThumbsUpIcon className="size-4" />
                                Vote for this ({item.votes})
                              </button>
                              <button className="btn btn-outline btn-sm gap-2">
                                <MessageSquareIcon className="size-4" />
                                Add Comment
                              </button>
                              <button className="btn btn-ghost btn-sm">
                                Follow Updates
                              </button>
                            </div>
                            
                            {item.status === 'planned' && (
                              <div className="mt-3 p-3 bg-info/10 border border-info/20 rounded-lg">
                                <div className="flex items-center gap-2 text-sm">
                                  <ClockIcon className="size-4 text-info" />
                                  <span className="font-semibold">Planned Feature</span>
                                  <span className="text-xs ml-auto">Expected: Q2 2024</span>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;