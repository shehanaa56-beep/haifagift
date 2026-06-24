import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Individual Daisy Flower Component
const DaisySvg = () => (
  <svg
    viewBox="0 0 24 24"
    width="32"
    height="32"
    style={{ color: 'var(--white)', margin: '0 6px' }}
  >
    {/* Center pink-primary core */}
    <circle cx="12" cy="12" r="3" fill="var(--pink-primary)" />
    {/* Petals */}
    <circle cx="12" cy="5" r="3.2" fill="currentColor" />
    <circle cx="12" cy="19" r="3.2" fill="currentColor" />
    <circle cx="5" cy="12" r="3.2" fill="currentColor" />
    <circle cx="19" cy="12" r="3.2" fill="currentColor" />
    <circle cx="7" cy="7" r="3.2" fill="currentColor" />
    <circle cx="17" cy="7" r="3.2" fill="currentColor" />
  </svg>
);

// Confetti pieces layout mapping
const confettiList = [
  { left: '8%', top: '15%', size: 10, color: '#FF9EAF', type: 'circle', rotate: 0 },
  { left: '14%', top: '55%', size: 12, color: '#4EA8DE', type: 'triangle', rotate: 15 },
  { left: '22%', top: '78%', size: 9, color: '#FFD166', type: 'circle', rotate: 0 },
  { left: '28%', top: '12%', size: 11, color: '#8CD9A5', type: 'triangle', rotate: -20 },
  { left: '72%', top: '18%', size: 10, color: '#FF9EAF', type: 'circle', rotate: 0 },
  { left: '78%', top: '82%', size: 12, color: '#FFD166', type: 'triangle', rotate: 45 },
  { left: '84%', top: '50%', size: 8, color: '#4EA8DE', type: 'circle', rotate: 0 },
  { left: '92%', top: '22%', size: 11, color: '#8CD9A5', type: 'triangle', rotate: 30 },
  { left: '90%', top: '75%', size: 10, color: '#FF5E7E', type: 'circle', rotate: 0 },
  { left: '5%', top: '82%', size: 9, color: '#FFD166', type: 'triangle', rotate: 10 },
];

// Sparkle stars layout mapping
const sparklesList = [
  { left: '6%', top: '22%', size: 18 },
  { left: '16%', top: '48%', size: 16 },
  { left: '30%', top: '8%', size: 20 },
  { left: '34%', top: '45%', size: 14 },
  { left: '68%', top: '12%', size: 16 },
  { left: '72%', top: '48%', size: 18 },
  { left: '82%', top: '25%', size: 14 },
  { left: '88%', top: '60%', size: 20 },
  { left: '25%', top: '88%', size: 16 },
  { left: '76%', top: '85%', size: 18 },
];

// Floating hearts layout mapping
const heartsList = [
  { left: '11%', top: '35%', size: 16 },
  { left: '22%', top: '65%', size: 14 },
  { left: '66%', top: '30%', size: 18 },
  { left: '86%', top: '78%', size: 15 },
];

const SparkleIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#FFE885" />
  </svg>
);

const HeartIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21 C12 21 3 13.5 3 8.5 C3 5.5 5.5 3 8.5 3 C10.5 3 11.5 4.5 12 5 C12.5 4.5 13.5 3 15.5 3 C18.5 3 21 5.5 21 8.5 C21 13.5 12 21 12 21 Z" fill="#FF8CA3" />
  </svg>
);

const ConfettiPiece = ({ item }) => {
  const style = {
    position: 'absolute',
    left: item.left,
    top: item.top,
    width: `${item.size}px`,
    height: `${item.size}px`,
    backgroundColor: item.color,
    transform: `rotate(${item.rotate}deg)`,
    opacity: 0.75,
    pointerEvents: 'none',
    zIndex: 1,
  };

  if (item.type === 'circle') {
    style.borderRadius = '50%';
  } else if (item.type === 'triangle') {
    style.backgroundColor = 'transparent';
    style.width = '0';
    style.height = '0';
    style.borderLeft = `${item.size / 2}px solid transparent`;
    style.borderRight = `${item.size / 2}px solid transparent`;
    style.borderBottom = `${item.size}px solid ${item.color}`;
  }

  return <div style={style} />;
};

