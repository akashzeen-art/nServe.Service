import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "zh";

const T = {
  en: {
    back: "Back", contactUs: "Contact Us", interestedCollab: "Interested for Collaboration?",
    allRights: "All rights reserved.", scroll: "Scroll", knowMore: "Know More",

    // Homepage sections
    sec1Title: "Video On\nDemand", sec1Sub: "Your Screen. Your Rules.",
    sec2Title: "Play 365", sec2Sub: "Play Smart. Win Big.",
    sec3Title: "Nutraceutical\nProducts", sec3Sub: "Straight from the Himalayan Valleys!",
    sec4Title: "MVAS", sec4Sub: "Mobile Value Added Services.",

    // VOD
    vodNav: "Video On Demand", vodHero: "Video On Demand", vodHeroSub: "Your Screen. Your Rules.",
    vodAttLabel: "Attention", vodAttHead: "Media Buyers & Publishers",
    vodAttDesc: "Hot & Bold Movies · Web Series · Short-Form Videos · AI-Generated HD Content",
    vodPortfolio: "View Portfolio", vodRiskDesc: "Choose your risk appetite",
    vodHigh: "High Risk", vodLow: "Low Risk", vodClick: "Click Here To View",
    vodAboutTitle: "About Our VOD Platform",
    vodAbout1: "Our flagship VOD offerings generate organic revenue through subscription and one time purchase titles of value to the customer.",
    vodAbout2: "Operating in multiple countries through a dedicated content library, mServeTech ensures customer satisfaction and recurring revenue through repeated renewals — hence ensuring a healthy revenue and retention metrics!",
    vodAbout3: "Video on demand operates in two completely unique High Risk and Low Risk content profiles, with offerings for the individual user of unique content preference with inhouse content curation and a legal content distribution.",
    vodOffer: "What We Offer", vodTraffic: "Looking for Traffic",
    vodTrafficDesc: "We work on CPA · CPM · CPS models.\nConnect with us and scale your media buying operations.",
    vodEarn: "Opportunity To Earn", vodEarnDesc: "Potential earnings of up to", vodEarnMonth: "/ Month",
    vodFeature1: "Hot & Bold Movies", vodFeature2: "Web Series",
    vodFeature3: "Short-Form Videos", vodFeature4: "AI-Generated HD Content",

    // iGaming
    igNav: "iGaming", igHero: "iGAMING", igHeroSub: "Play Smart. Win Big.",
    igFeat1: "Technology", igFeat2: "Engagement", igFeat3: "Instant Rewards",
    igOnline: "Online & Real-Time", igSkill: "Skill Based Fantasy Sports",
    igTagline: "The new Play 365 — where skill meets thrill",
    igGame: "iGame", igGameDesc: "Next-gen multiplayer gaming experiences",
    igQuiz: "Quiz", igQuizDesc: "Test your knowledge, win real rewards",
    igAboutTitle: "About Our Play 365 Platform",
    igAbout1: "Our dedicated Play 365 vertical is capturing high stakes and heavy revenue and retention fields into regulation friendly economies, operating with licensed operators in some countries — to independent operations in few other companies — ensuring FULLY COMPLIANT and LEGAL operations and ensuring a clean, legal and customer friendly revenue operations.",
    igAbout2: "Our heavily tailored offerings relevant to the regional gaming and interaction interests of the local public ensure a healthy and immersive Play 365 experience. This is demonstrated in our Quiz focused web platform and the Play 365 portal spread across different geographies for dedicated service.",
    igInvite: "Inviting Partners", igInviteDesc: "Agencies, Media Buyers & Publishers are invited to join our growing network and scale together.",
    igPricing: "Pricing Models",

    // Nutra
    nuNav: "Nutra & Wellness", nuHero: "Designed For You", nuHeroSub: "Straight from the valley!!",
    nuVitality: "Vitality & Performance", nuSci: "Scientifically Formulated",
    nuSciDesc: "Blends of vitamins, minerals, herbs, and bioactive compounds crafted for real results.",
    nuProducts: "Our Products", nuProductsDesc: "Earn up to $100 on each Straight Sale",
    nuCert: "Certifications", nuAboutTitle: "About Our Nutra Platform",
    nuAbout1: "The rise and retention of Nutraceutical products in the general public is driven by heavy trust and reliable performance of the product and their success in the market.",
    nuAbout2: "nServeTech produces two distinct line-ups for Males and Females — for a healthy personal lifestyle to add more confidence and satisfaction to our customers.",
    nuAbout3: "Fully compliant Certifications and affiliations — and a formula from the Valleys of the Himalayas delivers 100% Trust and fully safe results to every single client!",
    nuRegions: "Target Regions",
    // Product names
    nuP1Name: "Play Tonight", nuP1Tag: "Wellness For Men",
    nuP1Desc: "Performance and vitality through bioactive compounds, herbs, and minerals — Straight from the valley!.",
    nuP2Name: "Ameora", nuP2Tag: "Wellness For Women",
    nuP2Desc: "Scientifically formulated blend of vitamins, minerals, herbs, and bioactive compounds designed for women's vitality.",
    // Certifications
    nuCert1: "GMP Certified", nuCert2: "Lab Tested", nuCert3: "Zero Chemicals", nuCert4: "Natural",
    // Badges
    nuBadge1: "100% Herbal", nuBadge2: "Quick Action", nuBadge3: "Pure & Safe",

    // VAS
    vasNav: "MVAS", vasHero: "MVAS", vasHeroSub: "Mobile Value Added Services.",
    vasAboutLabel: "About", vasAboutHead: "Revolutionizing Technology",
    vasAbout1: "Technology has revolutionized the world, and at  we believe in revolutionizing technology.",
    vasAbout2: "While we provide end-to-end solutions to telecommunication needs, we strive to develop platforms that enhance the very usage of technology. With a combined experience of 30+ years in the industry, the team has understood the gap in the telecom industry — the need for a company that provides marketing and technological requirements to their client.",
    vasSvc1: "Mobile MVAS", vasSvc2: "Data Services", vasSvc3: "SMS & Messaging", vasSvc4: "Digital Content",
    vasDigital: "Digital Marketing",
    vasDigitalDesc: " offers 360º digital marketing solutions to clients. We cover all aspects of digital marketing on all digital devices and offer various solutions to optimize your digital advertising spends.",
    vasSolutions: "Our Solutions",
    vasSol1T: "Campaign Management", vasSol1D: "Comprehensive digital campaign planning and execution",
    vasSol2T: "Analytics & Reporting", vasSol2D: "Real-time insights into campaign performance",
    vasSol3T: "Ad Optimization", vasSol3D: "Advanced targeting and optimization techniques",
    vasSol4T: "Content Strategy", vasSol4D: "Data-driven content creation and distribution",
    vasSol5T: "Conversion Optimization", vasSol5D: "Maximize ROI with proven conversion strategies",
    vasSol6T: "Brand Development", vasSol6D: "Build and strengthen your digital presence",
    vasWhy: "Why Choose ?",
    vasWhy1: "30+ years of combined industry experience",
    vasWhy2: "Proven track record of successful campaigns",
    vasWhy3: "Cutting-edge technology and tools",
    vasWhy4: "Dedicated account management",
    vasPricing: "Pricing Models", vasWorldwide: "Worldwide Presence",
    vasWorldwideDesc: "Operating across all major global markets",
    vasFlow: "Service Flow", vasTelecom: "Telecom Operators",
    vasGlobal: "Service Flow Presence", vasCountries: "Countries",
    vasFlow1: "Pin API", vasFlow2: "S2S", vasFlow3: "One Click Flow",
    vasFlow4: "Two Click Flow", vasFlow5: "MO Flow",

    // Contact
    conNav: "Contact Us", conTitle: "Contact Us", conSub: "We're here to help. Reach out to us anytime.",
    conAddress: "Address", conEmail: "Email", conPhone: "Phone", conTelegram: "Telegram",
    conGetInTouch: "Get In Touch",
  },
  zh: {
    back: "返回", contactUs: "联系我们", interestedCollab: "有意合作？",
    allRights: "版权所有。", scroll: "滚动", knowMore: "了解更多",

    // Homepage sections
    sec1Title: "视频\n点播", sec1Sub: "您的屏幕，您做主。",
    sec2Title: "畅玩365", sec2Sub: "智慧游戏，赢得大奖。",
    sec3Title: "营养保健\n产品", sec3Sub: "直来自喜马拉雅山谷！",
    sec4Title: "移动增值\n服务", sec4Sub: "移动增值服务。",

    // VOD
    vodNav: "视频点播", vodHero: "视频点播", vodHeroSub: "您的屏幕，您做主。",
    vodAttLabel: "注意", vodAttHead: "媒体买家和发布商",
    vodAttDesc: "热门大胆电影 · 网络剧 · 短视频 · AI生成高清内容",
    vodPortfolio: "查看作品集", vodRiskDesc: "选择您的风险偏好",
    vodHigh: "高风险", vodLow: "低风险", vodClick: "点击查看",
    vodAboutTitle: "关于我们的视频点播平台",
    vodAbout1: "我们的旗舰VOD产品通过订阅和一次性购买为客户创造有机收入。",
    vodAbout2: "mServeTech通过专属内容库在多个国家运营，确保客户满意度和持续续订带来的稳定收入！",
    vodAbout3: "视频点播分为高风险和低风险两种内容类型，为不同偏好的用户提供专属内容。",
    vodOffer: "我们提供的服务", vodTraffic: "寻求流量",
    vodTrafficDesc: "我们采用CPA · CPM · CPS模式。\n与我们合作，扩大您的媒体购买业务。",
    vodEarn: "盈利机会", vodEarnDesc: "潜在收益高达", vodEarnMonth: "/ 月",
    vodFeature1: "热门大胆电影", vodFeature2: "网络剧",
    vodFeature3: "短视频", vodFeature4: "AI生成高清内容",

    // iGaming
    igNav: "电子竞技", igHero: "电子竞技", igHeroSub: "智慧游戏，赢得大奖。",
    igFeat1: "技术", igFeat2: "参与度", igFeat3: "即时奖励",
    igOnline: "在线实时", igSkill: "技能型梦幻体育",
    igTagline: "新型电子竞技 — 技能与刺激的结合",
    igGame: "电子游戏", igGameDesc: "下一代多人游戏体验",
    igQuiz: "知识竞赛", igQuizDesc: "测试您的知识，赢取真实奖励",
    igAboutTitle: "关于我们的电子竞技平台",
    igAbout1: "我们专注的电子竞技业务正在进入监管友好的经济体，与持牌运营商合作，确保完全合规和合法运营。",
    igAbout2: "我们针对当地公众的区域游戏兴趣量身定制产品，确保健康沉浸的电子竞技体验。",
    igInvite: "诚邀合作伙伴", igInviteDesc: "诚邀代理商、媒体买家和发布商加入我们不断壮大的网络，共同发展。",
    igPricing: "定价模式",

    // Nutra
    nuNav: "营养保健", nuHero: "专为您设计", nuHeroSub: "直来自山谷！！",
    nuVitality: "活力与表现", nuSci: "科学配方",
    nuSciDesc: "精心调配的维生素、矿物质、草药和生物活性化合物，打造真实效果。",
    nuProducts: "我们的产品", nuProductsDesc: "每笔直销最高赚取100美元",
    nuCert: "认证", nuAboutTitle: "关于我们的营养平台",
    nuAbout1: "营养保健品在大众中的兴起和留存，源于产品的高度信任和可靠性能。",
    nuAbout2: "nServeTech为男性和女性分别推出两条产品线，助力健康生活方式。",
    nuAbout3: "完全合规的认证和资质 — 来自喜马拉雅山谷的配方，为每位客户提供100%可信赖的安全效果！",
    nuRegions: "目标地区",
    nuP1Name: "今晚畅玩", nuP1Tag: "男性健康",
    nuP1Desc: "通过生物活性化合物、草药和矿物质提升活力与表现 — 直来自山谷！",
    nuP2Name: "艾摩拉", nuP2Tag: "女性健康",
    nuP2Desc: "科学配方融合维生素、矿物质、草药和生物活性化合物，专为女性活力设计。",
    nuCert1: "GMP认证", nuCert2: "实验室检测", nuCert3: "零化学品", nuCert4: "天然",
    nuBadge1: "100%草本", nuBadge2: "快速见效", nuBadge3: "纯净安全",

    // VAS
    vasNav: "移动增值服务", vasHero: "移动增值服务", vasHeroSub: "移动增值服务。",
    vasAboutLabel: "关于", vasAboutHead: "革新技术",
    vasAbout1: "技术改变了世界，在，我们相信革新技术。",
    vasAbout2: "我们提供端到端的电信解决方案，致力于开发提升技术使用体验的平台，拥有30年以上的行业经验。",
    vasSvc1: "移动增值服务", vasSvc2: "数据服务", vasSvc3: "短信与消息", vasSvc4: "数字内容",
    vasDigital: "数字营销",
    vasDigitalDesc: "为客户提供360º数字营销解决方案，覆盖所有数字设备上的各个方面。",
    vasSolutions: "我们的解决方案",
    vasSol1T: "活动管理", vasSol1D: "全面的数字活动规划与执行",
    vasSol2T: "分析与报告", vasSol2D: "实时活动效果洞察",
    vasSol3T: "广告优化", vasSol3D: "先进的定向与优化技术",
    vasSol4T: "内容策略", vasSol4D: "数据驱动的内容创作与分发",
    vasSol5T: "转化优化", vasSol5D: "通过成熟策略最大化投资回报",
    vasSol6T: "品牌建设", vasSol6D: "建立并强化您的数字形象",
    vasWhy: "为什么选择？",
    vasWhy1: "30年以上的行业综合经验",
    vasWhy2: "成功活动的良好记录",
    vasWhy3: "尖端技术与工具",
    vasWhy4: "专属客户管理",
    vasPricing: "定价模式", vasWorldwide: "全球覆盖",
    vasWorldwideDesc: "覆盖全球主要市场",
    vasFlow: "服务流程", vasTelecom: "电信运营商",
    vasGlobal: "服务流程全球覆盖", vasCountries: "国家",
    vasFlow1: "Pin API", vasFlow2: "S2S", vasFlow3: "一键流程",
    vasFlow4: "两键流程", vasFlow5: "MO流程",

    // Contact
    conNav: "联系我们", conTitle: "联系我们", conSub: "我们随时为您提供帮助。",
    conAddress: "地址", conEmail: "电子邮件", conPhone: "电话", conTelegram: "电报 Telegram",
    conGetInTouch: "联系方式",
  },
};

type TKey = keyof typeof T.en;
interface Ctx { lang: Lang; toggle: () => void; t: (k: TKey) => string; }

const LangContext = createContext<Ctx>({ lang: "en", toggle: () => {}, t: (k) => T.en[k] });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang(l => l === "en" ? "zh" : "en");
  const t = (k: TKey) => T[lang][k];
  return <LangContext.Provider value={{ lang, toggle, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
export type { TKey };
