import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

export const fetchMovies = async (search) => {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
            api_key: API_KEY,
            query: search
        }
    });
    return response.data;
};

export const fetchMovieDetail = async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
        params: { api_key: API_KEY }
    });
    return response.data;
};

export const fetchTvShows = async (search) => {
    const response = await axios.get(`${BASE_URL}/search/tv`, {
        params: {
            api_key: API_KEY,
            query: search
        }
    });
    return response.data;
};
