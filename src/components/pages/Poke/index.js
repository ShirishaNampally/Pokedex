import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './style.css';
// import PaginatedItems from '../../../pagination';

import Axios from "axios";

// const INITAL_POKEMON_LIMIT = 100;
// const ITEMS_PER_PAGE = 8;
// const INITAL_PAGE_COUNT = Math.ceil(INITAL_POKEMON_LIMIT / ITEMS_PER_PAGE );


function Poke() {

  const zeroFill = (number, width) => {
    width -= number.toString().length;
    if (width > 0) {
      return new Array(width + (/\./.test(number) ? 2 : 1)).join("0") + number;
    }
    return number + ""; // always return a string
  }

  const [results, setResults] = useState([]);

  const preload = () => {
    Axios("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20", {
      method: "get"
    })
      .then((response) => {
        console.log(response);
        setResults(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    preload();
  }, []);




  return (
    <div>
      <section style={{ backgroundColor: "#000" }}>
        <div className="container">
          <h1 className="animate-charcter text-center">Pokedex</h1>
          {/* search bar */}
          <div className="row">
            <div className="col-md-2">
              <label style={{ color: "white" }}>Search by name: </label>
            </div>
            <div className="col-md-10">
              <input type="text" />
            </div>
          </div><br />


          {/* list */}
          <div className="row">
            {results && results.map((pokemon, index) => (
              <div className="col-md-3">
                <ul class="pokedex">
                  <li className="card grass">
                    {/* <Link to={(`/poke/${index+1}`)}><img className="card-image" alt="bulbasaur" src={(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index+1}.png`)} /></Link> */}
                    <Link to={(`/poke/${index + 1}`)}><img className="card-image" alt="bulbasaur" src={(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${zeroFill(index + 1, 3)}.png`)} /></Link>
                    <h2 className="card-title">{pokemon.name}</h2>
                  </li>
                </ul>
              </div>
            ))}
          </div>



          {/* <div className="row">
            <div className="col-md-3">
              <ul class="pokedex">
                <li className="card grass" style={{ backgroundColor: "#DEFDE0" }}>
                  <Link to="/poke/pokecard"><img className="card-image" alt="bulbasaur" src={one} /></Link>
                  <h2 className="card-title">1. Bulbasaur</h2>
                  <p className="card-subtitle">grass | poison</p>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul class="pokedex">
                <li className="card grass" style={{ backgroundColor: "#DEFDE0" }}>
                  <Link to="/poke/pokecard"><img className="card-image" alt="" src={two} /></Link>
                  <h2 className="card-title">2. Ivysaur</h2>
                  <p className="card-subtitle">grass | poison</p>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul class="pokedex">
                <li className="card grass" style={{ backgroundColor: "#DEFDE0" }}>
                  <Link to="/poke/pokecard"><img className="card-image" alt="" src={three} /></Link>
                  <h2 className="card-title">3. Venusaur</h2>
                  <p className="card-subtitle">grass | poison</p>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul class="pokedex">
                <li className="card fire" style={{ backgroundColor: "#FDDFDF" }}>
                  <Link to="/poke/pokecard"><img className="card-image" alt="" src={four} /></Link>
                  <h2 className="card-title">4. Charmander</h2>
                  <p className="card-subtitle">fire</p>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className="row">
              <div className="col-12">
                <PaginatedItems/>
              </div>
            </div> */}
        </div>
        {/* <div id="container">
        <PaginatedItems itemsPerPage={4} />
      </div> */}
        <div class="btn-container text-center">
          <button class="btn next-btn">Previous</button>
          <button class="page-btn null">1</button>
          <button class="page-btn null">2</button>
          <button class="page-btn null">3</button>
          <button class="page-btn null">4</button>
          <button class="page-btn null">5</button>
          <button class="page-btn null">6</button>
          <button class="page-btn null">7</button>
          <button class="page-btn active-btn">8</button>
          <button class="page-btn null">9</button>
          <button class="btn next-btn">Next</button>
        </div>
      </section>

    </div>
  );
}

export default Poke;
