import {
    Box,
    Pagination,
  } from '@mui/material';
  
  type Props = {
    page: number;
  
    totalPages: number;
  
    onChange: (
      page: number,
    ) => void;
  };
  
  export default function PaginationBar({
    page,
    totalPages,
    onChange,
  }: Props) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        mt={4}
      >
        <Pagination
          page={page}
          count={totalPages}
          onChange={(
            _,
            value,
          ) =>
            onChange(value)
          }
        />
      </Box>
    );
  }