import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {};

const HomeTitle = (props: Props) => {
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
    '&:hover': { animation: 'rubberBand 1s', color: '#ffd700' },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationEnded(true);
    }, 5000);
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
          color: '#fff',
          fontSize: { xs: '36px', md: '56px' },
          lineHeight: { xs: '33px', md: '53px' },
        }}
      >
        {'Hi,'.split('').map((letter, idx) => (
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
        <br />
        {"I'm".split('').map((letter, idx) => (
          <Typography
            component="span"
            key={letter + idx}
            sx={
              animationEnded
                ? textHoverAnimation
                : { ...textAnimation(idx, 1.3) }
            }
          >
            {letter}
          </Typography>
        ))}{' '}
        <Box
          component="span"
          style={{
            animationDelay: '1.4s',
          }}
          className="animate__animated animate__rotateIn"
          sx={{
            display: 'inline-block',
            position: 'relative',
            width: { xs: '30px', md: '60px' },
            height: { xs: '24px', md: '45px' },
          }}
        >
          <Image src="/images/logo-m.png" alt="logo-letter" fill />
        </Box>
        {'ohamed Helmy'.split('').map((letter, idx) => (
          <Typography
            component="span"
            key={letter + idx}
            sx={
              animationEnded
                ? textHoverAnimation
                : { ...textAnimation(idx, 1.7) }
            }
          >
            {letter}
          </Typography>
        ))}
        <br />
        {'Web Developer.'.split('').map((letter, idx) => (
          <Typography
            component="span"
            key={letter + idx}
            sx={
              animationEnded
                ? textHoverAnimation
                : { ...textAnimation(idx, 2.9) }
            }
          >
            {letter}
          </Typography>
        ))}
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

export default HomeTitle;
