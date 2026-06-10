import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Divider,
} from '@mui/material';

import { motion } from 'framer-motion';

import type {
  Movie,
} from '../types/movie';

type Props = {
  movie: Movie;
};

export default function MovieCard({
  movie,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <Card
        sx={{
          height: '100%',
        
          background: '#111111',
        
          border:
            '1px solid #222222',
        
          borderRadius: 1,
        
          transition:
            'all 0.2s ease',
        
          '&:hover': {
            border:
              '1px solid #444444',
        
            transform:
              'translateY(-4px)',
          },
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              color: '#fff',
            }}
          >
            {movie.title}
          </Typography>

          <Typography
            mt={1}
            sx={{
              color: '#facc15',
              fontWeight: 700,
            }}
          >
            ⭐ {movie.rating}
          </Typography>

          <Divider
            sx={{
              my: 2,
            }}
          />

          <Typography>
            🎬 {movie.director}
          </Typography>

          <Typography>
            📅 {movie.releaseYear}
          </Typography>

          <Typography>
            🌎 {movie.language}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            mt={2}
            flexWrap="wrap"
          >
            {movie.genre.map(
              (genre) => (
                <Chip
                  key={genre}
                  label={genre}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              ),
            )}
          </Stack>

          <Typography
            variant="body2"
            mt={2}
            sx={{
              color:
                'rgba(255,255,255,0.75)',
            }}
          >
            {movie.description.slice(
              0,
              180,
            )}
            ...
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}