const BackgroundWave = () => (
  <div className="reveal-bg-wave">
    <svg viewBox="0 0 1440 800" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="reveal-wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFA4B4" />
          <stop offset="100%" stopColor="#FF7B97" />
        </linearGradient>
      </defs>
      {/* Top Pink Area */}
      <path
        d="M 0,0 L 1440,0 L 1440,320 C 1080,440 920,240 580,360 C 290,480 150,380 0,400 Z"
        fill="url(#reveal-wave-grad)"
      />
      {/* White outline shadow/border running along the wave path */}
      <path
        d="M 1440,320 C 1080,440 920,240 580,360 C 290,480 150,380 0,400"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
      />
      {/* Dotted/Dashed Pink Stitched Line */}
      <path
        d="M 1440,320 C 1080,440 920,240 580,360 C 290,480 150,380 0,400"
        fill="none"
        stroke="#FF7B97"
        strokeWidth="2.5"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const LeftBalloons = () => (
  <svg viewBox="0 0 200 300" className="balloon-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Round Polka-dot balloon */}
    <g transform="translate(40, 70)">
      <path d="M 40,80 C 45,140 30,190 60,230" stroke="#FFB3C1" strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="40" cy="40" rx="35" ry="40" fill="#FF8CA3" />
      <circle cx="20" cy="20" r="3" fill="#FFFFFF" opacity="0.7" />
      <circle cx="35" cy="15" r="3.5" fill="#FFFFFF" opacity="0.8" />
      <circle cx="55" cy="25" r="3.2" fill="#FFFFFF" opacity="0.7" />
      <circle cx="25" cy="45" r="3" fill="#FFFFFF" opacity="0.8" />
      <circle cx="45" cy="50" r="3.5" fill="#FFFFFF" opacity="0.7" />
      <circle cx="60" cy="40" r="2.8" fill="#FFFFFF" opacity="0.8" />
      <circle cx="35" cy="32" r="3.2" fill="#FFFFFF" opacity="0.9" />
      <path d="M 18,22 A 25,25 0 0 1 35,12" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.5" fill="none" />
      <path d="M 37,80 L 43,80 L 40,84 Z" fill="#FF8CA3" />
    </g>

    {/* Heart "YAY!" balloon */}
    <g transform="translate(90, 20)">
      <path d="M 50,85 C 45,140 60,200 40,260" stroke="#FFB3C1" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M 50,85 C 50,85 10,50 10,28 C 10,12 25,0 42,12 C 50,18 50,18 50,18 C 50,18 50,18 58,12 C 75,0 90,12 90,28 C 90,50 50,85 50,85 Z" fill="#FF5E7E" />
      <path d="M 22,25 C 20,35 28,45 28,45" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" fill="none" />
      <text x="50" y="44" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="var(--font-sans)" textAnchor="middle" transform="rotate(-10, 50, 44)">YAY!</text>
      <path d="M 47,85 L 53,85 L 50,89 Z" fill="#FF5E7E" />
    </g>
  </svg>
);

const MiniEnvelope = () => (
  <svg viewBox="0 0 100 80" className="mini-envelope-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="10" width="90" height="60" rx="6" fill="rgba(0,0,0,0.06)" />
    <rect x="5" y="8" width="90" height="60" rx="6" fill="#FFFFFF" stroke="#FFB3C1" strokeWidth="2" />
    <path d="M 5,8 L 50,44 L 95,8" stroke="#FFB3C1" strokeWidth="2" fill="none" />
    <path d="M 5,68 L 38,40" stroke="#FFB3C1" strokeWidth="1.5" fill="none" />
    <path d="M 95,68 L 62,40" stroke="#FFB3C1" strokeWidth="1.5" fill="none" />
    <path d="M 50,44 C 50,44 44,39 44,35 C 44,32 46.5,30 49.5,32 C 50,33 50,33 50,33 C 50,33 50,33 50.5,32 C 53.5,30 56,32 56,35 C 56,39 50,44 50,44 Z" fill="#FF5E7E" />
  </svg>
);

const LeftCornerGift = () => (
  <svg viewBox="0 0 140 140" className="corner-gift-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 25,120 C 15,90 35,70 50,75 C 40,95 35,110 25,120 Z" fill="#A8DADC" opacity="0.8" />
    <path d="M 30,125 C 20,105 45,95 55,100 C 45,115 40,120 30,125 Z" fill="#8CD9A5" />
    <g transform="translate(40, 45)">
      <rect x="0" y="20" width="60" height="50" rx="6" fill="#FFFFFF" stroke="#FF8CA3" strokeWidth="2.5" />
      <path d="M 10,20 L 0,30 M 25,20 L 0,45 M 40,20 L 0,60 M 55,20 L 5,70 M 60,35 L 25,70 M 60,50 L 40,70" stroke="#FFF0F3" strokeWidth="6" />
      <rect x="-4" y="10" width="68" height="12" rx="3" fill="#FF8CA3" />
      <rect x="25" y="10" width="10" height="60" fill="#FFD166" />
      <rect x="-4" y="28" width="68" height="10" fill="#FFD166" />
      <path d="M 30,10 C 20,-5 15,0 25,10 Z" fill="#FFD166" stroke="#E2B13C" strokeWidth="1" />
      <path d="M 30,10 C 40,-5 45,0 35,10 Z" fill="#FFD166" stroke="#E2B13C" strokeWidth="1" />
      <circle cx="30" cy="10" r="4" fill="#FFD166" />
    </g>
    <circle cx="110" cy="105" r="8" fill="#FFB3C1" />
    <circle cx="118" cy="97" r="8" fill="#FFB3C1" />
    <circle cx="126" cy="105" r="8" fill="#FFB3C1" />
    <circle cx="122" cy="113" r="8" fill="#FFB3C1" />
    <circle cx="110" cy="113" r="8" fill="#FFB3C1" />
    <circle cx="117" cy="107" r="6" fill="#FFE3E0" />
  </svg>
);

const RightCornerGift = () => (
  <svg viewBox="0 0 140 140" className="corner-gift-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 115,120 C 125,90 105,70 90,75 C 100,95 105,110 115,120 Z" fill="#A8DADC" opacity="0.8" />
    <path d="M 110,125 C 120,105 95,95 85,100 C 95,115 100,120 110,125 Z" fill="#8CD9A5" />
    <g transform="translate(40, 45)">
      <rect x="0" y="20" width="60" height="50" rx="6" fill="#FFFFFF" stroke="#FF5E7E" strokeWidth="2.5" />
      <circle cx="12" cy="30" r="3.5" fill="#FFF0F3" />
      <circle cx="28" cy="42" r="3.5" fill="#FFF0F3" />
      <circle cx="48" cy="32" r="3.5" fill="#FFF0F3" />
      <circle cx="15" cy="58" r="3.5" fill="#FFF0F3" />
      <circle cx="42" cy="56" r="3.5" fill="#FFF0F3" />
      <rect x="-4" y="10" width="68" height="12" rx="3" fill="#FFD166" />
      <rect x="25" y="10" width="10" height="60" fill="#FF5E7E" />
      <rect x="-4" y="28" width="68" height="10" fill="#FF5E7E" />
      <path d="M 30,10 C 18,-5 12,0 25,10 Z" fill="#FF5E7E" stroke="#D83B5E" strokeWidth="1" />
      <path d="M 30,10 C 42,-5 48,0 35,10 Z" fill="#FF5E7E" stroke="#D83B5E" strokeWidth="1" />
      <circle cx="30" cy="10" r="4" fill="#FFD166" />
    </g>
    <circle cx="30" cy="105" r="8" fill="#FFB3C1" />
    <circle cx="38" cy="97" r="8" fill="#FFB3C1" />
    <circle cx="46" cy="105" r="8" fill="#FFB3C1" />
    <circle cx="42" cy="113" r="8" fill="#FFB3C1" />
    <circle cx="30" cy="113" r="8" fill="#FFB3C1" />
    <circle cx="37" cy="107" r="6" fill="#FFE3E0" />
  </svg>
);

export default function SecretGarden({ onBack }) {
  const [showScratch] = useState(true);

  if (showScratch) {
    return <ScratchCard onBack={onBack} />;
  }

  return (
    <div className="secret-garden-container">
      <style>{`
        .secret-garden-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 800px;
          min-height: 80vh;
          text-align: center;
          z-index: 10;
          position: relative;
        }

        .garden-intro-hint {
          font-family: var(--font-hand);
          font-size: 26px;
          color: #EAD575; /* Soft metallic gold */
          font-weight: bold;
          margin-bottom: 24px;
          letter-spacing: 1px;
          text-shadow: 0 1px 3px rgba(30, 62, 62, 0.2);
        }

        .garden-quote {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 300;
          line-height: 1.45;
          color: #FFFFFF; /* High contrast white */
          max-width: 650px;
          margin-bottom: 35px;
          text-shadow: 0 2px 10px rgba(30, 62, 62, 0.25);
        }

        .daisy-row {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
        }

        .garden-subtitle {
          font-family: var(--font-hand);
          font-size: 28px;
          color: var(--text-warm);
          opacity: 0.85;
          margin-bottom: 50px;
        }

        .garden-back-btn-container {
          display: flex;
          justify-content: center;
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
          .garden-intro-hint {
            font-size: 20px;
            margin-bottom: 16px;
          }
          .garden-quote {
            font-size: 32px;
            line-height: 1.35;
            margin-bottom: 24px;
          }
          .daisy-row {
            margin-bottom: 24px;
          }
          .daisy-row svg {
            width: 24px;
            height: 24px;
            margin: 0 4px;
          }
          .garden-subtitle {
            font-size: 24px;
            margin-bottom: 40px;
          }
          .garden-btn {
            font-size: 14px;
            padding: 14px 28px;
            letter-spacing: 1px;
          }
        }

        @media (max-width: 480px) {
          .garden-intro-hint {
            font-size: 18px;
            margin-bottom: 12px;
          }
          .garden-quote {
            font-size: 24px;
            line-height: 1.3;
            margin-bottom: 20px;
          }
          .daisy-row {
            margin-bottom: 20px;
          }
          .daisy-row svg {
            width: 20px;
            height: 20px;
            margin: 0 3px;
          }
          .garden-subtitle {
            font-size: 20px;
            margin-bottom: 30px;
          }
          .garden-btn {
            font-size: 13px;
            padding: 12px 24px;
          }
        }
      `}</style>

      {/* Floating Garden-only Petals for extra density */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="garden-extra-sparkle"
          initial={{
            x: Math.random() * 800 - 400,
            y: Math.random() * 600 - 300,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            x: [null, Math.random() * 50 - 25],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 4
          }}
          style={{
            position: 'absolute',
            color: 'var(--white)',
            fontSize: '24px',
            pointerEvents: 'none',
            userSelect: 'none'
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Title */}
      <motion.div
        className="garden-intro-hint"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        the secret garden ✦
      </motion.div>

      {/* Main Quote */}
      <motion.h1
        className="garden-quote"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      >
        Thank you for being the most beautiful part of my life.
      </motion.h1>

      {/* Daisies */}
      <motion.div
        className="daisy-row"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <DaisySvg />
        <DaisySvg />
        <DaisySvg />
        <DaisySvg />
        <DaisySvg />
      </motion.div>

      {/* Subheading */}
      <motion.div
        className="garden-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        happy birthday, always 🩷
      </motion.div>

      {/* Back Button -> NEXT Button */}
      <motion.div
        className="garden-back-btn-container"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <button className="garden-btn" onClick={() => setShowScratch(true)}>
          NEXT ❯
        </button>
      </motion.div>
    </div>
  );
}

// Interactive Scratch Card Component
function ScratchCard({ onBack }) {
  const canvasRef = useRef(null);
  const [isScratchedOff, setIsScratchedOff] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const isDrawingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;

      // Draw scratch cover gradient
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#FF9EAF');
      grad.addColorStop(1, '#FF5E7E');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add cute decorative speckles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      for (let i = 0; i < 40; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = Math.random() * 3 + 1;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add scratch reminder label
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 22px "Caveat", cursive, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Scratch here! 🎁', canvas.width / 2, canvas.height / 2);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  const getMousePos = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const scratch = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    checkPercentage();
  };

  const checkPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imgData.data;
    let transparentCount = 0;

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparentCount++;
    }

    const percentage = transparentCount / (pixels.length / 4);
    if (percentage > 0.45) {
      setIsScratchedOff(true);
    }
  };

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    isDrawingRef.current = true;
    const pos = getMousePos(e);
    scratch(pos.x, pos.y);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const pos = getMousePos(e);
    scratch(pos.x, pos.y);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    isDrawingRef.current = false;
  };

  // Attach non-passive touchmove listener directly so we can preventDefault
  // This stops the page from scrolling while scratching on mobile
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const onTouchMove = (e) => {
      if (!isDrawingRef.current) return;
      e.preventDefault();
      const pos = getMousePos(e);
      scratch(pos.x, pos.y);
    };

    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => canvas.removeEventListener('touchmove', onTouchMove);
  }, []);

  return (
    <div className="gift-reveal-page">
      <style>{`
        .gift-reveal-page {
          width: 100vw;
          min-height: 100vh;
          background-color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          padding: 20px 20px 60px 20px;
          z-index: 50;
        }

        .reveal-bg-wave {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .reveal-header {
          text-align: center;
          z-index: 2;
          margin-bottom: 25px;
          margin-top: 30px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .happy-text-reveal {
          font-family: var(--font-hand);
          font-size: 58px;
          color: #FF5E7E;
          font-weight: 800;
          text-shadow: 
            -3px -3px 0 #FFF, 3px -3px 0 #FFF, -3px 3px 0 #FFF, 3px 3px 0 #FFF,
            0px 4px 10px rgba(0,0,0,0.1);
          margin-bottom: 2px;
          text-align: center;
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .subtitle-reveal {
          font-family: var(--font-serif);
          font-size: 16px;
          font-style: italic;
          color: #FFFFFF;
          text-shadow: 0 2px 5px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 2;
        }

        .polaroid-container {
          background: #FFFFFF;
          padding: 14px 14px 75px 14px;
          border-radius: 4px;
          box-shadow: 0 15px 40px rgba(74, 62, 65, 0.15);
          transform: rotate(-1.5deg);
          z-index: 10;
          max-width: 330px;
          width: 90%;
          position: relative;
          border: 1px solid rgba(255, 158, 175, 0.2);
        }

        .polaroid-img-wrapper {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 2px;
          overflow: hidden;
          position: relative;
          background: #FFF5F7;
        }

        .polaroid-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .polaroid-tape {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 35px;
          background: #FFB3C1;
          border-radius: 2px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          z-index: 12;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-size: 16px;
        }

        .polaroid-caption-box {
          position: absolute;
          bottom: 12px;
          left: 0;
          width: 100%;
          text-align: center;
          padding: 0 15px;
        }

        .polaroid-text-line1 {
          font-family: var(--font-sans);
          font-size: 12px;
          color: #FF5E7E;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .polaroid-text-line2 {
          font-family: var(--font-hand);
          font-size: 19px;
          color: #D83B5E;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .polaroid-deco-line {
          width: 120px;
          height: 1px;
          border-bottom: 1px dashed #FFB3C1;
          margin: 6px auto 0 auto;
          opacity: 0.7;
        }

        .birthday-banner {
          font-family: var(--font-serif);
          font-size: 28px;
          font-weight: 700;
          color: #3A2E30;
          margin: 25px 0 15px 0;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 10;
        }

        .birthday-banner span {
          color: #F9C74F;
          font-style: italic;
        }

        .back-btn {
          background: linear-gradient(135deg, #FF7B97 0%, #FF5E7E 100%);
          border: 2.5px solid #FFFFFF;
          color: #FFFFFF;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1.5px;
          padding: 12px 36px;
          border-radius: 50px;
          cursor: pointer;
          box-shadow: 
            0 8px 20px rgba(255, 94, 126, 0.25),
            inset 0 0 0 2px rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 10;
          text-transform: uppercase;
        }

        .back-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(255, 94, 126, 0.35);
        }

        .back-btn:active {
          transform: translateY(1px);
        }

        /* SVG positioning & floating animations */
        .deco-left-balloons {
          position: absolute;
          left: 3%;
          top: 15%;
          width: 150px;
          height: auto;
          z-index: 2;
          pointer-events: none;
        }

        .deco-right-envelope {
          position: absolute;
          right: 6%;
          top: 25%;
          width: 90px;
          height: auto;
          z-index: 2;
          pointer-events: none;
          transform: rotate(15deg);
        }

        .deco-left-gift {
          position: absolute;
          left: -10px;
          bottom: -10px;
          width: 140px;
          height: auto;
          z-index: 5;
          pointer-events: none;
        }

        .deco-right-gift {
          position: absolute;
          right: -10px;
          bottom: -10px;
          width: 140px;
          height: auto;
          z-index: 5;
          pointer-events: none;
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        @keyframes floatReverse {
          0% { transform: translateY(0px) rotate(15deg); }
          50% { transform: translateY(-8px) rotate(10deg); }
          100% { transform: translateY(0px) rotate(15deg); }
        }

        .float-balloon {
          animation: float 4s ease-in-out infinite;
        }

        .float-envelope {
          animation: floatReverse 3.5s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .deco-left-balloons { width: 100px; left: -10px; top: 12%; }
          .deco-right-envelope { width: 70px; right: 5%; top: 22%; }
          .deco-left-gift { width: 100px; }
          .deco-right-gift { width: 100px; }
          .happy-text-reveal { font-size: 42px; }
          .birthday-banner { font-size: 22px; }
        }

        @media (max-width: 480px) {
          .deco-left-balloons { display: none; }
          .deco-right-envelope { display: none; }
          .deco-left-gift { width: 85px; }
          .deco-right-gift { width: 85px; }
          .happy-text-reveal { font-size: 34px; }
          .subtitle-reveal { font-size: 13px; }
          .birthday-banner { font-size: 19px; }
          .back-btn { font-size: 12px; padding: 10px 24px; }
        }
      `}</style>

      {/* Custom Background Wave */}
      <BackgroundWave />

      {/* Decorative Confetti & Sparkles */}
      {confettiList.map((item, idx) => (
        <ConfettiPiece key={`confetti-${idx}`} item={item} />
      ))}

      {sparklesList.map((spark, idx) => (
        <motion.div
          key={`spark-${idx}`}
          style={{ position: 'absolute', left: spark.left, top: spark.top, zIndex: 2, pointerEvents: 'none' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.9, 0.3]
          }}
          transition={{
            duration: 2 + (idx % 3) * 0.6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <SparkleIcon style={{ width: `${spark.size}px`, height: `${spark.size}px` }} />
        </motion.div>
      ))}

      {heartsList.map((heart, idx) => (
        <motion.div
          key={`heart-${idx}`}
          style={{ position: 'absolute', left: heart.left, top: heart.top, zIndex: 2, pointerEvents: 'none' }}
          animate={{
            y: [0, -8, 0],
            rotate: [0, 8, -8, 0]
          }}
          transition={{
            duration: 3 + (idx % 2) * 0.7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <HeartIcon style={{ width: `${heart.size}px`, height: `${heart.size}px`, fill: '#FF9EAF', opacity: 0.6 }} />
        </motion.div>
      ))}

      {/* Floating Side SVGs */}
      <div className="deco-left-balloons float-balloon">
        <LeftBalloons />
      </div>
      <div className="deco-right-envelope float-envelope">
        <MiniEnvelope />
      </div>
      <div className="deco-left-gift">
        <LeftCornerGift />
      </div>
      <div className="deco-right-gift">
        <RightCornerGift />
      </div>

      {/* Header Title */}
      <motion.div
        className="reveal-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="happy-text-reveal">
          The Gift Awaits You!
        </h1>
        <div className="subtitle-reveal">
          ♡ Rub the cover to reveal your surprise! ♡
        </div>
      </motion.div>

      {/* Center Polaroid card with interactive Scratch Canvas */}
      <motion.div
        className="polaroid-container"
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
      >
        <div className="polaroid-tape">🤍</div>

        <div className="polaroid-img-wrapper">
          <img src="/images/m10.jpeg" alt="Surprise Gift" className="polaroid-img" />

          {/* Interactive scratch cover */}
          <AnimatePresence>
            {!isScratchedOff && (
              <motion.canvas
                ref={canvasRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
                exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.6 } }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: 4,
                  borderRadius: '2px',
                  touchAction: 'none'
                }}
              />
            )}
          </AnimatePresence>
        </div>

        <div className="polaroid-caption-box">
          <p className="polaroid-text-line1">A thrilling surprise is waiting just for you...</p>
          <p className="polaroid-text-line2">Come and pick it up! 🎀</p>
          <div className="polaroid-deco-line"></div>
        </div>
      </motion.div>

      {/* Birthday text */}
      <motion.h2
        className="birthday-banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        🌸 <span>Happy Birthday Haifa!</span> 🌸
      </motion.h2>

      {/* Back button */}
      <motion.button
        className="back-btn"
        onClick={onBack}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        🤍 BACK TO THE BOXES 🤍
      </motion.button>
    </div>
  );
}
