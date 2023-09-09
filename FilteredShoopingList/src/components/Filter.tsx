import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useMediaQuery } from '@mui/material';

interface FilterProps {
  data: any[];
  info: FilterInfo;
  setInfo: React.Dispatch<React.SetStateAction<FilterInfo>>;
}

export interface FilterInfo {
  name: string;
  category: string;
  brand: string;
  sort: string;
}

const Filter: React.FC<FilterProps> = ({ data, info, setInfo }) => {
  const isXsScreen = useMediaQuery('(min-width:900px)');

  // Use Sets to store unique category and brand names
  const uniqueCategories = new Set(data.map((item) => item.category));
  const uniqueBrands = new Set(data.map((item) => item.brand));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={
        isXsScreen
          ? { backgroundColor: 'whiteSmoke' }
          : { backgroundColor: 'whiteSmoke' }
      }
    >
      <TextField
        label="Search"
        variant="outlined"
        margin="normal"
        fullWidth
        name="name"
        value={info?.name}
        onChange={handleChange}
      />
      <TextField
        select
        margin="normal"
        fullWidth
        label="Category"
        defaultValue="All"
        name="category"
        value={info?.category}
        onChange={handleChange}
      >
        {['All', ...uniqueCategories].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        margin="normal"
        fullWidth
        label="Brand"
        defaultValue="All"
        name="brand"
        value={info?.brand}
        onChange={handleChange}
      >
        {['All', ...uniqueBrands].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-currency"
        select
        margin="normal"
        fullWidth
        label="Sort"
        defaultValue="Choose"
        name="sort"
        value={info?.sort}
        onChange={handleChange}
      >
        {['Choose', 'PriceLowToHigh', 'PriceHighToLow', 'RatingHighToLow'].map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default Filter;
