import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  SearchIcon, 
  MailIcon,
  PhoneIcon,
  MessageSquareIcon,
  ClockIcon,
  UserIcon,
  HelpCircleIcon,
  SendIcon,
  PaperclipIcon,
  ImageIcon,
  MapPinIcon,
  GlobeIcon,
  StarIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChevronDownIcon,
  FilterIcon,
  CalendarIcon,
  VideoIcon,
  FileTextIcon,
  SmartphoneIcon,
  LaptopIcon
} from 'lucide-react';

const ContactSupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState({});
  const [priority, setPriority] = useState('medium');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [contactMethod, setContactMethod] = useState('email');

  const toggleItem = (category, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  const handleAttachment = (e) => {
    const files = Array.from(e.target.files);
    setAttachments(prev => [...prev, ...files]);
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const supportCategories = {
    'technical': {
      title: 'Technical Support',
      icon: '🔧',
      description: 'App issues and technical problems',
      color: 'error',
      count: 8,
      items: [
        {
          question: 'App crashing or not loading properly',
          answer: 'Try clearing your browser cache or reinstalling the app. If the issue persists, contact us with your device model and app version.',
          responseTime: '2-4 hours',
          priority: 'high'
        },
        {
          question: 'Audio/video call quality issues',
          answer: 'Check your internet connection and device permissions. For persistent issues, provide your connection speed and device specifications.',
          responseTime: '4-6 hours',
          priority: 'medium'
        },
        {
          question: 'Login or account access problems',
          answer: 'Use password reset or account recovery options. If locked out, contact us with your registered email for verification.',
          responseTime: '1-2 hours',
          priority: 'high'
        }
      ]
    },
    'billing': {
      title: 'Billing & Payments',
      icon: '💳',
      description: 'Subscription and payment issues',
      color: 'warning',
      count: 5,
      items: [
        {
          question: 'Payment failed or declined',
          answer: 'Check your payment method and ensure sufficient funds. For recurring issues, try a different payment method or contact your bank.',
          responseTime: '6-12 hours',
          priority: 'medium'
        },
        {
          question: 'Subscription cancellation or refund',
          answer: 'You can cancel anytime in account settings. Refunds are available within 7 days of purchase under our money-back guarantee.',
          responseTime: '24 hours',
          priority: 'medium'
        },
        {
          question: 'Premium features not working',
          answer: 'Verify your subscription status and try logging out and back in. Provide your transaction ID for faster resolution.',
          responseTime: '4-8 hours',
          priority: 'high'
        }
      ]
    },
    'account': {
      title: 'Account Management',
      icon: '👤',
      description: 'Profile and account settings',
      color: 'primary',
      count: 6,
      items: [
        {
          question: 'Update email or personal information',
          answer: 'You can update most information in account settings. For email changes, verification is required for security purposes.',
          responseTime: '12-24 hours',
          priority: 'low'
        },
        {
          question: 'Delete account or personal data',
          answer: 'Account deletion is available in privacy settings. Data removal requests are processed within 30 days as per our privacy policy.',
          responseTime: '48 hours',
          priority: 'medium'
        },
        {
          question: 'Two-factor authentication issues',
          answer: 'Use backup codes or account recovery options. For persistent issues, contact us with identity verification documents.',
          responseTime: '2-4 hours',
          priority: 'high'
        }
      ]
    },
    'feature-help': {
      title: 'Feature Help',
      icon: '❓',
      description: 'How to use platform features',
      color: 'info',
      count: 7,
      items: [
        {
          question: 'How to find language partners',
          answer: 'Use our matching algorithm in the Discover section. Set your preferences and browse recommended partners based on your goals.',
          responseTime: '24 hours',
          priority: 'low'
        },
        {
          question: 'Using video call features',
          answer: 'Access call features from chat sessions. Premium users get HD quality, background effects, and recording options.',
          responseTime: '12-24 hours',
          priority: 'low'
        },
        {
          question: 'Setting learning goals and tracking',
          answer: 'Use the Learning Dashboard to set goals and track progress. Our AI provides personalized recommendations based on your activity.',
          responseTime: '24 hours',
          priority: 'low'
        }
      ]
    }
  };

  const supportTickets = [
    {
      id: 'TS-2024-001',
      title: 'Video call audio cutting out',
      category: 'technical',
      status: 'in-progress',
      priority: 'high',
      date: '2 hours ago',
      lastUpdate: '30 minutes ago',
      assignedTo: 'Sarah Chen'
    },
    {
      id: 'TS-2024-002',
      title: 'Premium subscription renewal failed',
      category: 'billing',
      status: 'open',
      priority: 'medium',
      date: '1 day ago',
      lastUpdate: '2 hours ago',
      assignedTo: 'Mike Rodriguez'
    },
    {
      id: 'TS-2024-003',
      title: 'Account verification required',
      category: 'account',
      status: 'resolved',
      priority: 'low',
      date: '3 days ago',
      lastUpdate: '1 day ago',
      assignedTo: 'Emily Watson'
    }
  ];

  const supportChannels = [
    {
      method: 'email',
      icon: '📧',
      title: 'Email Support',
      description: 'Detailed issues and documentation',
      responseTime: '2-12 hours',
      availability: '24/7',
      bestFor: ['Complex issues', 'File attachments', 'Detailed explanations']
    },
    {
      method: 'chat',
      icon: '💬',
      title: 'Live Chat',
      description: 'Instant help for urgent issues',
      responseTime: '2-5 minutes',
      availability: '6 AM - 10 PM EST',
      bestFor: ['Quick questions', 'Urgent issues', 'Step-by-step guidance']
    },
    {
      method: 'call',
      icon: '📞',
      title: 'Phone Support',
      description: 'Voice support for complex problems',
      responseTime: 'Immediate',
      availability: '9 AM - 6 PM EST',
      bestFor: ['Complex technical issues', 'Account security', 'Billing questions']
    },
    {
      method: 'video',
      icon: '🎥',
      title: 'Video Call',
      description: 'Screen sharing and visual assistance',
      responseTime: '15-30 minutes',
      availability: '10 AM - 8 PM EST',
      bestFor: ['Technical demonstrations', 'UI/UX issues', 'Training sessions']
    }
  ];

  const allSupportItems = Object.entries(supportCategories).flatMap(([category, data]) =>
    data.items.map((item, index) => ({
      ...item,
      category,
      categoryTitle: data.title,
      categoryIcon: data.icon,
      categoryColor: data.color,
      index
    }))
  );

  const filteredSupportItems = searchQuery 
    ? allSupportItems.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeCategory === 'all'
    ? allSupportItems
    : supportCategories[activeCategory]?.items || [];

  const popularQuestions = allSupportItems
    .filter(item => item.priority === 'high')
    .slice(0, 4);

  const getStatusBadge = (status) => {
    const statusConfig = {
      'open': { color: 'error', text: 'Open', icon: '⏳' },
      'in-progress': { color: 'warning', text: 'In Progress', icon: '⚡' },
      'resolved': { color: 'success', text: 'Resolved', icon: '✅' },
      'closed': { color: 'neutral', text: 'Closed', icon: '🔒' }
    };
    const config = statusConfig[status] || { color: 'neutral', text: status, icon: '❓' };
    return (
      <div className={`badge badge-${config.color} badge-sm gap-1`}>
        <span>{config.icon}</span>
        {config.text}
      </div>
    );
  };

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      'high': { color: 'error', text: 'High', icon: '🔴' },
      'medium': { color: 'warning', text: 'Medium', icon: '🟡' },
      'low': { color: 'success', text: 'Low', icon: '🟢' }
    };
    const config = priorityConfig[priority] || { color: 'neutral', text: priority, icon: '⚪' };
    return (
      <div className={`badge badge-${config.color} badge-sm gap-1`}>
        <span>{config.icon}</span>
        {config.text}
      </div>
    );
  };

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    // Handle ticket submission
    console.log({
      contactMethod,
      priority,
      subject,
      message,
      attachments
    });
    // Reset form
    setPriority('medium');
    setSubject('');
    setMessage('');
    setAttachments([]);
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-base-content">
              Contact Support
            </h1>
            <p className="text-base-content/60">
              Get help from our support team 24/7
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
                    placeholder="Search support articles..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input input-bordered w-full pl-10 pr-4 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Support Categories */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Support Categories</h3>
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
                      <span className="text-sm opacity-70">{allSupportItems.length}</span>
                    </div>
                  </button>
                  
                  {Object.entries(supportCategories).map(([key, category]) => (
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

            {/* Your Support Tickets */}
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
                      <div className="flex justify-between items-center mb-2">
                        {getPriorityBadge(ticket.priority)}
                        <span className="text-xs text-base-content/60">{ticket.date}</span>
                      </div>
                      <div className="text-xs text-base-content/60">
                        Last update: {ticket.lastUpdate}
                      </div>
                      {ticket.assignedTo && (
                        <div className="text-xs text-base-content/60 mt-1">
                          Agent: {ticket.assignedTo}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button className="btn btn-outline btn-sm w-full mt-4">
                  View All Tickets
                </button>
              </div>
            </div>

            {/* Support Stats */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Support Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Avg. Response Time</span>
                    <span className="font-semibold">15min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Satisfaction Rate</span>
                    <span className="font-semibold">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Open Tickets</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Active Agents</span>
                    <span className="font-semibold">12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="card bg-base-100 border border-error/20 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-error mb-4">🚨 Urgent Support</h3>
                <p className="text-sm text-base-content/70 mb-4">
                  For account security issues or critical system problems
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="size-4 text-error" />
                    <span>+1 (555) 123-HELP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MailIcon className="size-4 text-error" />
                    <span>urgent@conversa.com</span>
                  </div>
                </div>
                <button className="btn btn-error btn-sm w-full mt-4">
                  Emergency Contact
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Contact Methods */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
              <div className="card-body">
                <h2 className="card-title text-lg mb-6">
                  <MessageSquareIcon className="size-5 text-primary" />
                  Choose Support Method
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {supportChannels.map((channel) => (
                    <label key={channel.method} className="cursor-pointer">
                      <input 
                        type="radio" 
                        name="contactMethod" 
                        className="peer hidden" 
                        value={channel.method}
                        checked={contactMethod === channel.method}
                        onChange={(e) => setContactMethod(e.target.value)}
                      />
                      <div className={`p-4 border-2 rounded-lg text-center transition-all peer-checked:border-primary peer-checked:bg-primary/10 hover:bg-base-200 h-full flex flex-col`}>
                        <div className="text-2xl mb-2">{channel.icon}</div>
                        <div className="font-semibold mb-1">{channel.title}</div>
                        <p className="text-sm text-base-content/60 mb-3 flex-1">
                          {channel.description}
                        </p>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span>Response:</span>
                            <span className="font-medium">{channel.responseTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Available:</span>
                            <span className="font-medium">{channel.availability}</span>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Support Form */}
                <form onSubmit={handleSubmitTicket} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Priority Selection */}
                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">Priority Level</span>
                      </label>
                      <div className="flex gap-2">
                        {[
                          { value: 'low', label: 'Low', color: 'success' },
                          { value: 'medium', label: 'Medium', color: 'warning' },
                          { value: 'high', label: 'High', color: 'error' }
                        ].map((level) => (
                          <label key={level.value} className="flex-1 cursor-pointer">
                            <input 
                              type="radio" 
                              name="priority" 
                              className="peer hidden" 
                              value={level.value}
                              checked={priority === level.value}
                              onChange={(e) => setPriority(e.target.value)}
                            />
                            <div className={`p-3 border-2 rounded-lg text-center transition-all peer-checked:border-${level.color} peer-checked:bg-${level.color}/10 hover:bg-base-200`}>
                              <div className={`font-medium text-${level.color}`}>
                                {level.label}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Expected Response */}
                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">Expected Response</span>
                      </label>
                      <div className="p-3 bg-info/10 border border-info/20 rounded-lg">
                        <div className="flex items-center gap-2 text-sm">
                          <ClockIcon className="size-4 text-info" />
                          <span>
                            {supportChannels.find(c => c.method === contactMethod)?.responseTime} 
                            {' '}for {contactMethod} support
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">Subject</span>
                    </label>
                    <input 
                      type="text" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Brief description of your issue..."
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">Detailed Description</span>
                    </label>
                    <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please provide detailed information about your issue, including steps to reproduce, error messages, and what you were trying to accomplish..."
                      className="textarea textarea-bordered w-full h-32"
                      required
                    />
                  </div>

                  {/* Attachments */}
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">Attachments</span>
                      <span className="label-text-alt">Optional - screenshots help us understand your issue better</span>
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
                      Send Support Request
                    </button>
                    <button type="button" className="btn btn-ghost">
                      Save as Draft
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Quick Solutions */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
              <div className="card-body">
                <h2 className="card-title text-lg mb-4">
                  <HelpCircleIcon className="size-5 text-warning" />
                  Quick Solutions
                </h2>
                <div className="space-y-3">
                  {popularQuestions.map((item, index) => (
                    <div key={index} className="collapse collapse-arrow border border-base-300 rounded-lg">
                      <input 
                        type="radio" 
                        name="quick-solutions" 
                        checked={openItems[`popular-${index}`]} 
                        onChange={() => toggleItem('popular', index)}
                      />
                      <div className="collapse-title font-medium flex items-center gap-3">
                        {item.question}
                        {getPriorityBadge(item.priority)}
                      </div>
                      <div className="collapse-content">
                        <p className="text-base-content/70 text-sm mb-3">{item.answer}</p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-base-content/60">
                            Avg. response: {item.responseTime}
                          </span>
                          <button className="btn btn-primary btn-sm">
                            Use This Solution
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Support Articles */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="card-title text-lg">
                    {activeCategory === 'all' ? 'All Support Articles' : supportCategories[activeCategory]?.title}
                    <span className="text-base font-normal text-base-content/60 ml-2">
                      ({filteredSupportItems.length} articles)
                    </span>
                  </h2>
                  
                  <div className="flex gap-2">
                    <div className="dropdown dropdown-end">
                      <button className="btn btn-outline btn-sm gap-2">
                        <FilterIcon className="size-4" />
                        Sort by Priority
                      </button>
                    </div>
                  </div>
                </div>

                {filteredSupportItems.length === 0 ? (
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
                    {filteredSupportItems.map((item, index) => (
                      <div key={index} className="border border-base-300 rounded-lg p-4 hover:border-primary transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-base-content flex-1">
                            {item.question}
                          </h3>
                          <div className="flex gap-2 ml-4">
                            {getPriorityBadge(item.priority)}
                            <div className="badge badge-outline badge-sm">
                              {item.categoryIcon} {item.categoryTitle}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-base-content/70 text-sm mb-4 line-clamp-2">
                          {item.answer}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-base-content/60">
                            Avg. response time: {item.responseTime}
                          </div>
                          
                          <button 
                            className="btn btn-ghost btn-sm"
                            onClick={() => toggleItem(item.category, item.index)}
                          >
                            {openItems[`${item.category}-${item.index}`] ? 'Show Less' : 'View Solution'}
                            <ChevronDownIcon className={`size-4 transition-transform ${
                              openItems[`${item.category}-${item.index}`] ? 'rotate-180' : ''
                            }`} />
                          </button>
                        </div>

                        {openItems[`${item.category}-${item.index}`] && (
                          <div className="mt-4 p-4 bg-base-200 rounded-lg">
                            <div className="prose prose-sm max-w-none">
                              <h4 className="font-semibold mb-2">Solution</h4>
                              <p className="text-base-content/70 text-sm mb-4">{item.answer}</p>
                              
                              <div className="flex gap-2">
                                <button className="btn btn-primary btn-sm">
                                  This Solved My Issue
                                </button>
                                <button className="btn btn-outline btn-sm">
                                  I Need More Help
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mt-6">
              <div className="card-body">
                <h2 className="card-title text-lg mb-4">Additional Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">General Support</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <MailIcon className="size-4 text-primary" />
                        <div>
                          <div>support@conversa.com</div>
                          <div className="text-xs text-base-content/60">General inquiries</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <PhoneIcon className="size-4 text-secondary" />
                        <div>
                          <div>+1 (555) 123-SUPPORT</div>
                          <div className="text-xs text-base-content/60">Mon-Fri, 9AM-6PM EST</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPinIcon className="size-4 text-accent" />
                        <div>
                          <div>123 Support Street</div>
                          <div className="text-xs text-base-content/60">Tech City, TC 12345</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Specialized Teams</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <UserIcon className="size-4 text-warning" />
                        <div>
                          <div>billing@conversa.com</div>
                          <div className="text-xs text-base-content/60">Payment & subscriptions</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <GlobeIcon className="size-4 text-info" />
                        <div>
                          <div>enterprise@conversa.com</div>
                          <div className="text-xs text-base-content/60">Business accounts</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <FileTextIcon className="size-4 text-success" />
                        <div>
                          <div>legal@conversa.com</div>
                          <div className="text-xs text-base-content/60">Privacy & terms</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupportPage;