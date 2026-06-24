import React from 'react';
import { motion } from 'framer-motion';

// Sparkle star icon
const SparkleIcon = ({ style }) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#FFE885" />
  </svg>
);

// Floating heart icon
const HeartIcon = ({ style }) => (
  <svg style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21 C12 21 3 13.5 3 8.5 C3 5.5 5.5 3 8.5 3 C10.5 3 11.5 4.5 12 5 C12.5 4.5 13.5 3 15.5 3 C18.5 3 21 5.5 21 8.5 C21 13.5 12 21 12 21 Z"
      fill="#FF8CA3"
    />
  </svg>
);

// Daisy SVG
const DaisySvg = () => (
  <svg viewBox="0 0 24 24" width="36" height="36" style={{ margin: '0 6px' }}>
    <circle cx="12" cy="12" r="3" fill="#FF8CA3" />
    <circle cx="12" cy="5" r="3.2" fill="#FFFFFF" />
    <circle cx="12" cy="19" r="3.2" fill="#FFFFFF" />
    <circle cx="5" cy="12" r="3.2" fill="#FFFFFF" />
    <circle cx="19" cy="12" r="3.2" fill="#FFFFFF" />
    <circle cx="7" cy="7" r="3.2" fill="#FFFFFF" />
    <circle cx="17" cy="17" r="3.2" fill="#FFFFFF" />
    <circle cx="7" cy="17" r="3.2" fill="#FFFFFF" />
    <circle cx="17" cy="7" r="3.2" fill="#FFFFFF" />
  </svg>
);

// Decorative items
const sparkles = [
  { left: '5%',  top: '12%', size: 18 },
  { left: '15%', top: '45%', size: 14 },
  { left: '28%', top: '8%',  size: 20 },
  { left: '70%', top: '15%', size: 16 },
  { left: '80%', top: '48%', size: 18 },
  { left: '90%', top: '20%', size: 14 },
  { left: '22%', top: '82%', size: 16 },
  { left: '75%', top: '80%', size: 20 },
];

const hearts = [
  { left: '10%', top: '30%', size: 16 },
  { left: '85%', top: '35%', size: 14 },
  { left: '18%', top: '68%', size: 18 },
  { left: '78%', top: '65%', size: 16 },
];

