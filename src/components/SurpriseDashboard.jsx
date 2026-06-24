import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Small Baby's Breath sprig tucked in box ribbon
const BoxBabysBreath = () => (
  <svg
    viewBox="0 0 100 100"
    style={{
      position: 'absolute',
      bottom: '16px',
      right: '16px',
      width: '76px',
      height: '76px',
      zIndex: 4,
      pointerEvents: 'none'
    }}
  >
    {/* Small stems */}
    <path d="M25 75 C40 60 48 45 55 30" stroke="var(--green-primary)" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M40 52 C52 48 65 40 72 28" stroke="var(--green-primary)" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M32 64 C44 58 52 52 64 42" stroke="var(--green-primary)" strokeWidth="1.2" strokeLinecap="round" />
    {/* White buds */}
    <circle cx="55" cy="30" r="4" fill="#FFFFFF" stroke="var(--green-primary)" strokeWidth="0.6" />
    <circle cx="55" cy="30" r="1.2" fill="#E8D26C" />

    <circle cx="72" cy="28" r="3.5" fill="#FFFFFF" stroke="var(--green-primary)" strokeWidth="0.6" />
    <circle cx="72" cy="28" r="1.2" fill="#E8D26C" />

    <circle cx="64" cy="42" r="4" fill="#FFFFFF" stroke="var(--green-primary)" strokeWidth="0.6" />
    <circle cx="64" cy="42" r="1.2" fill="#E8D26C" />

    {/* Filler buds */}
    <circle cx="46" cy="40" r="2.2" fill="#FFFFFF" />
    <circle cx="58" cy="36" r="2.2" fill="#FFFFFF" />
  </svg>
);

// Satin Ribbon Bow on Gift Box
const GiftBow = () => (
  <svg
    viewBox="0 0 100 80"
    style={{
      position: 'absolute',
      top: 'calc(50% - 38px)',
      left: 'calc(50% - 48px)',
      width: '96px',
      height: '76px',
      zIndex: 3,
      filter: 'drop-shadow(0 2.5px 4px rgba(74, 62, 65, 0.1))'
    }}
  >
    {/* Loops */}
    <path d="M50 40 C35 15 15 15 15 32 C15 48 35 43 50 40" fill="rgba(251, 179, 193, 0.95)" stroke="var(--pink-primary)" strokeWidth="1.2" />
    <path d="M50 40 C65 15 85 15 85 32 C85 48 65 43 50 40" fill="rgba(251, 179, 193, 0.95)" stroke="var(--pink-primary)" strokeWidth="1.2" />

    {/* Tails */}
    <path d="M50 40 C46 55 35 70 20 74" fill="none" stroke="rgba(251, 179, 193, 0.95)" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M50 40 C46 55 35 70 20 74" fill="none" stroke="var(--pink-primary)" strokeWidth="1" strokeLinecap="round" />

    <path d="M50 40 C54 55 65 70 80 74" fill="none" stroke="rgba(251, 179, 193, 0.95)" strokeWidth="4.5" strokeLinecap="round" />
    <path d="M50 40 C54 55 65 70 80 74" fill="none" stroke="var(--pink-primary)" strokeWidth="1" strokeLinecap="round" />

    {/* Knot */}
    <circle cx="50" cy="40" r="5.5" fill="#FFFFFF" stroke="var(--pink-primary)" strokeWidth="1.2" />
    <circle cx="50" cy="40" r="2.2" fill="#EAD575" />
  </svg>
);

