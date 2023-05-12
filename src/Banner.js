//DAY- 1 OF BUILD
import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios"; //always remember we dont have to import global axios instead we need to import the local axios file
import requests from "./Requests";
import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Banner() {
  const [movie, setMovie] = useState([]); //state variable, we are here initializing the value with an empty array

  useEffect(() => {
    //We are making an async call here, and this function is responsible for fetching the movie that is going to show on the banner img
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals); //this will make a request and that will be stored in request
      setMovie(
        request.data.results[ //this will set the movie to the movie variable
          Math.floor(Math.random() * request.data.results.length - 1) //this line will generate a random no. which isgonna be from zero to all the way to the length of the result
        ]
      );
      return request; //completing the promise of the async function
    }

    fetchData(); //this function is going to fetch the data afterward
  }, []); //here is empty dependency

  console.log(movie);

  //It is a function to truncate the description text if its too long
  function truncate(string, n) {
    //n is the no of character
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, //it will append backdrop path since backdrop path is litrally a string if you see in console
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}{" "}
          {/*it could either be a movie?.title or it could be movie name or it could be movie original name */}
          {/* {movie?.origin_country} */}
        </h1>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>{" "}
        {/*it will truncate the movie overview */}
        <div className="banner__buttons">
          <button className="banner__button banner__button-play">
            <FontAwesomeIcon icon={faPlay} /> Play
          </button>
          <button className="banner__button banner__button-info">
            <FontAwesomeIcon icon={faInfoCircle} /> More Info
          </button>
        </div>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
