import React from 'react';
import { keyframes } from '@mui/system';
import Box from '@mui/material/Box';

const float = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
`;

const items = ['🎤', '🎉', '📝', '📅', '🎪'];

const AnimatedBackground = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {items.map((icon, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: '100%',
            left: `${Math.random() * 100}%`,
            fontSize: `${20 + Math.random() * 30}px`,
            animation: `${float} ${5 + Math.random() * 10}s ease-in infinite`,
          }}
        >
          {icon}
        </Box>
      ))}
    </Box>
  );
};

export default AnimatedBackground;
