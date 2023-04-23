import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

type Props = {
  value: string;
};

const Title = ({ value }: Props) => {
  const [animationEnded, setAnimationEnded] = useState(false);

  const textAnimation = (idx: number, delay: number) => ({
    font: 'inherit',
    minWidth: '6px',
    opacity: 0,
    animation: 'bounceIn 1s 1s forwards',
    animationDelay: `${idx / 10 + delay}s`,
  });

  const textHoverAnimation = {
    font: 'inherit',
    minWidth: '6px',
    display: 'inline-block',
    animationFillMode: 'both',
    '&:hover': { animation: 'rubberBand 1s', color: '#fff' },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationEnded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Typography
        sx={{
          fontFamily: 'La Belle Aurore',
          color: '#ffd700',
          ml: '-8px',
          opacity: 0.6,
        }}
      >
        &lt;h1&gt;
      </Typography>
      <Typography
        fontFamily="Coolvetica"
        fontWeight={400}
        sx={{
          color: '#ffd700',
          fontSize: { xs: '36px', md: '56px' },
          lineHeight: '56px',
        }}
      >
        {value.split('').map((letter, idx) => (
          <Typography
            component="span"
            key={letter + idx}
            sx={
              animationEnded ? textHoverAnimation : { ...textAnimation(idx, 1) }
            }
          >
            {letter}
          </Typography>
        ))}{' '}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'La Belle Aurore',
          color: '#ffd700',
          ml: '-8px',
          opacity: 0.6,
        }}
      >
        &lt;/h1&gt;
      </Typography>
    </Box>
  );
};

export default Title;
