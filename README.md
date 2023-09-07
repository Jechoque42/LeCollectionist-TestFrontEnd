# LeCollectionist Movies Management App

Welcome to the Movie Management App! This app allows you to easily manage your favorite movie list and choose them in various genres.

## Features

- View a list of 4 popular movies of the moment.
- Navigate between various movie genres.
- User-friendly interaction with movie cards to add or remove them from the favorite list.
- Responsive design for mobile screen sizes.

## Technologies Used

- Vue 3: A progressive JavaScript framework for building user interfaces.
- Vue Router: Official router for Vue.js to create single-page applications.
- Vitest: A lightweight and fast test runner for Vue.js.
- Pinia: State management for Vue.js applications.
- Axios: Promise-based HTTP client for making API requests.
- SCSS: Syntactically Awesome Style Sheets for enhanced CSS styling.

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies using your preferred package manager:
   ```sh
   npm install
   # or
   yarn install
   ```
4. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
5. Listen on localhost:3000

## Choose another Session ID

To authenticate your own favorite list, you can obtain a personal session ID using the interface available at this link: http://dev.travisbell.com/play/v3_auth.html

Please update the session ID constant in the `services/tmdbInstance.services.ts` file.

## Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```