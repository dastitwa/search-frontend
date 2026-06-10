import { useState } from 'react';

import {
  Box,
  Container,
  Typography,
} from '@mui/material';

import SearchBar from '../components/SearchBar';
import SearchSkeleton from '../components/SearchSkeleton';
import MovieCard from '../components/MovieCard';
import AnalyticsSidebar from '../components/AnalyticsSidebar';
import RankingSelector from '../components/RankingSelector';

import { useDebounce } from '../hooks/useDebounce';
import { useSearch } from '../hooks/useSearch';
import { useFilteredSearch } from '../hooks/useFilteredSearch';

import type { Movie } from '../types/movie';

export default function SearchPage() {
  const [query, setQuery] =
    useState('');

  const [
    selectedGenre,
    setSelectedGenre,
  ] = useState<string>();

  const [
    rankingMode,
    setRankingMode,
  ] = useState('all');

  const debouncedQuery =
    useDebounce(query);

  const {
    data,
    isLoading,
  } = useSearch(
    debouncedQuery,
    rankingMode,
  );

  const {
    data: filteredData,
  } = useFilteredSearch(
    selectedGenre,
  );

  const displayData =
    filteredData ?? data;

    return (
      <Container
        maxWidth="xl"
        sx={{
          py: 5,
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            position: 'fixed',
    
            top: -300,
    
            left: '50%',
    
            transform:
              'translateX(-50%)',
    
            width: 800,
    
            height: 800,
    
            borderRadius: '50%',
    
            background:
              'rgba(0, 0, 0, 0.12)',
    
            filter:
              'blur(120px)',
    
            zIndex: -1,
          }}
        />
    
        <Box
          sx={{
            textAlign: 'center',
            mb: 6,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
    
              letterSpacing: 3,
    
              background:
                'white',
    
              WebkitBackgroundClip:
                'text',
    
              WebkitTextFillColor:
                'transparent',
            }}
          >
            Movie Discovery Engine
          </Typography>
    
          <Typography
            sx={{
              mt: 2,
    
              color:
                'rgba(255,255,255,0.7)',
    
              fontSize:
                '1.1rem',
            }}
          >
            Search across 4,800+ movies
            using Elasticsearch
          </Typography>
        </Box>
    
        <Box
          display="flex"
          justifyContent="center"
        >
          <SearchBar
            value={query}
            onChange={setQuery}
          />
        </Box>
    
        <Box
          display="flex"
          justifyContent="center"
          mt={3}
          mb={3}
        >
          <RankingSelector
            value={rankingMode}
            onChange={
              setRankingMode
            }
          />
        </Box>
    
        <Box
          sx={{
            display: 'grid',
    
            gridTemplateColumns: {
              xs: '1fr',
              lg: '300px 1fr',
            },
    
            gap: 4,
    
            mt: 4,
          }}
        >
          <AnalyticsSidebar
            selectedGenre={
              selectedGenre
            }
            onGenreSelect={
              setSelectedGenre
            }
          />
    
          <Box>
            {isLoading && (
              <SearchSkeleton />
            )}
    
            {displayData && (
              <>
                <Box
                  sx={{
                    mb: 4,
    
                    p: 2,
    
                    borderRadius: 4,
    
                    background:
                      'rgba(255,255,255,0.04)',
    
                    border:
                      '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <Typography
                    fontWeight={700}
                  >
                    {displayData.total}
                    {' '}
                    movies found in
                    {' '}
                    {
                      displayData.executionTimeMs
                    }
                    ms
                  </Typography>
                </Box>
    
                <Box
                  sx={{
                    display: 'grid',
    
                    gridTemplateColumns:
                      'repeat(auto-fill,minmax(420px,1fr))',
    
                    gap: 3,
                  }}
                >
                  {displayData.results.map(
                    (movie: Movie) => (
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                      />
                    ),
                  )}
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Container>
    );
}