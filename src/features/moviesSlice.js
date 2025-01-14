import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies, fetchMovieDetail, fetchTvShows } from '../services/tmdbApi';


export const getMovies = createAsyncThunk('movies/getMovies', async (search) => {
    return await fetchMovies(search);
});

export const getTvShows = createAsyncThunk('movies/getTvShows', async (search) => {
    return await fetchTvShows(search);
});

export const getMovieDetail = createAsyncThunk('movies/getMovieDetail', async (id) => {
    return await fetchMovieDetail(id);
});

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        tvShows: [],
        selectedMovie: null,
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
            })
            .addCase(getTvShows.fulfilled, (state, action) => {
                state.tvShows = action.payload.results;
            })
            .addCase(getMovieDetail.fulfilled, (state, action) => {
                state.selectedMovie = action.payload;
            });
    },
});

export default moviesSlice.reducer;

