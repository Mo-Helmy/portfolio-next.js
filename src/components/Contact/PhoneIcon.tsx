import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FaPhone } from 'react-icons/fa';

type Props = {
  width: number;
  showAnimation?: boolean;
  color?: string;
  hoverColor?: string;
  fontSize?: number;
};

const PhoneIcon = ({
  width,
  showAnimation,
  color,
  hoverColor,
  fontSize,
}: Props) => {
  const [showPhone, setShowPhone] = useState(false);
  const animation = { opacity: 0, animation: 'bounceIn 1s 1.9s forwards' };

  return (
    <Button
      sx={{
        minWidth: `${width}px`,
        padding: 0,
        opacity: showAnimation ? animation.opacity : 1,
        animation: showAnimation ? animation.animation : undefined,
        '&:hover svg': { color: hoverColor || '#ffd700' },
        '& svg': { color: color || '#4d4d4e' },
      }}
      onClick={() => setShowPhone((prev) => !prev)}
    >
      {showPhone ? (
        <Typography
          color={hoverColor || '#ffd700'}
          fontSize={`${fontSize || 14}px`}
        >
          +201066297501
        </Typography>
      ) : (
        <FaPhone size={width} />
      )}
    </Button>
  );
};

export default PhoneIcon;
