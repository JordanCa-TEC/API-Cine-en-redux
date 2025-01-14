import axios from 'axios';

const API_KEY = "68b88a1c6d71599f7f9a0bfd6d052554";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGI4OGExYzZkNzE1OTlmN2Y5YTBiZmQ2ZDA1MjU1NCIsIm5iZiI6MTczNjgxOTc1OS43MDU5OTk5LCJzdWIiOiI2Nzg1YzQyZmM1ZDJlOTZlMjY3YmM4NmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ykZv1x5-0z9Z6BaVPHOxwheo7NBsP3yIA_qbm8ZOTOA";
const BASE_URL =  "https://www.themoviedb.org";

export const fetchMovies = async (search) => {
    const response = await fetch(`${BASE_URL}/search/movie`, {
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        },
        params: {
            api_key: API_KEY,
            query: search
        }
    });
    const data = await response.json();
    return data;
};

export const fetchMovieDetail = async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}`, {
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        },
        params: { api_key: API_KEY }
    });
    const data = await response.json();
    return data;
};

export const fetchTvShows = async (search) => {
    const response = await fetch(`${BASE_URL}/search/tv`, {
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        },
        params: {
            api_key: API_KEY,
            query: search
        }
    });
    const data = await response.json();
    return data;
};
