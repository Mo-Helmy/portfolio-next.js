import { useState } from 'react';
import { AppBar, Box, Button, Drawer, Stack, Typography } from '@mui/material';
import {
  FaBars,
  FaEnvelope,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaSuitcase,
  FaUser,
} from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

type Props = {};

const MobileBar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <AppBar
        // position="absolute"
        elevation={0}
        sx={{
          width: '100%',
          height: '76px',
          bgcolor: '#262323',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ mx: 2 }}>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={60} height={60} />
          </Link>
        </Box>
        <Button
          sx={{
            minWidth: '30px',
            p: 0,
            mr: 2,
            '& svg': { color: '#fff' },
            '&:hover svg': { color: '#ffd700' },
          }}
          onClick={() => setIsMenuOpen(true)}
        >
          <FaBars size={30} />
        </Button>
      </AppBar>
      <Drawer
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        PaperProps={{ sx: { minWidth: '70%', bgcolor: '#181818' } }}
        sx={{ minWidth: '70%' }}
      >
        <Box sx={{ m: 2 }}>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={60} height={60} />
          </Link>
        </Box>
        <Stack width="100%">
          <Link href="/">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                m: 2,
              }}
            >
              <FaHome
                color={router.pathname === '/' ? '#ffd700' : '#4d4d4e'}
                size={24}
                style={{ marginRight: '16px' }}
              />
              <Typography
                variant="body1"
                color={router.pathname === '/' ? '#ffd700' : '#4d4d4e'}
              >
                Home
              </Typography>
            </Box>
          </Link>
          <Link href="/about">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                m: 2,
              }}
            >
              <FaUser
                color={router.pathname === '/about' ? '#ffd700' : '#4d4d4e'}
                size={24}
                style={{ marginRight: '16px' }}
              />
              <Typography
                variant="body1"
                color={router.pathname === '/about' ? '#ffd700' : '#4d4d4e'}
              >
                About
              </Typography>
            </Box>
          </Link>
          <Link href="/portfolio">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                m: 2,
              }}
            >
              <FaSuitcase
                color={router.pathname === '/portfolio' ? '#ffd700' : '#4d4d4e'}
                size={24}
                style={{ marginRight: '16px' }}
              />
              <Typography
                variant="body1"
                color={router.pathname === '/portfolio' ? '#ffd700' : '#4d4d4e'}
              >
                Portfolio
              </Typography>
            </Box>
          </Link>
          <Link href="/contact">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                m: 2,
              }}
            >
              <FaEnvelope
                color={router.pathname === '/contact' ? '#ffd700' : '#4d4d4e'}
                size={24}
                style={{ marginRight: '16px' }}
              />
              <Typography
                variant="body1"
                color={router.pathname === '/contact' ? '#ffd700' : '#4d4d4e'}
              >
                Contact
              </Typography>
            </Box>
          </Link>
        </Stack>
        <Stack
          width="100%"
          px={2}
          py={4}
          direction="row"
          justifyContent="space-evenly"
        >
          <a
            href="https://github.com/Mo-Helmy"
            target="_blank"
            rel="noreferrer"
          >
            <Box
              sx={{
                '&:hover svg': { color: '#ffd700' },
                '& svg': { color: '#4d4d4e' },
              }}
            >
              <FaGithub size={24} style={{ marginTop: '8px' }} />
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
                '& svg': { color: '#4d4d4e' },
              }}
            >
              <FaLinkedin size={24} style={{ marginTop: '8px' }} />
            </Box>
          </a>
          <a href="mailto:mo.helmy.dev@gmail.com">
            <Box
              sx={{
                '&:hover svg': { color: '#ffd700' },
                '& svg': { color: '#4d4d4e' },
              }}
            >
              <FaEnvelope size={24} style={{ marginTop: '8px' }} />
            </Box>
          </a>
        </Stack>
      </Drawer>
    </>
  );
};

export default MobileBar;
