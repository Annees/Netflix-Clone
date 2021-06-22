//DAY-1 OF BUILD
// Typically we would store in {process.env.API_KEY}

const API_KEY = "f13a5bd7a342838bacaa6930b4cd309d";


//request variable
const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchBollywoodMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&primary_release_year=2020&with_original_language=hi|kn|ml|ta|te`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

// https://api.themoviedb.org/3/discover/movie?api_key=f81980ff410e46f422d64ddf3a56dddd&language=en-US