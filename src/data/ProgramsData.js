import { FiScissors, FiMonitor, FiMap, FiUsers, FiShield, FiSun, FiFeather, FiBook, FiHome, FiFlag, FiBookOpen, FiHeart, FiDroplet, FiClipboard, FiLayers, FiRefreshCw, FiDollarSign, FiBriefcase, FiMessageSquare, FiGlobe, FiTrendingUp, FiAward, FiSmile, FiStar, FiCompass, FiCoffee, FiTool, FiTablet, FiCamera, FiSliders, FiThumbsUp, FiBattery } from "react-icons/fi";
import { IoWaterOutline, IoPeopleOutline } from "react-icons/io5";
import homeBg from '../assets/home-bg.png';
import abt2 from '../assets/abt-2.png';
import abt3 from '../assets/abt-3.png';

const programsData = [
  {
    id: 'stitches',
    title: 'Empowerment Stitches',
    icon: FiScissors,
    image: homeBg,
    gradient: null,
    subtitle: 'Vocational Training & Entrepreneurship',
    description: 'Empowering women and youth with market-relevant skills in fashion design, tailoring, and artisan bag production. We go beyond technical skills by providing business incubation, mentorship, and counseling to ensure long-term success.',
    points: [
      'Market-relevant skills: sewing, tailoring',
      'Business incubation & entrepreneurship',
      'Sustainable fashion using recycled materials'
    ],
    stats: [
      { value: '500+', label: 'Graduates' },
      { value: '85%', label: 'Employment Rate' },
      { value: '120', label: 'Businesses Started' }
    ],
    keyFeatures: [
      'Comprehensive tailoring & design curriculum',
      'Business management & financial literacy training',
      'Access to startup capital & equipment',
      'Sustainable fashion using recycled materials'
    ]
  },
  {
    id: 'water',
    title: 'Clean Water & Food Security',
    icon: IoWaterOutline,
    image: abt2,
    gradient: null,
    subtitle: 'Health, Hygiene & Sustainable Agriculture',
    description: 'Tackling the root causes of poverty through access to clean water and sustainable food sources. We install household water filters, build community tanks, and train families in climate-smart farming techniques.',
    points: [
      'Household water filters for safe drinking',
      'Community storage tanks',
      'Drip irrigation & climate-smart farming'
    ],
    stats: [
      { value: '10k+', label: 'People Served' },
      { value: '50', label: 'Community Tanks' },
      { value: '200', label: 'Farms Established' }
    ],
    keyFeatures: [
      'Household bio-sand water filters',
      'Rainwater harvesting systems',
      'Drip irrigation technology',
      'Organic farming workshops'
    ]
  },
  {
    id: 'leadership',
    title: 'Child & Youth Leadership Hub',
    icon: IoPeopleOutline,
    image: abt3,
    gradient: null,
    subtitle: 'Mentorship, Education & Civic Engagement',
    description: 'Nurturing the next generation of changemakers. Our hub provides a safe space for youth to develop leadership skills, improve financial literacy, and engage in critical discussions about social issues affecting their communities.',
    points: [
      'Public speaking & financial literacy',
      'Mentorship with role models',
      'Forums on climate action & equality'
    ],
    stats: [
      { value: '1,200', label: 'Youth Engaged' },
      { value: '40+', label: 'School Partners' },
      { value: '25', label: 'Youth Forums' }
    ],
    keyFeatures: [
      'Public speaking & debate clubs',
      'Financial literacy & career guidance',
      'Mentorship from industry professionals',
      'Community service projects'
    ]
  },
  {
    id: 'tech-for-good-lab',
    title: 'Tech-for-Good Lab',
    icon: FiMonitor,
    image: null,
    gradient: 'from-blue-600 to-indigo-700',
    subtitle: 'Bridging the Digital Divide',
    description: 'Bridging the digital divide by equipping youth and women with high-demand digital skills and AI-driven productivity tools.',
    points: [
      'Coding & web design workshops',
      'AI tools literacy training',
      'Digital entrepreneurship mentorship'
    ],
    stats: [
      { value: '3,500+', label: 'Youth Trained' },
      { value: '25', label: 'Community Labs' },
      { value: '70%', label: 'Job Placement Rate' }
    ],
    keyFeatures: [
      'Full-stack web development bootcamps',
      'AI and machine learning literacy',
      'Digital entrepreneurship mentorship',
      'Industry-certification pathways'
    ]
  },
  {
    id: 'pastoralist-resilience',
    title: 'Pastoralist Resilience',
    icon: FiMap,
    image: null,
    gradient: 'from-emerald-700 to-green-800',
    subtitle: 'Climate Adaptation for Pastoral Communities',
    description: 'Specialized support for pastoralist communities to monitor climate risks and improve livestock management systems.',
    points: [
      'Climate early-warning systems',
      'Sustainable grazing land management',
      'Mobile-based weather tracking'
    ],
    stats: [
      { value: '8,000+', label: 'Pastoralists Reached' },
      { value: '120', label: 'Communities Served' },
      { value: '40%', label: 'Livestock Loss Reduced' }
    ],
    keyFeatures: [
      'Climate early-warning alert systems',
      'Sustainable grazing land management',
      'Mobile-based weather tracking tools',
      'Veterinary support networks'
    ]
  },
  {
    id: 'menengage-network',
    title: 'MenEngage Network',
    icon: FiUsers,
    image: null,
    gradient: 'from-green-700 to-emerald-800',
    subtitle: 'Engaging Men as Allies',
    description: 'Focused forums and workshops to mobilize men and boys as active allies in GBV prevention and community safety.',
    points: [
      'Healthy masculinity workshops',
      'Community safety advocacy',
      'Peer-to-peer accountability circles'
    ],
    stats: [
      { value: '2,100+', label: 'Men Engaged' },
      { value: '45', label: 'Community Forums' },
      { value: '60%', label: 'GBV Reporting Up' }
    ],
    keyFeatures: [
      'Healthy masculinity and gender equality workshops',
      'Community safety advocacy campaigns',
      'Peer-to-peer accountability circles',
      'Fatherhood engagement programs'
    ]
  },
  {
    id: 'gbv-safe-haven',
    title: 'GBV Safe Haven',
    icon: FiShield,
    image: null,
    gradient: 'from-green-800 to-emerald-900',
    subtitle: 'Survivor-Centered Support',
    description: 'Integrated survivor-centered support, including confidential referral pathways and psychosocial therapy.',
    points: [
      'Legal aid & counseling',
      'Community awareness forums',
      'Safe space access'
    ],
    stats: [
      { value: '1,500+', label: 'Survivors Supported' },
      { value: '12', label: 'Safe Havens' },
      { value: '95%', label: 'Recovery Rate' }
    ],
    keyFeatures: [
      'Confidential legal aid and counseling',
      'Psychosocial therapy programs',
      'Community awareness forums',
      'Emergency safe space access'
    ]
  },
  {
    id: 'climate-resilience-hub',
    title: 'Climate Resilience Hub',
    icon: FiSun,
    image: null,
    gradient: 'from-amber-600 to-orange-700',
    subtitle: 'Women-Led Climate Action',
    description: 'Women-led community hubs focusing on clean energy access and climate-smart agricultural training.',
    points: [
      'Solar energy installation',
      'Climate finance advocacy',
      'Risk monitoring training'
    ],
    stats: [
      { value: '5,000+', label: 'Women Trained' },
      { value: '80', label: 'Hubs Established' },
      { value: '300', label: 'Solar Units Installed' }
    ],
    keyFeatures: [
      'Solar energy installation and maintenance',
      'Climate finance advocacy training',
      'Risk monitoring and early warning systems',
      'Clean energy entrepreneurship support'
    ]
  },
  {
    id: 'restoration-network',
    title: 'Restoration Network',
    icon: FiFeather,
    image: null,
    gradient: 'from-green-600 to-emerald-700',
    subtitle: 'Large-Scale Environmental Restoration',
    description: 'Large-scale environmental initiatives focusing on native tree nursery development and land stewardship.',
    points: [
      'Degraded land restoration',
      'Riverbank protection',
      'Biodiversity research'
    ],
    stats: [
      { value: '50k+', label: 'Trees Planted' },
      { value: '500', label: 'Acres Restored' },
      { value: '15', label: 'Nurseries Established' }
    ],
    keyFeatures: [
      'Native tree nursery development',
      'Degraded land restoration programs',
      'Riverbank protection initiatives',
      'Biodiversity monitoring and research'
    ]
  },
  {
    id: 'survivor-legal-aid-clinic',
    title: 'Survivor Legal Aid Clinic',
    icon: FiBook,
    image: null,
    gradient: 'from-teal-700 to-green-800',
    subtitle: 'Pro-Bono Legal Representation',
    description: 'Providing pro-bono legal representation and court support for GBV survivors.',
    points: [
      'Paralegal training',
      'Court attendance advocacy',
      'Rights awareness clinics'
    ],
    stats: [
      { value: '800+', label: 'Cases Handled' },
      { value: '90%', label: 'Case Resolution' },
      { value: '25', label: 'Paralegals Trained' }
    ],
    keyFeatures: [
      'Pro-bono legal representation',
      'Paralegal training and certification',
      'Court attendance and advocacy support',
      'Rights awareness community clinics'
    ]
  },
  {
    id: 'community-safe-space-network',
    title: 'Community Safe-Space Network',
    icon: FiHome,
    image: null,
    gradient: 'from-green-600 to-teal-700',
    subtitle: 'Secure Community-Hosted Spaces',
    description: 'Establishing and managing secure, community-hosted physical safe-spaces for survivors.',
    points: [
      '24/7 emergency response',
      'Mental health counseling',
      'Shelter referrals'
    ],
    stats: [
      { value: '3,000+', label: 'Survivors Reached' },
      { value: '30', label: 'Safe Spaces' },
      { value: '24/7', label: 'Emergency Response' }
    ],
    keyFeatures: [
      '24/7 crisis emergency response',
      'Mental health counseling services',
      'Temporary shelter referrals',
      'Community-hosted safe-space management'
    ]
  },
  {
    id: 'youth-led-gbv-prevention',
    title: 'Youth-Led GBV Prevention',
    icon: FiFlag,
    image: null,
    gradient: 'from-emerald-600 to-green-700',
    subtitle: 'Peer-to-Peer GBV Prevention',
    description: 'Equipping students as peer-mentors to identify and report abuse in educational institutions.',
    points: [
      'School club formation',
      'Anti-bullying workshops',
      'Reporting protocols training'
    ],
    stats: [
      { value: '4,000+', label: 'Students Reached' },
      { value: '60', label: 'School Clubs' },
      { value: '200', label: 'Peer Mentors' }
    ],
    keyFeatures: [
      'Student-led school club formation',
      'Anti-bullying and abuse prevention workshops',
      'Confidential reporting protocol training',
      'Peer-mentor leadership development'
    ]
  },
  {
    id: 'safe-school-initiatives',
    title: 'Safe School Initiatives',
    icon: FiBookOpen,
    image: null,
    gradient: 'from-cyan-700 to-blue-800',
    subtitle: 'Child-Protection in Schools',
    description: 'Developing child-protection policies for local primary and secondary schools.',
    points: [
      'Teacher training on safety',
      'Parent-Teacher advocacy',
      'Hygiene & security audits'
    ],
    stats: [
      { value: '2,500+', label: 'Teachers Trained' },
      { value: '80', label: 'Schools Partnered' },
      { value: '15', label: 'Policies Drafted' }
    ],
    keyFeatures: [
      'Comprehensive teacher safety training',
      'Parent-Teacher advocacy committees',
      'School hygiene and security audits',
      'Child-protection policy development'
    ]
  },
  {
    id: 'elderly-rights-advocacy',
    title: 'Elderly Rights Advocacy',
    icon: FiHeart,
    image: null,
    gradient: 'from-rose-600 to-pink-700',
    subtitle: 'Protecting Elderly Rights',
    description: 'Protecting the rights of the elderly against physical or financial abuse in the community.',
    points: [
      'Legal protection workshops',
      'Health support networking',
      'Social inclusion forums'
    ],
    stats: [
      { value: '1,200+', label: 'Elders Supported' },
      { value: '20', label: 'Legal Clinics' },
      { value: '85%', label: 'Abuse Cases Resolved' }
    ],
    keyFeatures: [
      'Legal protection and rights workshops',
      'Health support and referral networking',
      'Social inclusion intergenerational forums',
      'Financial abuse prevention training'
    ]
  },
  {
    id: 'urban-solar-micro-grids',
    title: 'Urban Solar Micro-Grids',
    icon: FiBattery,
    image: null,
    gradient: 'from-yellow-500 to-orange-600',
    subtitle: 'Clean Energy for Entrepreneurs',
    description: 'Promoting clean, affordable energy for small-scale entrepreneurs and households.',
    points: [
      'Solar kit distribution',
      'Maintenance workshops',
      'Energy literacy training'
    ],
    stats: [
      { value: '6,000+', label: 'Households Powered' },
      { value: '45', label: 'Micro-Grids' },
      { value: '200', label: 'Technicians Trained' }
    ],
    keyFeatures: [
      'Affordable solar kit distribution',
      'Technical maintenance workshops',
      'Community energy literacy training',
      'Micro-grid installation and management'
    ]
  },
  {
    id: 'riverbank-restoration-project',
    title: 'Riverbank Restoration Project',
    icon: FiDroplet,
    image: null,
    gradient: 'from-sky-600 to-cyan-700',
    subtitle: 'Community-Led River Conservation',
    description: 'Community-led efforts to plant native vegetation to prevent erosion and pollution.',
    points: [
      'Tree seedling propagation',
      'Water quality monitoring',
      'Soil erosion workshops'
    ],
    stats: [
      { value: '15km', label: 'Riverbanks Protected' },
      { value: '30k+', label: 'Seedlings Planted' },
      { value: '8', label: 'Communities Involved' }
    ],
    keyFeatures: [
      'Native tree seedling propagation',
      'Water quality monitoring programs',
      'Soil erosion prevention workshops',
      'Community-led riparian management'
    ]
  },
  {
    id: 'climate-policy-hub',
    title: 'Climate Policy Hub',
    icon: FiClipboard,
    image: null,
    gradient: 'from-green-500 to-emerald-600',
    subtitle: 'Community Climate Advocacy',
    description: 'Training local leaders to represent community interests in county climate budget processes.',
    points: [
      'Policy briefing workshops',
      'Budget tracking training',
      'Local climate forums'
    ],
    stats: [
      { value: '500+', label: 'Leaders Trained' },
      { value: '12', label: 'Counties Reached' },
      { value: '35', label: 'Policies Influenced' }
    ],
    keyFeatures: [
      'Climate policy briefing workshops',
      'County budget tracking and analysis',
      'Local community climate forums',
      'Advocacy and representation training'
    ]
  },
  {
    id: 'sustainable-agri-tech-lab',
    title: 'Sustainable Agri-Tech Lab',
    icon: FiLayers,
    image: null,
    gradient: 'from-lime-600 to-green-700',
    subtitle: 'AI-Powered Smart Farming',
    description: 'Teaching small-holder farmers to use AI and sensors for soil and water management.',
    points: [
      'Smart-farming demos',
      'Sensor usage training',
      'Market link facilitation'
    ],
    stats: [
      { value: '2,000+', label: 'Farmers Trained' },
      { value: '150', label: 'Smart Farms' },
      { value: '50%', label: 'Yield Increase' }
    ],
    keyFeatures: [
      'AI-driven smart farming demonstrations',
      'Soil and water sensor training',
      'Market linkage facilitation',
      'Precision agriculture techniques'
    ]
  },
  {
    id: 'waste-to-wealth-initiative',
    title: 'Waste-to-Wealth Initiative',
    icon: FiRefreshCw,
    image: null,
    gradient: 'from-green-700 to-emerald-800',
    subtitle: 'Transforming Waste into Opportunity',
    description: 'Transforming community waste into compost or recycled artisan products.',
    points: [
      'Composting techniques',
      'Circular economy training',
      'Upcycling workshops'
    ],
    stats: [
      { value: '100+', label: 'Tons Processed' },
      { value: '3,000+', label: 'People Engaged' },
      { value: '500', label: 'Jobs Created' }
    ],
    keyFeatures: [
      'Community composting techniques',
      'Circular economy and sustainability training',
      'Artisan upcycling workshops',
      'Waste collection and processing systems'
    ]
  },
  {
    id: 'financial-inclusion-lab',
    title: 'Financial Inclusion Lab',
    icon: FiDollarSign,
    image: null,
    gradient: 'from-emerald-600 to-teal-700',
    subtitle: 'Micro-Finance & Digital Banking',
    description: 'Improving access to micro-finance and digital banking tools for women entrepreneurs.',
    points: [
      'Digital banking workshops',
      'Financial literacy training',
      'Savings group support'
    ],
    stats: [
      { value: '5,000+', label: 'Women Served' },
      { value: '$200k+', label: 'Savings Mobilized' },
      { value: '80%', label: 'Financial Literacy' }
    ],
    keyFeatures: [
      'Digital banking and mobile money workshops',
      'Comprehensive financial literacy training',
      'Community savings group support',
      'Micro-finance access facilitation'
    ]
  },
  {
    id: 'rural-entrepreneurship-hub',
    title: 'Rural Entrepreneurship Hub',
    icon: FiBriefcase,
    image: null,
    gradient: 'from-green-600 to-lime-700',
    subtitle: 'Scaling Rural Small Businesses',
    description: 'Mentoring rural small businesses to scale operations and access wider markets.',
    points: [
      'Business strategy coaching',
      'Supply chain optimization',
      'Branding & marketing help'
    ],
    stats: [
      { value: '1,800+', label: 'Businesses Started' },
      { value: '90%', label: 'Survival Rate' },
      { value: '40', label: 'Mentors Active' }
    ],
    keyFeatures: [
      'One-on-one business strategy coaching',
      'Supply chain optimization support',
      'Branding and digital marketing assistance',
      'Market access and network facilitation'
    ]
  },
  {
    id: 'civic-engagement-academy',
    title: 'Civic Engagement Academy',
    icon: FiMessageSquare,
    image: null,
    gradient: 'from-teal-600 to-cyan-700',
    subtitle: 'Participatory Local Governance',
    description: 'Training community members to participate in local governance and public barazas.',
    points: [
      'Public speaking workshops',
      'Civic rights education',
      'Policy submission training'
    ],
    stats: [
      { value: '3,200+', label: 'Citizens Trained' },
      { value: '25', label: 'Public Forums' },
      { value: '50', label: 'Policy Submissions' }
    ],
    keyFeatures: [
      'Public speaking and advocacy workshops',
      'Civic rights and responsibilities education',
      'Policy submission and petition training',
      'Local governance participation forums'
    ]
  },
  {
    id: 'digital-literacy-for-seniors',
    title: 'Digital Literacy for Seniors',
    icon: FiGlobe,
    image: null,
    gradient: 'from-blue-700 to-indigo-800',
    subtitle: 'Empowering Seniors Digitally',
    description: 'Empowering the elderly to access digital services and stay connected.',
    points: [
      'Basic smartphone training',
      'Online safety awareness',
      'Digital service access'
    ],
    stats: [
      { value: '2,500+', label: 'Seniors Trained' },
      { value: '35', label: 'Community Centers' },
      { value: '85%', label: 'Digital Confidence' }
    ],
    keyFeatures: [
      'Basic smartphone and tablet training',
      'Online safety and fraud awareness',
      'Digital government service access',
      'Family communication technology support'
    ]
  },
  {
    id: 'food-security-watch',
    title: 'Food Security Watch',
    icon: FiTrendingUp,
    image: null,
    gradient: 'from-amber-700 to-yellow-800',
    subtitle: 'Early Warning for Food Security',
    description: 'Monitoring local crop yields to provide early warnings for food shortages.',
    points: [
      'Yield tracking systems',
      'Post-harvest storage tech',
      'Community food networking'
    ],
    stats: [
      { value: '10k+', label: 'Farmers Connected' },
      { value: '200', label: 'Early Warnings' },
      { value: '60%', label: 'Food Loss Reduced' }
    ],
    keyFeatures: [
      'Real-time crop yield tracking systems',
      'Post-harvest storage technology training',
      'Community food distribution networking',
      'Early warning alert dissemination'
    ]
  },
  {
    id: 'scholarship-lifecycle-lab',
    title: 'Scholarship Lifecycle Lab',
    icon: FiAward,
    image: null,
    gradient: 'from-green-600 to-emerald-700',
    subtitle: 'Comprehensive Education Sponsorship',
    description: 'Providing comprehensive financial aid and bursaries for students from secondary school through university graduation.',
    points: [
      'Tuition sponsorship',
      'Uniform & supply kits',
      'Academic progress monitoring'
    ],
    stats: [
      { value: '500+', label: 'Scholars Awarded' },
      { value: '90%', label: 'Retention Rate' },
      { value: '50', label: 'Partner Schools' }
    ],
    keyFeatures: [
      'Full tuition sponsorship programs',
      'School uniform and supply provision',
      'Academic progress monitoring and support',
      'University transition guidance'
    ]
  },
  {
    id: 'early-childhood-hub',
    title: 'Early Childhood Hub',
    icon: FiSmile,
    image: null,
    gradient: 'from-pink-500 to-rose-600',
    subtitle: 'Foundational Literacy for Children',
    description: 'Establishing and upgrading infrastructure for community-based ECD centers to ensure foundational literacy.',
    points: [
      'Classroom infrastructure upgrades',
      'Early literacy training',
      'Nutrition & feeding support'
    ],
    stats: [
      { value: '3,000+', label: 'Children Enrolled' },
      { value: '40', label: 'ECD Centers' },
      { value: '120', label: 'Teachers Trained' }
    ],
    keyFeatures: [
      'Classroom infrastructure upgrades',
      'Early childhood literacy programs',
      'Nutrition and feeding support',
      'Teacher training in ECD methodologies'
    ]
  },
  {
    id: 'orphan-family-care-initiative',
    title: 'Orphan Family-Care Initiative',
    icon: FiStar,
    image: null,
    gradient: 'from-purple-600 to-violet-700',
    subtitle: 'Family-Based Care for Orphans',
    description: 'Transitioning children from institutional orphanages into supportive family-based living environments.',
    points: [
      'Family integration support',
      'Psychosocial counseling',
      'Household basic needs kits'
    ],
    stats: [
      { value: '400+', label: 'Children Placed' },
      { value: '200', label: 'Support Families' },
      { value: '95%', label: 'Placement Success' }
    ],
    keyFeatures: [
      'Family integration and reunification support',
      'Psychosocial counseling for children and families',
      'Household basic needs provisioning',
      'Post-placement monitoring and support'
    ]
  },
  {
    id: 'university-transition-mentorship',
    title: 'University Transition Mentorship',
    icon: FiCompass,
    image: null,
    gradient: 'from-indigo-600 to-purple-700',
    subtitle: 'Secondary to Tertiary Bridge',
    description: 'Bridging the gap between secondary school completion and tertiary education through career counseling.',
    points: [
      'University application guidance',
      'Career path coaching',
      'Mentorship with role models'
    ],
    stats: [
      { value: '1,200+', label: 'Students Mentored' },
      { value: '85%', label: 'University Enrollment' },
      { value: '30', label: 'University Partners' }
    ],
    keyFeatures: [
      'University application and selection guidance',
      'Career path coaching and exploration',
      'One-on-one mentorship with role models',
      'Scholarship and financial aid navigation'
    ]
  },
  {
    id: 'school-feeding-program',
    title: 'School Feeding Program',
    icon: FiCoffee,
    image: null,
    gradient: 'from-orange-500 to-amber-600',
    subtitle: 'Nutrition for School Attendance',
    description: 'Implementing sustainable daily nutrition programs to increase school attendance and classroom focus.',
    points: [
      'Community garden setup',
      'Daily nutrition distribution',
      'Health & hygiene education'
    ],
    stats: [
      { value: '8,000+', label: 'Daily Meals' },
      { value: '50', label: 'Schools Served' },
      { value: '30%', label: 'Attendance Increase' }
    ],
    keyFeatures: [
      'Community school garden establishment',
      'Daily nutritious meal distribution',
      'Health and hygiene education programs',
      'Local food sourcing partnerships'
    ]
  },
  {
    id: 'infrastructure-development',
    title: 'Infrastructure Development',
    icon: FiTool,
    image: null,
    gradient: 'from-gray-700 to-slate-800',
    subtitle: 'School Facility Upgrades',
    description: 'Upgrading school facilities such as libraries, laboratories, and sanitation blocks.',
    points: [
      'Library & lab renovations',
      'Clean water & sanitation (WASH)',
      'Classroom safety audits'
    ],
    stats: [
      { value: '60', label: 'Facilities Upgraded' },
      { value: '15k+', label: 'Students Benefiting' },
      { value: '100', label: 'WASH Stations Built' }
    ],
    keyFeatures: [
      'Library and laboratory renovations',
      'Clean water and sanitation (WASH) facilities',
      'Classroom safety and accessibility audits',
      'Learning environment enhancements'
    ]
  },
  {
    id: 'digital-education-access',
    title: 'Digital Education Access',
    icon: FiTablet,
    image: null,
    gradient: 'from-blue-600 to-cyan-700',
    subtitle: 'Computer Labs & Internet Access',
    description: 'Equipping rural schools with computer labs and reliable internet to support digital learning.',
    points: [
      'Computer lab establishment',
      'Digital curriculum training',
      'Internet connectivity support'
    ],
    stats: [
      { value: '10k+', label: 'Students Connected' },
      { value: '40', label: 'Computer Labs' },
      { value: '25', label: 'Schools Digitized' }
    ],
    keyFeatures: [
      'Computer lab establishment and equipment',
      'Digital curriculum integration training',
      'Reliable internet connectivity solutions',
      'E-learning platform adoption support'
    ]
  },
  {
    id: 'teacher-training-academy',
    title: 'Teacher Training Academy',
    icon: FiCamera,
    image: null,
    gradient: 'from-green-500 to-teal-600',
    subtitle: 'Pedagogical Development for Teachers',
    description: 'Providing pedagogical development and child-protection training for rural school staff.',
    points: [
      'Modern teaching techniques',
      'Child protection workshops',
      'Inclusive education strategies'
    ],
    stats: [
      { value: '1,500+', label: 'Teachers Trained' },
      { value: '100', label: 'Partner Schools' },
      { value: '40%', label: 'Student Performance Up' }
    ],
    keyFeatures: [
      'Modern pedagogical technique training',
      'Child protection and safeguarding workshops',
      'Inclusive education strategy implementation',
      'Classroom management and assessment skills'
    ]
  },
  {
    id: 'special-needs-inclusion',
    title: 'Special Needs Inclusion',
    icon: FiSliders,
    image: null,
    gradient: 'from-violet-600 to-purple-700',
    subtitle: 'Inclusive Learning for All',
    description: 'Ensuring inclusive learning environments for orphans and children with disabilities.',
    points: [
      'Special education materials',
      'Inclusive classroom training',
      'Accessibility infrastructure'
    ],
    stats: [
      { value: '800+', label: 'Children Reached' },
      { value: '35', label: 'Inclusive Schools' },
      { value: '200', label: 'Special Materials' }
    ],
    keyFeatures: [
      'Special education material provision',
      'Inclusive classroom teacher training',
      'Accessibility infrastructure upgrades',
      'Individualized learning support plans'
    ]
  },
  {
    id: 'vocational-bridge-program',
    title: 'Vocational Bridge Program',
    icon: FiThumbsUp,
    image: null,
    gradient: 'from-green-600 to-emerald-800',
    subtitle: 'Technical & Vocational Training',
    description: 'Offering technical and vocational training for those who choose a path outside of traditional university.',
    points: [
      'Skills certification workshops',
      'Toolset provision',
      'Job placement mentorship'
    ],
    stats: [
      { value: '2,500+', label: 'Youth Certified' },
      { value: '85%', label: 'Job Placement' },
      { value: '20', label: 'Vocational Trades' }
    ],
    keyFeatures: [
      'Industry-recognized skills certification',
      'Toolset and equipment provision',
      'Job placement and internship mentorship',
      'Apprenticeship partnership networks'
    ]
  }
];

export default programsData;
