import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

// Keypad card corner ribbon bow with daisy
const RibbonBow = ({ style }) => (
  <svg
    viewBox="0 0 100 80"
    style={{
      position: 'absolute',
      width: '85px',
      height: '68px',
      zIndex: 15,
      filter: 'drop-shadow(0 2px 4px rgba(74, 62, 65, 0.12))',
      ...style
    }}
  >
    {/* Bow Loops */}
    <path d="M50 40 C32 12 12 12 12 32 C12 52 32 45 50 40" fill="rgba(251, 179, 193, 0.95)" stroke="var(--pink-primary)" strokeWidth="1" />
    <path d="M50 40 C68 12 88 12 88 32 C88 52 68 45 50 40" fill="rgba(251, 179, 193, 0.95)" stroke="var(--pink-primary)" strokeWidth="1" />

    {/* Ribbon tails */}
    <path d="M50 40 C46 55 32 75 14 78" fill="none" stroke="rgba(251, 179, 193, 0.95)" strokeWidth="5.5" strokeLinecap="round" />
    <path d="M50 40 C46 55 32 75 14 78" fill="none" stroke="var(--pink-primary)" strokeWidth="1" strokeLinecap="round" />

    <path d="M50 40 C54 55 68 75 86 78" fill="none" stroke="rgba(251, 179, 193, 0.95)" strokeWidth="5.5" strokeLinecap="round" />
    <path d="M50 40 C54 55 68 75 86 78" fill="none" stroke="var(--pink-primary)" strokeWidth="1" strokeLinecap="round" />

    {/* Daisy in Center */}
    <circle cx="50" cy="40" r="7" fill="var(--white)" stroke="var(--pink-primary)" strokeWidth="1" />
    <circle cx="50" cy="40" r="2.8" fill="#EAD575" />
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 45 * Math.PI) / 180;
      const px = 50 + Math.cos(angle) * 5.8;
      const py = 40 + Math.sin(angle) * 5.8;
      return <circle key={i} cx={px} cy={py} r="2.2" fill="var(--white)" />;
    })}
  </svg>
);

// Flowy satin ribbon tail wrapping around
const FlowingRibbon = ({ style }) => (
  <svg
    viewBox="0 0 400 100"
    style={{
      position: 'absolute',
      width: '420px',
      height: '105px',
      zIndex: -2,
      pointerEvents: 'none',
      filter: 'drop-shadow(0 4px 8px rgba(74, 62, 65, 0.08))',
      ...style
    }}
  >
    <path
      d="M10 60 C80 35 180 115 280 55 C330 25 365 40 390 60"
      fill="none"
      stroke="rgba(191, 223, 142, 0.55)"
      strokeWidth="24"
      strokeLinecap="round"
    />
    <path
      d="M10 60 C80 35 180 115 280 55 C330 25 365 40 390 60"
      fill="none"
      stroke="rgba(232, 133, 154, 0.2)"
      strokeWidth="25"
      strokeLinecap="round"
      strokeDasharray="1 16"
    />
  </svg>
);

