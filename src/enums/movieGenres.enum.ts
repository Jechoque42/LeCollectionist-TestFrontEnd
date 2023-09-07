// Enums for Movie Genres
export enum EMovieGenres {
    ACTION = 28,
    ADVENTURE = 12,
    ANIMATION = 16,
    COMEDY = 35,
    DOCUMENTARY = 99,
}

// Generate an array of genre names from EMovieGenres enum
export const MovieGenresNames = Object.keys(EMovieGenres)
    .filter((key) => isNaN(Number(key)));

// Define a type for movie genre keys
export type MovieGenreKeys = keyof typeof EMovieGenres;