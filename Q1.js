class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const movieInstance = new Movie("Avatar", "20th Century Fox", "PG-13");

console.log(movieInstance.title);   
console.log(movieInstance.studio);  
console.log(movieInstance.rating);

////////////////////////////////////

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}


const movieWithoutRating = new Movie("Toy Story", "Pixar");


console.log(movieWithoutRating.title);
console.log(movieWithoutRating.studio);
console.log(movieWithoutRating.rating);

///////////////////////////////////////

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const movie1 = new Movie("Avatar", "20th Century Fox", "PG-13");
const movie2 = new Movie("Toy Story", "Pixar");
const movie3 = new Movie("Finding Nemo", "Pixar", "G");
const movie4 = new Movie("Inception", "Warner Bros", "PG-13");

////////////////////////////////////////////

const movies = [movie1, movie2, movie3, movie4];

function getPG(movies) {
    return movies.filter(movie => movie.rating === "PG");
}


const pgMovies = getPG(movies);

console.log(pgMovies);

////////////////////////////////////////

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log(casinoRoyale.title);
console.log(casinoRoyale.studio);
console.log(casinoRoyale.rating);  