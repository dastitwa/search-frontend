import {
  Box,
  Skeleton,
} from '@mui/material';

export default function SearchSkeleton() {
  return (
    <Box
      sx={{
        display: 'grid',

        gridTemplateColumns:
          'repeat(auto-fill,minmax(350px,1fr))',

        gap: 3,
      }}
    >
      {[...Array(6)].map(
        (_, index) => (
          <Skeleton
            key={index}
            variant="rounded"
            height={250}
          />
        ),
      )}
    </Box>
  );
}