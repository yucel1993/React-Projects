import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  news: [],
  loading: false, // Changed status to loading
  error: null,
};

export const fetchNews = createAsyncThunk('api/fetchNews', async () => {
  try {
    const API_KEY = import.meta.env.VITE_API_KEY
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    const data = await response.json();
    console.log(data.articles)
    return data.articles;
  } catch (error) {
    throw new Error('Failed to fetch news');
  }
});

export const newsSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    clearNews: (state) => {
      state.news = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true; // Set loading to true
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false; // Set loading to false
        state.error = action.error.message;
      });
  },
});

export const { clearNews } = newsSlice.actions;

export default newsSlice.reducer;
