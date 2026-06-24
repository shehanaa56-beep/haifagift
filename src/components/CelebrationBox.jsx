import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function CelebrationBox({ onBack, onComplete, onOpenGift }) {
  const [isBlownOut, setIsBlownOut] = useState(false);

  const handleBlowOut = () => {
    if (isBlownOut) return;
    setIsBlownOut(true);

    // Play soft blowout sound chime
    playBlowoutTone();

    // Trigger canvas-confetti burst with theme colors
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 28, spread: 360, ticks: 60, zIndex: 1000 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 40 * (timeLeft / duration);
      // Confetti burst from left and right sides
      confetti({
        ...defaults,
        particleCount,
        colors: ['#E8859A', '#FBB3C1', '#FAF3F5', '#BFDF8E'],
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        colors: ['#E8859A', '#FBB3C1', '#FAF3F5', '#BFDF8E'],
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const playBlowoutTone = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      
      // Tone 1: short sweep down (like puff of air)
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(300, audioCtx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.2);
      gain1.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc1.start();
      osc1.stop(audioCtx.currentTime + 0.2);

      // Tone 2: success chime right after
      setTimeout(() => {
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        osc2.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.15); // E5
        osc2.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.3); // G5
        osc2.frequency.setValueAtTime(1046.50, audioCtx.currentTime + 0.45); // C6
        gain2.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.85);
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        osc2.start();
        osc2.stop(audioCtx.currentTime + 0.85);
      }, 150);
    } catch (e) {
      // AudioContext blocks
    }
  };

  const handleOpenGift = () => {
    onComplete();
    if (onOpenGift) {
      onOpenGift();
    } else {
      onBack();
    }
  };

  return (
    <div className="celebration-container">
      <style>{`
        .celebration-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 700px;
          min-height: 80vh;
          position: relative;
          z-index: 10;
        }

        .back-link {
          align-self: flex-start;
          font-family: var(--font-hand);
          font-size: 20px;
          color: #E8F2EF;
          opacity: 0.8;
          cursor: pointer;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 30px;
          transition: all 0.2s ease;
          text-shadow: 0 1px 3px rgba(30, 62, 62, 0.15);
        }

        .back-link:hover {
          opacity: 1;
          color: #FFFFFF;
          transform: translateX(-3px);
        }

        .celebration-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .celebration-intro-hint {
          font-family: var(--font-hand);
          font-size: 24px;
          color: #EAD575; /* Soft metallic gold */
          font-weight: bold;
          margin-bottom: 6px;
          text-shadow: 0 1px 3px rgba(30, 62, 62, 0.2);
        }

        .celebration-title {
          font-family: var(--font-serif);
          font-size: 44px;
          font-weight: 400;
          color: #FFFFFF; /* High contrast white */
          margin-bottom: 8px;
          text-shadow: 0 2px 10px rgba(30, 62, 62, 0.25);
        }

        .celebration-desc {
          font-family: var(--font-sans);
          font-size: 14px;
          color: #E8F2EF; /* Ivory/white description */
          opacity: 0.9;
          text-shadow: 0 1px 4px rgba(30, 62, 62, 0.15);
        }

        /* 3D Styled CSS Birthday Cake */
        .cake-wrapper {
          position: relative;
          width: 320px;
          height: 250px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          margin: 40px 0;
          cursor: pointer;
        }

        /* Cake base plate shadow */
        .cake-shadow {
          position: absolute;
          bottom: -10px;
          width: 280px;
          height: 18px;
          background: rgba(74, 62, 65, 0.08);
          border-radius: 50%;
          filter: blur(2px);
          z-index: 1;
        }

        /* Tiers */
        .cake-tier {
          border-radius: 12px 12px 6px 6px;
          box-shadow: 0 4px 8px rgba(74, 62, 65, 0.05), inset 0 2px 2px rgba(255,255,255,0.7);
          border: 1px solid rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
        }

        .tier-3 { /* Bottom Tier */
          width: 240px;
          height: 70px;
          background-color: var(--pink-primary);
          z-index: 2;
        }

        .tier-2 { /* Middle Tier */
          width: 180px;
          height: 60px;
          background-color: var(--green-primary);
          z-index: 3;
          margin-bottom: -1px;
        }

        .tier-1 { /* Top Tier */
          width: 120px;
          height: 50px;
          background-color: var(--white);
          z-index: 4;
          margin-bottom: -1px;
        }

        /* Cake Sprinkles */
        .sprinkles-container {
          position: absolute;
          inset: 0;
        }

        .sprinkle {
          position: absolute;
          width: 6px;
          height: 3px;
          border-radius: 2px;
          opacity: 0.65;
        }

        /* Candle & Flame */
        .candle-body {
          width: 8px;
          height: 35px;
          background: linear-gradient(to right, var(--pink-primary) 50%, var(--pink-dark) 50%);
          border-radius: 2px;
          z-index: 5;
          margin-bottom: -1px;
          position: relative;
        }

        .candle-wick {
          width: 1.5px;
          height: 6px;
          background-color: #555;
          position: absolute;
          top: -6px;
          left: calc(50% - 0.75px);
        }

        .candle-flame {
          width: 12px;
          height: 24px;
          background: radial-gradient(ellipse at bottom, #FFE890 30%, #FFB636 60%, #FF6036 100%);
          border-radius: 50% 50% 20% 20% / 60% 60% 40% 40%;
          box-shadow: 0 0 10px rgba(255, 182, 54, 0.5), 0 0 20px rgba(255, 96, 54, 0.3);
          position: absolute;
          top: -28px;
          left: calc(50% - 6px);
          transform-origin: bottom center;
          animation: flicker 1.5s infinite alternate ease-in-out;
        }

        @keyframes flicker {
          0% { transform: scale(1) rotate(-1deg); }
          50% { transform: scale(1.05) rotate(1deg); }
          100% { transform: scale(0.95) rotate(-2deg); }
        }

        /* Gift card popup */
        .gift-reveal-card {
          width: 100%;
          max-width: 480px;
          padding: 30px;
          text-align: center;
          margin-top: 30px;
        }

        .gift-reveal-hint {
          font-family: var(--font-hand);
          font-size: 22px;
          color: var(--pink-primary);
          margin-bottom: 6px;
        }

        .gift-reveal-title {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 400;
          color: var(--text-warm);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .gift-reveal-desc {
          font-size: 13px;
          color: var(--text-warm);
          opacity: 0.65;
          margin-bottom: 24px;
        }

        .gift-reveal-footer-link {
          font-family: var(--font-hand);
          font-size: 20px;
          color: var(--text-warm);
          opacity: 0.5;
          background: none;
          border: none;
          cursor: pointer;
          margin-top: 15px;
          transition: all 0.2s ease;
        }

        .gift-reveal-footer-link:hover {
          opacity: 0.8;
        }

        .garden-btn {
          background-color: var(--pink-primary);
          color: var(--white);
          font-family: var(--font-serif);
          font-size: 15px;
          letter-spacing: 1.5px;
          padding: 16px 36px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(232, 133, 154, 0.35);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .garden-btn:hover {
          background-color: var(--pink-dark);
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 12px 30px rgba(232, 133, 154, 0.45);
        }

        .garden-btn:active {
          transform: translateY(1px) scale(0.99);
        }

        @media (max-width: 768px) {
          .celebration-title {
            font-size: 34px;
          }
        }

        @media (max-width: 480px) {
          .celebration-title {
            font-size: 28px;
          }
          .back-link {
            font-size: 18px;
            margin-bottom: 20px;
          }
          .cake-wrapper {
            transform: scale(0.85);
            margin: 20px 0;
          }
        }
      `}</style>

      {/* Back link */}
      <button className="back-link" onClick={onBack}>
        ← back to the boxes
      </button>

      {/* Header */}
      <div className="celebration-header">
        <div className="celebration-intro-hint">✦ box three ✦</div>
        <h1 className="celebration-title">Make A Wish</h1>
        <p className="celebration-desc">
          {!isBlownOut ? "Tap the candle when you're ready." : "Wish sent into the cosmos! ✨"}
        </p>
      </div>

      {/* CSS Birthday Cake */}
      <div className="cake-wrapper" onClick={handleBlowOut}>
        {/* Candle */}
        <div className="candle-body">
          <div className="candle-wick"></div>
          {/* Flame (Only visible if not blown out) */}
          <AnimatePresence>
            {!isBlownOut && (
              <motion.div
                className="candle-flame"
                exit={{ 
                  scale: 0, 
                  opacity: 0, 
                  y: -5,
                  transition: { duration: 0.3 } 
                }}
              ></motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cake Tier 1 (Top) */}
        <div className="cake-tier tier-1">
          <div className="sprinkles-container">
            <div className="sprinkle" style={{ top: '15px', left: '20px', background: 'var(--green-accent)', transform: 'rotate(20deg)' }}></div>
            <div className="sprinkle" style={{ top: '25px', left: '50px', background: 'var(--pink-primary)', transform: 'rotate(-40deg)' }}></div>
            <div className="sprinkle" style={{ top: '10px', left: '80px', background: 'var(--green-accent)', transform: 'rotate(10deg)' }}></div>
            <div className="sprinkle" style={{ top: '30px', left: '90px', background: 'var(--pink-light)', transform: 'rotate(45deg)' }}></div>
          </div>
        </div>

        {/* Cake Tier 2 (Middle) */}
        <div className="cake-tier tier-2">
          <div className="sprinkles-container">
            <div className="sprinkle" style={{ top: '20px', left: '30px', background: '#FFFFFF', transform: 'rotate(-15deg)' }}></div>
            <div className="sprinkle" style={{ top: '40px', left: '60px', background: 'var(--pink-primary)', transform: 'rotate(50deg)' }}></div>
            <div className="sprinkle" style={{ top: '15px', left: '100px', background: '#FFFFFF', transform: 'rotate(10deg)' }}></div>
            <div className="sprinkle" style={{ top: '35px', left: '140px', background: 'var(--pink-light)', transform: 'rotate(-30deg)' }}></div>
          </div>
        </div>

        {/* Cake Tier 3 (Bottom) */}
        <div className="cake-tier tier-3">
          <div className="sprinkles-container">
            <div className="sprinkle" style={{ top: '30px', left: '40px', background: '#FFFFFF', transform: 'rotate(25deg)' }}></div>
            <div className="sprinkle" style={{ top: '15px', left: '80px', background: 'var(--green-accent)', transform: 'rotate(-10deg)' }}></div>
            <div className="sprinkle" style={{ top: '45px', left: '120px', background: '#FFFFFF', transform: 'rotate(40deg)' }}></div>
            <div className="sprinkle" style={{ top: '25px', left: '180px', background: 'var(--green-accent)', transform: 'rotate(-35deg)' }}></div>
            <div className="sprinkle" style={{ top: '50px', left: '200px', background: 'var(--pink-light)', transform: 'rotate(15deg)' }}></div>
          </div>
        </div>

        {/* Bottom shadows */}
        <div className="cake-shadow"></div>
      </div>

      {/* Gift reveal slide up */}
      <AnimatePresence>
        {isBlownOut && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.4 }}
            className="glass-panel gift-reveal-card"
          >
            <div className="gift-reveal-hint">and one last thing...</div>
            <h2 className="gift-reveal-title">
              Open Your Gift <span role="img" aria-label="ribbon">🎀</span>
            </h2>
            <p className="gift-reveal-desc">
              A little something waits beyond the boxes. The garden is open.
            </p>

            <button className="garden-btn" onClick={handleOpenGift}>
              ✦ OPEN YOUR GIFT ✦
            </button>

            <div>
              <button className="gift-reveal-footer-link" onClick={onBack}>
                back to the boxes
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
