/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Loader from 'react-loaders';

import { skillsLogos } from '@/util/constants';
import Layout from './Layout';
import Title from './Title/Title';

type Props = {};

const About = (props: Props) => {
  const skillAnimation = (idx: number, delay: number) => ({
    opacity: 0,
    animation: 'bounceIn 1s 1s forwards',
    animationDelay: `${idx / 10 + delay}s`,
  });

  const skillHoverAnimation = {
    display: 'inline-block',
    animationFillMode: 'both',
    '&:hover': { animation: 'rubberBand 1s' },
  };

  return (
    <>
      <Layout>
        <Box
          flex={1}
          display="flex"
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'center' },
          }}
        >
          <Box flex={1}>
            <Title value="About" />
            <Typography component="div" color="#fff">
              <Typography
                sx={{
                  fontSize: '14px',
                  opacity: 0,
                  marginTop: '16px',
                  animation: 'fadeIn 1s 1.8s forwards',
                }}
              >
                I'm a very ambitious front-end developer looking for a role in
                an established IT company with the opportunity to work with the
                latest technologies on challenging and diverse projects.
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  opacity: 0,
                  marginTop: '16px',
                  animation: 'fadeIn 1s 2s forwards',
                }}
              >
                I'm quiet confident, naturally curious, and perpetually working
                on improving my chops one design problem at a time.
              </Typography>
            </Typography>
          </Box>
          <Stack
            flex={1}
            direction="row"
            sx={{
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignContent: 'center',
              gap: 1.5,
              mx: 3,
              my: 3,
            }}
          >
            {skillsLogos.map((skill, idx) => (
              <Box
                key={idx}
                sx={{
                  position: 'relative',
                  ...skillHoverAnimation,
                }}
              >
                <Image
                  src={skill}
                  alt="skill"
                  width={70}
                  height={70}
                  style={{ ...skillAnimation(idx, 2) }}
                />
              </Box>
            ))}
          </Stack>
        </Box>
      </Layout>
      <Loader type="line-scale-party" active />
    </>
  );
};

export default About;
