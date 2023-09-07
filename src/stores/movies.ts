import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { IMovie } from "@/models/movie.model";
import { TmdbApiServices } from "@/services/moviesAPI.services";

export type MoviesState = IMovie[];

export const useMoviesStore = defineStore('moviesStore', () => {
    // Define reactive state properties
    const popularMovies = ref<MoviesState>([]);
    const currentMoviesCategory = ref<MoviesState>([]);
    const allFavoritesMovies = ref<MoviesState>([]);
    const totalPages = ref<number>(1);

    // Get the first N popular movies
    function getNPopularMovies(N: number): IMovie[] {
        return popularMovies.value.slice(0, N);
    }

    // Toggle the favorite state of a movie
    async function switchFavoriteStateMovie(movieData: IMovie, newState: boolean) {
        try {
            const response = await TmdbApiServices.postFavoriteStateMovie(movieData, newState);
            if (response) {
                if (newState) {
                    allFavoritesMovies.value.push(movieData);
                } else {
                    allFavoritesMovies.value = allFavoritesMovies.value.filter(movie => movie.id !== movieData.id);
                }
            }
        } catch (error) {
            console.error("Error while switching favorite state", error);
        }
    }

    // Fetch all favorite movies
    async function fetchAllFavoriteMovies() {
        try {
            const currentPage = ref(1);
            let response = await TmdbApiServices.getFavoriteMovies(currentPage.value);
            allFavoritesMovies.value = allFavoritesMovies.value.concat(response.results);
            while (currentPage.value < response.total_pages) {
                currentPage.value = currentPage.value + 1;
                response = await TmdbApiServices.getFavoriteMovies(currentPage.value);
                allFavoritesMovies.value = allFavoritesMovies.value.concat(response.results);
            }
        } catch (error) {
            console.error("Error fetching all favorite movies", error);
        }
    }

    // Fetch movies by category and page
    async function fetchMovieByCategory(category: any, page: number | 1) {
        try {
            const response = await TmdbApiServices.getMoviesByCategory(category, page);
            if (response) {
                currentMoviesCategory.value = response.results;
                totalPages.value = response.total_pages;
            }
        } catch (error) {
            console.error("Error fetching movies by category:", error);
        }
    }

    // Fetch popular movies
    async function fetchPopularMovies() {
        try {
            const response = await TmdbApiServices.getPopularMovies();
            if (response) {
                popularMovies.value = response;
            }
        } catch (error) {
            console.error("Error fetching popular movies:", error);
        }
    }

    return {
        currentMoviesCategory,
        popularMovies,
        allFavoritesMovies,
        totalPages,
        switchFavoriteStateMovie,
        fetchAllFavoriteMovies,
        fetchPopularMovies,
        fetchMovieByCategory,
        getNPopularMovies
    };
});