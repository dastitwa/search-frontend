import { useQuery }
  from '@tanstack/react-query';

import {
  filterSearch,
} from '../api/movieApi';

export function useFilteredSearch(
  genre?: string,
  language?: string,
) {
  return useQuery({
    queryKey: [
      'filter',
      genre,
      language,
    ],

    queryFn: () =>
      filterSearch(
        genre,
        language,
      ),

    enabled:
      !!genre || !!language,
  });
}