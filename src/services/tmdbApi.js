import axios from 'axios';

const API_KEY = "68b88a1c6d71599f7f9a0bfd6d052554";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGI4OGExYzZkNzE1OTlmN2Y5YTBiZmQ2ZDA1MjU1NCIsIm5iZiI6MTczNjgxOTc1OS43MDU5OTk5LCJzdWIiOiI2Nzg1YzQyZmM1ZDJlOTZlMjY3YmM4NmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ykZv1x5-0z9Z6BaVPHOxwheo7NBsP3yIA_qbm8ZOTOA";
const BASE_URL =  "https://www.themoviedb.org/3";

// Función para obtener las películas de acuerdo a una búsqueda
export const fetchMovies = async (search) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: search
        }
      });
      return response.data; // Devuelve los datos obtenidos de la API
    } catch (error) {
      console.error("Error al obtener las películas:", error);
      throw error;
    }
  };
  
  // Función para obtener los detalles de una película específica
  export const fetchMovieDetail = async (movieId) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: API_KEY
        }
      });
      return response.data; // Devuelve los detalles de la película
    } catch (error) {
      console.error("Error al obtener los detalles de la película:", error);
      throw error;
    }
  };
  
  // Función para obtener los programas de televisión de acuerdo a una búsqueda
  export const fetchTvShows = async (search) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/tv`, {
        params: {
          api_key: API_KEY,
          query: search
        }
      });
      return response.data; // Devuelve los datos obtenidos de la API
    } catch (error) {
      console.error("Error al obtener los programas de televisión:", error);
      throw error;
    }
  };