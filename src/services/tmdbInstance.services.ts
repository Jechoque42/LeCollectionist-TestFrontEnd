import axios from "axios";

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'cda6e11b8ed17fa8c1c82d122ecfeba9';
export const SESSION_ID = '919fde92ff12cbb2c2bc528c02025c8519796e0c';
export const instance = axios.create({
    baseURL: TMDB_BASE_URL,
    params: {
        api_key: API_KEY,
    },
});
