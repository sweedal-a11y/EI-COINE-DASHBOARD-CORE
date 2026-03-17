import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiEye, FiLock, FiBarChart2, FiGlobe, FiClock, FiTrendingUp,
  FiArrowRight, FiChevronRight, FiMenu, FiX, FiArrowUpRight,
  FiShield, FiTwitter, FiGithub, FiLinkedin, FiMail,
} from "react-icons/fi";
import { RiHandCoinLine } from "react-icons/ri";
import heroBg from "./assets/image.png";

// ── Token logo SVGs (kept inline — no icon lib equivalent) ──
const EminarLogo = () => (
  <svg width="64" height="64" viewBox="0 0 91 91" fill="none">
    <g filter="url(#f1)">
      <path d="M13.3 16C13.3 7.2 20.5 0 29.3 0h32C70.2 0 77.3 7.2 77.3 16v32c0 8.8-7.1 16-16 16h-32c-8.8 0-16-7.2-16-16V16z" fill="url(#g1a)"/>
      <path d="M23.9 45.2c1.1-2.7 12.3-9.4 12.2-12.9-.1-3.5-9.7-8.9-11.7-12.5-1.3-2.4-1.2-5 1.1-7.3 2.3-2.3 4.5-2.2 6.6-1.2 2 1 10.8 11.8 12.9 11.8 2.1 0 8-10 13.4-11.9 5.3-1.97 6.3-.26 7.3.7 1 1 2.9 3.6.5 7.2-3.2 4.7-4.9 6.2-7.4 7.8-2.6 1.6-5.4 1.6-8.1.8-2.6-.8-3.1-2.4-5.7-4.3-2.7-1.8-6.2-.7-8.1 1.4-1.8 2.1-1.1 5.7 0 7.6 1.1 1.8 5.4 8.3 3.6 11.8-1.7 3.5-6.8 8.6-9 9.4-2.2.8-4.2 0-6-1.6-2.2-2-2.9-4.1-1.6-6.8z" fill="url(#g1b)"/>
      <circle cx="55.8" cy="43" r="10.8" fill="#3CEE90"/>
    </g>
    <defs>
      <filter id="f1" x="0" y="0" width="90.7" height="90.7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="4" operator="erode" in="SourceAlpha" result="e1"/>
        <feOffset dy="5.3"/><feGaussianBlur stdDeviation="3.3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.95 0 0 0 0 0.98 0 0 0 0 1 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="s1"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="3.3" operator="erode" in="SourceAlpha" result="e2"/>
        <feOffset dy="13.3"/><feGaussianBlur stdDeviation="8.3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.95 0 0 0 0 0.98 0 0 0 0 1 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="s1" result="s2"/>
        <feBlend mode="normal" in="SourceGraphic" in2="s2" result="shape"/>
      </filter>
      <linearGradient id="g1a" x1="13.3" y1="0" x2="77.3" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F1FBFF"/><stop offset="1" stopColor="#F1FBFF"/>
      </linearGradient>
      <linearGradient id="g1b" x1="45" y1="10.7" x2="37.2" y2="46.4" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4EBCF1"/><stop offset="1" stopColor="#3CEE90"/>
      </linearGradient>
    </defs>
  </svg>
);

