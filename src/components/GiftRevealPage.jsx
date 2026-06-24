import React from 'react';
import { motion } from 'framer-motion';

// Cute Daisy SVG matching the aesthetic
const DaisyIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="20" r="16" fill="#FFFFFF" />
    <circle cx="50" cy="80" r="16" fill="#FFFFFF" />
    <circle cx="20" cy="50" r="16" fill="#FFFFFF" />
    <circle cx="80" cy="50" r="16" fill="#FFFFFF" />
    <circle cx="30" cy="30" r="16" fill="#FFFFFF" />
    <circle cx="70" cy="70" r="16" fill="#FFFFFF" />
    <circle cx="70" cy="30" r="16" fill="#FFFFFF" />
    <circle cx="30" cy="70" r="16" fill="#FFFFFF" />
    <circle cx="50" cy="50" r="14" fill="#E8D26C" />
  </svg>
);

// Cute Cloud SVG with face
const CloudIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 60C11.1929 60 0 48.8071 0 35C0 22.3838 9.33644 11.9442 21.5036 10.2338C24.4719 4.14811 30.686 0 38 0C46.6133 0 54.0041 5.2393 56.8837 12.8315C59.0832 11.0256 61.9167 10 65 10C72.0308 10 77.9255 14.9922 79.5242 21.5796C80.3174 21.3967 81.1448 21.3 82 21.3C91.9411 21.3 100 29.3589 100 39.3C100 49.2411 91.9411 57.3 82 57.3H25Z" fill="#FFFFFF" />
    {/* Eyes */}
    <circle cx="38" cy="35" r="3" fill="var(--text-warm)" />
    <circle cx="62" cy="35" r="3" fill="var(--text-warm)" />
    {/* Blush */}
    <ellipse cx="26" cy="40" rx="5" ry="3" fill="#FFC2C2" opacity="0.8" />
    <ellipse cx="74" cy="40" rx="5" ry="3" fill="#FFC2C2" opacity="0.8" />
    {/* Smile */}
    <path d="M46 38C46 41 48 43 50 43C52 43 54 41 54 38" stroke="var(--text-warm)" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Blue/Mint Ribbon Bow SVG (using theme colors)
const BowIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 30C20 10 5 15 5 40C5 65 25 50 45 40C45 40 40 30 40 30Z" fill="rgba(251, 179, 193, 0.9)" stroke="var(--pink-primary)" strokeWidth="2.5" />
    <path d="M60 30C80 10 95 15 95 40C95 65 75 50 55 40C55 40 60 30 60 30Z" fill="rgba(251, 179, 193, 0.9)" stroke="var(--pink-primary)" strokeWidth="2.5" />
    <circle cx="50" cy="35" r="8" fill="var(--pink-accent)" stroke="var(--pink-primary)" strokeWidth="2.5" />
    <path d="M45 40C35 60 25 80 25 80L35 80L50 50L45 40Z" fill="var(--pink-accent)" stroke="var(--pink-primary)" strokeWidth="2.5" />
    <path d="M55 40C65 60 75 80 75 80L65 80L50 50L55 40Z" fill="var(--pink-accent)" stroke="var(--pink-primary)" strokeWidth="2.5" />
  </svg>
);