// Gift Box Component with Liftable Lid
const GiftBox = () => {
  return (
    <div className="giftbox-wrapper">
      <style>{`
        .giftbox-wrapper {
          position: relative;
          width: 220px;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .giftbox-bg {
          position: absolute;
          inset: 0;
          background: #FFFFFF; /* High contrast white gift card */
          border-radius: 28px;
          box-shadow: 
            inset 0 2px 4px rgba(255,255,255,1), 
            0 12px 30px rgba(232, 133, 154, 0.12);
          border: 1px solid rgba(255,255,255,0.9);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Ribbon Cross */
        .ribbon-vertical {
          position: absolute;
          left: calc(50% - 13px);
          top: 0;
          width: 26px;
          height: 100%;
          background: rgba(251, 179, 193, 0.6); /* Soft pink ribbon */
          border-left: 1px solid rgba(232, 133, 154, 0.15);
          border-right: 1px solid rgba(232, 133, 154, 0.15);
          z-index: 2;
        }

        .ribbon-horizontal {
          position: absolute;
          top: calc(50% - 13px);
          left: 0;
          width: 100%;
          height: 26px;
          background: rgba(251, 179, 193, 0.6);
          border-top: 1px solid rgba(232, 133, 154, 0.15);
          border-bottom: 1px solid rgba(232, 133, 154, 0.15);
          z-index: 2;
        }

        /* Lid lifting effect */
        .box-lid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 50%;
          border-bottom: 1px dashed rgba(232, 133, 154, 0.2);
          z-index: 5;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: top center;
        }

        .giftbox-wrapper:hover .box-lid {
          transform: translateY(-8px);
        }
      `}</style>

      <div className="giftbox-bg">
        {/* Lid (Top Half) */}
        <div className="box-lid">
          <div className="ribbon-vertical" style={{ height: '100%' }}></div>
        </div>

        {/* Ribbons */}
        <div className="ribbon-vertical"></div>
        <div className="ribbon-horizontal"></div>

        {/* Bow Knot */}
        <GiftBow />

        {/* Baby's breath flower sprig tucked behind bow */}
        <BoxBabysBreath />
      </div>
    </div>
  );
};

// Side decorative baby's breath SVG stems
const CornerBabysBreath = ({ style, scale = 1, rotate = 0 }) => (
  <svg
    viewBox="0 0 150 300"
    fill="none"
    className="corner-deco"
    style={{
      position: 'absolute',
      width: '180px',
      height: '360px',
      pointerEvents: 'none',
      zIndex: 1,
      transform: `scale(${scale}) rotate(${rotate}deg)`,
      ...style
    }}
  >
    <path d="M75 280 C70 190 45 140 30 100" stroke="var(--green-primary)" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M75 280 C78 200 92 150 110 110" stroke="var(--green-primary)" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M58 210 C48 180 35 160 25 150" stroke="var(--green-primary)" strokeWidth="1.0" />
    <path d="M88 220 C98 190 108 170 118 160" stroke="var(--green-primary)" strokeWidth="1.0" />
    {/* Flower Buds */}
    <circle cx="30" cy="100" r="3.5" fill="#FFFFFF" stroke="var(--green-primary)" strokeWidth="0.4" />
    <circle cx="30" cy="100" r="1" fill="#E8D26C" />
    <circle cx="25" cy="150" r="3.5" fill="#FFFFFF" stroke="var(--green-primary)" strokeWidth="0.4" />
    <circle cx="110" cy="110" r="3.5" fill="#FFFFFF" stroke="var(--green-primary)" strokeWidth="0.4" />
    <circle cx="110" cy="110" r="1" fill="#E8D26C" />
    <circle cx="118" cy="160" r="3.5" fill="#FFFFFF" stroke="var(--green-primary)" strokeWidth="0.4" />
  </svg>
);

// Flowy satin ribbon tail decoration
const CornerRibbon = ({ isLeft }) => (
  <svg
    viewBox="0 0 300 120"
    className="corner-deco"
    style={{
      position: 'absolute',
      bottom: '-30px',
      [isLeft ? 'left' : 'right']: '-50px',
      width: '320px',
      height: '128px',
      zIndex: 1,
      pointerEvents: 'none',
      transform: isLeft ? 'none' : 'scaleX(-1)',
      filter: 'drop-shadow(0 6px 12px rgba(74, 62, 65, 0.08))'
    }}
  >
    <path
      d="M 10,100 C 90,120 120,40 190,80 C 230,100 260,110 290,90"
      fill="none"
      stroke="rgba(191, 223, 142, 0.7)"
      strokeWidth="20"
      strokeLinecap="round"
    />
    <path
      d="M 10,100 C 90,120 120,40 190,80 C 230,100 260,110 290,90"
      fill="none"
      stroke="rgba(232, 133, 154, 0.25)"
      strokeWidth="21"
      strokeLinecap="round"
      strokeDasharray="1 15"
    />
  </svg>
);

