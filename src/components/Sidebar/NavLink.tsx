import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconType } from 'react-icons';

type Props = {
  title: string;
  Icon: IconType;
  url: string;
};

const NavLink = ({ title, Icon, url }: Props) => {
  const router = useRouter();

  return (
    <Link href={url}>
      <Box
        sx={{
          '&:hover svg': { display: 'none' },
          '&:hover p': { display: 'block' },
          height: '24px',
          marginBottom: 2,
        }}
      >
        <Icon
          color={router.pathname === url ? '#ffd700' : '#4d4d4e'}
          size={24}
          style={{ marginInline: 'auto' }}
        />
        <Typography variant="body1" display="none" color="#ffd700">
          {title}
        </Typography>
      </Box>
    </Link>
  );
};

export default NavLink;