const AurivoxLogo = () => (
  <svg width="64" height="64" viewBox="0 0 91 91" fill="none">
    <g filter="url(#f2)">
      <mask id="m2" fill="white">
        <path d="M13.3 16C13.3 7.2 20.5 0 29.3 0h32C70.2 0 77.3 7.2 77.3 16v32c0 8.8-7.1 16-16 16h-32c-8.8 0-16-7.2-16-16V16z"/>
      </mask>
      <path d="M13.3 16C13.3 7.2 20.5 0 29.3 0h32C70.2 0 77.3 7.2 77.3 16v32c0 8.8-7.1 16-16 16h-32c-8.8 0-16-7.2-16-16V16z" fill="url(#g2a)"/>
      <path d="M29.3 0V-.5h32V0zM77.3 16h.5v32h-.5zM61.3 64v.5h-32V64zM13.3 48h-.5V16h.5z" fill="#FEE685" mask="url(#m2)"/>
      <path d="M33.8 39.1L45.3 53.3l5.8-7.1 5.8-7.1" stroke="#FF8C00" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M59.8 39.1H30.9l2.9-5.7h23.1l-1.9-3.8H35.7l9.6-19 14.5 28.5z" fill="url(#g2b)"/>
    </g>
    <defs>
      <filter id="f2" x="0" y="0" width="90.7" height="90.7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="4" operator="erode" in="SourceAlpha" result="e1"/>
        <feOffset dy="5.3"/><feGaussianBlur stdDeviation="3.3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.99 0 0 0 0 0.6 0 0 0 0 0 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="s1"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="3.3" operator="erode" in="SourceAlpha" result="e2"/>
        <feOffset dy="13.3"/><feGaussianBlur stdDeviation="8.3"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.99 0 0 0 0 0.6 0 0 0 0 0 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="s1" result="s2"/>
        <feBlend mode="normal" in="SourceGraphic" in2="s2" result="shape"/>
      </filter>
      <linearGradient id="g2a" x1="13.3" y1="0" x2="77.3" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF8DB"/><stop offset="1" stopColor="#FFFCF2"/>
      </linearGradient>
      <linearGradient id="g2b" x1="30.9" y1="24.9" x2="59.8" y2="24.9" gradientUnits="userSpaceOnUse">
        <stop offset="0.5" stopColor="#FFB800"/><stop offset="0.5" stopColor="#845418"/>
      </linearGradient>
    </defs>
  </svg>
);

// ── Data ──
const TOKENS = [
  {
    Logo: EminarLogo, name: "Eminar", symbol: "EMN",
    symBg: "bg-[#E3F9EE] text-[#1A7A4A]",
    tagline: "Gold — Refined. Secured. Digitized.",
    cells: [["Asset Backing","Physical Gold"],["Network","Ethereum"],["Snapshot Price","$23,738"],["Date","Oct 14, 2025"]],
    desc: "Eminar represents allocated physical gold brought onto the Ethereum blockchain through ERC standards.",
    whyTitle: "Why Eminar?",
    reasons: ["1:1 Backed By Audited Gold Reserves","Fractional Ownership Of Institutional-Grade Gold","Blockchain Transparency With Real-World Backing","Hedge Against Inflation And Fiat Volatility"],
  },
  {
    Logo: AurivoxLogo, name: "Aurivox", symbol: "$AVX",
    symBg: "bg-[#FFF3E0] text-[#B85C00]",
    tagline: "Silver — Dynamic. Liquid. Accessible.",
    cells: [["Asset Backing","Physical Silver"],["Network","Ethereum"],["Performance","+14.67%"],["Reference Price","$23,738"]],
    highlight: 2,
    desc: "Aurivox unlocks silver's dual power — monetary heritage and industrial demand — within a decentralized ecosystem.",
    whyTitle: "Why Aurivox?",
    reasons: ["Fully Collateralized Silver Reserves","Lower Entry Threshold Compared To Gold","Ideal For Diversification","Enhanced Liquidity Via ERC Compatibility","Transparent Issuance & Reserve Alignment"],
  },
  {
    Logo: EminarLogo, name: "Xenara", symbol: "XNR",
    symBg: "bg-[#E3F9EE] text-[#1A7A4A]",
    tagline: "The Intelligence Behind EI+",
    cells: [["Role","Utility & Governance"],["Function","Ecosystem Token"],["Type","Native Utility"],["Network","Ethereum"]],
    desc: "Xenara is the ecosystem engine — powering governance, staking, fee optimization, and future innovation layers.",
    whyTitle: "Why Xenara?",
    reasons: ["Governance Rights Across The EI+ Ecosystem","Staking Rewards & Fee Discounts","Powers Future Innovation Layers","Native Utility Across All Three Tokens"],
  },
];

const ADVANTAGES = [
  { icon: <FiEye size={20} color="#4F46E5" />, bg: "bg-[#EBF0FB]", title: "Absolute Transparency", desc: "Every token corresponds to physical reserves verified on-chain.", dark: false, wide: true },
  { icon: <FiLock size={20} color="white" />, bg: "bg-[#0E1220]", title: "Secure Vaults", desc: "Insured facilities with 24/7 monitoring.", dark: true, wide: false },
  { icon: <FiBarChart2 size={20} color="#7C3AED" />, bg: "bg-[#EEEAF8]", title: "Global Liquidity", desc: "Transfer assets anywhere, anytime at the speed of blockchain.", dark: false, wide: false },
  { icon: <FiGlobe size={20} color="#D97706" />, bg: "bg-[#FDF0DC]", title: "Borderless Access", desc: "Transfer assets anywhere, anytime at the speed of blockchain.", dark: false, wide: false },
];

const AUDIENCE = [
  { icon: <FiClock size={20} />, title: "Long-term Wealth Preservers", desc: "Protect purchasing power across decades with assets that have stood the test of time." },
  { icon: <RiHandCoinLine size={20} />, title: "Digital-native Investors", desc: "Combine the familiarity of blockchain with the stability of real precious metal reserves." },
  { icon: <FiShield size={20} />, title: "Institutional Allocators", desc: "Add audited, on-chain precious metal exposure to diversified institutional portfolios." },
  { icon: <FiTrendingUp size={20} />, title: "Hedge-seeking Portfolio Managers", desc: "Offset fiat volatility and market correlation with gold and silver-backed digital assets." },
  { icon: <FiGlobe size={20} />, title: "Global Entrepreneurs", desc: "Transfer, hold, and transact in stable asset-backed tokens across borders without friction." },
];

const SOCIALS = [
  { label: "Twitter", icon: <FiTwitter size={16} /> },
  { label: "GitHub", icon: <FiGithub size={16} /> },
  { label: "LinkedIn", icon: <FiLinkedin size={16} /> },
  { label: "Email", icon: <FiMail size={16} /> },
];

// ── Components ──
function TokenCard({ token }) {
  const { Logo, name, symbol, symBg, tagline, cells, highlight, desc, whyTitle, reasons } = token;
  return (
    <div className="bg-[#F7F7F7] rounded-[28px] p-4 md:p-5 cursor-pointer hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-200">
      <div className="flex flex-col md:flex-row gap-4 md:gap-5">
        <div className="bg-white rounded-[20px] p-6 flex flex-col gap-4 flex-none md:w-[320px] shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0"><Logo /></div>
            <div>
              <div className="text-[20px] font-bold text-[#1A1A1A]">{name}</div>
              <span className={`text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-md inline-block mt-1 ${symBg}`}>{symbol}</span>
            </div>
          </div>
          <p className="text-[13px] text-[#888880]">{tagline}</p>
          <div className="rounded-[12px] overflow-hidden border border-[#EBEBEB]">
            <div className="grid grid-cols-2">
              {cells.map(([label, val], ci) => (
                <div key={ci} className={`bg-[#F8F9F8] px-4 py-3 ${ci % 2 === 0 ? "border-r border-[#EBEBEB]" : ""} ${ci < 2 ? "border-b border-[#EBEBEB]" : ""}`}>
                  <div className="text-[11px] text-[#9A9A95] mb-1 font-medium">{label}</div>
                  <div className={`text-[13px] font-bold ${highlight === ci ? "text-[#2E7D32]" : "text-[#1A1A1A]"}`}>{val}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[13px] text-[#888880] leading-relaxed">{desc}</p>
          <button className="w-full bg-[#111] hover:bg-[#2a2a2a] text-white text-[14px] font-semibold py-3.5 rounded-[12px] flex items-center justify-center gap-2 cursor-pointer transition-colors">
            Learn More <FiArrowUpRight size={14} />
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center px-2 md:px-8 py-4">
          <h3 className="text-[26px] md:text-[28px] font-bold text-[#1A1A1A] mb-5 tracking-[-0.5px]">{whyTitle}</h3>
          <ul className="space-y-3.5">
            {reasons.map((r, ri) => (
              <li key={ri} className="flex items-start gap-3 text-[15px] text-[#1A1A1A] leading-snug font-medium">
                <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-[#1A1A1A] flex-shrink-0" />{r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function EIPlusCoins() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="font-sans bg-white text-[#1A1A1A] overflow-x-hidden hide-scrollbar">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-4 bg-white border-b border-gray-100">
        <div className="flex flex-col cursor-pointer select-none">
          <div className="flex items-baseline gap-0 leading-none">
            <span className="text-[#C9A84C] font-bold text-2xl">EI+</span>
            <span className="font-bold text-2xl">Coins</span>
          </div>
          <span className="text-[9px] text-[#888880] tracking-[2px] uppercase mt-0.5">Powered by Emireq</span>
        </div>
        <div className="hidden md:flex items-center gap-12">
          {["ECOSYSTEM","CONTACT"].map(l => (
            <a key={l} className="text-sm font-medium tracking-widest uppercase cursor-pointer hover:text-[#C9A84C] transition-colors">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center text-sm font-semibold border border-[#CCC] rounded-full px-6 py-2.5 hover:border-[#1A1A1A] transition-all">LOG IN</button>
          <button onClick={() => navigate("/create-account")} className="flex items-center text-sm font-semibold text-white bg-[#1A1A1A] hover:bg-[#333] rounded-full px-6 py-2.5 cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg">SIGN UP</button>
          <button className="md:hidden p-1 cursor-pointer" onClick={() => setMobileOpen(true)}><FiMenu size={22} /></button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, transparent 40%, rgba(255,255,255,0.15) 100%), linear-gradient(to right, rgba(255,255,255,0.25) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.25) 100%), linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 15%, transparent 85%, rgba(255,255,255,0.4) 100%)" }} />
        <div className="relative z-10 text-center max-w-3xl px-6 md:px-12 pt-32 pb-20">
          <h1 className="font-semibold leading-[1.15] tracking-[-2px] mb-6 text-[#1A1A1A] whitespace-nowrap" style={{ fontSize: "clamp(32px, 4.5vw, 72px)" }}>
            New Standard of{" "}
            <span className="text-[#C9A84C]" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400 }}>Digital</span>
            <br />Precious{" "}
            <span className="text-[#C9A84C]" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400 }}>Wealth</span>
          </h1>
          <p className="text-[16px] text-[#555550] leading-relaxed max-w-[540px] mx-auto mb-10">EI+ Coins Transforms Centuries Of Precious Metal Security Into A Borderless, Audited, And Institutional-Grade Digital Experience.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="cursor-pointer bg-[#1C1F3A] hover:bg-[#2a2f52] text-white text-[15px] font-medium px-7 py-3.5 rounded-full flex items-center gap-2 transition-all hover:-translate-y-0.5 hover:shadow-xl">
              Invest Now <FiArrowRight size={16} />
            </button>
            <button className="cursor-pointer flex items-center gap-1.5 text-[15px] font-semibold text-[#1A1A1A] hover:gap-3 transition-all">
              View Reserves <FiChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-6">
          {[["$2.4B+","GOLD RESERVES"],["$680M+","SILVER RESERVES"],["$47,000+","TOKEN HOLDERS"]].map(([val, label]) => (
            <div key={label} className="text-center cursor-pointer group flex-1">
              <div className="text-[#1A1A1A] group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-1px", lineHeight: 1.1 }}>{val}</div>
              <div className="text-[#888880] uppercase mt-3" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "3px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-[#F5F5F3] py-20 md:py-24 px-6 text-center">
        <p className="mx-auto leading-relaxed" style={{ fontWeight: 400, fontSize: "clamp(16px, 1.8vw, 22px)", color: "#2C2C2A", maxWidth: "680px", lineHeight: 1.75 }}>
          "We Don't Create Speculative Tokens. We Tokenize Real,<br/>Audited, Physical Assets — Secured In Vaults<br/>And Verified On-Chain."
        </p>
      </section>

      {/* ECOSYSTEM */}
      <section className="bg-white py-24 px-6 md:px-12">
        <p className="text-[11px] font-bold tracking-[3px] text-[#C9A84C] uppercase text-center mb-3">DIGITAL ASSETS</p>
        <h2 className="text-center mb-3 font-semibold tracking-[-1.5px]" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>Our Ecosystem.</h2>
        <p className="text-[15px] text-[#888880] text-center mb-16 max-w-xl mx-auto">Three precision-engineered tokens. Each backed by real, audited, physical assets.</p>
        <div className="flex flex-col gap-6 max-w-[860px] mx-auto">
          {TOKENS.map((t, i) => <TokenCard key={i} token={t} />)}
        </div>
      </section>

      {/* ADVANTAGE */}
      <section className="bg-white py-24 px-6 md:px-16">
        <p className="text-xs font-semibold tracking-[3px] text-[#C9A84C] uppercase text-center mb-4">WHY EI+</p>
        <h2 className="text-center mb-5" style={{ fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1 }}>The EI+ Advantage</h2>
        <p className="text-[15px] text-[#888880] text-center max-w-[600px] mx-auto mb-16 leading-relaxed">Built on a foundation of transparency, security, and borderless access. Every advantage verified on-chain.</p>
        <div className="max-w-[1100px] mx-auto flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            {ADVANTAGES.slice(0, 2).map((a, i) => (
              <div key={i} className={`${a.bg} rounded-3xl p-10 cursor-pointer hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] transition-all min-h-[220px] flex flex-col justify-between ${a.wide ? "flex-[1.7]" : "flex-1"}`}>
                <div>
                  <div className={`w-11 h-11 ${a.dark ? "bg-white/10" : "bg-white"} rounded-2xl flex items-center justify-center mb-8 shadow-sm`}>{a.icon}</div>
                  <div className={`text-[18px] font-bold mb-3 ${a.dark ? "text-white" : "text-[#1A1A1A]"}`}>{a.title}</div>
                  <div className={`text-[14px] leading-relaxed ${a.dark ? "text-white/50" : "text-[#6B6B68]"}`}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {ADVANTAGES.slice(2).map((a, i) => (
              <div key={i} className={`${a.bg} flex-1 rounded-3xl p-10 cursor-pointer hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all min-h-[220px] flex flex-col justify-between`}>
                <div>
                  <div className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">{a.icon}</div>
                  <div className="text-[18px] font-bold text-[#1A1A1A] mb-3">{a.title}</div>
                  <div className="text-[14px] text-[#6B6B68] leading-relaxed">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-[#ECEAE6] py-24 px-6 md:px-12">
        <h2 className="text-center text-[#1A1A1A] mb-5" style={{ fontSize: "clamp(32px, 4vw, 58px)", fontWeight: 600, letterSpacing: "-1.5px", lineHeight: 1.1 }}>A Vision Beyond Tokens</h2>
        <p className="text-[15px] text-[#666660] text-center max-w-[640px] mx-auto mb-16 leading-relaxed">
          We are building a <strong className="text-[#1A1A1A] font-semibold">transparent, regulated, asset-backed digital economy</strong> — where precious metals regain relevance in the blockchain era.
        </p>
        <div className="relative rounded-3xl overflow-hidden max-w-[1100px] mx-auto bg-black">
          <img src={heroBg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" style={{ filter: "brightness(0.12) saturate(2)", mixBlendMode: "luminosity" }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 68% 45%, rgba(140,90,5,0.4) 0%, transparent 55%), radial-gradient(ellipse at 82% 75%, rgba(100,60,0,0.25) 0%, transparent 45%)" }} />
          <div className="relative z-10 flex flex-col md:flex-row min-h-[520px]">
            <div className="flex-none md:w-[420px] p-10 md:p-14 flex flex-col justify-center border-r border-white/[0.06]">
              <div className="text-[11px] font-bold tracking-[3px] text-[#C9A84C] uppercase mb-5">WHO IT'S FOR</div>
              <h3 className="text-white font-bold leading-tight mb-6" style={{ fontSize: "clamp(30px, 3.2vw, 46px)", letterSpacing: "-1px" }}>Built for the Modern Wealth Builder</h3>
              <p className="text-[14px] leading-[1.75] mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>EI+ Coins bridges the gap between centuries of precious metal wisdom and the efficiency of decentralized finance.</p>
              <div className="mb-10 pl-5 py-4 pr-4 italic text-[14px] leading-relaxed" style={{ borderLeft: "3px solid #C9A84C", background: "rgba(255,255,255,0.05)", borderRadius: "0 8px 8px 0", color: "rgba(255,255,255,0.70)" }}>
                "This is not volatility-driven speculation. This is asset-backed digital stability."
              </div>
              <button className="cursor-pointer self-start bg-white hover:bg-[#C9A84C] hover:text-white text-[#1A1A1A] font-bold tracking-[2px] uppercase transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{ fontSize: "13px", padding: "14px 32px", borderRadius: "50px" }}>
                GET STARTED NOW
              </button>
            </div>
            <div className="flex-1 px-8 md:px-12 py-10 md:py-14 flex flex-col justify-center">
              {AUDIENCE.map((item, i) => (
                <div key={item.title} className="flex gap-5 items-start cursor-pointer group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-[#C9A84C] transition-all group-hover:bg-[#C9A84C]/25" style={{ background: "rgba(255,255,255,0.07)" }}>
                      {item.icon}
                    </div>
                    {i < AUDIENCE.length - 1 && <div className="w-px my-1" style={{ background: "rgba(201,168,76,0.3)", minHeight: "28px" }} />}
                  </div>
                  <div className="pb-6">
                    <div className="font-bold text-white mb-1.5 group-hover:text-[#C9A84C] transition-colors" style={{ fontSize: "clamp(14px,1.4vw,16px)" }}>{item.title}</div>
                    <div className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-28 px-6 md:px-16 text-center">
        <h2 className="text-[#1A1A1A] leading-[1.1] mb-8 mx-auto" style={{ fontSize: "clamp(44px, 7vw, 88px)", maxWidth: "800px" }}>
          <span className="block whitespace-nowrap">
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400 }}>Own</span>{" "}
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>the Metal.</span>
          </span>
          <span className="block whitespace-nowrap">
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>Move at</span>{" "}
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400, color: "#7D96B2" }}>Speed.</span>
          </span>
        </h2>
        <p className="text-center mx-auto mb-12 leading-relaxed" style={{ fontSize: "clamp(15px, 1.5vw, 17px)", color: "#7A7A75", maxWidth: "560px" }}>
          Join The Transparent, Regulated, Asset-Backed Digital Economy Where Precious Metals Regain Relevance In The Blockchain Era.
        </p>
        <div className="flex gap-4 justify-center flex-wrap items-center">
          <button className="cursor-pointer bg-[#1A1A1A] hover:bg-[#333] text-white font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg" style={{ fontSize: "15px", padding: "14px 32px", borderRadius: "50px" }}>Get Started Now</button>
          <button className="cursor-pointer flex items-center gap-3 bg-white hover:bg-gray-50 transition-all hover:-translate-y-0.5" style={{ border: "1.5px solid #E2E2DC", borderRadius: "50px", padding: "10px 20px 10px 10px", fontSize: "14px", fontWeight: 500 }}>
            <div className="flex items-center">
              {[{bg:"#C17B4A",l:"A"},{bg:"#8B6655",l:"B"},{bg:"#3A3A3A",l:"C"}].map((av, i) => (
                <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold border-[2px] border-white" style={{ background: av.bg, marginLeft: i === 0 ? 0 : "-8px", zIndex: 3-i, position: "relative" }}>{av.l}</div>
              ))}
            </div>
            <span style={{ fontWeight: 500 }}>Join 12k+ investors</span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white">
        <div className="px-8 md:px-16 pt-12 pb-8 flex flex-col md:flex-row items-start justify-between gap-10 border-b border-[#E8E8E0]">
          <div className="flex flex-col gap-5 max-w-[340px]">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#E8A000] flex items-center justify-center flex-shrink-0">
                <FiShield size={22} color="white" />
              </div>
              <div>
                <div className="text-[17px] font-bold leading-tight">EI+ Coins</div>
                <div className="text-[10px] text-[#888880] tracking-[2px] uppercase">Powered by Emireq</div>
              </div>
            </div>
            <p className="text-[14px] text-[#555550] leading-relaxed">Transforming precious metal ownership with blockchain transparency and institutional-grade security.</p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <button key={s.label} aria-label={s.label} className="cursor-pointer w-10 h-10 rounded-full border border-[#E0E0D8] bg-white hover:border-[#C9A84C] hover:text-[#C9A84C] text-[#888880] flex items-center justify-center transition-all hover:-translate-y-0.5">
                  {s.icon}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button className="cursor-pointer flex items-center justify-between gap-4 border border-[#1A1A1A] rounded-xl px-5 py-4 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all group bg-white" style={{ minWidth: "200px" }}>
              <span className="text-[15px] font-medium group-hover:text-[#C9A84C] transition-colors whitespace-nowrap">Talk to a specialist</span>
              <FiArrowUpRight size={18} />
            </button>
            <button className="cursor-pointer bg-[#E8A000] hover:bg-[#C98800] text-white font-semibold px-7 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap" style={{ fontSize: "15px" }}>Get in touch</button>
          </div>
        </div>
        <div className="px-8 md:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[13px] text-[#888880]">© 2025 EI+ Coins. All rights reserved.</div>
          <div className="text-[13px] text-[#888880] text-right">Assets are held in secure, insured vaults and verified through independent audits.</div>
        </div>
      </footer>
    </div>
  );
}