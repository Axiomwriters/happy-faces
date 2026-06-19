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
    ],
    programInfo: {
      overview: 'A market-driven vocational program that equips marginalized women and out-of-school youth with haute-couture tailoring skills, business acumen, and psychosocial support to launch sustainable fashion enterprises.',
      impactModel: 'We use a holistic "skills + capital + mentorship" approach — 6 months of technical training, followed by startup capital disbursement and 12 months of post-graduation business coaching to ensure enterprise survival beyond the program.',
      targetBeneficiaries: 'Women aged 18–35 from Nakuru\'s informal settlements, with priority given to GBV survivors, single mothers, and those with no prior formal employment.',
      fundingNeeds: { annualBudget: '$85,000', keyCosts: ['Industrial sewing machines & materials', 'Trainer & counselor stipends', 'Startup capital grants ($200/beneficiary)', 'Workshop rental & utilities'] },
      communityContext: 'Nakuru County faces 40% youth unemployment. The garment sector is the second-largest informal employer, yet most workers lack formal training. Our graduates fill this gap, producing school uniforms and eco-friendly bags for local institutions.',
      sdgAlignment: ['SDG 1: No Poverty', 'SDG 4: Quality Education', 'SDG 5: Gender Equality', 'SDG 8: Decent Work'],
      scalability: 'Low-cost, high-impact model — $1,700 per graduate. Replicable in any urban informal settlement across East Africa. A $200k investment would enable expansion to three new counties.'
    }
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
    ],
    programInfo: {
      overview: 'An integrated WASH-plus-agriculture intervention that provides clean water at the household level while training families in climate-smart farming to address the nexus of waterborne disease and food insecurity.',
      impactModel: 'A two-pronged approach: (1) install bio-sand filters and rainwater catchment systems for immediate safe water access, (2) deliver season-long farmer training in drip irrigation, drought-resistant crops, and organic soil management for sustained food production.',
      targetBeneficiaries: 'Rural smallholder farming families in water-scarce regions of Nakuru and Baringo counties, prioritizing households with children under 5 and pregnant women.',
      fundingNeeds: { annualBudget: '$120,000', keyCosts: ['Bio-sand filter units ($50/unit)', 'Rainwater tank installation', 'Agricultural training materials & demonstration plots', 'Community health worker stipends'] },
      communityContext: 'Over 60% of rural households in the Rift Valley lack reliable clean water. Women and girls walk 3–6 km daily to fetch water, missing school and income opportunities. Concurrently, erratic rainfall has reduced crop yields by 30% in the last decade.',
      sdgAlignment: ['SDG 2: Zero Hunger', 'SDG 3: Good Health', 'SDG 6: Clean Water', 'SDG 13: Climate Action'],
      scalability: 'Each $200 filter serves a family of 6 for 10+ years. A $120k annual budget reaches 600 families (3,600 individuals). Model has been validated by the Kenya Water Institute and can deploy through county health ministries across Kenya\'s 47 counties.'
    }
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
    ],
    programInfo: {
      overview: 'A civic leadership incubator that transforms vulnerable youth into active community changemakers through structured mentorship, financial literacy, and participatory governance training.',
      impactModel: 'Year-long cohort program with three phases: (1) leadership bootcamp covering public speaking, advocacy, and civic rights, (2) community project design and implementation with seed funding, (3) placement in county youth advisory boards or community leadership roles.',
      targetBeneficiaries: 'Youth aged 14–24 from low-income urban and peri-urban communities, with targeted outreach to orphaned and vulnerable adolescents.',
      fundingNeeds: { annualBudget: '$75,000', keyCosts: ['Mentorship program coordination', 'Youth project seed grants ($500–$1,500 each)', 'Leadership camp logistics', 'School partnership engagement'] },
      communityContext: 'Kenya\'s population is 75% under 35, yet youth hold less than 5% of leadership positions in local governance. Lack of civic engagement pathways fuels disenfranchisement and social instability in urban informal settlements.',
      sdgAlignment: ['SDG 4: Quality Education', 'SDG 10: Reduced Inequalities', 'SDG 16: Peace & Justice', 'SDG 17: Partnerships'],
      scalability: 'Hub-and-spoke model — a central coordination hub supports 30+ satellite school clubs. Annual cost per active youth leader: ~$250. $300k would enable regional expansion across the Rift Valley.'
    }
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
    ],
    programInfo: {
      overview: 'A digital skills accelerator that trains underserved youth in high-demand tech fields — full-stack development, AI literacy, and digital product design — and connects them to remote work and tech internship opportunities.',
      impactModel: 'Intensive 6-month bootcamps (200+ hours of instruction) followed by a 3-month paid internship placement. We partner with Kenyan tech companies for real-world project exposure and provide stipends to remove financial barriers to participation.',
      targetBeneficiaries: 'Unemployed or underemployed youth aged 18–29 with basic secondary education, selected through a competitive aptitude-based process prioritizing applicants from informal settlements.',
      fundingNeeds: { annualBudget: '$150,000', keyCosts: ['Instructor salaries & curriculum development', 'Student laptop & internet stipends ($150/month)', 'Lab equipment & software licenses', 'Internship placement coordination'] },
      communityContext: 'Kenya has a thriving tech ecosystem (Silicon Savannah) with 200,000+ unfilled digital jobs, yet less than 5% of youth from low-income backgrounds have access to quality tech training. Most coding bootcamps cost $2,000+ — prohibitive for our demographic.',
      sdgAlignment: ['SDG 4: Quality Education', 'SDG 8: Decent Work', 'SDG 9: Industry & Innovation', 'SDG 10: Reduced Inequalities'],
      scalability: 'Cost per graduate: ~$2,500. 70% job placement rate within 6 months. Curriculum is open-source and replicable. $500k would establish 3 new labs in underserved counties and double annual cohort size to 500 graduates.'
    }
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
    ],
    programInfo: {
      overview: 'A climate adaptation program purpose-built for pastoralist communities, combining indigenous ecological knowledge with mobile technology to deliver real-time early warnings, drought-resistant livestock practices, and sustainable rangeland management.',
      impactModel: 'Deploys a network of community-based "climate scouts" equipped with solar-powered smartphones running a custom early-warning app. Scouts relay weather data, pest alerts, and market prices to herders via SMS. Parallel interventions include rotational grazing plans and veterinary mobile clinics.',
      targetBeneficiaries: 'Semi-nomadic pastoralist communities in Baringo, Samburu, and Turkana counties — some of Kenya\'s most climate-vulnerable populations.',
      fundingNeeds: { annualBudget: '$95,000', keyCosts: ['Smartphone & solar charger distribution', 'Climate scout stipends ($50/month)', 'Veterinary medicine & supplies', 'Rangeland mapping & GPS tools'] },
      communityContext: 'Pastoralists in the Arid and Semi-Arid Lands (ASALs) have lost 40% of their livestock to drought in the last 5 years. Traditional early-warning systems have been disrupted by changing weather patterns. Over 80% of households in target areas live below the poverty line.',
      sdgAlignment: ['SDG 1: No Poverty', 'SDG 2: Zero Hunger', 'SDG 13: Climate Action', 'SDG 15: Life on Land'],
      scalability: 'Per-community cost: ~$15,000 for full system setup (150 herders). Proven to reduce livestock loss by 40%. Rolling out to 10 additional ASAL counties would require $1.2M over 3 years.'
    }
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
    ],
    programInfo: {
      overview: 'A transformative gender-equity program that mobilizes men and boys as active allies in preventing gender-based violence by deconstructing harmful masculinity norms and building male-led community safety networks.',
      impactModel: 'Structured 12-week "Men as Allies" curriculum delivered in community cohorts, covering healthy masculinity, GBV awareness, active bystander intervention, and co-parenting. Graduates join ongoing accountability circles and lead community advocacy campaigns.',
      targetBeneficiaries: 'Men aged 18–50 recruited through community barazas, churches, and workplaces in high-GBV-incidence communities in Nakuru and Kisumu counties.',
      fundingNeeds: { annualBudget: '$60,000', keyCosts: ['Curriculum development & facilitator training', 'Community dialogue session logistics', 'GBV referral training for men', 'Monitoring & evaluation systems'] },
      communityContext: '47% of Kenyan women have experienced physical or sexual violence. Perpetrators are overwhelmingly male intimate partners. Existing interventions focus on women\'s empowerment but rarely engage men as solution partners, leaving root causes unaddressed.',
      sdgAlignment: ['SDG 5: Gender Equality', 'SDG 10: Reduced Inequalities', 'SDG 16: Peace & Justice'],
      scalability: 'Cost per man engaged: ~$30. Community-led model that sustains through peer accountability — no ongoing external facilitation needed after 12 months. $250k would establish 50 new community cohorts across 5 counties.'
    }
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
    ],
    programInfo: {
      overview: 'A survivor-centered protection program that provides integrated psychosocial support, legal aid, and emergency shelter for women and children experiencing gender-based violence, with a focus on confidentiality and dignity.',
      impactModel: 'Three-tier intervention: (1) immediate crisis response — 24/7 helpline, emergency shelter, medical referral; (2) recovery — individual and group trauma-informed counseling; (3) reintegration — legal representation, economic empowerment, and community re-entry support.',
      targetBeneficiaries: 'Women and girls (15+) experiencing physical, sexual, or emotional GBV in Nakuru and surrounding counties, with priority for those in life-threatening situations.',
      fundingNeeds: { annualBudget: '$130,000', keyCosts: ['Safe house rental & maintenance', 'Licensed counselor salaries (3 FTE)', 'Legal aid retainer & court fees', 'Medical examination & treatment costs'] },
      communityContext: 'Reported GBV cases in Nakuru County rose 72% during the COVID-19 period, yet only 3 shelters exist for a population of 2.2M. Police stations lack private reporting rooms, and only 12% of survivors access legal representation.',
      sdgAlignment: ['SDG 3: Good Health', 'SDG 5: Gender Equality', 'SDG 16: Peace & Justice'],
      scalability: 'Cost per survivor served: ~$220. Each shelter supports 50+ women annually. $1M would fund three new safe havens in high-incidence areas and establish mobile legal aid units reaching 5,000+ survivors.'
    }
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
    ],
    programInfo: {
      overview: 'A women-led climate action network that establishes community hubs as centers for clean energy adoption, climate-smart agriculture, and local climate advocacy — placing women at the forefront of Kenya\'s green transition.',
      impactModel: 'Each hub is managed by a trained "climate mama" who coordinates solar product distribution, delivers climate literacy sessions, and aggregates community voices for county-level climate budget advocacy. Hubs operate as social enterprises, reinvesting revenue.',
      targetBeneficiaries: 'Rural women aged 25–60, particularly those heading households, in climate-vulnerable zones of Nakuru, Baringo, and Elgeyo Marakwet.',
      fundingNeeds: { annualBudget: '$110,000', keyCosts: ['Hub infrastructure (solar panels, storage, meeting space)', 'Climate mama stipends & training', 'Solar inventory for distribution', 'Advocacy & community outreach'] },
      communityContext: 'Women in rural Kenya bear the brunt of climate change — they walk farther for water and fuel, lose more income during droughts, and are excluded from climate policy decisions. Yet women-led solutions receive less than 1% of climate finance.',
      sdgAlignment: ['SDG 5: Gender Equality', 'SDG 7: Affordable Clean Energy', 'SDG 13: Climate Action', 'SDG 16: Peace & Justice'],
      scalability: 'Hub establishment cost: ~$12,000 each. Each hub serves 500+ households. Self-sustaining after 18 months through solar product sales. $500k would establish 40 new hubs and create a regional women-led climate advocacy network.'
    }
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
    ],
    programInfo: {
      overview: 'A large-scale ecological restoration program that combines indigenous tree nursery development, riparian conservation, and carbon sequestration to rehabilitate degraded ecosystems while creating green livelihoods for local communities.',
      impactModel: 'Community-led restoration: (1) establish community-managed native tree nurseries, (2) deploy "restoration brigades" for riverbank and catchment area rehabilitation, (3) monitor biodiversity recovery through citizen science, (4) issue carbon credits for verified reforestation.',
      targetBeneficiaries: 'Rural communities in deforested watershed areas of the Mau Forest Complex and Rift Valley escarpments, employing local youth as restoration brigade members.',
      fundingNeeds: { annualBudget: '$140,000', keyCosts: ['Tree nursery infrastructure & seedlings', 'Restoration brigade salaries (40 members)', 'Biodiversity monitoring equipment', 'Carbon credit verification & certification'] },
      communityContext: 'Kenya\'s forest cover has fallen below 7% (national target: 10%). The Mau Forest — Kenya\'s largest water tower — has lost 25% of its forest cover since 2000, threatening water supply for 10M+ people and reducing agricultural productivity by 20%.',
      sdgAlignment: ['SDG 13: Climate Action', 'SDG 15: Life on Land', 'SDG 6: Clean Water', 'SDG 8: Decent Work'],
      scalability: 'Cost per acre restored: ~$500. 50,000 trees planted per year. Model aligns with Kenya\'s national "15B trees by 2032" initiative. $2M would fund 4,000 acres of restoration and establish a community carbon credit revenue stream.'
    }
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
    ],
    programInfo: {
      overview: 'A pro-bono legal clinic that provides free legal representation, paralegal training, and community rights awareness for GBV survivors and vulnerable populations who cannot afford private counsel.',
      impactModel: 'Staff lawyers and trained community paralegals collaborate to: provide immediate legal advice, file protection orders, accompany survivors to court, and prosecute cases. Community legal clinics educate 500+ citizens annually on their legal rights.',
      targetBeneficiaries: 'Low-income GBV survivors, orphaned children seeking inheritance rights, and elderly victims of property disinheritance in Nakuru, Kisumu, and Nairobi counties.',
      fundingNeeds: { annualBudget: '$90,000', keyCosts: ['Staff lawyer salaries (2 FTE)', 'Paralegal training & certification', 'Court filing fees & transport', 'Community legal clinic logistics'] },
      communityContext: 'Kenya has only 1 lawyer per 5,000 citizens in urban areas and 1 per 50,000 in rural areas. Most GBV cases are withdrawn due to lack of legal representation. 70% of protection orders sought by pro se litigants are denied due to procedural errors.',
      sdgAlignment: ['SDG 5: Gender Equality', 'SDG 10: Reduced Inequalities', 'SDG 16: Peace & Justice'],
      scalability: 'Case cost: ~$150 per matter. 90% case resolution rate. Each paralegal serves 50+ community members. $350k would establish clinics in 3 additional counties and train 100 community paralegals.'
    }
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
    ],
    programInfo: {
      overview: 'A decentralized safe-space model that transforms trusted community buildings — churches, schools, health centers — into secure, confidential drop-in centers where survivors of GBV can access immediate support, counseling, and referral services.',
      impactModel: 'Safe-space hosts receive 40 hours of trauma-informed training. Each space is equipped with a dedicated phone line linked to our crisis response team, a private counseling room, and referral directories. Monthly quality audits ensure standards.',
      targetBeneficiaries: 'Women and girls (12+) in informal urban settlements and rural trading centers where formal shelters are inaccessible due to distance, cost, or stigma.',
      fundingNeeds: { annualBudget: '$70,000', keyCosts: ['Safe-space host training & certification', 'Phone lines & communication equipment', 'Counseling room setup & supplies', 'Quality audit & supervision visits'] },
      communityContext: 'The nearest formal shelter may be 50+ km away in rural areas. Cultural stigma prevents many survivors from reporting at police stations. Community-hosted spaces reduce reporting barriers — usage data shows 3x more first-time reporters at safe spaces vs police.',
      sdgAlignment: ['SDG 3: Good Health', 'SDG 5: Gender Equality', 'SDG 16: Peace & Justice'],
      scalability: 'Space setup cost: ~$2,500 per location. Each safe space serves 100+ women annually. $200k would establish 80 new community safe spaces across 4 counties, reaching 8,000+ women.'
    }
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
    ],
    programInfo: {
      overview: 'A peer-led prevention program that establishes student-run anti-GBV clubs in secondary schools, training students as peer mentors who identify warning signs, provide first-line support, and link at-risk peers to professional services.',
      impactModel: 'Program staff train 40 student peer mentors per school through a 5-day residential camp. Mentors then co-run weekly club meetings covering abuse recognition, consent, reporting channels, and bystander intervention. Teachers receive safeguarding training.',
      targetBeneficiaries: 'Adolescents aged 13–19 in mixed public secondary schools in Nakuru, Kisumu, and Homa Bay counties — regions with high teenage pregnancy and GBV rates.',
      fundingNeeds: { annualBudget: '$55,000', keyCosts: ['Peer-mentor camp logistics (5 days)', 'Club activity materials & supplies', 'Teacher safeguarding training', 'Referral network coordination'] },
      communityContext: '1 in 5 Kenyan girls reports experiencing sexual violence before age 18. Most schools lack confidential reporting mechanisms. Students say they would report abuse to a trained peer before an adult, making peer-led models the most effective entry point.',
      sdgAlignment: ['SDG 4: Quality Education', 'SDG 5: Gender Equality', 'SDG 16: Peace & Justice'],
      scalability: 'Cost per school: ~$3,500. Each club reaches 500+ students annually through events and peer interactions. $300k would scale to 85 schools across 6 high-incidence counties.'
    }
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
    ],
    programInfo: {
      overview: 'An institutional strengthening program that partners with county education offices to develop, adopt, and enforce child-protection policies across public primary and secondary schools, creating safe learning environments.',
      impactModel: 'We work school-by-school through four phases: (1) assessment — hygiene, safety, and safeguarding audits; (2) policy co-creation with PTAs and school boards; (3) training — all staff complete a 3-day safeguarding certification; (4) monitoring — quarterly audits and anonymous student feedback systems.',
      targetBeneficiaries: 'Students aged 6–18 in public primary and secondary schools in Nakuru, Baringo, and Laikipia counties, along with their teachers and school administrators.',
      fundingNeeds: { annualBudget: '$80,000', keyCosts: ['School audit & assessment tools', 'Teacher safeguarding training (trainer costs)', 'Policy development legal consultation', 'Student feedback hotline system'] },
      communityContext: 'A national study found that 78% of Kenyan schools lack a formal child-protection policy. Corporal punishment remains legal and prevalent. Most cases of teacher-on-student abuse go unreported due to fear of retaliation and lack of reporting mechanisms.',
      sdgAlignment: ['SDG 4: Quality Education', 'SDG 5: Gender Equality', 'SDG 16: Peace & Justice'],
      scalability: 'Cost per school: ~$2,000 for full policy + training package. County-level adoption can scale across all 4,000+ schools in a county. $500k would enable a county-wide rollout reaching 200,000+ students.'
    }
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
    ],
    programInfo: {
      overview: 'A dedicated advocacy and support program protecting elderly rights against physical abuse, financial exploitation, property grabbing, and social exclusion in rapidly urbanizing communities.',
      impactModel: 'Community-based "elder advocates" (trained volunteers aged 50+) identify at-risk seniors, conduct home visits, and link them to pro-bono legal aid, health services, and social support networks. Intergenerational forums bridge youth-elder divides.',
      targetBeneficiaries: 'Men and women aged 60+ in Nakuru, Kisumu, and Nairobi informal settlements, with targeted outreach to widows who face heightened property-grabbing risks.',
      fundingNeeds: { annualBudget: '$50,000', keyCosts: ['Elder advocate training & stipends', 'Legal aid referrals & case management', 'Health screening camps', 'Intergenerational forum logistics'] },
      communityContext: 'Kenya\'s elderly population is growing at 3.5% annually. 30% of seniors report physical or financial abuse by family members. Only 2% access legal recourse. Most lack pensions — 85% of elderly Kenyans depend entirely on family support.',
      sdgAlignment: ['SDG 1: No Poverty', 'SDG 3: Good Health', 'SDG 10: Reduced Inequalities'],
      scalability: 'Cost per elder served: ~$120. Each elder advocate supports 20 seniors. $200k would scale to 5 new urban centers and establish a national elder abuse hotline serving 10,000+ seniors.'
    }
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
    ],
    programInfo: {
      overview: 'An urban clean energy program that deploys solar micro-grids and distributes affordable solar home kits to low-income households and small businesses, reducing energy poverty while building a local green technician workforce.',
      impactModel: 'Micro-grids are community-owned and operated. Households pay a modest monthly fee (20–30% of prior kerosene spending) for reliable electricity. Local youth are trained as solar technicians, providing maintenance and earning income via service fees.',
      targetBeneficiaries: 'Households and micro-enterprises in urban informal settlements (Kibera, Mathare, Nakuru\'s Kaptembwo) lacking grid access, prioritizing women-owned businesses.',
      fundingNeeds: { annualBudget: '$175,000', keyCosts: ['Solar panel & battery procurement', 'Micro-grid installation & grid infrastructure', 'Technician training & certification', 'Community energy literacy campaigns'] },
      communityContext: '70% of Kenya\'s urban slum dwellers lack grid electricity, spending $5–$15/month on kerosene and dry-cell batteries. These energy sources are 10x more expensive per unit than grid power and cause respiratory illness and fire hazards.',
      sdgAlignment: ['SDG 1: No Poverty', 'SDG 7: Affordable Clean Energy', 'SDG 8: Decent Work', 'SDG 13: Climate Action'],
      scalability: 'Cost per household connected: ~$300 for micro-grid, $50 for home kit. Micro-grids achieve break-even in 4 years. $750k would establish micro-grids in 5 additional informal settlements, connecting 5,000+ households.'
    }
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
    ],
    programInfo: {
      overview: 'A community-led river conservation initiative that mobilizes riparian communities to restore degraded riverbanks through native vegetation planting, erosion control, and citizen-led water quality monitoring.',
      impactModel: 'Community riverbank committees are formed and trained in riparian ecology, nursery management, and erosion control. They plant and maintain native vegetation along priority river segments. Monthly water quality testing generates data shared with county environment departments.',
      targetBeneficiaries: 'Farming communities living along the Njoro, Molo, and Perkerra rivers in Nakuru and Baringo counties whose livelihoods depend on river water for irrigation and livestock.',
      fundingNeeds: { annualBudget: '$65,000', keyCosts: ['Seedling nursery establishment & materials', 'Riverbank committee training & tools', 'Water quality testing equipment', 'Community outreach & awareness'] },
      communityContext: 'Riverbank degradation from deforestation, overgrazing, and farming has reduced dry-season river flow by 60% in the Rift Valley. Erosion silts dams and irrigation channels. Communities are losing up to 40% of their farming income during dry months.',
      sdgAlignment: ['SDG 6: Clean Water', 'SDG 13: Climate Action', 'SDG 15: Life on Land'],
      scalability: 'Cost per km of riverbank protected: ~$4,000. Each km protects 10+ downstream farms. $350k would restore 80+ km of critical riverbanks across 6 counties, protecting 800+ farming families.'
    }
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
    ],
    programInfo: {
      overview: 'A grassroots climate advocacy training program that equips local community leaders with the skills to analyze county climate budgets, draft policy briefs, and effectively represent community interests in county-level climate planning processes.',
      impactModel: 'Annual cohort of 40 community leaders complete a 3-month "Climate Governance Fellowship" covering: climate policy fundamentals, budget analysis, advocacy strategy, and public speaking. Fellows then lead community climate assemblies and submit policy recommendations to county governments.',
      targetBeneficiaries: 'Community-based organization leaders, youth representatives, women\'s group chairs, and small-holder farmer representatives from climate-vulnerable wards in 12 counties.',
      fundingNeeds: { annualBudget: '$60,000', keyCosts: ['Fellowship program coordination', 'Policy research & brief development', 'Community climate assembly logistics', 'County government engagement events'] },
      communityContext: 'Kenya\'s devolved government structure allocates 35% of county budgets to climate-related activities, yet community participation in budget planning remains below 15%. Most climate spending misses local priorities — a direct result of exclusion from decision-making.',
      sdgAlignment: ['SDG 13: Climate Action', 'SDG 16: Peace & Justice', 'SDG 17: Partnerships'],
      scalability: 'Fellow training cost: ~$1,500 per leader. Each fellow influences $500k+ in county climate spending annually. $600k would establish permanent climate policy hubs in all 12 counties and train 240+ leaders over 3 years.'
    }
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
    ],
    programInfo: {
      overview: 'An agri-tech innovation lab that equips small-holder farmers with affordable AI-powered tools for precision farming — soil sensors, weather analytics, pest prediction — to improve yields while reducing water and chemical inputs.',
      impactModel: 'Farmers join 12-month "smart farming" cohorts. Each receives a low-cost sensor kit ($30), training in data-driven decision-making, and access to a mobile app providing real-time crop advisory. Monthly field days facilitate peer learning.',
      targetBeneficiaries: 'Small-holder farmers (0.5–2 acre plots) in Nakuru, Kisii, and Meru counties, with a focus on women farmers who comprise 60% of the agricultural labor force yet own less than 10% of land.',
      fundingNeeds: { annualBudget: '$100,000', keyCosts: ['Sensor kit procurement & distribution', 'Agronomist & trainer salaries', 'Mobile app development & maintenance', 'Demonstration plot operations'] },
      communityContext: 'The average Kenyan small-holder farmer loses 30–50% of potential yield due to suboptimal planting times, overwatering, and undetected pest outbreaks. Only 5% use any form of precision agriculture. A 50% yield increase translates to $300–$500 additional annual income.',
      sdgAlignment: ['SDG 2: Zero Hunger', 'SDG 9: Industry & Innovation', 'SDG 13: Climate Action'],
      scalability: 'Per-farmer cost: ~$200 (first year), $50 (subsequent). 50% yield increase validated across 2,000 farmers. $750k would deploy to 5,000 farmers across 10 counties and establish a farmer-to-farmer training network.'
    }
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
    ],
    programInfo: {
      overview: 'A circular economy enterprise that transforms community organic and plastic waste into marketable products — compost, upcycled bags, eco-bricks — while creating dignified green jobs for youth and women.',
      impactModel: 'Community waste collection points aggregate recyclables. Youth crews do collection (earning per-kg fees) and are trained in processing. Organic waste becomes compost sold to local farms. Plastics are upcycled into bags, tiles, and construction blocks.',
      targetBeneficiaries: 'Unemployed youth aged 18–30 and women in Nakuru\'s low-income neighborhoods, employed as waste collection crew, processing workshop artisans, or compost sales agents.',
      fundingNeeds: { annualBudget: '$85,000', keyCosts: ['Collection equipment (tricycles, bins, PPE)', 'Processing machinery (shredders, presses)', 'Workshop rental & utilities', 'Artisan training & certification'] },
      communityContext: 'Nakuru generates 400+ tons of waste daily, with less than 40% collected. Most waste ends up in open dumps or waterways. The informal waste sector employs 5,000+ people but in hazardous, unregulated conditions. Our model formalizes and dignifies this work.',
      sdgAlignment: ['SDG 8: Decent Work', 'SDG 11: Sustainable Cities', 'SDG 12: Responsible Consumption', 'SDG 13: Climate Action'],
      scalability: 'Cost per job created: ~$800. 100+ tons processed annually, 500 jobs created. Revenue from compost and product sales covers 40% of operating costs. $500k would establish 5 new collection hubs and a centralized processing facility.'
    }
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
    ],
    programInfo: {
      overview: 'A financial inclusion accelerator that trains women entrepreneurs in digital banking, savings group management, and micro-finance navigation — bridging the gap between informal subsistence commerce and formal financial systems.',
      impactModel: 'Women form self-managed savings and loan groups (30 members each). We provide 8-week financial literacy training covering digital payments, credit scores, interest rates, and business record-keeping. Graduates access our partner micro-finance institution for startup loans.',
      targetBeneficiaries: 'Women micro-entrepreneurs in Nakuru, Kisumu, and Mombasa — market vendors, food processors, hairdressers, and artisans operating informal businesses with monthly revenues under $200.',
      fundingNeeds: { annualBudget: '$70,000', keyCosts: ['Financial literacy curriculum & materials', 'Trainer stipends (2 FTE)', 'Savings group seed capital matching', 'Micro-finance partnership fees'] },
      communityContext: 'Only 30% of Kenyan women have access to formal banking vs 50% of men. Women-led SMEs face a $3B credit gap. Most rely on informal rotating savings groups (chamas) with no interest earnings or insurance. Digital platforms like M-Pesa remain underutilized for business.',
      sdgAlignment: ['SDG 1: No Poverty', 'SDG 5: Gender Equality', 'SDG 8: Decent Work', 'SDG 10: Reduced Inequalities'],
      scalability: 'Per-woman cost: ~$100. Savings groups become self-sustaining after 6 months. $500k would launch 150 new savings groups across 3 cities, reaching 4,500 women and mobilizing $1M+ in community savings.'
    }
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
    ],
    programInfo: {
      overview: 'A rural business growth program that provides intensive one-on-one mentoring to small-scale entrepreneurs — from farm produce sellers to artisan food processors — helping them formalize, optimize operations, and access regional markets.',
      impactModel: 'Each entrepreneur receives 12 months of tailored coaching from a trained business mentor. Focus areas: business formalization (registration, licenses), financial record-keeping, supply chain efficiency, digital marketing (WhatsApp Business, social media), and collective market access.',
      targetBeneficiaries: 'Rural micro-enterprises in Nakuru, Baringo, and Laikipia counties — particularly women-owned food processing businesses (cereals, dairy, baked goods) with 1–3 employees.',
      fundingNeeds: { annualBudget: '$80,000', keyCosts: ['Business mentor training & stipends', 'Coaching curriculum & tools', 'Market linkage field trips', 'Digital marketing equipment (photography, branding)'] },
      communityContext: 'Rural SMEs represent 90% of Kenyan businesses but contribute less than 20% to formal GDP. Most operate informally, unable to access credit, training, or markets beyond their local village. A mere 2km unpaved road can cut market access by 50%.',
      sdgAlignment: ['SDG 1: No Poverty', 'SDG 8: Decent Work', 'SDG 9: Industry & Innovation'],
      scalability: 'Per-business cost: ~$650. 90% survival rate at 12 months. Each mentored business creates 2 additional jobs on average. $500k would support 750+ businesses and establish a rural mentor network across 4 counties.'
    }
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
    ],
    programInfo: {
      overview: 'A citizen empowerment program that trains community members to effectively participate in local governance — attending public barazas, understanding county budgets, articulating community needs, and holding elected officials accountable.',
      impactModel: '6-week "Active Citizen" course delivered at community centers. Modules: devolved governance structure, budget cycle & public participation, effective public speaking, petition drafting, and media engagement. Graduates organize ward-level "accountability forums" with elected officials.',
      targetBeneficiaries: 'Adult citizens (18+) in low-income urban and peri-urban wards in Nakuru and Kisumu counties, with targeted outreach to women, youth, and persons with disabilities who face the greatest participation barriers.',
      fundingNeeds: { annualBudget: '$55,000', keyCosts: ['Training curriculum & facilitator guides', 'Community center logistics', 'Accountability forum event costs', 'Civic education materials'] },
      communityContext: 'Despite Kenya\'s progressive devolution framework, actual citizen participation in county planning remains under 10%. Public hearings are poorly advertised and held during work hours. 60% of citizens report not knowing how to submit feedback to their county government.',
      sdgAlignment: ['SDG 10: Reduced Inequalities', 'SDG 16: Peace & Justice', 'SDG 17: Partnerships'],
      scalability: 'Per-citizen cost: ~$15. Each trained citizen influences 20+ community members. A $250k investment would establish permanent "Civic Corners" in 10 wards, reaching 50,000+ citizens through direct and spillover engagement.'
    }
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
    ],
    programInfo: {
      overview: 'A digital inclusion program specifically designed for older adults (60+), teaching basic smartphone skills, online safety, and access to essential digital government services — reducing isolation while improving access to pensions and healthcare.',
      impactModel: '8-session course delivered at community centers and senior homes in a low-pressure, peer-learning environment. Each participant receives a simplified training booklet. "Digital buddies" (trained youth volunteers) provide ongoing one-on-one support.',
      targetBeneficiaries: 'Adults aged 60+ in Nakuru, Kisumu, and Nairobi, with special focus on those living alone or in elder-headed households with no younger family members nearby.',
      fundingNeeds: { annualBudget: '$45,000', keyCosts: ['Training materials & simplified booklets', 'Volunteer digital buddy training', 'Device lending library (30 tablets)', 'Community center partnerships'] },
      communityContext: 'Only 8% of Kenyans over 60 use the internet. Senior pensions and NHIF claims increasingly require digital submission, creating a barrier for those without digital skills. Isolation among urban seniors has been linked to a 40% higher rate of depression.',
      sdgAlignment: ['SDG 3: Good Health', 'SDG 10: Reduced Inequalities', 'SDG 17: Partnerships'],
      scalability: 'Per-senior cost: ~$60. Each community center hosts 4 cohorts annually (120 seniors). $200k would establish 15 new training centers and a national senior digital hotline supporting 10,000+ seniors.'
    }
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
    ],
    programInfo: {
      overview: 'A community-based early-warning system that monitors local crop conditions and market prices to predict food shortages before they become crises, enabling timely intervention for vulnerable households.',
      impactModel: 'Network of community food monitors submit weekly data on crop health, rainfall, pest incidence, and local market prices via a simple SMS or voice system. Data feeds a dashboard that triggers alerts when conditions exceed thresholds. County agriculture officers receive automated reports.',
      targetBeneficiaries: 'Small-holder farming households in food-insecure zones of Baringo, Turkana, and Kilifi counties — areas with recurrent drought and above-average malnutrition rates.',
      fundingNeeds: { annualBudget: '$60,000', keyCosts: ['Food monitor training & stipends ($30/month)', 'SMS/voice data platform subscription', 'Dashboard development & maintenance', 'Alert response coordination'] },
      communityContext: 'Kenya faces acute food insecurity every 3–5 years, affecting 2–4 million people. Traditional early-warning relies on satellite data and government surveys that update quarterly — too slow for timely response. Community-level data provides 6–8 week earlier detection.',
      sdgAlignment: ['SDG 2: Zero Hunger', 'SDG 13: Climate Action', 'SDG 17: Partnerships'],
      scalability: 'Per-community cost: ~$5,000/year for full monitoring system. Each system serves 500+ households. $400k would establish monitoring across 10 high-risk counties, covering 200+ communities and 100,000+ households.'
    }
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
    ],
    programInfo: {
      overview: 'An end-to-end education sponsorship program supporting vulnerable students from secondary school entry through university graduation — covering tuition, materials, mentorship, and career guidance to break the intergenerational poverty cycle.',
      impactModel: 'Students are selected in Class 8 based on academic merit and economic vulnerability. Each receives full secondary tuition, uniform kits, school supplies, and a dedicated mentor. Progress is monitored quarterly. University transition includes scholarship sourcing and application support.',
      targetBeneficiaries: 'Orphaned and vulnerable children (OVC) in Nakuru and Baringo counties who have lost one or both parents to HIV/AIDS, poverty, or other causes.',
      fundingNeeds: { annualBudget: '$100,000', keyCosts: ['School fees (50 students)', 'Uniform & supply kits', 'Mentorship program coordination', 'University transition support'] },
      communityContext: 'Only 20% of orphaned children in Kenya complete secondary school, versus 60% of non-orphaned peers. The cost of secondary education ($200–$500/year) is prohibitive for the poorest households. Without intervention, orphans cycle into casual labor and early marriage.',
      sdgAlignment: ['SDG 1: No Poverty', 'SDG 4: Quality Education', 'SDG 10: Reduced Inequalities'],
      scalability: 'Per-student cost: ~$2,000/year for full sponsorship. 90% retention rate. 50% of graduates now in university or formal employment. $1M would sponsor 100 new students through 4-year secondary cycles and establish a university transition fund.'
    }
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
    ],
    programInfo: {
      overview: 'An early childhood development program that upgrades community-based ECD centers in low-income areas with proper classrooms, learning materials, trained teachers, and daily nutrition programs — giving children a strong foundation before primary school.',
      impactModel: 'We partner with communities to upgrade existing ECD infrastructure (roofing, flooring, sanitation), provide age-appropriate learning materials, train teachers in play-based learning methodologies, and establish school feeding programs using locally sourced ingredients.',
      targetBeneficiaries: 'Children aged 3–5 in Nakuru, Kisumu, and Kwale county informal settlements who would otherwise enter primary school without pre-primary preparation.',
      fundingNeeds: { annualBudget: '$95,000', keyCosts: ['Classroom renovation & furniture', 'Learning materials & play equipment', 'Teacher training & ongoing mentorship', 'School feeding program food supplies'] },
      communityContext: 'Only 50% of Kenyan children access pre-primary education, and those who do often attend overcrowded centers (1:60 teacher ratio) with no learning materials. Children who miss ECD are 30% more likely to drop out before primary completion.',
      sdgAlignment: ['SDG 2: Zero Hunger', 'SDG 4: Quality Education', 'SDG 10: Reduced Inequalities'],
      scalability: 'Per-center cost: ~$15,000 for full upgrade + 2 years of operations. Each center serves 60+ children. $600k would upgrade 40 centers across 3 counties, reaching 2,400+ children annually.'
    }
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
    ],
    programInfo: {
      overview: 'A de-institutionalization program that transitions children from orphanages into safe, loving family-based care — either reunification with extended family or placement with trained foster families — with ongoing support to prevent re-institutionalization.',
      impactModel: 'Each child receives a comprehensive assessment, family tracing, and a tailored transition plan. Foster families undergo 40 hours of training and receive a monthly stipend, regular social worker visits, and access to psychosocial support for the child.',
      targetBeneficiaries: 'Children aged 0–17 currently living in institutional orphanages in Nakuru and Nairobi counties who have at least one living relative or a potential foster family placement.',
      fundingNeeds: { annualBudget: '$90,000', keyCosts: ['Social worker salaries (3 FTE)', 'Foster family training & stipends ($50/month/family)', 'Child psychosocial therapy', 'Family tracing & reunification logistics'] },
      communityContext: 'Kenya has 2.5M orphaned children, with 250,000 in institutional care. Research shows institutionalized children suffer developmental delays, attachment disorders, and are vulnerable to abuse. The government has mandated de-institutionalization but lacks implementation capacity.',
      sdgAlignment: ['SDG 3: Good Health', 'SDG 4: Quality Education', 'SDG 16: Peace & Justice'],
      scalability: 'Per-child cost: ~$1,200 for transition + 12 months of support. 95% placement success at 24 months. $750k would transition 500+ children into family care and establish a foster care training infrastructure.'
    }
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
    ],
    programInfo: {
      overview: 'A bridge program that supports high-achieving students from under-resourced secondary schools through the university application process — demystifying admissions, securing scholarships, and providing ongoing mentorship through the transition.',
      impactModel: 'Students join in Form 3 and receive: 1) university & course selection counseling, 2) application essay coaching and KCSE preparation, 3) scholarship and HELB loan navigation, and 4) a university student mentor who guides them through their first year.',
      targetBeneficiaries: 'High-achieving students (top 15% academically) from low-income public secondary schools in Nakuru, Baringo, and Kisumu counties who lack family connections and information resources for university access.',
      fundingNeeds: { annualBudget: '$50,000', keyCosts: ['Mentorship program coordination', 'Career exploration workshops & field trips', 'Application processing support', 'University student mentor stipends'] },
      communityContext: 'Only 5% of students from the poorest quintile in Kenya access university, versus 50% from the wealthiest. Information asymmetry is a major barrier — rural students don\'t know application deadlines, scholarship opportunities, or how to write personal statements.',
      sdgAlignment: ['SDG 4: Quality Education', 'SDG 10: Reduced Inequalities'],
      scalability: 'Per-student cost: ~$250. 85% university enrollment rate. 90% of mentees maintain enrollment into second year. $300k would scale to 1,200 students across 10 counties and establish a national university mentorship network.'
    }
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
    ],
    programInfo: {
      overview: 'A school-based nutrition program that provides daily hot meals sourced from local community gardens, improving attendance, concentration, and nutritional outcomes for children in food-insecure areas.',
      impactModel: 'Each partner school establishes a community garden tended by parents and local farmers. Our team provides seeds, tools, and agronomic support. Harvests supply the school kitchen. Meals are prepared by trained community cooks following a nutritionist-designed menu.',
      targetBeneficiaries: 'Primary school children (ages 4–14) in food-insecure zones of Nakuru, Baringo, and Elgeyo Marakwet counties where household meal frequency is below 2 meals per day.',
      fundingNeeds: { annualBudget: '$110,000', keyCosts: ['School garden establishment & inputs', 'Kitchen equipment & cook stipends', 'Nutritionist & program coordination', 'Water harvesting & storage systems'] },
      communityContext: '30% of Kenyan children are stunted due to chronic malnutrition. In food-insecure areas, children attend school on empty stomachs — attendance drops by 40% during hunger seasons. One daily meal increases attendance by 28% and test scores by 15%.',
      sdgAlignment: ['SDG 2: Zero Hunger', 'SDG 3: Good Health', 'SDG 4: Quality Education'],
      scalability: 'Per-school cost: ~$12,000/year (50% food self-sufficiency after 2 years via gardens). 8,000 daily meals served. $800k would expand to 65 new schools, providing 30,000+ daily meals and establishing 65 community gardens.'
    }
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
    ],
    programInfo: {
      overview: 'A school infrastructure improvement program that transforms dilapidated public school facilities into safe, conducive learning environments — building libraries, science labs, gender-sensitive sanitation blocks, and accessible classrooms.',
      impactModel: 'We partner with school PTAs and county education departments on a cost-sharing basis. Each project follows a standard process: needs assessment, community labor contribution, contractor procurement (local SMEs), and a 12-month maintenance handover.',
      targetBeneficiaries: 'Students and teachers in public primary and secondary schools in Nakuru, Baringo, and West Pokot counties with critical infrastructure deficits.',
      fundingNeeds: { annualBudget: '$200,000', keyCosts: ['Construction materials & labor', 'WASH facility installation', 'Furniture & equipment procurement', 'Architect & engineering supervision'] },
      communityContext: 'Over 60% of Kenyan public schools lack functional libraries. 40% have inadequate or no laboratory facilities. 30% lack gender-separate toilets, a primary reason girls miss school during menstruation. Poor infrastructure directly correlates with below-average exam performance.',
      sdgAlignment: ['SDG 4: Quality Education', 'SDG 6: Clean Water', 'SDG 9: Industry & Innovation'],
      scalability: 'Cost per school: $25,000–$50,000 depending on scope. $1M would fully renovate 20–40 schools, benefiting 15,000+ students. Our community labor contribution model reduces costs by 25% vs traditional contracting.'
    }
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
    ],
    programInfo: {
      overview: 'A rural school digitization program that establishes computer labs with internet connectivity in underserved schools and trains teachers to integrate digital tools into their curriculum delivery.',
      impactModel: 'Each school receives 20 refurbished computers, a local server with offline educational content (Khan Academy, Wikipedia, Kenya curriculum materials), and solar-powered internet. Teachers complete a 5-day digital pedagogy training and receive ongoing coaching.',
      targetBeneficiaries: 'Secondary school students and teachers in rural off-grid areas of Nakuru, Baringo, and Samburu counties with no prior access to computer labs.',
      fundingNeeds: { annualBudget: '$130,000', keyCosts: ['Refurbished computers (20 per school)', 'Local server & offline content setup', 'Solar internet connectivity equipment', 'Teacher digital training program'] },
      communityContext: 'Less than 15% of rural Kenyan schools have functional computer labs. The digital divide means rural students graduate without basic computer skills, placing them at a severe disadvantage in higher education and the job market where digital literacy is now assumed.',
      sdgAlignment: ['SDG 4: Quality Education', 'SDG 9: Industry & Innovation', 'SDG 10: Reduced Inequalities'],
      scalability: 'Per-school cost: ~$18,000 for full lab + training package. $750k would digitize 40 rural schools, reaching 20,000+ students annually with functioning computer labs and trained teachers.'
    }
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
    ],
    programInfo: {
      overview: 'A teacher professional development academy that upgrades the pedagogical skills of rural primary school teachers — with a focus on child-centered teaching, inclusive education, safeguarding, and formative assessment practices.',
      impactModel: 'Teachers participate in a 2-week intensive residential training institute during school breaks, followed by 6 months of in-classroom coaching from trained mentors. Training covers: active learning methodologies, differentiated instruction, child protection, and assessment design.',
      targetBeneficiaries: 'Primary school teachers (Grades 1–8) in rural public schools in Nakuru, Baringo, and Elgeyo Marakwet counties who have received no in-service training in the last 5 years.',
      fundingNeeds: { annualBudget: '$75,000', keyCosts: ['Training institute logistics & materials', 'Mentor coach stipends', 'Teacher travel & accommodation', 'Classroom resource kits'] },
      communityContext: 'Most Kenyan primary teachers received their last professional training at pre-service college — 10–20 years ago. Learner-centered pedagogy, formative assessment, and safeguarding are largely absent from rural classrooms. 1,500+ teachers trained to date with measurable classroom impact.',
      sdgAlignment: ['SDG 4: Quality Education', 'SDG 5: Gender Equality', 'SDG 10: Reduced Inequalities'],
      scalability: 'Per-teacher cost: ~$350 for full training + coaching package. Each trained teacher impacts 50+ students annually. $500k would train 1,400 teachers across 5 counties, reaching 70,000+ students over 3 years.'
    }
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
    ],
    programInfo: {
      overview: 'An inclusive education program that ensures children with disabilities — including those in orphanages and informal settlements — can access quality learning through specialized materials, trained teachers, and accessible school infrastructure.',
      impactModel: 'We conduct school accessibility audits and fund necessary modifications (ramps, accessible toilets, sensory spaces). Teachers receive 5-day training in inclusive pedagogy and individualized education plan (IEP) development. Specialized learning materials are provided per student.',
      targetBeneficiaries: 'Children with physical, sensory, and intellectual disabilities aged 4–18 in Nakuru, Kisumu, and Nairobi counties — both in mainstream schools and special units.',
      fundingNeeds: { annualBudget: '$80,000', keyCosts: ['School accessibility audits & modifications', 'Specialized learning materials & assistive devices', 'Inclusive education teacher training', 'IEP development & monitoring'] },
      communityContext: '2.5M Kenyan children have disabilities, but only 10% are enrolled in school. Physical inaccessibility, lack of trained teachers, and stigma are the primary barriers. Most special needs units lack basic assistive devices — even wheelchairs and Braille materials.',
      sdgAlignment: ['SDG 4: Quality Education', 'SDG 10: Reduced Inequalities', 'SDG 11: Sustainable Cities'],
      scalability: 'Per-school cost: ~$10,000 for accessibility + training + materials. Each school serves 20–40 children with disabilities. $500k would make 50 schools fully inclusive and provide assistive devices for 1,500+ children.'
    }
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
    ],
    programInfo: {
      overview: 'A practical skills pathway for youth who do not pursue university — offering certified vocational training in high-demand trades (plumbing, electrical, welding, automotive, IT) with guaranteed apprenticeship placements.',
      impactModel: '6-month intensive training (60% hands-on, 40% theory) at partnered vocational centers, followed by a 3-month paid apprenticeship with local businesses. Graduates receive government-recognized certification and job placement support for 12 months post-completion.',
      targetBeneficiaries: 'Youth aged 18–28 who have completed secondary school but are not in tertiary education — the "missing middle" who face 50% unemployment and lack formal skills certification.',
      fundingNeeds: { annualBudget: '$120,000', keyCosts: ['Training center partnerships & materials', 'Toolset provision ($300/graduate)', 'Apprenticeship stipend subsidies', 'Job placement officer salaries'] },
      communityContext: 'Kenya\'s youth unemployment rate is 39%. 70% of unemployed youth have secondary education but no vocational skills. The informal sector ("jua kali") absorbs most but offers low wages and no certification. Our graduates earn 3x the median informal sector wage within 6 months.',
      sdgAlignment: ['SDG 4: Quality Education', 'SDG 8: Decent Work', 'SDG 10: Reduced Inequalities'],
      scalability: 'Per-graduate cost: ~$1,200. 85% job placement, average starting salary $250/month (3x above baseline). $1M would train 800+ youth and establish a national apprenticeship database connecting graduates with 500+ partner employers.'
    }
  }
];

export default programsData;
