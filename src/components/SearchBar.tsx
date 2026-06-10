import {
  Paper,
  InputBase,
} from '@mui/material';

type Props = {
  value: string;

  onChange: (
    value: string,
  ) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        maxWidth: 1000,
      
        p: 2.5,
      
        borderRadius: 8,
      
        background: '#111111',
      
        border:
          '1px solid #222222',
      }}
    >
      <InputBase
        fullWidth
        placeholder="🔍 Search movies, directors, genres..."
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value,
          )
        }
      />
    </Paper>
  );
}