export default function GiftRevealPage({ onNext }) {
  return (
    <div className="gift-reveal-page">
      <style>{`
        .gift-reveal-page {
          width: 100vw;
          min-height: 100vh;
          background-color: var(--pink-primary); /* Pink Cherub background */
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.35) 1px, transparent 1px);
          background-size: 60px 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          padding: 20px;
          z-index: 50;
        }

        .reveal-header {
          text-align: center;
          z-index: 2;
          margin-bottom: 20px;
          margin-top: 20px;
          position: relative;
        }

        .happy-text {
          font-family: var(--font-hand);
          font-size: 54px;
          color: #FFFFFF;
          margin-bottom: -15px;
          transform: rotate(-3deg);
          position: relative;
          z-index: 2;
        }

        /* Decorative white line next to Happy like in the image */
        .happy-line {
          position: absolute;
          left: -15px;
          top: 0;
          height: 100%;
          width: 2px;
          background: white;
          opacity: 0.8;
          transform: rotate(5deg);
        }

        .birthday-text {
          font-family: var(--font-serif);
          font-size: 68px;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: 4px;
          /* White outline effect + pink accent block shadow */
          text-shadow: 
            -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF,
            4px 4px 0px var(--pink-accent);
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        .polaroid-container {
          background: #FFFFFF;
          padding: 12px 12px 60px 12px;
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(74, 62, 65, 0.15);
          transform: rotate(-2deg);
          z-index: 2;
          max-width: 340px;
          width: 90%;
          position: relative;
        }

        .polaroid-img {
          width: 100%;
          height: auto;
          border-radius: 2px;
          display: block;
        }

        .polaroid-tape {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 130px;
          height: 40px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border-radius: 2px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          z-index: 3;
        }

        .polaroid-text {
          position: absolute;
          bottom: 20px;
          left: 0;
          width: 100%;
          text-align: center;
          font-family: var(--font-hand);
          font-size: 22px;
          color: var(--text-warm);
          opacity: 0.8;
        }

        /* Next Button matching the theme */
        .next-btn-wrapper {
          position: absolute;
          bottom: -20px;
          left: -30px;
          z-index: 10;
        }

        .next-btn {
          background-color: var(--pink-accent); /* Theme pink accent */
          border: 4px solid #FFFFFF;
          color: #FFFFFF;
          font-family: var(--font-sans);
          font-weight: 800;
          font-size: 22px;
          letter-spacing: 2px;
          padding: 14px 34px;
          border-radius: 40px;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .next-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
          background-color: var(--pink-primary);
        }
        
        .next-btn:active {
          transform: scale(0.95);
        }

        /* Decorative SVGs positioned precisely */
        .deco-cloud {
          position: absolute;
          width: 140px;
          top: 60px;
          right: 30px;
          filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.08));
          z-index: 1;
        }

        .deco-bow {
          position: absolute;
          width: 180px;
          top: 10px;
          right: -20px;
          transform: rotate(15deg);
          filter: drop-shadow(2px 5px 10px rgba(0,0,0,0.15));
          z-index: 2; /* Bow is in front of the cloud */
        }

        .deco-daisy-1 {
          position: absolute;
          width: 60px;
          top: 170px;
          left: 40px;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
          z-index: 1;
          animation: spin 25s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .birthday-text { font-size: 50px; letter-spacing: 2px; }
          .happy-text { font-size: 42px; }
          .deco-cloud { width: 110px; top: 40px; right: 10px; }
          .deco-bow { width: 140px; top: -10px; right: -30px; }
          .deco-daisy-1 { width: 50px; left: 10px; top: 120px; }
          .polaroid-container { padding: 10px 10px 50px 10px; }
          .next-btn-wrapper { left: -10px; bottom: -15px; }
          .next-btn { font-size: 18px; padding: 12px 28px; }
        }

        @media (max-width: 480px) {
          .birthday-text { font-size: 42px; }
          .happy-text { font-size: 36px; margin-bottom: -10px; }
          .polaroid-container { max-width: 280px; padding: 10px 10px 45px 10px; }
          .next-btn-wrapper { left: -15px; bottom: -20px; }
          .deco-cloud { width: 90px; right: -10px; top: 30px; }
          .deco-bow { width: 120px; right: -30px; top: -10px; }
          .deco-daisy-1 { width: 45px; left: -5px; top: 100px; }
        }
      `}</style>

      {/* Header */}
      <motion.div
        className="reveal-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="happy-text">
          <div className="happy-line"></div>
          Happy
        </div>
        <div className="birthday-text">BIRTHDAY</div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, type: "spring" }}>
        <CloudIcon className="deco-cloud" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, type: "spring" }}>
        <BowIcon className="deco-bow" />
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, type: "spring" }}>
        <DaisyIcon className="deco-daisy-1" />
      </motion.div>

      {/* Center Polaroid */}
      <motion.div
        className="polaroid-container"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: -2 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
      >
        <div className="polaroid-tape"></div>
        <img src="/images/m6.jpeg" alt="Us" className="polaroid-img" />
        <div className="polaroid-text">love you</div>

        {/* Next Button Overlaying the Polaroid */}
        <motion.div
          className="next-btn-wrapper"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1, type: "spring" }}
        >
          <button className="next-btn" onClick={onNext}>
            NEXT ❯
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