export default function MemoryLaneBox({ onBack, onComplete }) {
  const memories = [
    {
      id: '01',
      title: 'my pretty old girl',
      subtitle: '',
      rotation: -3,
      img: '/images/m2.jpeg',
    },
    {
      id: '02',
      title: 'trio💛',
      subtitle: '',
      rotation: 2,
      img: '/images/m3.jpeg',
    },
    {
      id: '03',
      title: 'you and your love ❤️',
      subtitle: '',
      rotation: -2.5,
      img: '/images/m4.jpeg',
    },
    {
      id: '04',
      title: '"we 4"❤️',
      subtitle: '',
      rotation: 3,
      img: '/images/m5.jpeg',
    },
    {
      id: '05',
      title: '',
      subtitle: '💛',
      rotation: -2,
      img: '/images/m7.jpeg',
    },
    {
      id: '06',
      title: 'Cute as always♾️',
      subtitle: '',
      rotation: 2.5,
      img: '/images/m8.jpeg',
    },
    {
      id: '07',
      title: 'your team💙',
      subtitle: '',
      rotation: -1.5,
      img: '/images/m9.jpeg',
    },
  ];

  const handleReturn = () => {
    onComplete();
    onBack();
  };

  return (
    <div className="memory-lane-container">
      <style>{`
        .memory-lane-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 950px;
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

        .memory-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .memory-intro-hint {
          font-family: var(--font-hand);
          font-size: 24px;
          color: #EAD575; /* Soft metallic gold */
          font-weight: bold;
          margin-bottom: 6px;
          text-shadow: 0 1px 3px rgba(30, 62, 62, 0.2);
        }

        .memory-title {
          font-family: var(--font-serif);
          font-size: 44px;
          font-weight: 400;
          color: #FFFFFF; /* High contrast white */
          margin-bottom: 8px;
          text-shadow: 0 2px 10px rgba(30, 62, 62, 0.25);
        }

        .memory-desc {
          font-family: var(--font-sans);
          font-size: 14px;
          color: #E8F2EF; /* Ivory/white description */
          opacity: 0.9;
          max-width: 450px;
          margin: 0 auto;
          line-height: 1.5;
          text-shadow: 0 1px 4px rgba(30, 62, 62, 0.15);
        }

        /* Scrapbook board grid layout */
        .scrapbook-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px 40px;
          width: 100%;
          margin-bottom: 50px;
        }

        /* Row connecting arrows styling */
        .grid-arrow-cell {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 30px;
          color: var(--pink-primary);
          opacity: 0.5;
        }

        /* Polaroid inner design specifically for memory lane */
        .memory-polaroid {
          cursor: pointer;
          width: 100%;
          max-width: 250px;
          margin: 0 auto;
        }

        .polaroid-inner-box {
          width: 100%;
          aspect-ratio: 0.85;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }

        .polaroid-inner-box.solid {
          background-color: var(--green-primary);
        }

        .polaroid-inner-box.gradient {
          background: linear-gradient(135deg, var(--green-light) 0%, var(--green-primary) 100%);
        }

        .polaroid-num-text {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 300;
          color: var(--white);
          opacity: 0.85;
          user-select: none;
        }

        .polaroid-caption-main {
          font-family: var(--font-hand);
          font-size: 20px;
          font-weight: bold;
          color: var(--text-warm);
          margin-top: 10px;
          line-height: 1.1;
        }

        .polaroid-caption-sub {
          font-size: 10px;
          letter-spacing: 1px;
          color: var(--text-warm);
          opacity: 0.5;
          margin-top: 4px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .return-btn-container {
          margin-top: 20px;
          margin-bottom: 40px;
        }

        @media (max-width: 768px) {
          .memory-title {
            font-size: 34px;
          }
          .scrapbook-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 25px 15px;
          }
          .grid-arrow-cell {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .memory-title {
            font-size: 28px;
          }
          .back-link {
            font-size: 18px;
            margin-bottom: 20px;
          }
          .memory-desc {
            font-size: 13px;
          }
          .memory-polaroid {
            padding: 10px 10px 16px 10px;
          }
          .polaroid-caption-main {
            font-size: 15px;
            margin-top: 8px;
          }
          .polaroid-caption-sub {
            font-size: 9px;
            margin-top: 2px;
          }
        }
      `}</style>

      {/* Back link */}
      <button className="back-link" onClick={onBack}>
        ← back to the boxes
      </button>

      {/* Header */}
      <div className="memory-header" style={{ position: 'relative' }}>
        <FlowingRibbon style={{ top: '10px', left: '50%', transform: 'translateX(-50%)', opacity: 0.7 }} />
        <div className="memory-intro-hint">✦ box two ✦</div>
        <h1 className="memory-title">Memory Lane</h1>
        <p className="memory-desc">
          A little scrapbook. Hover the polaroids — they remember being held.
        </p>
      </div>

      {/* Grid containing Polaroids and arrows */}
      <div className="scrapbook-grid">
        {/* Row 1 Polaroids */}
        {memories.slice(0, 3).map((mem, idx) => (
          <div className="grid-cell" key={mem.id} style={{ position: 'relative' }}>
            <motion.div
              className="polaroid memory-polaroid"
              style={{ rotate: mem.rotation }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                y: -8,
                boxShadow: '0 20px 40px rgba(74, 62, 65, 0.18)',
              }}
            >
              {idx === 0 && <RibbonBow style={{ top: '-25px', right: '-25px', transform: 'rotate(15deg) scale(0.85)' }} />}
              <div className="polaroid-tape" />
              <div className="polaroid-inner-box" style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={mem.img} alt={mem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(74, 62, 65, 0.7)',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  padding: '2px 6px',
                  borderRadius: '10px',
                  backdropFilter: 'blur(2px)'
                }}>{mem.id}</div>
              </div>
              <div className="polaroid-caption-main">{mem.title}</div>
              <div className="polaroid-caption-sub">{mem.subtitle}</div>
            </motion.div>
          </div>
        ))}

        {/* Row 1 -> Row 2 Arrow Connectors */}
        <div className="grid-arrow-cell"><ArrowDown size={18} strokeWidth={1.5} /></div>
        <div className="grid-arrow-cell"><ArrowDown size={18} strokeWidth={1.5} /></div>
        <div className="grid-arrow-cell"><ArrowDown size={18} strokeWidth={1.5} /></div>

        {/* Row 2 Polaroids */}
        {memories.slice(3, 6).map((mem, idx) => (
          <div className="grid-cell" key={mem.id} style={{ position: 'relative' }}>
            <motion.div
              className="polaroid memory-polaroid"
              style={{ rotate: mem.rotation }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                y: -8,
                boxShadow: '0 20px 40px rgba(74, 62, 65, 0.18)',
              }}
            >
              {idx === 0 && <RibbonBow style={{ bottom: '-15px', left: '-20px', top: 'auto', right: 'auto', transform: 'rotate(-25deg) scale(0.85)' }} />}
              <div className="polaroid-tape" />
              <div className="polaroid-inner-box" style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={mem.img} alt={mem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(74, 62, 65, 0.7)',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  padding: '2px 6px',
                  borderRadius: '10px',
                  backdropFilter: 'blur(2px)'
                }}>{mem.id}</div>
              </div>
              <div className="polaroid-caption-main">{mem.title}</div>
              <div className="polaroid-caption-sub">{mem.subtitle}</div>
            </motion.div>
          </div>
        ))}

        {/* Row 2 -> Row 3 Arrow Connectors */}
        <div className="grid-arrow-cell"><ArrowDown size={18} strokeWidth={1.5} /></div>
        <div className="grid-arrow-cell"><ArrowDown size={18} strokeWidth={1.5} /></div>
        <div className="grid-arrow-cell"><ArrowDown size={18} strokeWidth={1.5} /></div>

        {/* Row 3 Polaroids */}
        {memories.slice(6, 9).map((mem) => (
          <div className="grid-cell" key={mem.id} style={{ position: 'relative' }}>
            <motion.div
              className="polaroid memory-polaroid"
              style={{ rotate: mem.rotation }}
              whileHover={{
                rotate: 0,
                scale: 1.05,
                y: -8,
                boxShadow: '0 20px 40px rgba(74, 62, 65, 0.18)',
              }}
            >
              <div className="polaroid-tape" />
              <div className="polaroid-inner-box" style={{ position: 'relative', overflow: 'hidden' }}>
                <img src={mem.img} alt={mem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(74, 62, 65, 0.7)',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  padding: '2px 6px',
                  borderRadius: '10px',
                  backdropFilter: 'blur(2px)'
                }}>{mem.id}</div>
              </div>
              <div className="polaroid-caption-main">{mem.title}</div>
              <div className="polaroid-caption-sub">{mem.subtitle}</div>
            </motion.div>
          </div>
        ))}
        {/* Fill remaining empty cells of the last row */}
        {memories.length % 3 !== 0 && Array.from({ length: 3 - (memories.length % 3) }).map((_, i) => (
          <div className="grid-cell" key={`filler-${i}`} />
        ))}
      </div>

      {/* Return button */}
      <div className="return-btn-container">
        <button className="glass-button" onClick={handleReturn}>
          RETURN TO THE BOXES
        </button>
      </div>
    </div>
  );
}
