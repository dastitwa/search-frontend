import { useQuery }
  from '@tanstack/react-query';

import {
  getGenres,
  getLanguages,
} from '../api/movieApi';

export function useGenres() {
  return useQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
  });
}

export function useLanguages() {
  return useQuery({
    queryKey: ['languages'],
    queryFn: getLanguages,
  });
}