export default function GardenThanksPage({ onBack }) {
  return (
    <div className="thanks-page">
      <style>{`
        .thanks-page {
          width: 100vw;
          min-height: 100vh;
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          padding: 40px 20px 80px 20px;
          z-index: 50;
          box-sizing: border-box;
        }

        /* Pink wave background */
        .thanks-wave {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .thanks-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 680px;
        }

        /* Daisy row */
        .thanks-daisy-row {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 28px;
        }

        /* Main title */
        .thanks-title {
          font-family: var(--font-hand, 'Caveat', cursive);
          font-size: 62px;
          color: #FF5E7E;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 12px;
          text-shadow:
            -3px -3px 0 #FFF, 3px -3px 0 #FFF,
            -3px 3px 0 #FFF, 3px 3px 0 #FFF,
            0 6px 15px rgba(0,0,0,0.08);
        }

        /* Subtitle italic serif */
        .thanks-subtitle {
          font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
          font-size: 20px;
          font-style: italic;
          color: #FFFFFF;
          text-shadow: 0 2px 8px rgba(0,0,0,0.12);
          margin-bottom: 40px;
          line-height: 1.55;
        }

        /* Glass card in the center */
        .thanks-card {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 158, 175, 0.3);
          border-radius: 24px;
          padding: 40px 48px;
          box-shadow: 0 20px 50px rgba(255, 94, 126, 0.12);
          max-width: 520px;
          width: 100%;
          margin-bottom: 36px;
          position: relative;
        }

        .thanks-card-emoji {
          font-size: 52px;
          margin-bottom: 16px;
          display: block;
          line-height: 1;
        }

        .thanks-card-message {
          font-family: var(--font-serif, 'Playfair Display', Georgia, serif);
          font-size: 24px;
          font-weight: 600;
          color: #3A2E30;
          line-height: 1.55;
          margin-bottom: 14px;
        }

        .thanks-card-sub {
          font-family: var(--font-hand, 'Caveat', cursive);
          font-size: 22px;
          color: #FF5E7E;
          line-height: 1.4;
        }

        /* Decorative dashed divider inside card */
        .thanks-divider {
          width: 80px;
          height: 2px;
          border: none;
          border-top: 2px dashed #FFB3C1;
          margin: 18px auto;
          opacity: 0.8;
        }

        /* Back button */
        .thanks-back-btn {
          background: linear-gradient(135deg, #FF7B97 0%, #FF5E7E 100%);
          border: 2.5px solid #FFFFFF;
          color: #FFFFFF;
          font-family: var(--font-sans, 'Inter', sans-serif);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1.5px;
          padding: 13px 38px;
          border-radius: 50px;
          cursor: pointer;
          box-shadow:
            0 8px 20px rgba(255, 94, 126, 0.25),
            inset 0 0 0 2px rgba(255,255,255,0.2);
          transition: all 0.3s ease;
          text-transform: uppercase;
          z-index: 10;
        }

        .thanks-back-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(255, 94, 126, 0.35);
        }

        .thanks-back-btn:active {
          transform: translateY(1px);
        }

        @media (max-width: 600px) {
          .thanks-title { font-size: 42px; }
          .thanks-subtitle { font-size: 16px; }
          .thanks-card { padding: 28px 22px; }
          .thanks-card-message { font-size: 20px; }
          .thanks-card-sub { font-size: 18px; }
          .thanks-daisy-row svg { width: 26px; height: 26px; }
        }
      `}</style>

      {/* Pink Wave Background */}
      <div className="thanks-wave">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="thanks-wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA4B4" />
              <stop offset="100%" stopColor="#FF7B97" />
            </linearGradient>
          </defs>
          <path
            d="M 0,0 L 1440,0 L 1440,320 C 1080,440 920,240 580,360 C 290,480 150,380 0,400 Z"
            fill="url(#thanks-wave-grad)"
          />
          <path
            d="M 1440,320 C 1080,440 920,240 580,360 C 290,480 150,380 0,400"
            fill="none" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round"
          />
          <path
            d="M 1440,320 C 1080,440 920,240 580,360 C 290,480 150,380 0,400"
            fill="none" stroke="#FF7B97" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Floating sparkles */}
      {sparkles.map((s, i) => (
        <motion.div
          key={`spark-${i}`}
          style={{ position: 'absolute', left: s.left, top: s.top, zIndex: 2, pointerEvents: 'none' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2 + (i % 3) * 0.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <SparkleIcon style={{ width: `${s.size}px`, height: `${s.size}px` }} />
        </motion.div>
      ))}

      {/* Floating hearts */}
      {hearts.map((h, i) => (
        <motion.div
          key={`heart-${i}`}
          style={{ position: 'absolute', left: h.left, top: h.top, zIndex: 2, pointerEvents: 'none' }}
          animate={{ y: [0, -8, 0], rotate: [0, 6, -6, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HeartIcon style={{ width: `${h.size}px`, height: `${h.size}px`, opacity: 0.55 }} />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="thanks-content">

        {/* Daisy row */}
        <motion.div
          className="thanks-daisy-row"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {[...Array(5)].map((_, i) => <DaisySvg key={i} />)}
        </motion.div>

        {/* Title */}
        <motion.h1
          className="thanks-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Thank You, Haifa! 🌸
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="thanks-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          ♡ For being the most wonderful you ♡
        </motion.p>

        {/* Glass card */}
        <motion.div
          className="thanks-card"
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, type: 'spring', stiffness: 90 }}
        >
          <span className="thanks-card-emoji">🌺</span>
          <p className="thanks-card-message">
            Every moment with you is a gift in itself.
          </p>
          <div className="thanks-divider" />
          <p className="thanks-card-sub">
            "You make the world a little more beautiful just by being in it." 💕
          </p>
        </motion.div>

        {/* Back button */}
        <motion.button
          className="thanks-back-btn"
          onClick={onBack}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          🤍 BACK TO THE BOXES 🤍
        </motion.button>

      </div>
    </div>
  );
}
