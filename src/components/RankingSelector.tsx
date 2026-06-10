import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

type Props = {
  value: string;

  onChange: (
    value: string,
  ) => void;
};

export default function RankingSelector({
  value,
  onChange,
}: Props) {
  return (
    <FormControl
      size="small"
      sx={{
        minWidth: 240,
      }}
    >
      <InputLabel>
        Ranking
      </InputLabel>

      <Select
        value={value}
        label="Ranking"
        onChange={(event) =>
          onChange(
            event.target.value,
          )
        }
      >
        <MenuItem value="all">
          Combined
        </MenuItem>

        <MenuItem value="rating">
          Rating
        </MenuItem>

        <MenuItem value="popularity">
          Popularity
        </MenuItem>

        <MenuItem value="recency">
          Recency
        </MenuItem>
      </Select>
    </FormControl>
  );
}