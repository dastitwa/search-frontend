import {
  Paper,
  Typography,
  Divider,
  Box,
  Chip,
  Stack,
} from '@mui/material';

import {
  useGenres,
  useLanguages,
} from '../hooks/useAnalytics';

type Props = {
  selectedGenre?: string;

  onGenreSelect: (
    genre: string,
  ) => void;
};

export default function AnalyticsSidebar({
  selectedGenre,
  onGenreSelect,
}: Props) {
  const {
    data: genres,
  } = useGenres();

  const {
    data: languages,
  } = useLanguages();

  const genreBuckets =
    genres?.genres?.buckets ?? [];

  const languageBuckets =
    languages?.languages?.buckets ?? [];

  return (
    <Paper
    sx={{
      p: 3,
    
      background: '#111111',
    
      border:
        '1px solid #222222',
    
      borderRadius: 0.5,
    
      position: 'sticky',
    
      top: 20,

    }}
    >
      <Typography
        variant="h6"
        gutterBottom
        fontWeight={800}
      >
        Filters
      </Typography>

      <Divider />

      <Box mt={3}>
        <Typography
          fontWeight={700}
          mb={2}
        >
          Genres
        </Typography>

        <Stack spacing={1}>
          {genreBuckets
            .slice(0, 8)
            .map((genre: any) => (
              <Chip
                key={genre.key}
                clickable
                color={
                  selectedGenre ===
                  genre.key
                    ? 'primary'
                    : 'default'
                }
                label={`${genre.key} (${genre.doc_count})`}
                onClick={() =>
                  onGenreSelect(
                    genre.key,
                  )
                }
              />
            ))}
        </Stack>
      </Box>

      <Box mt={4}>
        <Typography
          fontWeight={700}
          mb={2}
        >
          Languages
        </Typography>

        <Stack spacing={1}>
          {languageBuckets
            .slice(0, 8)
            .map((language: any) => (
              <Chip
                key={language.key}
                label={`${language.key} (${language.doc_count})`}
              />
            ))}
        </Stack>
      </Box>
    </Paper>
  );
}