//DAY-1 OF BUILD
import axios from "axios";

//initializing axios
//this axios.create work is whenever we make a request we can actually already append the begining url
//so every time we make a request it always go from this instance, here is the tmdb url
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
