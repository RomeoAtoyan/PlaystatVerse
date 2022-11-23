import React from "react";
import { useEffect, useState } from "react";
import "./Games.css";
import sonypslogo from "./sonypslogo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import psLogo from "./pslogo.png";
import Pagination from "./Pagination";
import sonyComp from "./sonycomp.png"
import everyone from "./Everyone.png"

function Games({ platform, title, searchEngine, isPSX, isPS2 }) {
  const [games, setGames] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);


  const fetchGames = () => {
    const searchInput = document.getElementById(searchEngine);

    fetch(
      `https://api.rawg.io/api/games?key=0682c8a5e2fa4b43b9a99f364f675082&platforms=${platform}&page_size=40&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
      });
    searchInput.value = "";
  };

  useEffect(() => {
    fetchGames();
  },[]);

  const searchGames = () => {
    const searchInput = document.getElementById(searchEngine);
    console.log(searchInput.value);

    fetch(
      `https://api.rawg.io/api/games?key=0682c8a5e2fa4b43b9a99f364f675082&platforms=${platform}&search=${searchInput.value}`
    )
      .then((res) => res.json())
      .then((searchData) => {
        setGames(searchData.results);
      });
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = games.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="games">
      <div className="navbar">
        <h1>
          {title}
        </h1>
        <Pagination
          totalPosts={games.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
        <div className="search_games">
          <input
            id={searchEngine}
            type="text"
            placeholder="Search for games"
            onChange={searchGames}
          />
          <button id="refreshBtn" onClick={fetchGames}>
            <i class="fa-solid fa-rotate-right fa-1x"></i>
          </button>
          <button id="clearInput" onClick={fetchGames}>
            <i className="fa-solid fa-xmark fa-2x"></i>
          </button>
        </div>
      </div>
      <div className={isPSX ? "games_container_psx" : "games_container"}>
        <div className="games_wrapper">
          {currentPosts.map((game) => (
            <div className="single_game_container" key={game.id}>
              <div className={isPSX ? "single_game_psx" : "single_game"}>
                <div className={isPSX ? "cover_title_psx" : "ps_cover_title"}>
                  {isPS2 && <h1>PlayStation 2</h1>}
                  <img src={isPSX ? `${psLogo}` : `${sonypslogo}`} alt="" />
                  {isPSX && <h1>PlayStation</h1>}
                  {isPSX && (
                    <img
                      src={everyone}
                      alt=""
                    />
                  )}
                </div>
                <div className="game_background_image">
                  <img
                    className="game-pic"
                    src={
                      game.background_image
                        ? game.background_image
                        : {sonyComp}
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="game_description">
                <div className="game_rating">
                  <h3 id={game.name.length <= 40 ? " " : "long_title"}>
                    {game.name.length && game.name}
                  </h3>
                  <h3>
                    {!game.metacritic
                      ? "Rating not available"
                      : "Rating:" + " " + game.metacritic + "%"}
                  </h3>
                </div>
                <div className="genres">
                  <ul className="genre_wrapper">
                    {game.genres.map((genre) => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;
