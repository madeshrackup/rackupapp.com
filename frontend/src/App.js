import { useRef } from "react";
import "@/App.css";
import { motion, useInView } from "framer-motion";
import { Apple, Play, Copy } from "lucide-react";

// Brand Assets
const BRAND_LOGO = "https://customer-assets.emergentagent.com/job_eight-ball-app/artifacts/xvtie9ac_edited.png";
const HERO_BG = "https://images.unsplash.com/photo-1520507215037-061ed0f37178?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHw4JTIwYmFsbCUyMHBvb2wlMjBjaW5lbWF0aWN8ZW58MHx8fHwxNzc1MDA3NDIzfDA&ixlib=rb-4.1.0&q=85";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Animated Section Wrapper
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="hero-section" data-testid="hero-section">
      <div className="hero-background">
        <img src={HERO_BG} alt="" aria-hidden="true" />
        <div className="hero-overlay" />
      </div>
      
      <motion.div 
        className="hero-content"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.img 
          src={BRAND_LOGO} 
          alt="Rackup Logo" 
          className="hero-logo"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          data-testid="hero-logo"
        />
        
        <motion.h1 
          className="hero-tagline"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-testid="hero-tagline"
        >
          Your game, your rules.
        </motion.h1>
        
        <motion.div 
          className="hero-buttons"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#" className="store-button" data-testid="hero-app-store-btn">
            <Apple />
            <span>App Store</span>
          </a>
          <a href="#" className="store-button" data-testid="hero-play-store-btn">
            <Play />
            <span>Google Play</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Phone Mockup Section
const PhoneMockupSection = () => {
  const leaderboardData = [
    { rank: 1, name: "Marcus Chen", wins: 24, winRate: "89%" },
    { rank: 2, name: "Tony Rivera", wins: 21, winRate: "84%" },
    { rank: 3, name: "Jake Williams", wins: 19, winRate: "76%" },
    { rank: 4, name: "Devon Brooks", wins: 17, winRate: "71%" },
    { rank: 5, name: "Chris Martinez", wins: 15, winRate: "68%" },
  ];

  const getRankClass = (rank) => {
    if (rank === 1) return "gold";
    if (rank === 2) return "silver";
    if (rank === 3) return "bronze";
    return "";
  };

  return (
    <section className="phone-section" data-testid="phone-mockup-section">
      <AnimatedSection>
        <motion.div 
          className="phone-mockup"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          data-testid="phone-mockup"
        >
          <div className="phone-notch" />
          <div className="phone-screen">
            <div className="leaderboard-header">
              <h3 className="leaderboard-title">Season Standings</h3>
              <p className="leaderboard-subtitle">Downtown Pool League</p>
            </div>
            <div className="leaderboard-list">
              {leaderboardData.map((player, index) => (
                <div 
                  key={player.rank} 
                  className={`leaderboard-item ${index === 0 ? 'highlight' : ''}`}
                  data-testid={`leaderboard-item-${player.rank}`}
                >
                  <span className={`rank ${getRankClass(player.rank)}`}>
                    {player.rank}
                  </span>
                  <div className="avatar">
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="player-info">
                    <div className="player-name">{player.name}</div>
                    <div className="player-wins">{player.wins} wins</div>
                  </div>
                  <span className="player-stat">{player.winRate}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
};

// Bento Grid Section
const BentoSection = () => {
  const standingsData = [
    { team: "Downtown Kings", w: 12, l: 3, pct: ".800" },
    { team: "Eastside Sharks", w: 10, l: 5, pct: ".667" },
    { team: "Westend Wolves", w: 9, l: 6, pct: ".600" },
    { team: "Northside Nine", w: 7, l: 8, pct: ".467" },
  ];

  return (
    <section className="bento-section" data-testid="bento-section">
      <AnimatedSection>
        <div className="bento-header">
          <p className="bento-overline">The Rackup Advantage</p>
          <h2 className="bento-title">Everything you need to dominate</h2>
        </div>
      </AnimatedSection>
      
      <div className="bento-grid">
        {/* Large Card - Pro-Grade Standings */}
        <AnimatedSection className="bento-card bento-card-large">
          <div data-testid="bento-card-standings">
            <h3 className="bento-card-title">Pro-Grade Standings</h3>
            <p style={{ color: '#A1A1AA', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              Real-time league tables with automatic calculations
            </p>
            <div className="mini-table">
              <div className="mini-table-header">
                <span>Team</span>
                <span>W</span>
                <span>L</span>
                <span>PCT</span>
              </div>
              {standingsData.map((team, index) => (
                <div 
                  key={team.team} 
                  className="mini-table-row"
                  style={{ color: index === 0 ? '#FFFFFF' : '#A1A1AA' }}
                >
                  <span style={{ fontWeight: index === 0 ? 600 : 400 }}>{team.team}</span>
                  <span>{team.w}</span>
                  <span>{team.l}</span>
                  <span style={{ fontWeight: 600 }}>{team.pct}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Small Card - Instant Entry */}
        <AnimatedSection className="bento-card bento-card-small">
          <div data-testid="bento-card-instant-entry">
            <h3 className="bento-card-title">Instant Entry</h3>
            <p style={{ color: '#A1A1AA', fontSize: '0.875rem' }}>
              Join any room with a 6-digit code
            </p>
            <div className="room-code">
              <span className="room-code-digit">R</span>
              <span className="room-code-digit">K</span>
              <span className="room-code-digit">P</span>
              <span className="room-code-separator">-</span>
              <span className="room-code-digit">8</span>
              <span className="room-code-digit">8</span>
              <span className="room-code-digit">2</span>
              <Copy 
                style={{ 
                  marginLeft: '0.75rem', 
                  cursor: 'pointer', 
                  opacity: 0.5,
                  width: '20px',
                  height: '20px'
                }} 
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Small Card - Career Stats (Inverted) */}
        <AnimatedSection className="bento-card bento-card-small bento-card-inverted">
          <div data-testid="bento-card-career-stats">
            <h3 className="bento-card-title">Career Stats</h3>
            <div className="stats-display">
              <div className="stat-number">78%</div>
              <div className="stat-label">Win Rate</div>
              <div className="stat-bars">
                {[40, 55, 35, 70, 85, 60, 75, 90, 65, 78].map((height, i) => (
                  <div 
                    key={i}
                    className={`stat-bar ${i >= 6 ? 'active' : ''}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Footer Section
const FooterSection = () => {
  return (
    <footer className="footer" data-testid="footer-section">
      <div className="footer-watermark">RACKUP</div>
      
      <AnimatedSection>
        <div className="footer-content">
          <img 
            src={BRAND_LOGO} 
            alt="Rackup" 
            className="footer-logo"
            data-testid="footer-logo"
          />
          
          <p className="footer-about">
            Built for the hustle. Designed for the game. 
            Rackup is the new standard for local league management.
          </p>
          
          <div className="footer-links">
            <a 
              href="mailto:support@rackupapp.com" 
              className="footer-link"
              data-testid="footer-support-link"
            >
              Support
            </a>
            <a 
              href="#privacy" 
              className="footer-link"
              data-testid="footer-privacy-link"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="footer-link"
              data-testid="footer-terms-link"
            >
              Terms of Service
            </a>
          </div>
          
          <p className="footer-copyright">
            © {new Date().getFullYear()} Rackup. All rights reserved.
          </p>
        </div>
      </AnimatedSection>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="app-container grain" data-testid="rackup-landing">
      <HeroSection />
      <PhoneMockupSection />
      <BentoSection />
      <FooterSection />
    </div>
  );
}

export default App;
