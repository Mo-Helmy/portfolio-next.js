/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Loader from 'react-loaders';

import Layout from './Layout';
import HomeTitle from './Title/HomeTitle';

type Props = {};

const HomePage = (props: Props) => {
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
            <HomeTitle />
            <Typography
              variant="h2"
              fontFamily="sans-serif"
              fontSize="12px"
              color="#8d8d8d"
              letterSpacing="3px"
              marginTop="20px"
              sx={{
                transform: 'translateX(-1000px)',
                animation: 'fadeInLeft 1s 4s forwards',
              }}
            >
              Full Stack MERN Developer / JavaScript Expert / Back End Developer
            </Typography>
            <Link href="/contact">
              <Typography
                fontSize="14px"
                color="#ffd700"
                px={2}
                py={1}
                mt={2}
                width="fit-content"
                letterSpacing="3px"
                border="1px solid #ffd700"
                sx={{
                  transform: 'translateX(-1000px)',
                  animation: 'fadeInLeft 1s 4.2s forwards',
                  '&:hover': { bgcolor: '#ffd700', color: '#333' },
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Me
              </Typography>
            </Link>
          </Box>
          <Box
            flex={1}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animationDelay: '4.4s',
            }}
            className="animate__animated animate__zoomInDown"
          >
            <Box
              sx={{
                position: 'relative',
                height: { xs: '200px', md: '333px' },
                width: { xs: '300px', md: '500px' },
              }}
            >
              <Image src="/images/home.png" alt="home" fill sizes="1000px" />
            </Box>
          </Box>
        </Box>
      </Layout>
      <Loader type="line-scale-party" active />
    </>
  );
};

export default HomePage;
