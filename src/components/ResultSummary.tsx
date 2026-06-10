import {
    Typography,
  } from '@mui/material';
  
  type Props = {
    total: number;
  
    executionTimeMs: number;
  };
  
  export default function ResultSummary({
    total,
    executionTimeMs,
  }: Props) {
    return (
      <Typography
        sx={{
          mb: 3,
          color: 'gray',
        }}
      >
        {total} results found in{' '}
        {executionTimeMs}
        ms
      </Typography>
    );
  }