// Interface for Movie
export interface IMovie {
    adult: boolean; // Indicates if the movie is for adults
    backdrop_path?: string; // URL for the backdrop image
    genre_ids: number[]; // Array of genre IDs
    id: number; // Unique movie ID
    original_language: string; // Original language of the movie
    original_title: string; // Original title of the movie
    overview: string; // Overview or summary of the movie
    popularity: number; // Popularity score of the movie
    poster_path?: string; // URL for the poster image
    release_date: string; // Release date of the movie
    title: string; // Title of the movie
    video: boolean; // Indicates if the movie has a video
    vote_average: number; // Average vote score
    vote_count: number; // Total number of votes
}