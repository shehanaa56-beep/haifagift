import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';
import BackgroundParticles from './components/BackgroundParticles';
import PasscodeScreen from './components/PasscodeScreen';
import SurpriseDashboard from './components/SurpriseDashboard';
import LetterBox from './components/LetterBox';
import MemoryLaneBox from './components/MemoryLaneBox';
import CelebrationBox from './components/CelebrationBox';
import SecretGarden from './components/SecretGarden';
import GiftRevealPage from './components/GiftRevealPage';

export default function App() {
  const [view, setView] = useState('passcode'); // 'passcode' | 'dashboard' | 'box1' | 'box2' | 'box3' | 'gift-reveal' | 'garden'
  const [completedBoxes, setCompletedBoxes] = useState({
    box1: false,
    box2: false,
    box3: false,
  });
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  // Load persistent state from localStorage
  useEffect(() => {
    const savedCompletion = localStorage.getItem('birthday_journey_boxes');
    
    if (savedCompletion) {
      try {
        setCompletedBoxes(JSON.parse(savedCompletion));
      } catch (e) {
        console.error('Failed to parse completed boxes state from localStorage', e);
      }
    }
  }, []);

  // Sync completed boxes state to localStorage
  const markBoxCompleted = (boxId) => {
    const newState = {
      ...completedBoxes,
      [boxId]: true,
    };
    setCompletedBoxes(newState);
    localStorage.setItem('birthday_journey_boxes', JSON.stringify(newState));
  };

  // Handle successful passcode entry
  const handlePasscodeSuccess = () => {
    setView('dashboard');
    // Start music on first interaction if possible
    if (audioRef.current) {
      audioRef.current.muted = false;
      setIsMuted(false);
      audioRef.current.play().catch(() => {
        // Autoplay blocked, keep muted
        setIsMuted(true);
      });
    }
  };

  // Toggle background music play/mute
  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current.play().catch(() => {});
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      audioRef.current.pause();
      setIsMuted(true);
    }
  };

  // Switch between views with smooth transitions
  const renderActiveView = () => {
    switch (view) {
      case 'passcode':
        return (
          <motion.div
            key="passcode"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="page-container"
          >
            <PasscodeScreen onSuccess={handlePasscodeSuccess} />
          </motion.div>
        );
      case 'dashboard':
        return (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="page-container"
          >
            <SurpriseDashboard
              completedBoxes={completedBoxes}
              onSelectBox={(boxId) => setView(boxId)}
              onEnterGarden={() => setView('garden')}
            />
          </motion.div>
        );
      case 'box1':
        return (
          <motion.div
            key="box1"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="page-container"
          >
            <LetterBox
              onBack={() => setView('dashboard')}
              onComplete={() => markBoxCompleted('box1')}
            />
          </motion.div>
        );
      case 'box2':
        return (
          <motion.div
            key="box2"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="page-container"
          >
            <MemoryLaneBox
              onBack={() => setView('dashboard')}
              onComplete={() => markBoxCompleted('box2')}
            />
          </motion.div>
        );
      case 'box3':
        return (
          <motion.div
            key="box3"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="page-container"
          >
            <CelebrationBox
              onBack={() => setView('dashboard')}
              onComplete={() => markBoxCompleted('box3')}
              onOpenGift={() => setView('gift-reveal')}
            />
          </motion.div>
        );
      case 'gift-reveal':
        return (
          <motion.div
            key="gift-reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="page-container"
          >
            <GiftRevealPage onNext={() => setView('garden')} />
          </motion.div>
        );
      case 'garden':
        return (
          <motion.div
            key="garden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="page-container"
          >
            <SecretGarden onBack={() => setView('dashboard')} />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Georgette fabric texture background */}
      <div className="georgette-bg"></div>

      {/* Wave Background Divider (Pink Cherub upper-wave with soft shadow) */}
      <div className="bg-wave-wrapper">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none" className="bg-wave-svg">
          <defs>
            <filter id="wave-shadow" x="-10%" y="-10%" width="120%" height="140%">
              <feDropShadow dx="0" dy="12" stdDeviation="20" floodOpacity="0.12" floodColor="var(--text-warm)" />
            </filter>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--pink-dark)" />
              <stop offset="100%" stopColor="var(--pink-primary)" />
            </linearGradient>
          </defs>
          <path 
            d="M 0,0 L 1440,0 L 1440,320 C 1080,440 920,240 580,360 C 290,480 150,380 0,400 Z" 
            fill="url(#wave-grad)" 
            filter="url(#wave-shadow)"
            style={{ opacity: 0.85 }}
          />
        </svg>
      </div>

      {/* Floating particles (butterflies, sparkles, petals) */}
      <BackgroundParticles count={25} />

      {/* Background Audio */}
      <audio
        ref={audioRef}
        src="/music/m.mp3"
        loop
        muted={isMuted}
      />

      {/* Mute/Unmute audio button controller */}
      <button 
        className="music-toggle" 
        onClick={toggleMute}
        title={isMuted ? "Play Music" : "Mute Music"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      {/* Main View Router */}
      <AnimatePresence mode="wait">
        {renderActiveView()}
      </AnimatePresence>
    </>
  );
}
