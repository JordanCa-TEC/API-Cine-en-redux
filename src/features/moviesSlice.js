import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies, fetchMovieDetail, fetchTvShows } from '../services/tmdbApi'; // Asegúrate de importar correctamente

// Acción para cargar películas
export const loadMovies = createAsyncThunk(
  'movies/loadMovies',
  async (searchTerm) => {
    const response = await fetchMovies(searchTerm);
    return response.results;  // Devuelve los resultados de la búsqueda
  }
);

// Acción para obtener detalles de una película
export const getMovieDetail = createAsyncThunk(
  'movies/getMovieDetail',
  async (movieId) => {
    const response = await fetchMovieDetail(movieId);
    return response; // Devuelve los detalles completos de la película
  }
);

// Acción para obtener programas de televisión
export const getTvShows = createAsyncThunk(
  'movies/getTvShows',
  async (searchTerm) => {
    const response = await fetchTvShows(searchTerm);
    return response.results;  // Devuelve los resultados de la búsqueda
  }
);

// El slice y el reducer siguen igual
const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    tvShows: [],
    movieDetail: {},
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(loadMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Para detalles de película
      .addCase(getMovieDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovieDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieDetail = action.payload;
      })
      .addCase(getMovieDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Para obtener programas de televisión
      .addCase(getTvShows.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTvShows.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tvShows = action.payload;
      })
      .addCase(getTvShows.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default moviesSlice.reducer;
