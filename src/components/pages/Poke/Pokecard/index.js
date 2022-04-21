import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import one from '../../../images/Blog/001.png';
import '../style.css';
import Table from 'react-bootstrap/Table';
import typesToColors from '../../../../utils/typesToColors';
import Axios from "axios";


const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

function PokeCard({match}) {

    console.log("Test")

    const [details, setDetails] = useState();

    const preload = () => {
        Axios(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`, {
            method: "get"
        })
        .then((response) => {
            console.log("Test")
            console.log(response);
            setDetails(response.data);
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
            {/* section1 */}
            <section>
                <div className="container">
                    <div className="row">
                        <div class="col-12">
                            <h2>{details && details.name}</h2>
                        </div>
                        <Table striped bordered hover variant="dark">
                            <tbody>
                                <tr>
                                {/* <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"} alt="pokemon" /> */}
                                        {/* <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"} alt="pokemon" /> */}
                                    
                                    <td>ID:</td>
                                    <td>{details && details.id}</td>
                                </tr>
                                <tr>
                                    <td>Description:</td>
                                    <td>A strange seed was planted on its back at birth.The plant sprouts and grows with this POKéMON.</td>
                                </tr>
                                <tr>
                                    <td>Type(s):</td>
                                    <td>grass</td>
                                </tr>
                                <tr>
                                    <td>Evolutions:</td>
                                    <td>bulbasaur evolves into ivysaur</td>
                                </tr> 
                                <tr>
                                    <td>species:</td>
                                    <td>{details && details.species.name}</td>
                                </tr>
                                <tr>
                                    <td>sprites:</td>
                                    <td><img src={details && details.sprites.back_default} alt="pokemon back" />
                                        <img src={details && details.sprites.front_default} alt="pokemon back" /></td>
                                </tr>
                                <tr>
                                    <td>weight:</td>
                                    <td>{details && details.weight}</td>
                                </tr>
                                <tr>
                                    <td>stats:</td>
                                    <td>{details && details.stats.length}</td>
                                </tr>
                                <tr>
                                    <td>height:</td>
                                    <td>{details && details.height}</td>
                                </tr>
                                
                            </tbody>
                        </Table>

                    </div>

                </div>
            </section><br/><br/><br/><br/><br/><br/><br/>
        </div>
    );
}

export default PokeCard;
