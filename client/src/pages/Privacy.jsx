import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  SearchIcon, 
  ShieldIcon, 
  LockIcon, 
  EyeIcon, 
  UserIcon, 
  GlobeIcon, 
  FileTextIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChevronDownIcon,
  MailIcon,
  CalendarIcon,
  HelpCircleIcon
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('all');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (section, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${section}-${index}`]: !prev[`${section}-${index}`]
    }));
  };

  const policySections = {
    'information-collection': {
      title: 'Information We Collect',
      icon: '📊',
      description: 'What data we gather and how',
      color: 'primary',
      count: 4,
      items: [
        {
          question: 'What personal information do you collect?',
          answer: 'We collect information you provide directly: name, email, language preferences, profile data, and communication content. For premium users, we may collect payment information and advanced learning analytics.',
          lastUpdated: '2024-01-15',
          important: true
        },
        {
          question: 'Do you collect usage data?',
          answer: 'Yes, we automatically collect usage data including device information, IP address, browser type, pages visited, features used, and interaction patterns to improve our services.',
          lastUpdated: '2024-01-15',
          important: false
        },
        {
          question: 'How do you use cookies and tracking?',
          answer: 'We use essential cookies for functionality, analytics cookies to understand usage patterns, and preference cookies to remember your settings. You can control cookie preferences in your account settings.',
          lastUpdated: '2024-01-15',
          important: true
        },
        {
          question: 'Do you collect audio/video call data?',
          answer: 'We process call metadata (duration, participants, quality metrics) but do not store call content without your explicit consent. Premium features like session recording require your permission.',
          lastUpdated: '2024-01-15',
          important: true
        }
      ]
    },
    'data-usage': {
      title: 'How We Use Your Data',
      icon: '🔍',
      description: 'Purposes of data processing',
      color: 'secondary',
      count: 3,
      items: [
        {
          question: 'How is my data used to improve my experience?',
          answer: 'We use your data to personalize language partner matching, provide tailored learning recommendations, improve call quality, and suggest relevant content based on your progress and preferences.',
          lastUpdated: '2024-01-15',
          important: true
        },
        {
          question: 'Do you use data for analytics and research?',
          answer: 'We use aggregated, anonymized data for research to improve language learning methodologies, develop new features, and understand learning patterns across our global community.',
          lastUpdated: '2024-01-15',
          important: false
        },
        {
          question: 'How do you use data for communication?',
          answer: 'We use your contact information to send service updates, security alerts, learning progress reports, and (with your consent) promotional communications about new features.',
          lastUpdated: '2024-01-15',
          important: false
        }
      ]
    },
    'data-sharing': {
      title: 'Data Sharing & Disclosure',
      icon: '🤝',
      description: 'When we share your information',
      color: 'accent',
      count: 4,
      items: [
        {
          question: 'Do you share data with third parties?',
          answer: 'We only share data with trusted service providers who assist in operating our platform (hosting, payment processing, analytics). All partners are bound by strict data protection agreements.',
          lastUpdated: '2024-01-15',
          important: true
        },
        {
          question: 'What information is visible to other users?',
          answer: 'Your public profile (name, photo, languages, interests) is visible to potential language partners. Private messages and call content are only shared with participants you choose to connect with.',
          lastUpdated: '2024-01-15',
          important: true
        },
        {
          question: 'When are you required to disclose data?',
          answer: 'We may disclose information if required by law, to protect our rights and safety, prevent fraud, or respond to government requests. We notify users whenever legally permitted.',
          lastUpdated: '2024-01-15',
          important: false
        },
        {
          question: 'Do you share data for business transfers?',
          answer: 'In the event of a merger, acquisition, or sale of assets, user information may be transferred. We will notify you and provide choices about your data in such circumstances.',
          lastUpdated: '2024-01-15',
          important: false
        }
      ]
    },
    'data-security': {
      title: 'Data Security',
      icon: '🔒',
      description: 'How we protect your information',
      color: 'success',
      count: 3,
      items: [
        {
          question: 'What security measures do you have in place?',
          answer: 'We implement industry-standard security including encryption in transit (SSL/TLS) and at rest, regular security audits, access controls, and secure data centers with 24/7 monitoring.',
          lastUpdated: '2024-01-15',
          important: true
        },
        {
          question: 'How is my payment information protected?',
          answer: 'Payment processing is handled by PCI-DSS compliant providers. We never store your full payment card details on our servers. All transactions are encrypted and secure.',
          lastUpdated: '2024-01-15',
          important: true
        },
        {
          question: 'What should I do to keep my account secure?',
          answer: 'Use a strong, unique password, enable two-factor authentication, log out from shared devices, and be cautious about sharing personal information in public conversations.',
          lastUpdated: '2024-01-15',
          important: false
        }
      ]
    },
    'your-rights': {
      title: 'Your Rights & Choices',
      icon: '👤',
      description: 'Control over your data',
      color: 'warning',
      count: 5,
      items: [
        {
          question: 'How can I access and update my personal information?',
          answer: 'You can access and edit most personal information in your account settings. For additional data access requests, contact our privacy team through the support portal.',
          lastUpdated: '2024-01-15',
          important: true
        },
        {
          question: 'Can I delete my account and data?',
          answer: 'Yes, you can permanently delete your account in settings. This removes your personal data from our active systems, though some anonymized data may be retained for legal purposes.',
          lastUpdated: '2024-01-15',
          important: true
        },
        {
          question: 'How do I control communication preferences?',
          answer: 'Manage your email and notification preferences in account settings. You can opt-out of promotional communications while still receiving essential service updates.',
          lastUpdated: '2024-01-15',
          important: false
        },
        {
          question: 'What are my rights under GDPR/CCPA?',
          answer: 'You have rights to access, correct, delete, and restrict processing of your data. You can also data portability and object to certain processing. Contact us to exercise these rights.',
          lastUpdated: '2024-01-15',
          important: true
        },
        {
          question: 'How do I manage cookies and tracking?',
          answer: 'Use the cookie preferences in your account settings or browser settings to control tracking. Note that some essential cookies are required for platform functionality.',
          lastUpdated: '2024-01-15',
          important: false
        }
      ]
    },
    'international': {
      title: 'International Data Transfer',
      icon: '🌍',
      description: 'Global data processing',
      color: 'info',
      count: 2,
      items: [
        {
          question: 'Where is my data stored and processed?',
          answer: 'Your data is primarily processed in the United States and European Union. We use GDPR-compliant transfer mechanisms for international data transfers to ensure adequate protection.',
          lastUpdated: '2024-01-15',
          important: true
        },
        {
          question: 'How do you protect data in international transfers?',
          answer: 'We use Standard Contractual Clauses, adequacy decisions, and other approved mechanisms to ensure your data receives equivalent protection when transferred internationally.',
          lastUpdated: '2024-01-15',
          important: false
        }
      ]
    }
  };

  const policyUpdates = [
    {
      version: '2.1',
      date: 'January 15, 2024',
      changes: ['Enhanced data export features', 'Clarified international transfer protocols', 'Added cookie preference controls'],
      important: true
    },
    {
      version: '2.0',
      date: 'June 30, 2023',
      changes: ['GDPR compliance updates', 'New data retention policies', 'Enhanced user consent mechanisms'],
      important: true
    },
    {
      version: '1.9',
      date: 'March 12, 2023',
      changes: ['Minor clarifications on data sharing', 'Updated contact information'],
      important: false
    }
  ];

  const allPolicyItems = Object.entries(policySections).flatMap(([section, data]) =>
    data.items.map((item, index) => ({
      ...item,
      section,
      sectionTitle: data.title,
      sectionIcon: data.icon,
      sectionColor: data.color,
      index
    }))
  );

  const filteredPolicyItems = searchQuery 
    ? allPolicyItems.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeSection === 'all'
    ? allPolicyItems
    : policySections[activeSection]?.items || [];

  const importantUpdates = policyUpdates.filter(update => update.important);
  const recentUpdates = policyUpdates.slice(0, 2);

  const getImportanceBadge = (important) => {
    return important ? (
      <div className="badge badge-error badge-sm">IMPORTANT</div>
    ) : null;
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-base-content">
              Privacy Policy
            </h1>
            <p className="text-base-content/60">
              Last updated: January 15, 2024
            </p>
          </div>
          <div className="flex gap-3">
            <button className="btn btn-outline gap-2">
              <FileTextIcon className="size-5" />Download PDF
            </button>
            <Link to="/contact" className="btn btn-primary gap-2">
              <MailIcon className="size-5" />Contact Privacy Team
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
                    placeholder="Search privacy policy..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input input-bordered w-full pl-10 pr-4 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Policy Sections */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Policy Sections</h3>
                <div className="space-y-2">
                  <button
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      activeSection === 'all' 
                        ? 'bg-primary text-primary-content' 
                        : 'hover:bg-base-200'
                    }`}
                    onClick={() => setActiveSection('all')}
                  >
                    <div className="flex justify-between items-center">
                      <span>All Sections</span>
                      <span className="text-sm opacity-70">{allPolicyItems.length}</span>
                    </div>
                  </button>
                  
                  {Object.entries(policySections).map(([key, section]) => (
                    <button
                      key={key}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        activeSection === key 
                          ? 'bg-primary text-primary-content' 
                          : 'hover:bg-base-200'
                      }`}
                      onClick={() => setActiveSection(key)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span>{section.icon}</span>
                          <span>{section.title}</span>
                        </div>
                        <span className="text-sm opacity-70">{section.count}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Updates */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">
                  <ShieldIcon className="size-4 inline mr-2" />
                  Important Updates
                </h3>
                <div className="space-y-3">
                  {importantUpdates.map((update, index) => (
                    <div key={index} className="p-3 border border-error/20 bg-error/5 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-sm">v{update.version}</span>
                        <div className="badge badge-error badge-sm">NEW</div>
                      </div>
                      <p className="text-xs text-base-content/60 mb-2">{update.date}</p>
                      <ul className="text-xs space-y-1">
                        {update.changes.map((change, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <div className="w-1 h-1 bg-error rounded-full mt-1.5 flex-shrink-0" />
                            {change}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Your Privacy Rights */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Your Rights</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 p-2 hover:bg-base-200 rounded-lg">
                    <UserIcon className="size-4 text-primary" />
                    <span>Access your data</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-base-200 rounded-lg">
                    <FileTextIcon className="size-4 text-secondary" />
                    <span>Data portability</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-base-200 rounded-lg">
                    <XCircleIcon className="size-4 text-error" />
                    <span>Delete your data</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-base-200 rounded-lg">
                    <EyeIcon className="size-4 text-warning" />
                    <span>Opt-out of tracking</span>
                  </div>
                </div>
                <button className="btn btn-outline btn-sm w-full mt-4">
                  Manage Preferences
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <ShieldIcon className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">256-bit</div>
                      <div className="text-sm text-base-content/60">Encryption</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <GlobeIcon className="size-5 text-success" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">GDPR</div>
                      <div className="text-sm text-base-content/60">Compliant</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-warning/10 rounded-lg">
                      <CalendarIcon className="size-5 text-warning" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">30 days</div>
                      <div className="text-sm text-base-content/60">Data Request SLA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Updates */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
              <div className="card-body">
                <h2 className="card-title text-lg mb-4">
                  <FileTextIcon className="size-5 text-info" />
                  Recent Policy Updates
                </h2>
                <div className="space-y-4">
                  {recentUpdates.map((update, index) => (
                    <div key={index} className="border border-base-300 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold">Version {update.version}</h3>
                        <div className="flex gap-2">
                          <span className="text-sm text-base-content/60">{update.date}</span>
                          {update.important && (
                            <div className="badge badge-warning badge-sm">Important</div>
                          )}
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm">
                        {update.changes.map((change, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircleIcon className="size-4 text-success mt-0.5 flex-shrink-0" />
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <button className="btn btn-ghost btn-sm w-full mt-4">
                  View All Updates
                </button>
              </div>
            </div>

            {/* Policy Content */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="card-title text-lg">
                    {activeSection === 'all' ? 'Complete Privacy Policy' : policySections[activeSection]?.title}
                    <span className="text-base font-normal text-base-content/60 ml-2">
                      ({filteredPolicyItems.length} items)
                    </span>
                  </h2>
                  
                  <div className="flex gap-2">
                    <button className="btn btn-outline btn-sm gap-2">
                      <FileTextIcon className="size-4" />
                      Print
                    </button>
                  </div>
                </div>

                {filteredPolicyItems.length === 0 ? (
                  <div className="text-center py-8">
                    <HelpCircleIcon className="size-12 text-base-content/40 mx-auto mb-4" />
                    <h3 className="font-semibold text-base-content mb-2">No policy items found</h3>
                    <p className="text-base-content/60 text-sm mb-4">
                      {searchQuery ? "Try different search terms" : "No items in this section"}
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
                  <div className="space-y-6">
                    {filteredPolicyItems.map((item, index) => (
                      <div key={index} className="border border-base-300 rounded-lg p-6 hover:border-primary transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-semibold text-lg text-base-content flex-1">
                            {item.question}
                          </h3>
                          <div className="flex gap-2 ml-4">
                            {getImportanceBadge(item.important)}
                            <div className="badge badge-outline badge-sm">
                              {item.sectionIcon} {item.sectionTitle}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-base-content/70 text-base mb-4 leading-relaxed">
                          {item.answer}
                        </p>
                        
                        <div className="flex justify-between items-center pt-4 border-t border-base-300">
                          <div className="text-sm text-base-content/60">
                            Last updated: {item.lastUpdated}
                          </div>
                          
                          <button 
                            className="btn btn-ghost btn-sm"
                            onClick={() => toggleItem(item.section, item.index)}
                          >
                            {openItems[`${item.section}-${item.index}`] ? 'Show Less' : 'Learn More'}
                            <ChevronDownIcon className={`size-4 transition-transform ${
                              openItems[`${item.section}-${item.index}`] ? 'rotate-180' : ''
                            }`} />
                          </button>
                        </div>

                        {openItems[`${item.section}-${item.index}`] && (
                          <div className="mt-4 p-4 bg-base-200 rounded-lg">
                            <div className="prose prose-sm max-w-none">
                              <p className="text-base-content/70 mb-4">{item.answer}</p>
                              
                              {item.important && (
                                <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg mb-4">
                                  <div className="flex items-center gap-2 text-sm">
                                    <ShieldIcon className="size-4 text-warning" />
                                    <span className="font-semibold">Important Notice</span>
                                  </div>
                                  <p className="text-sm mt-1">
                                    This section contains important information about your privacy rights and data handling practices.
                                  </p>
                                </div>
                              )}
                              
                              <div className="flex gap-2">
                                <button className="btn btn-primary btn-sm">Contact Privacy Team</button>
                                <button className="btn btn-outline btn-sm">Manage Preferences</button>
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
                <h2 className="card-title text-lg mb-4">Contact Our Privacy Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Privacy Office</h3>
                    <div className="space-y-2 text-sm">
                      <p>Email: privacy@conversa.com</p>
                      <p>Phone: +1 (555) 123-PRIVACY</p>
                      <p>Address: 123 Privacy Lane, Data City, DC 12345</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Data Protection Officer</h3>
                    <div className="space-y-2 text-sm">
                      <p>Email: dpo@conversa.com</p>
                      <p>For GDPR-related inquiries</p>
                      <button className="btn btn-primary btn-sm mt-2">Send Secure Message</button>
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

export default PrivacyPolicyPage;