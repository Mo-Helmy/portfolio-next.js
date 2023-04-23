import { Container, Stack, Typography, useMediaQuery } from '@mui/material';

import Sidebar from './Sidebar';
import MobileBar from './MobileBar';

type Props = {};

const Layout = ({ children }: any) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Stack
      direction="row"
      sx={{
        width: '100%',
        minHeight: '100vh',
        height: 'fit-content',
        bgcolor: '#022c43',
      }}
    >
      {!isMobile ? <Sidebar /> : <MobileBar />}
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          pl: { xs: '32px', sm: '140px' },
          pr: { xs: '24px', sm: '32px' },
          pt: { xs: '84px', sm: '24px' },
          py: '24px',
          minHeight: '100vh',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'La Belle Aurore',
            color: '#ffd700',
            ml: '-16px',
            opacity: 0.7,
          }}
        >
          &lt;body&gt;
        </Typography>
        <main
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            padding: '8px 0',
          }}
        >
          {children}
        </main>
        <Typography
          sx={{
            fontFamily: 'La Belle Aurore',
            color: '#ffd700',
            ml: '-16px',
            opacity: 0.7,
          }}
        >
          &lt;/body&gt;
        </Typography>
        <Typography
          sx={{
            fontFamily: 'La Belle Aurore',
            color: '#ffd700',
            ml: '-24px',
            opacity: 0.7,
          }}
        >
          &lt;/html&gt;
        </Typography>
      </Container>
    </Stack>
  );
};

export default Layout;
