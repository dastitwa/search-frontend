import { useQuery }
  from '@tanstack/react-query';

import {
  rankingSearch,
} from '../api/movieApi';

export function useSearch(
  query: string,
  mode: string,
) {
  return useQuery({
    queryKey: [
      'movies',
      query,
      mode,
    ],

    queryFn: () =>
      rankingSearch(
        query,
        mode,
      ),

    enabled:
      query.trim().length > 1,
  });
}