// Decorative Outline Heart
const FloatingHeart = ({ style }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--pink-primary)"
    strokeWidth="1.2"
    style={{
      position: 'absolute',
      width: '24px',
      height: '24px',
      opacity: 0.45,
      pointerEvents: 'none',
      ...style
    }}
  >
    <path d="M12 21 C12 21 3 13.5 3 8.5 C3 5.5 5.5 3 8.5 3 C10.5 3 11.5 4.5 12 5 C12.5 4.5 13.5 3 15.5 3 C18.5 3 21 5.5 21 8.5 C21 13.5 12 21 12 21 Z" />
  </svg>
);

// Curved Connecting Arrow SVG with animated flowing dashed path
const ConnectingArrow = ({ isActive }) => (
  <svg 
    viewBox="0 0 100 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', height: '100%' }}
  >
    <path 
      d="M 10 15 C 35 5, 65 5, 90 15" 
      stroke={isActive ? 'var(--pink-primary)' : 'rgba(74, 62, 65, 0.2)'} 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeDasharray={isActive ? '5 5' : 'none'}
      className={isActive ? 'flowing-line' : ''}
    />
    <path 
      d="M 82 8 L 90 15 L 82 22" 
      fill="none" 
      stroke={isActive ? 'var(--pink-primary)' : 'rgba(74, 62, 65, 0.2)'} 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export default function SurpriseDashboard({ completedBoxes, onSelectBox, onEnterGarden }) {
  const allOpened = completedBoxes.box1 && completedBoxes.box2 && completedBoxes.box3;
  const [toastMessage, setToastMessage] = useState(null);
  const [wiggleBoxId, setWiggleBoxId] = useState(null);
  const toastTimeoutRef = useRef(null);

  const triggerToast = (msg, boxId) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    setWiggleBoxId(boxId);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3000);
    setTimeout(() => {
      setWiggleBoxId(null);
    }, 600);
  };

  const boxes = [
    {
      id: 'box1',
      title: 'Letter For You',
      subtext: 'a few words from my heart',
      completed: completedBoxes.box1,
      locked: false,
    },
    {
      id: 'box2',
      title: 'Memory Lane',
      subtext: 'moments we\'ve collected',
      completed: completedBoxes.box2,
      locked: !completedBoxes.box1,
    },
    {
      id: 'box3',
      title: 'Birthday Surprise',
      subtext: 'make a wish ✦',
      completed: completedBoxes.box3,
      locked: !completedBoxes.box2,
    },
  ];

  const handleBoxClick = (box) => {
    if (box.locked) {
      let msg = '';
      if (box.id === 'box2') {
        msg = "Open Box One (Letter For You) first! 💌";
      } else if (box.id === 'box3') {
        msg = "Visit Box Two (Memory Lane) first! 📸";
      }
      triggerToast(msg, box.id);
    } else {
      onSelectBox(box.id);
    }
  };

  return (
    <div className="dashboard-container">
      <style>{`
        .dashboard-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 950px;
          min-height: 85vh;
          position: relative;
          z-index: 10;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }

        .dashboard-intro-hint {
          font-family: var(--font-hand);
          font-size: 24px;
          color: #EAD575; /* Soft metallic gold */
          font-weight: bold;
          margin-bottom: 6px;
          text-shadow: 0 1px 3px rgba(30, 62, 62, 0.2);
        }

        .dashboard-title-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;
        }

        .breeze-lines {
          font-size: 20px;
          color: #FFFFFF; /* High contrast white */
          transform: translateY(-8px);
          opacity: 0.85;
        }

        .title-heart {
          font-size: 24px;
          color: #FFFFFF; /* High contrast white */
          margin-left: 2px;
          opacity: 0.9;
          display: inline-block;
          transform: translateY(2px);
        }

        .dashboard-title {
          font-family: var(--font-serif);
          font-size: 44px;
          font-weight: 400;
          color: #FFFFFF; /* High contrast white */
          margin: 0;
          text-shadow: 0 2px 10px rgba(30, 62, 62, 0.25);
        }

        .dashboard-desc {
          font-family: var(--font-serif);
          font-size: 15px;
          font-style: italic;
          line-height: 1.6;
          color: #E8F2EF; /* Ivory white description */
          opacity: 0.9;
          max-width: 520px;
          margin: 14px auto 0 auto;
          text-shadow: 0 1px 4px rgba(30, 62, 62, 0.15);
        }

        .boxes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 45px;
          width: 100%;
          margin-bottom: 50px;
          justify-items: center;
          position: relative;
          z-index: 5;
        }

        .box-card-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
        }

        .box-title-text {
          font-family: var(--font-serif);
          font-size: 22px;
          color: var(--text-warm);
          margin-top: 24px;
          font-weight: 500;
        }

        .box-sub-text {
          font-family: var(--font-hand);
          font-size: 17px;
          color: var(--pink-primary);
          opacity: 0.85;
          margin-top: 6px;
          margin-bottom: 12px;
        }

        .status-badge {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          color: var(--pink-primary);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .status-badge.unopened {
          opacity: 0.6;
          color: var(--text-warm);
        }

        .garden-btn-container {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 5;
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

        .box-card-container.locked-card {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .status-badge.locked {
          color: var(--pink-dark);
          opacity: 0.75;
        }

        .lock-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(253, 240, 243, 0.25);
          backdrop-filter: blur(1.5px);
          border-radius: 28px;
          z-index: 5;
          pointer-events: none;
        }

        .lock-icon-svg {
          width: 44px;
          height: 44px;
          color: var(--pink-dark);
          opacity: 0.85;
          filter: drop-shadow(0 2px 5px rgba(74, 62, 65, 0.18));
        }

        .connecting-arrow-wrapper {
          position: absolute;
          width: 14%;
          height: 40px;
          top: 110px;
          transform: translateY(-50%);
          pointer-events: none;
          z-index: 2;
        }

        .arrow-1-2 {
          left: 26%;
        }

        .arrow-2-3 {
          left: 60%;
        }

        @keyframes flow {
          to {
            stroke-dashoffset: -20;
          }
        }

        .flowing-line {
          animation: flow 1.2s linear infinite;
        }

        .arrow-heart-badge {
          position: absolute;
          left: 50%;
          top: 2px;
          transform: translate(-50%, -50%);
          font-size: 14px;
          animation: pulse 1.5s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }

        @keyframes wiggle {
          0%, 100% { transform: translateX(0); }
          15%, 45%, 75% { transform: translateX(-6px) rotate(-1.5deg); }
          30%, 60%, 90% { transform: translateX(6px) rotate(1.5deg); }
        }

        .wiggle-box {
          animation: wiggle 0.55s ease-in-out;
        }

        .toast-container {
          position: fixed;
          bottom: 35px;
          left: 0;
          width: 100vw;
          display: flex;
          justify-content: center;
          z-index: 999;
          pointer-events: none;
        }

        .toast-notification {
          padding: 14px 28px;
          border-radius: 50px;
          background: rgba(253, 249, 243, 0.95);
          border: 1.5px solid var(--pink-accent);
          color: var(--text-warm);
          font-family: var(--font-serif);
          font-size: 15px;
          letter-spacing: 0.5px;
          box-shadow: 0 10px 30px rgba(216, 59, 94, 0.15);
          display: flex;
          align-items: center;
          gap: 10px;
          pointer-events: auto;
        }

        @media (max-width: 768px) {
          .boxes-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .box-card-container {
            min-width: 0;
            width: 100%;
          }

          .box-card-container:nth-child(3) {
            grid-column: span 2;
          }

          .giftbox-wrapper {
            transform: scale(0.58);
            transform-origin: top center;
            margin-bottom: -90px;
          }

          .box-title-text {
            font-size: 16px;
            margin-top: 5px;
          }

          .box-sub-text {
            font-size: 13px;
            margin-top: 3px;
            margin-bottom: 6px;
          }

          .status-badge {
            font-size: 10px;
          }
          
          .dashboard-title {
            font-size: 32px;
          }

          .corner-deco {
            display: none !important;
          }
        }
      `}</style>

      {/* Decorative Baby's Breath at Dashboard corners */}
      <CornerBabysBreath style={{ left: '-80px', bottom: '-40px' }} scale={1} rotate={22} />
      <CornerBabysBreath style={{ right: '-80px', bottom: '-40px' }} scale={1} rotate={-22} />

      {/* Decorative Ribbon Tails at Bottom corners */}
      <CornerRibbon isLeft={true} />
      <CornerRibbon isLeft={false} />

      {/* Decorative Floating Hearts and Sparkles */}
      <FloatingHeart style={{ left: '8%', top: '35%' }} />
      <FloatingHeart style={{ right: '10%', top: '38%' }} />
      <span style={{ position: 'absolute', left: '20%', top: '55%', color: 'var(--pink-primary)', opacity: 0.4, fontSize: '18px', pointerEvents: 'none' }}>✦</span>
      <span style={{ position: 'absolute', right: '22%', top: '58%', color: 'var(--pink-primary)', opacity: 0.4, fontSize: '18px', pointerEvents: 'none' }}>✦</span>

      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-intro-hint">you're in ✦</div>
        <div className="dashboard-title-wrapper">
          <span className="breeze-lines">ミ</span>
          <h1 className="dashboard-title">Choose Your Surprise</h1>
          <span className="title-heart">♡</span>
        </div>
        <p className="dashboard-desc">
          Three little boxes, tied with satin. Open them in order — Box 1, 2, and then 3! 🌸
        </p>
      </div>

      {/* Boxes Grid */}
      <div className="boxes-grid">
        {/* Desktop connection lines */}
        <div className="connecting-arrow-wrapper arrow-1-2">
          <ConnectingArrow isActive={completedBoxes.box1} />
          {completedBoxes.box1 && <span className="arrow-heart-badge">🩷</span>}
        </div>
        <div className="connecting-arrow-wrapper arrow-2-3">
          <ConnectingArrow isActive={completedBoxes.box2} />
          {completedBoxes.box2 && <span className="arrow-heart-badge">🩷</span>}
        </div>

        {boxes.map((box) => {
          return (
            <motion.div
              key={box.id}
              className={`box-card-container ${box.locked ? 'locked-card' : ''} ${wiggleBoxId === box.id ? 'wiggle-box' : ''}`}
              onClick={() => handleBoxClick(box)}
              whileHover={box.locked ? {} : {
                y: -6,
                // Soft cute shake animation
                rotate: [0, -1.5, 1.5, -1.5, 1.5, 0],
                transition: {
                  y: { duration: 0.3 },
                  rotate: { duration: 0.5, repeat: Infinity, repeatType: "mirror" }
                }
              }}
            >
              <div style={{ position: 'relative' }}>
                <GiftBox />
                {box.locked && (
                  <div className="lock-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lock-icon-svg">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
              </div>
              <div className="box-title-text">{box.title}</div>
              <div className="box-sub-text">{box.subtext}</div>

              {box.completed ? (
                <div className="status-badge">
                  🌿 OPENED 🌿
                </div>
              ) : box.locked ? (
                <div className="status-badge locked">
                  🔒 LOCKED
                </div>
              ) : (
                <div className="status-badge unopened">
                  🌿 MYSTERY BOX 🌿
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Secret Garden Button Trigger */}
      <div className="garden-btn-container">
        {allOpened && (
          <motion.button
            className="garden-btn"
            onClick={onEnterGarden}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            ✦ ENTER THE SECRET GARDEN ✦
          </motion.button>
        )}
      </div>

      {/* Toast Notification Container */}
      <div className="toast-container">
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              className="glass-panel toast-notification"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
            >
              <span style={{ fontSize: '18px' }}>🌸</span> {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
