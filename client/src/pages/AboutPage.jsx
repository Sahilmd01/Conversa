import React, { useState } from 'react';
import { Link } from 'react-router';
import { 
  SearchIcon, 
  UsersIcon,
  GlobeIcon,
  TargetIcon,
  AwardIcon,
  HeartIcon,
  StarIcon,
  TrendingUpIcon,
  ClockIcon,
  MessageCircleIcon,
  VideoIcon,
  BookOpenIcon,
  ChevronDownIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  PlayIcon,
  PauseIcon
} from 'lucide-react';

const AboutPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('all');
  const [openItems, setOpenItems] = useState({});
  const [playingVideo, setPlayingVideo] = useState(null);

  const toggleItem = (section, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${section}-${index}`]: !prev[`${section}-${index}`]
    }));
  };

  const toggleVideo = (videoId) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  const aboutSections = {
    'our-story': {
      title: 'Our Story',
      icon: '📖',
      description: 'The journey of Conversa',
      color: 'primary',
      count: 4,
      items: [
        {
          question: 'How did Conversa start?',
          answer: 'Founded in 2020 by language enthusiasts and tech innovators, Conversa emerged from a simple observation: traditional language learning methods were missing authentic human connection. Our founders, Maria Chen and Alex Rodriguez, met while struggling to practice Spanish and Mandarin respectively. They envisioned a platform where technology enhances rather than replaces real human interaction in language learning.',
          year: '2020',
          milestone: true
        },
        {
          question: 'What makes Conversa different?',
          answer: 'Unlike other language apps that focus on solo learning, Conversa prioritizes genuine human connection. Our AI-powered matching connects you with ideal language partners based on shared interests, learning goals, and complementary skills. We believe the best way to learn a language is through meaningful conversations with real people.',
          year: '2021',
          milestone: false
        },
        {
          question: 'Our growth journey',
          answer: 'From our first 100 users in 2020 to over 2 million language learners today, Conversa has grown into a global community. We\'ve expanded from 10 to 100+ languages, launched premium features, and built a team of 50+ passionate individuals across 15 countries.',
          year: '2022',
          milestone: true
        },
        {
          question: 'Where are we headed?',
          answer: 'We\'re working on advanced AI conversation coaches, virtual reality language immersion, and expanding our professional language courses. Our vision is to make language learning accessible, enjoyable, and effective for everyone worldwide.',
          year: '2024',
          milestone: true
        }
      ]
    },
    'our-team': {
      title: 'Our Team',
      icon: '👥',
      description: 'Meet the people behind Conversa',
      color: 'secondary',
      count: 5,
      items: [
        {
          question: 'Leadership Team',
          answer: 'Our diverse leadership team brings together expertise in technology, education, linguistics, and business. From Silicon Valley tech veterans to language education specialists, we\'re united by our passion for breaking down language barriers.',
          team: 'executive',
          highlight: true
        },
        {
          question: 'Engineering & Product',
          answer: 'Our tech team builds the robust platform that connects millions of language learners seamlessly. Using cutting-edge WebRTC technology, AI algorithms, and scalable infrastructure, we ensure smooth video calls and intelligent partner matching.',
          team: 'engineering',
          highlight: false
        },
        {
          question: 'Language Experts',
          answer: 'Our team of linguists, teachers, and polyglots ensures that Conversa provides effective language learning experiences. They develop learning materials, create conversation guides, and train our AI systems to provide accurate language support.',
          team: 'education',
          highlight: false
        },
        {
          question: 'Community & Support',
          answer: 'Dedicated to creating a safe, supportive environment, our community team moderates interactions, organizes language events, and provides 24/7 support to ensure every user has a positive experience.',
          team: 'community',
          highlight: false
        },
        {
          question: 'Global Ambassadors',
          answer: 'Our network of 500+ language ambassadors worldwide helps us understand local language learning needs and cultural nuances, ensuring Conversa works effectively across different cultures and regions.',
          team: 'ambassadors',
          highlight: true
        }
      ]
    },
    'our-mission': {
      title: 'Our Mission',
      icon: '🎯',
      description: 'What drives us forward',
      color: 'accent',
      count: 3,
      items: [
        {
          question: 'Our Core Mission',
          answer: 'To make language learning accessible, authentic, and enjoyable by connecting people through meaningful conversations. We believe that language is not just about words, but about understanding cultures and building bridges between people.',
          principle: 'connection',
          core: true
        },
        {
          question: 'Our Vision for the Future',
          answer: 'A world where anyone can learn any language through authentic human connection, breaking down barriers and fostering global understanding. We envision Conversa as the leading platform for cross-cultural communication and language exchange.',
          principle: 'innovation',
          core: true
        },
        {
          question: 'Our Values',
          answer: 'Authenticity in interactions, innovation in technology, inclusivity in community, and excellence in user experience. These values guide every decision we make and every feature we build.',
          principle: 'values',
          core: true
        }
      ]
    },
    'achievements': {
      title: 'Achievements',
      icon: '🏆',
      description: 'Milestones and recognition',
      color: 'warning',
      count: 4,
      items: [
        {
          question: 'Industry Recognition',
          answer: 'Winner of the 2023 EdTech Innovation Award, featured in TechCrunch, Forbes, and Wired. Recognized by language education experts for our innovative approach to conversational language learning.',
          award: 'industry',
          year: '2023'
        },
        {
          question: 'User Growth & Impact',
          answer: '2 million+ active users across 150+ countries. 95% user satisfaction rate. Over 50 million conversations facilitated. 100+ languages supported with native speakers.',
          award: 'growth',
          year: '2024'
        },
        {
          question: 'Educational Impact',
          answer: 'Partnered with 50+ universities and educational institutions. Research shows Conversa users show 3x faster speaking fluency improvement compared to traditional methods.',
          award: 'education',
          year: '2023'
        },
        {
          question: 'Technology Excellence',
          answer: 'Built on cutting-edge WebRTC technology with 99.9% uptime. AI-powered matching algorithm with 94% user satisfaction. Available on web, iOS, and Android platforms.',
          award: 'technology',
          year: '2024'
        }
      ]
    }
  };

  const teamMembers = [
    {
      name: 'Maria Chen',
      role: 'Co-Founder & CEO',
      image: '👩‍💼',
      bio: 'Former Google product manager and passionate polyglot. Speaks 5 languages fluently.',
      expertise: ['Product Strategy', 'Language Education', 'AI Technology'],
      funFact: 'Learned Japanese by watching anime'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Co-Founder & CTO',
      image: '👨‍💻',
      bio: 'Ex-Facebook engineer with PhD in Computational Linguistics. Built first language app at 16.',
      expertise: ['AI/ML', 'WebRTC', 'Scalable Systems'],
      funFact: 'Can code in 10 programming languages'
    },
    {
      name: 'Dr. Sarah Johnson',
      role: 'Head of Language Education',
      image: '👩‍🏫',
      bio: 'PhD in Applied Linguistics, 15 years teaching experience. Former university professor.',
      expertise: ['Curriculum Design', 'Language Acquisition', 'Teacher Training'],
      funFact: 'Speaks 8 languages, learning her 9th'
    },
    {
      name: 'David Kim',
      role: 'Head of Community',
      image: '👨‍💼',
      bio: 'Built communities for major tech companies. Passionate about creating safe, inclusive spaces.',
      expertise: ['Community Building', 'User Safety', 'Global Operations'],
      funFact: 'Has lived in 6 different countries'
    }
  ];

  const companyStats = [
    { number: '2M+', label: 'Active Users', icon: '👥', color: 'primary' },
    { number: '100+', label: 'Languages', icon: '🌎', color: 'secondary' },
    { number: '50M+', label: 'Conversations', icon: '💬', color: 'accent' },
    { number: '150+', label: 'Countries', icon: '🏳️', color: 'warning' },
    { number: '99.9%', label: 'Uptime', icon: '⚡', color: 'info' },
    { number: '95%', label: 'Satisfaction', icon: '⭐', color: 'success' }
  ];

  const values = [
    {
      icon: '💬',
      title: 'Authentic Connection',
      description: 'We prioritize real human interaction over robotic learning'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We continuously evolve with cutting-edge technology'
    },
    {
      icon: '🌍',
      title: 'Global Community',
      description: 'We celebrate diversity and cross-cultural understanding'
    },
    {
      icon: '🎯',
      title: 'Learning Excellence',
      description: 'We ensure effective, measurable language progress'
    },
    {
      icon: '🛡️',
      title: 'Trust & Safety',
      description: 'We maintain a secure, respectful environment for all'
    },
    {
      icon: '❤️',
      title: 'Passion for Languages',
      description: 'We share a genuine love for languages and cultures'
    }
  ];

  const allAboutItems = Object.entries(aboutSections).flatMap(([section, data]) =>
    data.items.map((item, index) => ({
      ...item,
      section,
      sectionTitle: data.title,
      sectionIcon: data.icon,
      sectionColor: data.color,
      index
    }))
  );

  const filteredAboutItems = searchQuery 
    ? allAboutItems.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeSection === 'all'
    ? allAboutItems
    : aboutSections[activeSection]?.items || [];

  const getMilestoneBadge = (milestone) => {
    return milestone ? (
      <div className="badge badge-primary badge-sm gap-1">
        <AwardIcon className="size-3" />
        Milestone
      </div>
    ) : null;
  };

  const getTeamBadge = (team) => {
    const teamConfig = {
      'executive': { color: 'primary', text: 'Leadership' },
      'engineering': { color: 'secondary', text: 'Engineering' },
      'education': { color: 'accent', text: 'Education' },
      'community': { color: 'info', text: 'Community' },
      'ambassadors': { color: 'warning', text: 'Ambassadors' }
    };
    const config = teamConfig[team] || { color: 'neutral', text: team };
    return <div className={`badge badge-${config.color} badge-sm`}>{config.text}</div>;
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-4">
            About Conversa
          </h1>
          <p className="text-xl text-base-content/60 max-w-2xl mx-auto">
            Connecting the world through language, one conversation at a time. 
            We're building bridges between cultures and making language learning accessible to everyone.
          </p>
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
                    placeholder="Search about us..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input input-bordered w-full pl-10 pr-4 py-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* About Sections */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">About Sections</h3>
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
                      <span className="text-sm opacity-70">{allAboutItems.length}</span>
                    </div>
                  </button>
                  
                  {Object.entries(aboutSections).map(([key, section]) => (
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

            {/* Company Stats */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">By The Numbers</h3>
                <div className="space-y-4">
                  {companyStats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3 p-2">
                      <div className={`text-2xl`}>{stat.icon}</div>
                      <div className="flex-1">
                        <div className="font-bold text-lg">{stat.number}</div>
                        <div className="text-sm text-base-content/60">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Our Values</h3>
                <div className="space-y-3">
                  {values.slice(0, 3).map((value, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 hover:bg-base-200 rounded-lg">
                      <div className="text-xl">{value.icon}</div>
                      <div>
                        <div className="font-medium text-sm">{value.title}</div>
                        <div className="text-xs text-base-content/60">{value.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn btn-outline btn-sm w-full mt-4">
                  View All Values
                </button>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body p-4">
                <h3 className="font-semibold text-base-content mb-4">Get In Touch</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MailIcon className="size-4 text-primary" />
                    <span>hello@conversa.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="size-4 text-secondary" />
                    <span>+1 (555) 123-CONVERSA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="size-4 text-accent" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                <button className="btn btn-primary btn-sm w-full mt-4">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Video Section */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
              <div className="card-body p-0">
                <div className="relative bg-gradient-to-r from-primary to-secondary text-primary-content p-8 rounded-t-lg">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl font-bold mb-4">Our Story in 2 Minutes</h2>
                    <p className="opacity-90 mb-6">
                      Watch how Conversa evolved from a simple idea to a global platform connecting millions of language learners.
                    </p>
                    <button className="btn btn-accent gap-2">
                      <PlayIcon className="size-5" />
                      Watch Our Story
                    </button>
                  </div>
                </div>
                
                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6">
                  {companyStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-base-content/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6">
                  <UsersIcon className="size-6 text-primary" />
                  Meet Our Leadership Team
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="border border-base-300 rounded-lg p-6 hover:border-primary transition-colors">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-4xl">{member.image}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-primary font-medium">{member.role}</p>
                          <p className="text-sm text-base-content/70 mt-2">{member.bio}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, idx) => (
                              <div key={idx} className="badge badge-outline badge-sm">
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="p-3 bg-base-200 rounded-lg">
                          <h4 className="font-semibold text-sm mb-1">Fun Fact</h4>
                          <p className="text-sm text-base-content/70">{member.funFact}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <button className="btn btn-outline">
                    View Full Team
                  </button>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="card bg-base-100 border border-base-300 shadow-sm mb-6">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6">
                  <HeartIcon className="size-6 text-accent" />
                  Our Values & Culture
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="border border-base-300 rounded-lg p-4 text-center hover:border-accent transition-colors">
                      <div className="text-3xl mb-3">{value.icon}</div>
                      <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                      <p className="text-base-content/70 text-sm">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Content */}
            <div className="card bg-base-100 border border-base-300 shadow-sm">
              <div className="card-body">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="card-title text-lg">
                    {activeSection === 'all' ? 'All About Conversa' : aboutSections[activeSection]?.title}
                    <span className="text-base font-normal text-base-content/60 ml-2">
                      ({filteredAboutItems.length} items)
                    </span>
                  </h2>
                </div>

                {filteredAboutItems.length === 0 ? (
                  <div className="text-center py-8">
                    <UsersIcon className="size-12 text-base-content/40 mx-auto mb-4" />
                    <h3 className="font-semibold text-base-content mb-2">No content found</h3>
                    <p className="text-base-content/60 text-sm mb-4">
                      {searchQuery ? "Try different search terms" : "No content in this section"}
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
                    {filteredAboutItems.map((item, index) => (
                      <div key={index} className="border border-base-300 rounded-lg p-6 hover:border-primary transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-semibold text-lg text-base-content flex-1">
                            {item.question}
                          </h3>
                          <div className="flex gap-2 ml-4">
                            {getMilestoneBadge(item.milestone)}
                            {item.team && getTeamBadge(item.team)}
                            {item.year && (
                              <div className="badge badge-outline badge-sm">
                                {item.year}
                              </div>
                            )}
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
                            {item.year && `Est. ${item.year}`}
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
                              
                              {item.milestone && (
                                <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg mb-4">
                                  <div className="flex items-center gap-2 text-sm">
                                    <AwardIcon className="size-4 text-primary" />
                                    <span className="font-semibold">Key Milestone</span>
                                  </div>
                                  <p className="text-sm mt-1">
                                    This marked a significant achievement in our company's journey.
                                  </p>
                                </div>
                              )}
                              
                              <div className="flex gap-2">
                                <button className="btn btn-primary btn-sm">Share Story</button>
                                <button className="btn btn-outline btn-sm">Learn More</button>
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

            {/* Call to Action */}
            <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-sm mt-6">
              <div className="card-body text-center">
                <h2 className="card-title text-2xl justify-center mb-4">
                  Join Our Journey
                </h2>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  Be part of our mission to connect the world through language. 
                  Whether you're a language learner, teacher, or just passionate about cultural exchange, 
                  there's a place for you in the Conversa community.
                </p>
                <div className="flex gap-3 justify-center">
                  <button className="btn btn-accent gap-2">
                    <UsersIcon className="size-5" />
                    Join Community
                  </button>
                  <button className="btn btn-outline btn-accent gap-2">
                    <MailIcon className="size-5" />
                    Partner With Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;