import { Box, Chip, Stack, Typography } from '@mui/material';
import { FaGithub, FaLink } from 'react-icons/fa';
import Image from 'next/image';
import Loader from 'react-loaders';

import { projects } from '@/util/constants';
import Layout from './Layout';
import Title from './Title/Title';

type Props = {};

const Portfolio = (props: Props) => {
  const projectAnimation = (idx: number, delay: number) => ({
    transform: 'translateX(-600%)',
    animation: 'lightSpeedInLeft 0.5s forwards',
    animationDelay: `${idx / 10 + delay}s`,
  });
  return (
    <>
      <Layout>
        <Box flex={1}>
          <Title value="Portfolio" />
          <Stack
            flexWrap="wrap"
            direction="row"
            gap={2}
            justifyContent="center"
          >
            {projects.map((project, idx) => (
              <Box
                key={idx}
                position="relative"
                borderRadius={2}
                overflow="hidden"
                width="350px"
                height="420px"
                sx={{ ...projectAnimation(idx, 1.8) }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="500px"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bgcolor: '#000000de',
                    width: '100%',
                    bottom: 0,
                    padding: '8px 16px',
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <a href={project.url}>
                      <Typography
                        color="#fff"
                        fontSize="20px"
                        fontWeight="bold"
                        sx={{
                          transition: 'all 0.3s ease',
                          '&:hover': { color: '#ffd700' },
                        }}
                      >
                        {project.name} <FaLink size={16} />
                      </Typography>
                    </a>
                    <a href={project.gitUrl}>
                      <Typography
                        color="#fff"
                        sx={{
                          transition: 'all 0.3s ease',
                          '&:hover': { color: '#ffd700' },
                        }}
                      >
                        <FaGithub size={24} />
                      </Typography>
                    </a>
                  </Stack>
                  <Typography color="#fff" fontSize="12px" px={1}>
                    {project?.description}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={0.5} pt={1}>
                    {project.dependencies.map((item, idx) => (
                      <Chip
                        key={item + idx}
                        label={item}
                        variant="outlined"
                        sx={{
                          fontSize: '12px',
                          color: '#fff',
                          padding: '4px 8px',
                          '& span': { padding: 0 },
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Layout>
      <Loader type="line-scale-party" active />
    </>
  );
};

export default Portfolio;
