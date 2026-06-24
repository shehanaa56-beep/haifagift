import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Butterfly Outline SVG Component
export const ButterflySvg = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ width: '100%', height: '100%' }}
  >
    {/* Left Wing */}
    <path d="M50 50 C20 15 10 35 20 60 C30 80 45 70 50 55" />
    {/* Right Wing */}
    <path d="M50 50 C80 15 90 35 80 60 C70 80 55 70 50 55" />
    {/* Body & Antennae */}
    <path d="M50 45 L50 65" />
    <path d="M50 45 C48 38 42 34 42 34" />
    <path d="M50 45 C52 38 58 34 58 34" />
  </svg>
);

// Sparkle SVG Component
export const SparkleSvg = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ width: '100%', height: '100%' }}
  >
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
  </svg>
);

// Flower Petal SVG Component
export const PetalSvg = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={{ width: '100%', height: '100%' }}
  >
    {/* Curved organic drop shape for flower petal */}
    <path d="M12 2C8 9 5 13 5 16C5 19.5 8 22 12 22C16 22 19 19.5 19 16C19 13 16 9 12 2Z" />
  </svg>
);

export default function BackgroundParticles({ count = 22 }) {
  // Generate random stable properties using useMemo so they don't re-roll on every render
  const particles = useMemo(() => {
    const types = ['butterfly', 'sparkle', 'petal'];
    const colors = [
      'rgba(247, 142, 161, 0.5)',  // vibrant pink accent
      'rgba(94, 210, 131, 0.6)',  // vibrant green accent
      'rgba(255, 255, 255, 0.7)',  // white
      'rgba(255, 240, 243, 0.6)',  // light blush
    ];

    return Array.from({ length: count }).map((_, i) => {
      const type = types[i % types.length];
      const startX = Math.random() * 100; // start left percentage
      const startY = Math.random() * 100; // start top percentage
      const size = type === 'butterfly'
        ? Math.random() * 18 + 14  // 14px to 32px
        : Math.random() * 8 + 6;   // 6px to 14px

      const duration = Math.random() * 20 + 20; // 20s to 40s float duration
      const delay = Math.random() * -20; // negative delay so particles start spread out
      const color = colors[Math.random() * colors.length | 0];
      const flapDuration = Math.random() * 0.4 + 0.3; // wing flap frequency for butterflies

      return {
        id: i,
        type,
        startX,
        startY,
        size,
        duration,
        delay,
        color,
        flapDuration,
        // horizontal drift paths
        driftX: [
          `${startX}%`,
          `${startX + (Math.random() * 20 - 10)}%`,
          `${startX + (Math.random() * 30 - 15)}%`,
          `${startX}%`
        ],
        // vertical drift paths
        driftY: [
          `${startY}%`,
          `${startY - (Math.random() * 20 + 10)}%`,
          `${startY - (Math.random() * 40 + 20)}%`,
          `${startY}%`
        ],
      };
    });
  }, [count]);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {particles.map((p) => {
        // Butterfly Wing Flap animation
        const wingAnimation = p.type === 'butterfly' ? {
          scaleX: [1, 0.2, 1],
          transition: {
            duration: p.flapDuration,
            repeat: Infinity,
            ease: "easeInOut"
          }
        } : {};

        // General floating & drifting animation
        const floatAnimation = {
          x: p.driftX,
          y: p.driftY,
          opacity: p.type === 'sparkle'
            ? [0.2, 0.8, 0.2, 0.9, 0.2] // blinking
            : [0.3, 0.7, 0.7, 0.3],     // fading in and out
          rotate: p.type === 'petal'
            ? [0, 180, 360]             // rotating petals
            : p.type === 'butterfly'
              ? [-10, 10, -10]          // tilting butterflies
              : [0, 45, 0],             // tilting sparkles
          transition: {
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }
        };

        return (
          <motion.div
            key={p.id}
            animate={floatAnimation}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: p.size,
              height: p.size,
              color: p.color,
            }}
          >
            {p.type === 'butterfly' && (
              <motion.div
                animate={wingAnimation}
                style={{ width: '100%', height: '100%', transformOrigin: 'center' }}
              >
                <ButterflySvg />
              </motion.div>
            )}
            {p.type === 'sparkle' && <SparkleSvg />}
            {p.type === 'petal' && <PetalSvg />}
          </motion.div>
        );
      })}
    </div>
  );
}
