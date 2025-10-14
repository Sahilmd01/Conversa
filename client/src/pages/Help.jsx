import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  SearchIcon, 
  FilterIcon, 
  UsersIcon, 
  SparklesIcon, 
  StarIcon, 
  GlobeIcon, 
  HelpCircleIcon,
  PhoneIcon,
  VideoIcon,
  MessageCircleIcon,
  ShieldIcon,
  SettingsIcon,
  BookOpenIcon,
  ClockIcon,
  MailIcon,
  CalendarIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  XCircleIcon
} from 'lucide-react';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState({});
  const [statusFilter, setStatusFilter] = useState('all');

  const toggleItem = (category, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  const helpCategories = {
    'getting-started': {
      title: 'Getting Started',
      icon: '🚀',
      description: 'Begin your language learning journey',
      color: 'primary',
      count: 4,
      items: [
        {
          question: 'How do I create my Conversa account?',
          answer: 'Click the "Get Started" button on our homepage, enter your email, create a secure password, and complete your language learning profile. You can also sign up with Google or Apple for instant access.',
          premium: false,
          status: 'published'
        },
        {
          question: 'How do I find the perfect language partners?',
          answer: 'Use our AI-powered matching system in the "Discover" section. Filter by language, proficiency level, interests, and availability. Premium users get priority matching with verified native speakers.',
          premium: true,
          status: 'published'
        },
        {
          question: 'What languages does Conversa support?',
          answer: 'We support 100+ languages with active native speaker communities. Premium features include specialized dialects, professional tutors, and business language courses.',
          premium: false,
          status: 'published'
        },
        {
          question: 'How do I set up my learning goals and track progress?',
          answer: 'Access your Learning Dashboard and use our smart goal-setting wizard. Set daily practice targets, track fluency milestones, and get personalized learning recommendations based on your progress.',
          premium: true,
          status: 'published'
        }
      ]
    },
    'audio-video': {
      title: 'Audio & Video Calls',
      icon: '📞',
      description: 'High-quality communication features',
      color: 'secondary',
      count: 4,
      items: [
        {
          question: 'How do I start a HD video call with my partner?',
          answer: 'Navigate to your chat conversation and click the video camera icon. Schedule calls in advance or start instant sessions. Premium users enjoy crystal-clear HD video quality with background customization.',
          premium: false,
          status: 'published'
        },
        {
          question: 'What are the system requirements for optimal call quality?',
          answer: 'Minimum 2Mbps internet, webcam, and microphone. Recommended: 5Mbps for HD calls. Premium features include AI-powered background blur, noise cancellation, and call recording.',
          premium: true,
          status: 'published'
        },
        {
          question: 'Can I record and analyze my practice sessions?',
          answer: 'Yes! Premium users can record sessions with automatic transcription, vocabulary highlighting, and pronunciation analysis. All recordings are securely stored for 90 days with privacy protection.',
          premium: true,
          status: 'published'
        }
      ]
    },
    'messaging': {
      title: 'Messaging & Media',
      icon: '💬',
      description: 'Rich communication tools',
      color: 'accent',
      count: 3,
      items: [
        {
          question: 'How do I send voice messages and get pronunciation feedback?',
          answer: 'Hold the microphone button to record voice messages. Premium features include AI-powered pronunciation analysis, voice-to-text transcription, and personalized speaking tips.',
          premium: true,
          status: 'published'
        },
        {
          question: 'What file types can I share with my language partners?',
          answer: 'All common formats up to 100MB including images, documents, audio, and video files. Premium users enjoy 5GB cloud storage and can share larger files up to 1GB.',
          premium: false,
          status: 'published'
        }
      ]
    },
    'premium': {
      title: 'Premium Features',
      icon: '⭐',
      description: 'Exclusive benefits for subscribers',
      color: 'warning',
      count: 3,
      items: [
        {
          question: 'What exclusive features does Conversa Premium include?',
          answer: 'HD video calls, unlimited translations, session recording with analytics, advanced matching algorithm, priority customer support, ad-free experience, and exclusive learning content.',
          premium: true,
          status: 'published'
        },
        {
          question: 'How much does Premium cost and what plans are available?',
          answer: 'Monthly: $14.99 | Quarterly: $38.99 (13% savings) | Annual: $119.99 (33% savings). All plans include a 7-day free trial with full premium access.',
          premium: true,
          status: 'published'
        }
      ]
    },
    'troubleshooting': {
      title: 'Troubleshooting',
      icon: '🔧',
      description: 'Fix common issues quickly',
      color: 'error',
      count: 5,
      items: [
        {
          question: 'Audio/video not working during calls',
          answer: 'Check browser permissions, update drivers, or try our desktop app. Premium users get dedicated technical support.',
          premium: false,
          status: 'published'
        },
        {
          question: 'Forgot password recovery process',
          answer: 'Use the "Forgot Password" feature. Reset links expire in 1 hour for security. Contact support if issues persist.',
          premium: false,
          status: 'published'
        }
      ]
    }
  };

  const supportTickets = [
    {
      id: 1,
      title: 'Video call quality issues',
      status: 'open',
      priority: 'high',
      date: '2 hours ago',
      category: 'audio-video'
    },
    {
      id: 2,
      title: 'Premium feature access',
      status: 'resolved',
      priority: 'medium',
      date: '1 day ago',
      category: 'premium'
    },
    {
      id: 3,
      title: 'Account verification',
      status: 'in-progress',
      priority: 'low',
      date: '3 days ago',
      category: 'getting-started'
    }
  ];

  const allFAQs = Object.entries(helpCategories).flatMap(([category, data]) =>
    data.items.map((item, index) => ({
      ...item,
      category,
      categoryTitle: data.title,
      categoryIcon: data.icon,
      categoryColor: data.color,
      index
    }))
  );

  const filteredFAQs = searchQuery 
    ? allFAQs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeCategory === 'all'
    ? allFAQs
    : helpCategories[activeCategory]?.items || [];

  const popularQuestions = allFAQs.filter(faq => 
    [
      'How do I create my Conversa account?',
      'How much does Premium cost and what plans are available?',
      'What exclusive features does Conversa Premium include?',
      'How do I start a HD video call with my partner?'
    ].includes(faq.question)
  );

  const getStatusBadge = (status) => {
    const statusConfig = {
      open: { color: 'error', text: 'Open' },
      resolved: { color: 'success', text: 'Resolved' },
      'in-progress': { color: 'warning', text: 'In Progress' }
    };
    const config = statusConfig[status] || { color: 'neutral', text: status };
    return <div className={`badge badge-${config.color} badge-sm`}>{config.text}</div>;
  };

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      high: { color: 'error', text: 'High' },
      medium: { color: 'warning', text: 'Medium' },
      low: { color: 'success', text: 'Low' }
    };
    const config = priorityConfig[priority] || { color: 'neutral', text: priority };
    return <div className={`badge badge-${config.color} badge-sm`}>{config.text}</div>;
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-base-content">
              Help & Support
            </h1>
            <p className="text-base-content/60">
              Get help and connect with our support team
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/contact" className="btn btn-primary gap-2">
              <MailIcon className="size-5" />Contact Support
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Matching Friends Page Layout */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search Box */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/40 size-4" />
                  <input 
                    type="text" 
                    placeholder="Search help articles..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input input-bordered w-full pl-10 pr-4 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Help Categories */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Help Categories</h3>
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
                      <span>All Categories</span>
                      <span className="text-sm opacity-70">{allFAQs.length}</span>
                    </div>
                  </button>
                  
                  {Object.entries(helpCategories).map(([key, category]) => (
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

            {/* Support Tickets */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Your Support Tickets</h3>
                <div className="space-y-3">
                  {supportTickets.map((ticket) => (
                    <div key={ticket.id} className="p-3 border border-base-300 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-sm line-clamp-2">{ticket.title}</span>
                        {getStatusBadge(ticket.status)}
                      </div>
                      <div className="flex justify-between items-center">
                        {getPriorityBadge(ticket.priority)}
                        <span className="text-xs text-base-content/60">{ticket.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn btn-outline btn-sm w-full mt-4">
                  View All Tickets
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Support Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Articles</span>
                    <span className="font-semibold">{allFAQs.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Open Tickets</span>
                    <span className="font-semibold">{supportTickets.filter(t => t.status === 'open').length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Avg. Response</span>
                    <span className="font-semibold">15min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Satisfaction</span>
                    <span className="font-semibold">98%</span>
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
                    <span>All Articles</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="status" 
                      className="radio radio-sm" 
                      checked={statusFilter === 'premium'}
                      onChange={() => setStatusFilter('premium')}
                    />
                    <span>Premium Features</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="radio" 
                      name="status" 
                      className="radio radio-sm" 
                      checked={statusFilter === 'free'}
                      onChange={() => setStatusFilter('free')}
                    />
                    <span>Free Features</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BookOpenIcon className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{allFAQs.length}</div>
                      <div className="text-sm text-base-content/60">Help Articles</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <ClockIcon className="size-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">15m</div>
                      <div className="text-sm text-base-content/60">Avg. Response</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <StarIcon className="size-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-sm text-base-content/60">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Questions */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
              <div className="card-body">
                <h2 className="card-title text-lg mb-4">
                  <StarIcon className="size-5 text-warning" />
                  Popular Questions
                </h2>
                <div className="space-y-3">
                  {popularQuestions.map((faq, index) => (
                    <div key={index} className="collapse collapse-arrow border border-base-300 rounded-lg">
                      <input 
                        type="radio" 
                        name="popular-accordion" 
                        checked={openItems[`popular-${index}`]} 
                        onChange={() => toggleItem('popular', index)}
                      />
                      <div className="collapse-title font-medium flex items-center gap-3">
                        {faq.question}
                        {faq.premium && (
                          <div className="badge badge-primary badge-sm">PREMIUM</div>
                        )}
                      </div>
                      <div className="collapse-content">
                        <p className="text-base-content/70 text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Help Articles */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="card-title text-lg">
                    {activeCategory === 'all' ? 'All Help Articles' : helpCategories[activeCategory]?.title}
                    <span className="text-base font-normal text-base-content/60 ml-2">
                      ({filteredFAQs.length} articles)
                    </span>
                  </h2>
                  
                  <div className="flex gap-2">
                    <div className="dropdown dropdown-end">
                      <button className="btn btn-outline btn-sm gap-2">
                        <FilterIcon className="size-4" />
                        Sort
                      </button>
                    </div>
                  </div>
                </div>

                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-8">
                    <HelpCircleIcon className="size-12 text-base-content/40 mx-auto mb-4" />
                    <h3 className="font-semibold text-base-content mb-2">No articles found</h3>
                    <p className="text-base-content/60 text-sm mb-4">
                      {searchQuery ? "Try different search terms" : "No articles in this category"}
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
                    {filteredFAQs.map((faq, index) => (
                      <div key={index} className="border border-base-300 rounded-lg p-4 hover:border-primary transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-base-content flex-1">
                            {faq.question}
                          </h3>
                          <div className="flex gap-2 ml-4">
                            {faq.premium && (
                              <div className="badge badge-primary badge-sm">PREMIUM</div>
                            )}
                            <div className="badge badge-outline badge-sm">
                              {faq.categoryIcon} {faq.categoryTitle}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-base-content/70 text-sm mb-4 line-clamp-2">
                          {faq.answer}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <button 
                            className="btn btn-ghost btn-sm"
                            onClick={() => toggleItem(faq.category, faq.index)}
                          >
                            Read More
                            <ChevronDownIcon className={`size-4 transition-transform ${
                              openItems[`${faq.category}-${faq.index}`] ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          <div className="flex gap-2">
                            <button className="btn btn-ghost btn-sm">Helpful</button>
                            <button className="btn btn-ghost btn-sm">Not Helpful</button>
                          </div>
                        </div>

                        {openItems[`${faq.category}-${faq.index}`] && (
                          <div className="mt-4 p-4 bg-base-200 rounded-lg">
                            <p className="text-base-content/70 text-sm mb-4">{faq.answer}</p>
                            {faq.premium && (
                              <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                                <div className="flex items-center gap-2 text-sm">
                                  <StarIcon className="size-4 text-warning" />
                                  <span className="font-semibold">Premium Feature</span>
                                  <button className="btn btn-warning btn-xs ml-auto">Upgrade</button>
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

export default HelpPage;