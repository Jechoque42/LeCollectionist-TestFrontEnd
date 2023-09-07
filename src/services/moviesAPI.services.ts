import type { IMovie } from '@/models/movie.model';
import { instance, SESSION_ID } from '@/services/tmdbInstance.services';
// @ts-ignore
import { useToast } from "vue-toastification";

export class TmdbApiServices {
    // Initialize toast for displaying error messages
    private static readonly toast = useToast();

    // Handle API errors and display toast messages
    private static handleApiError(error: any) {
        console.error(error);
        const responseError = error.response?.data;
        this.toast.error(`${responseError.status_code || 'Error'}: ${responseError.status_message}`);
    }

    // Define a movie image as the background
    static async defineMovieImageAsBG(movie_id: string): Promise<any> {
        try {
            const response = await instance.get(`/movie/${movie_id}/images`);
            const element = document.querySelector('main');
            if (element) {
                element.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${response.data.backdrops[1].file_path}')`;
            }
        } catch (error) {
            this.handleApiError(error);
            throw error;
        }
    }

    // Get a list of popular movies
    static async getPopularMovies(): Promise<IMovie[]> {
        try {
            const response = await instance.get('/movie/popular');
            return response.data.results;
        } catch (error) {
            this.handleApiError(error);
            throw error;
        }
    }

    // Get movies by category
    static async getMoviesByCategory(category: number, page: number | 1): Promise<any> {
        try {
            const response= await instance.get(`/discover/movie?with_genres=${category}&page=${page}`);
            return response.data;
        } catch (error) {
            this.handleApiError(error);
            throw error;
        }
    }

    // Post the favorite state of a movie
    static async postFavoriteStateMovie(movieData: IMovie, newState: boolean): Promise<any> {
        try {
            const response = await instance.post(`/account/20369141/favorite?session_id=${SESSION_ID}`, {
                media_type: 'movie',
                favorite: newState,
                media_id: movieData.id,
            });
            return response.data;
        } catch (error) {
            this.handleApiError(error);
            throw error;
        }
    }

    // Get favorite movies by session ID and page
    static async getFavoriteMovies(page: number | 1): Promise<any> {
        try {
            const response = await instance.get(`/account/20369141/favorite/movies?session_id=${SESSION_ID}&page=${page}`);
            return response.data;
        } catch (error) {
            this.handleApiError(error);
            throw error;
        }
    }
}
