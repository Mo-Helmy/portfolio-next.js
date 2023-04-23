/* eslint-disable react/no-unescaped-entities */
import { Box, Stack, Typography } from '@mui/material';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Loader from 'react-loaders';

import Form from './Form';
import Layout from '../Layout';
import Title from '../Title/Title';
import PhoneIcon from './PhoneIcon';

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <Layout>
        <Box
          flex={1}
          display="flex"
          gap={4}
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'center' },
          }}
        >
          <Stack flex={1}>
            <Title value="Contact" />
            <Typography
              fontSize="14px"
              color="#fff"
              p={2}
              sx={{
                opacity: 0,
                animation: 'bounceIn 1s 1.5s forwards',
              }}
            >
              I am interested in freelance opportunities - especially on
              ambitious or large projects. However, if you have any other
              requests or questions, don't hesitate to contact me using below
              form either.
            </Typography>
            <Stack
              direction="row"
              gap={4}
              mx={4}
              my={2}
              justifyContent="space-evenly"
              alignItems="center"
            >
              <a
                href="https://github.com/Mo-Helmy"
                target="_blank"
                rel="noreferrer"
              >
                <Box
                  sx={{
                    '&:hover svg': { color: '#ffd700' },
                    '& svg': { color: '#fff' },
                    opacity: 0,
                    animation: 'bounceIn 1s 1.6s forwards',
                  }}
                >
                  <FaGithub size={34} />
                </Box>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-helmy-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <Box
                  sx={{
                    '&:hover svg': { color: '#ffd700' },
                    '& svg': { color: '#fff' },
                    opacity: 0,
                    animation: 'bounceIn 1s 1.7s forwards',
                  }}
                >
                  <FaLinkedin size={34} />
                </Box>
              </a>
              <a href="mailto:mo.helmy.dev@gmail.com">
                <Box
                  sx={{
                    '&:hover svg': { color: '#ffd700' },
                    '& svg': { color: '#fff' },
                    opacity: 0,
                    animation: 'bounceIn 1s 1.8s forwards',
                  }}
                >
                  <FaEnvelope size={34} />
                </Box>
              </a>
              <PhoneIcon width={30} showAnimation color="#fff" />
            </Stack>
          </Stack>
          <Box flex={1}>
            <Form />
          </Box>
        </Box>
      </Layout>
      <Loader type="line-scale-party" active />
    </>
  );
};

export default Contact;
