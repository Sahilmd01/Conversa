import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  SearchIcon, 
  FileTextIcon,
  ScaleIcon,
  UserCheckIcon,
  AlertTriangleIcon,
  ShieldIcon,
  ClockIcon,
  BookOpenIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  MailIcon,
  DownloadIcon,
  CheckCircleIcon,
  XCircleIcon,
  UsersIcon,
  CreditCardIcon,
  FlagIcon,
  MessageCircleIcon
} from 'lucide-react';

const TermsOfServicePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('all');
  const [openItems, setOpenItems] = useState({});
  const [acceptedSections, setAcceptedSections] = useState({});

  const toggleItem = (section, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${section}-${index}`]: !prev[`${section}-${index}`]
    }));
  };

  const toggleAcceptance = (section, index) => {
    setAcceptedSections(prev => ({
      ...prev,
      [`${section}-${index}`]: !prev[`${section}-${index}`]
    }));
  };

  const termsSections = {
    'account-terms': {
      title: 'Account Terms',
      icon: '👤',
      description: 'User account requirements and responsibilities',
      color: 'primary',
      count: 5,
      items: [
        {
          question: 'What are the requirements for creating an account?',
          answer: 'You must be at least 13 years old to use Conversa. Users under 18 need parental consent. You must provide accurate information and maintain the security of your account credentials. Each user may only maintain one account.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: true
        },
        {
          question: 'What are my responsibilities for account security?',
          answer: 'You are responsible for maintaining the confidentiality of your password and for all activities under your account. You must immediately notify us of any unauthorized use. We recommend enabling two-factor authentication.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: false
        },
        {
          question: 'Can I transfer my account to someone else?',
          answer: 'Accounts are non-transferable. You may not sell, trade, or transfer your Conversa account to any other person without our explicit written permission.',
          lastUpdated: '2024-01-15',
          required: false,
          acceptance: false
        },
        {
          question: 'What happens if I violate account terms?',
          answer: 'We reserve the right to suspend or terminate accounts that violate our terms, including fake profiles, spam accounts, or accounts created to circumvent previous bans.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: true
        },
        {
          question: 'How do I delete my account?',
          answer: 'You may delete your account at any time through account settings. Account deletion is permanent and removes your data from our active systems, though some data may be retained for legal purposes.',
          lastUpdated: '2024-01-15',
          required: false,
          acceptance: false
        }
      ]
    },
    'user-conduct': {
      title: 'User Conduct',
      icon: '📝',
      description: 'Rules for using our platform',
      color: 'secondary',
      count: 6,
      items: [
        {
          question: 'What content is prohibited on Conversa?',
          answer: 'Harassment, hate speech, explicit content, illegal activities, spam, misinformation, and content that violates others\' rights. We maintain a zero-tolerance policy for abusive behavior.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: true
        },
        {
          question: 'Can I use Conversa for commercial purposes?',
          answer: 'Personal use only. Commercial use, including tutoring services without our Partner Program approval, is prohibited. You may not use Conversa to solicit business or sell services.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: true
        },
        {
          question: 'Are there restrictions on automated usage?',
          answer: 'No bots, scrapers, or automated systems may access Conversa without permission. API access requires separate agreement and is available only to approved partners.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: false
        },
        {
          question: 'What are the rules for language exchange?',
          answer: 'Be respectful, patient, and constructive. Do not share inappropriate content. Report users who violate community guidelines. Cultural exchange should be educational and appropriate.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: true
        },
        {
          question: 'Can I record conversations?',
          answer: 'Recording conversations without consent violates our terms. Premium recording features require mutual consent and are subject to additional terms and privacy considerations.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: false
        },
        {
          question: 'What about intellectual property?',
          answer: 'You retain rights to your content but grant Conversa license to display and distribute it on our platform. Do not share copyrighted material without permission.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: true
        }
      ]
    },
    'premium-services': {
      title: 'Premium Services',
      icon: '⭐',
      description: 'Terms for paid subscriptions',
      color: 'warning',
      count: 4,
      items: [
        {
          question: 'How do premium subscriptions work?',
          answer: 'Premium is available as monthly, quarterly, or annual subscriptions. Payment is charged at beginning of each period. You can cancel anytime, but refunds are limited to unused portions in certain cases.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: true
        },
        {
          question: 'What is your refund policy?',
          answer: 'We offer full refunds within 7 days of initial subscription. After 7 days, refunds are prorated based on unused service. No refunds for violations of terms.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: true
        },
        {
          question: 'Can I share my premium account?',
          answer: 'Premium accounts are for individual use only. Account sharing is prohibited and may result in termination without refund. Family plans are available separately.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: false
        },
        {
          question: 'How do cancellations work?',
          answer: 'Cancel anytime through account settings. Service continues until end of paid period. No partial refunds for mid-period cancellations except as required by law.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: false
        }
      ]
    },
    'content-ownership': {
      title: 'Content & Ownership',
      icon: '📄',
      description: 'Rights to content and materials',
      color: 'accent',
      count: 3,
      items: [
        {
          question: 'Who owns the content I create?',
          answer: 'You own your original content. By posting, you grant Conversa a worldwide license to use, display, and distribute your content for platform operation and improvement.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: true
        },
        {
          question: 'Can I use Conversa content elsewhere?',
          answer: 'Our platform, design, and proprietary content are protected. You may not copy, modify, or distribute Conversa content without explicit written permission.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: false
        },
        {
          question: 'What about third-party content?',
          answer: 'We respect third-party IP rights. If you believe your rights are violated, contact us with DMCA-compliant notices. We will investigate and take appropriate action.',
          lastUpdated: '2024-01-15',
          required: false,
          acceptance: false
        }
      ]
    },
    'liability': {
      title: 'Liability & Disclaimers',
      icon: '⚖️',
      description: 'Legal responsibilities and limits',
      color: 'error',
      count: 4,
      items: [
        {
          question: 'What are the service disclaimers?',
          answer: 'We provide Conversa "as is" without warranties. We don\'t guarantee uninterrupted service or specific results. Language learning outcomes depend on individual effort and practice.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: true
        },
        {
          question: 'What is your liability limit?',
          answer: 'Our total liability is limited to the amount you paid for services in the past 6 months. We are not liable for indirect, incidental, or consequential damages.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: true
        },
        {
          question: 'How do you handle disputes?',
          answer: ' disputes through informal negotiation first. If unresolved, binding arbitration in accordance with our dispute resolution process. Class actions are waived.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: true
        },
        {
          question: 'What about third-party interactions?',
          answer: 'We are not responsible for user conduct or content. You interact with other users at your own risk. Report inappropriate behavior immediately.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: true
        }
      ]
    },
    'termination': {
      title: 'Termination',
      icon: '🚪',
      description: 'Service termination conditions',
      color: 'neutral',
      count: 3,
      items: [
        {
          question: 'How can I terminate my account?',
          answer: 'You may terminate at any time through account settings. We may terminate for violations, non-payment, or service discontinuation with 30 days notice when possible.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: false
        },
        {
          question: 'What happens after termination?',
          answer: 'Your right to use Conversa ends immediately. We may retain some data as required by law or for legitimate business purposes, but will remove personal data promptly.',
          lastUpdated: '2024-01-15',
          required: true,
          acceptance: false
        },
        {
          question: 'Can accounts be reinstated?',
          answer: 'Terminated accounts may be reinstated at our discretion, typically for minor violations after appeal. Serious violations result in permanent bans.',
          lastUpdated: '2024-01-15',
          required: false,
          acceptance: false
        }
      ]
    }
  };

  const recentChanges = [
    {
      version: '3.2',
      date: 'January 15, 2024',
      changes: [
        'Updated dispute resolution process',
        'Clarified premium subscription terms',
        'Enhanced content moderation policies'
      ],
      important: true
    },
    {
      version: '3.1',
      date: 'October 30, 2023',
      changes: [
        'Added family plan terms',
        'Updated payment processing terms',
        'Minor clarifications on user conduct'
      ],
      important: false
    },
    {
      version: '3.0',
      date: 'July 15, 2023',
      changes: [
        'Major revision for GDPR compliance',
        'New premium features terms',
        'Updated arbitration agreement'
      ],
      important: true
    }
  ];

  const userAcceptance = {
    accepted: 15,
    pending: 3,
    required: 18
  };

  const allTermsItems = Object.entries(termsSections).flatMap(([section, data]) =>
    data.items.map((item, index) => ({
      ...item,
      section,
      sectionTitle: data.title,
      sectionIcon: data.icon,
      sectionColor: data.color,
      index
    }))
  );

  const filteredTermsItems = searchQuery 
    ? allTermsItems.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeSection === 'all'
    ? allTermsItems
    : termsSections[activeSection]?.items || [];

  const requiredAcceptances = allTermsItems.filter(item => item.acceptance);
  const importantChanges = recentChanges.filter(change => change.important);

  const getRequirementBadge = (required) => {
    return required ? (
      <div className="badge badge-error badge-sm">REQUIRED</div>
    ) : (
      <div className="badge badge-outline badge-sm">Optional</div>
    );
  };

  const getAcceptanceBadge = (section, index) => {
    const isAccepted = acceptedSections[`${section}-${index}`];
    return isAccepted ? (
      <div className="badge badge-success badge-sm gap-1">
        <CheckCircleIcon className="size-3" />
        Accepted
      </div>
    ) : (
      <div className="badge badge-warning badge-sm gap-1">
        <ClockIcon className="size-3" />
        Pending
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-base-content">
              Terms of Service
            </h1>
            <p className="text-base-content/60">
              Effective date: January 15, 2024
            </p>
          </div>
          <div className="flex gap-3">
            <button className="btn btn-outline gap-2">
              <DownloadIcon className="size-5" />Download PDF
            </button>
            <button className="btn btn-primary gap-2">
              <UserCheckIcon className="size-5" />
              Accept All Terms
            </button>
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
                    placeholder="Search terms..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input input-bordered w-full pl-10 pr-4 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Terms Sections</h3>
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
                      <span className="text-sm opacity-70">{allTermsItems.length}</span>
                    </div>
                  </button>
                  
                  {Object.entries(termsSections).map(([key, section]) => (
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

            {/* Acceptance Progress */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">
                  <UserCheckIcon className="size-4 inline mr-2" />
                  Your Acceptance
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Required Terms</span>
                    <span className="font-semibold">{userAcceptance.accepted}/{userAcceptance.required}</span>
                  </div>
                  <progress 
                    className="progress progress-primary w-full" 
                    value={userAcceptance.accepted} 
                    max={userAcceptance.required}
                  ></progress>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <div className="font-semibold">{userAcceptance.accepted}</div>
                      <div className="text-base-content/60">Accepted</div>
                    </div>
                    <div>
                      <div className="font-semibold">{userAcceptance.pending}</div>
                      <div className="text-base-content/60">Pending</div>
                    </div>
                    <div>
                      <div className="font-semibold">{userAcceptance.required}</div>
                      <div className="text-base-content/60">Required</div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary btn-sm w-full mt-4">
                  Review Required Terms
                </button>
              </div>
            </div>

            {/* Important Changes */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">
                  <AlertTriangleIcon className="size-4 inline mr-2 text-warning" />
                  Recent Changes
                </h3>
                <div className="space-y-3">
                  {importantChanges.map((change, index) => (
                    <div key={index} className="p-3 border border-warning/20 bg-warning/5 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-sm">v{change.version}</span>
                        <div className="badge badge-warning badge-sm">UPDATED</div>
                      </div>
                      <p className="text-xs text-base-content/60 mb-2">{change.date}</p>
                      <ul className="text-xs space-y-1">
                        {change.changes.map((changeItem, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <div className="w-1 h-1 bg-warning rounded-full mt-1.5 flex-shrink-0" />
                            {changeItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <button className="btn btn-outline btn-sm w-full mt-4">
                  View All Changes
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Quick Actions</h3>
                <div className="space-y-2 text-sm">
                  <button className="w-full text-left p-2 hover:bg-base-200 rounded-lg flex items-center gap-3">
                    <FileTextIcon className="size-4 text-primary" />
                    <span>Export Acceptance Record</span>
                  </button>
                  <button className="w-full text-left p-2 hover:bg-base-200 rounded-lg flex items-center gap-3">
                    <HelpCircleIcon className="size-4 text-secondary" />
                    <span>Get Legal Help</span>
                  </button>
                  <button className="w-full text-left p-2 hover:bg-base-200 rounded-lg flex items-center gap-3">
                    <MailIcon className="size-4 text-accent" />
                    <span>Contact Legal Team</span>
                  </button>
                </div>
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
                      <ScaleIcon className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{allTermsItems.length}</div>
                      <div className="text-sm text-base-content/60">Total Clauses</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-error/10 rounded-lg">
                      <AlertTriangleIcon className="size-5 text-error" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{requiredAcceptances.length}</div>
                      <div className="text-sm text-base-content/60">Required</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <ClockIcon className="size-5 text-success" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">30</div>
                      <div className="text-sm text-base-content/60">Days to Review</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Required Acceptances */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
              <div className="card-body">
                <h2 className="card-title text-lg mb-4">
                  <UserCheckIcon className="size-5 text-warning" />
                  Required Acceptances
                  <span className="text-base font-normal text-base-content/60 ml-2">
                    ({requiredAcceptances.length} items)
                  </span>
                </h2>
                <div className="space-y-4">
                  {requiredAcceptances.slice(0, 3).map((item, index) => (
                    <div key={index} className="border border-warning/20 rounded-lg p-4 bg-warning/5">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-sm flex-1">{item.question}</h3>
                        <div className="flex gap-2">
                          {getAcceptanceBadge(item.section, item.index)}
                          {getRequirementBadge(item.required)}
                        </div>
                      </div>
                      <p className="text-base-content/70 text-sm mb-3 line-clamp-2">
                        {item.answer}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-base-content/60">
                          From: {item.sectionTitle}
                        </span>
                        <div className="flex gap-2">
                          <button 
                            className="btn btn-success btn-xs"
                            onClick={() => toggleAcceptance(item.section, item.index)}
                          >
                            {acceptedSections[`${item.section}-${item.index}`] ? 'Revoke' : 'Accept'}
                          </button>
                          <button 
                            className="btn btn-ghost btn-xs"
                            onClick={() => toggleItem(item.section, item.index)}
                          >
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn btn-outline btn-sm w-full mt-4">
                  View All Required Terms
                </button>
              </div>
            </div>

            {/* Terms Content */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="card-title text-lg">
                    {activeSection === 'all' ? 'Complete Terms of Service' : termsSections[activeSection]?.title}
                    <span className="text-base font-normal text-base-content/60 ml-2">
                      ({filteredTermsItems.length} clauses)
                    </span>
                  </h2>
                  
                  <div className="flex gap-2">
                    <button className="btn btn-outline btn-sm gap-2">
                      <FileTextIcon className="size-4" />
                      Print
                    </button>
                  </div>
                </div>

                {filteredTermsItems.length === 0 ? (
                  <div className="text-center py-8">
                    <HelpCircleIcon className="size-12 text-base-content/40 mx-auto mb-4" />
                    <h3 className="font-semibold text-base-content mb-2">No terms found</h3>
                    <p className="text-base-content/60 text-sm mb-4">
                      {searchQuery ? "Try different search terms" : "No terms in this section"}
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
                    {filteredTermsItems.map((item, index) => (
                      <div key={index} className="border border-base-300 rounded-lg p-6 hover:border-primary transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-semibold text-lg text-base-content flex-1">
                            {item.question}
                          </h3>
                          <div className="flex gap-2 ml-4 flex-wrap justify-end">
                            {getRequirementBadge(item.required)}
                            {item.acceptance && getAcceptanceBadge(item.section, item.index)}
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
                            {item.acceptance && (
                              <span className="ml-3">
                                • {acceptedSections[`${item.section}-${item.index}`] ? 'Accepted' : 'Not Accepted'}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex gap-2">
                            {item.acceptance && (
                              <button 
                                className={`btn btn-sm ${
                                  acceptedSections[`${item.section}-${item.index}`] 
                                    ? 'btn-error' 
                                    : 'btn-success'
                                }`}
                                onClick={() => toggleAcceptance(item.section, item.index)}
                              >
                                {acceptedSections[`${item.section}-${item.index}`] 
                                  ? 'Revoke Acceptance' 
                                  : 'Accept Term'
                                }
                              </button>
                            )}
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
                        </div>

                        {openItems[`${item.section}-${item.index}`] && (
                          <div className="mt-4 p-4 bg-base-200 rounded-lg">
                            <div className="prose prose-sm max-w-none">
                              <p className="text-base-content/70 mb-4">{item.answer}</p>
                              
                              {item.required && (
                                <div className="p-3 bg-error/10 border border-error/20 rounded-lg mb-4">
                                  <div className="flex items-center gap-2 text-sm">
                                    <AlertTriangleIcon className="size-4 text-error" />
                                    <span className="font-semibold">Required Acceptance</span>
                                  </div>
                                  <p className="text-sm mt-1">
                                    You must accept this term to continue using Conversa services.
                                  </p>
                                </div>
                              )}
                              
                              <div className="flex gap-2 flex-wrap">
                                {item.acceptance && (
                                  <button 
                                    className={`btn btn-sm ${
                                      acceptedSections[`${item.section}-${item.index}`] 
                                        ? 'btn-error' 
                                        : 'btn-success'
                                    }`}
                                    onClick={() => toggleAcceptance(item.section, item.index)}
                                  >
                                    {acceptedSections[`${item.section}-${item.index}`] 
                                      ? 'Revoke Acceptance' 
                                      : 'Accept This Term'
                                    }
                                  </button>
                                )}
                                <button className="btn btn-outline btn-sm">Get Legal Advice</button>
                                <button className="btn btn-ghost btn-sm">Report Issue</button>
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

            {/* Legal Contact */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mt-6">
              <div className="card-body">
                <h2 className="card-title text-lg mb-4">Legal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Legal Department</h3>
                    <div className="space-y-2 text-sm">
                      <p>Email: legal@conversa.com</p>
                      <p>Phone: +1 (555) 123-LEGAL</p>
                      <p>Address: 123 Legal Lane, Compliance City, CC 12345</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Dispute Resolution</h3>
                    <div className="space-y-2 text-sm">
                      <p>Arbitration: American Arbitration Association</p>
                      <p>Governing Law: State of Delaware</p>
                      <button className="btn btn-primary btn-sm mt-2">View Dispute Process</button>
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

export default TermsOfServicePage;