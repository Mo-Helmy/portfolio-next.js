import { AppBar, Box } from '@mui/material';
import {
  FaLinkedin,
  FaGithub,
  FaHome,
  FaUser,
  FaEnvelope,
  FaSuitcase,
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import NavLink from './NavLink';
import PhoneIcon from '../Contact/PhoneIcon';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: 80,
        height: '100%',
        minHeight: '100vh',
        left: 0,
        top: 0,
        bgcolor: '#181818',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        width={60}
        height={60}
        position="relative"
        sx={{ marginInline: 'auto', my: 2 }}
      >
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" fill sizes="200px" />
        </Link>
      </Box>
      <Box
        component="nav"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <NavLink title="Home" Icon={FaHome} url="/" />
        <NavLink title="About" Icon={FaUser} url="/about" />
        <NavLink title="Portfolio" Icon={FaSuitcase} url="/portfolio" />
        <NavLink title="Contact" Icon={FaEnvelope} url="/contact" />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        <a href="https://github.com/Mo-Helmy" target="_blank" rel="noreferrer">
          <Box
            sx={{
              '&:hover svg': { color: '#ffd700' },
              '& svg': { color: '#4d4d4e' },
            }}
          >
            <FaGithub size={22} style={{ marginBottom: '8px' }} />
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
            <FaLinkedin size={22} style={{ marginBottom: '8px' }} />
          </Box>
        </a>
        <a href="mailto:mo.helmy.dev@gmail.com">
          <Box
            sx={{
              '&:hover svg': { color: '#ffd700' },
              '& svg': { color: '#4d4d4e' },
            }}
          >
            <FaEnvelope size={22} style={{ marginBottom: '8px' }} />
          </Box>
        </a>
        <PhoneIcon width={22} fontSize={11} />
      </Box>
    </AppBar>
  );
};

export default Sidebar;
