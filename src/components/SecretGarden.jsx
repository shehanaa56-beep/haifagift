import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
    <circle cx="17" cy="17" r="3.2" fill="currentColor" />
    <circle cx="7" cy="17" r="3.2" fill="currentColor" />
    <circle cx="17" cy="7" r="3.2" fill="currentColor" />
  </svg>
);

export default function SecretGarden({ onBack }) {
  const [showScratch, setShowScratch] = useState(false);

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
  const containerRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);

  // Initialize Canvas Cover overlay
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      
      // Draw gradient cover
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#FF8A9F');
      grad.addColorStop(0.5, '#FFAEBC');
      grad.addColorStop(1, '#FFC6FF');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dashed border
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 4;
      ctx.setLineDash([8, 8]);
      ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

      // Text Instructions
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 18px "Playfair Display", Georgia, serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Scratch here to reveal', canvas.width / 2, canvas.height / 2 - 15);
      ctx.fillText('your special gift! ✨', canvas.width / 2, canvas.height / 2 + 15);
    };

    resizeCanvas();
    setTimeout(resizeCanvas, 100);
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
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    checkPercent();
  };

  const checkPercent = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imgData.data;
    let transparentCount = 0;
    
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) {
        transparentCount++;
      }
    }
    
    const percent = (transparentCount / (pixels.length / 4)) * 100;
    setScratchPercent(percent);
    
    if (percent > 45 && !revealed) {
      setRevealed(true);
    }
  };

  const handleMouseDown = (e) => {
    setIsScratching(true);
    const pos = getMousePos(e);
    scratch(pos.x, pos.y);
  };

  const handleMouseMove = (e) => {
    if (!isScratching || revealed) return;
    if (e.cancelable) e.preventDefault();
    const pos = getMousePos(e);
    scratch(pos.x, pos.y);
  };

  const handleMouseUp = () => {
    setIsScratching(false);
  };

  return (
    <div className="scratch-reveal-container">
      <style>{`
        .scratch-reveal-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
          position: relative;
          z-index: 20;
        }

        .scratch-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .scratch-title {
          font-family: var(--font-hand);
          font-size: 36px;
          color: #FFFFFF;
          margin-bottom: 6px;
          text-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        .scratch-desc {
          font-size: 14px;
          color: #EAD575;
          font-weight: bold;
          text-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .scratch-card-wrapper {
          position: relative;
          width: 320px;
          height: 400px;
          background: #FFFFFF;
          border-radius: 6px;
          box-shadow: 0 15px 35px rgba(74, 62, 65, 0.18);
          padding: 12px 12px 64px 12px;
          margin-bottom: 24px;
          transform: rotate(1deg);
          box-sizing: border-box;
          user-select: none;
        }

        .scratch-polaroid-inner {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          background: #fdfafb;
          border-radius: 2px;
        }

        .gift-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        .scratch-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          cursor: crosshair;
          transition: opacity 0.5s ease-out;
          border-radius: 2px;
        }

        .scratch-canvas.fade-out {
          opacity: 0;
          pointer-events: none;
        }

        .scratch-gift-caption {
          position: absolute;
          bottom: 16px;
          left: 0;
          width: 100%;
          text-align: center;
          font-family: var(--font-hand);
          font-size: 19px;
          color: var(--text-warm);
          font-weight: bold;
          padding: 0 10px;
          box-sizing: border-box;
          line-height: 1.25;
        }

        .congrats-title {
          font-family: var(--font-serif);
          font-size: 26px;
          color: #FFFFFF;
          margin-bottom: 20px;
          text-align: center;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .scratch-tape {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 110px;
          height: 30px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(4px);
          border-radius: 2px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.03);
          z-index: 15;
          pointer-events: none;
        }

        @media (max-width: 480px) {
          .scratch-card-wrapper {
            width: 280px;
            height: 350px;
            padding: 10px 10px 52px 10px;
          }
          .scratch-title {
            font-size: 30px;
          }
          .scratch-gift-caption {
            font-size: 16px;
            bottom: 10px;
          }
        }
      `}</style>

      <div className="scratch-header">
        <h2 className="scratch-title">Your Final Surprise 🎁</h2>
        <p className="scratch-desc">Rub the cover to scrape it off & reveal your gift!</p>
      </div>

      <div className="scratch-card-wrapper">
        <div className="scratch-tape" />
        <div className="scratch-polaroid-inner" ref={containerRef}>
          {/* Revealed Picture Underneath */}
          <img src="/images/m10.jpeg" alt="Gift Bag" className="gift-image" />
          
          {/* Scratch Overlay Canvas */}
          <canvas
            ref={canvasRef}
            className={`scratch-canvas ${revealed ? 'fade-out' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
          />
        </div>
        {/* Caption revealed under canvas */}
        <div className="scratch-gift-caption">
          {revealed ? "Here is the gift for you, come to me ❤️" : "Scratch to read..."}
        </div>
      </div>

      {revealed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%', textAlign: 'center' }}
        >
          <div className="congrats-title">🌸 Happy Birthday Haifa! 🌸</div>
          <button className="garden-btn" onClick={onBack}>
            BACK TO THE BOXES
          </button>
        </motion.div>
      )}
    </div>
  );
}
