let movies = [
    {
        id: "0",
        name: "The Avengers - start game",
        score: 70
    },
    {
        id: "1",
        name: "The Titans",
        score: 18
    },
    {
        id: "2",
        name: "The Godfather",
        score: 90
    },
    {
        id: "3",
        name: "Star wars",
        score: 99
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === String(id));
    return filteredMovies[0];
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id !== String(id));
    if(movies.length > cleanMovies.length) {
        movies = cleanMovies;
        return true;
    } else {
        return false;
    }
} 