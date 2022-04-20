import React from 'react';
// import ReactPaginate from '../../pagination';
import { Link } from 'react-router-dom';
import one from '../../images/Blog/001.png';
import two from '../../images/Blog/002.png';
import three from '../../images/Blog/003.png';
import four from '../../images/Blog/004.png';
import './style.css';
import ReactPaginate from 'react-paginate';



const INITAL_POKEMON_LIMIT = 100;
const ITEMS_PER_PAGE = 9;
const INITAL_PAGE_COUNT = Math.ceil(INITAL_POKEMON_LIMIT / ITEMS_PER_PAGE );

function Poke() {
  return (
    <div>
      <section className="py-5" style={{ backgroundColor: "#000" }}>
        <div className="container">
          <h1>Pokedex</h1>
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

          </div>
          <div className="row">
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

          </div>
          <div className="row">
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

          </div>
          <div className="row">
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

          </div>
          <div className="row">
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
            <div className="row">
              <div className="col-12">
                <ReactPaginate/>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* <div id="container"><ReactPaginate /></div> */}

    </div>
  );
}

export default Poke;
