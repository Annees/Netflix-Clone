//DAY-1 OF BUILD
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow = false }) {
  //destructuring the props

  const [movies, setMovies] = useState([]);
  // const[trailerUrl, setTrailerUrl]= useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [trailerPath, setTrailerPath] = useState("");
  const [description, setDescription] = useState("");
  const [original_title, setOriginal_title] = useState("");
  const [ntitle, setnTitle] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request; //remember for any promise or async we should return it
    }

    fetchData();
  }, [fetchUrl]); //here is the dependency fetch url,
  // here we are dependent on the prop so anytime you are depending on the variable outside of the useeffect you have to put that inside the dependency
  //here the useffectis going to be dependent on that variable
  //if [], run once when the row loads and dont run again

  // console.log(movies); //for testing the requested data

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  // const handleClick = (movie)=> {
  //     if (trailerUrl){
  //         setTrailerUrl('');
  //     } else{
  //         movieTrailer(movie?.name || "")
  //         .then(url =>{
  //             const urlParams = new URLSearchParams(new URL(url).search);
  //             setTrailerUrl(urlParams.get('v'));
  //         }).catch(error => console.log(error));
  //     }
  // }

  // const opts = {
  //     playerVars: {
  //       // https://developers.google.com/youtube/player_parameters
  //       height: '390',
  //       width: '100%',
  //       autoplay: 1,
  //       modestbranding: 1,
  //       controls: 0,
  //     },
  // };

  const handleClick = (movie) => {
    if (trailerPath === "") {
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_name ||
          movie?.original_title
      )
        .then((response) => {
          const path = response.split("?v=")[1];
          setTrailerPath(path);
          // document.querySelector('body').style.overflow = 'hidden';
          setDescription(movie?.overview);
          setnTitle(movie?.name || movie?.title || movie?.original_title);
          setOriginal_title(movie?.original_name);
        })
        .catch((error) => {
          handleError();
          console.log(error);
        });
    } else {
      setTrailerPath("");
      setDescription("");
      setnTitle("");
      setOriginal_title("");
      document.querySelector("body").style.overflow = "auto";
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) || //conditionl to avoid deadlink
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id} //since map always use key
                onClick={() => handleClick(movie)}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}

      {trailerPath && (
        <div className="info__overlay" onClick={() => handleClick(null)}>
          <div
            className="info__overlay--contentBox"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="info__overlay--videoBox">
              <YouTube
                className="info__overlay--youtube"
                videoId={trailerPath}
                opts={opts}
              />
            </div>
            <div className="info__overlay--text">
              <h1>{ntitle}</h1>
              <h2>{original_title ? `(${original_title})` : ""}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const handleError = function () {
  const html = `
    <div class="error">
        <div class="error__text">
            <p class="error__heading">Error:</p>
            <p class="error__description">Can't find trailer, please try another title!</p>
        </div>
    </div>
    `;
  const body = document.querySelector("body");
  body.insertAdjacentHTML("afterbegin", html);
  const error = body.querySelector(".error");
  error.classList.add("fade-in");

  setTimeout(function () {
    // error.classList.remove('fade-in');
    error.classList.add("fade-out");
    setTimeout(function () {
      error.remove();
    }, 500);
  }, 2500);
};

export default Row;
