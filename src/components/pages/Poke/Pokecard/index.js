import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../style.css';
import Table from 'react-bootstrap/Table';
import typesToColors from '../../../../utils/typesToColors';
import Axios from "axios";


const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

function PokeCard({ match }) {


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
                        <div class="col-md-12">
                            <h2>{details && details.name}</h2>
                        </div>
                        <Table striped bordered hover variant="white">
                            <tbody>
                                <tr>
                                    <td>ID:</td>
                                    <td>{details && details.id}</td>
                                </tr>
                                <tr>
                                    <td>Abilities:</td>
                                    {details && details.abilities.map((abilities) => (
                                        <td><div>{abilities.ability.name}</div>
                                        </td>
                                    ))}
                                </tr>

                                <tr>
                                    <td>Form:</td>
                                    {details && details.forms.map((forms) => (
                                        <td><div>{forms.name}</div>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>height:</td>
                                    <td>{details && details.height}</td>
                                </tr>
                                <tr>
                                    <td>Moves:</td>
                                    {details && details.moves.map((moves) => (
                                        <td><div>{moves.move.name}</div>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>species:</td>
                                    <td>{details && details.species.name}</td>
                                </tr>
                                <tr>
                                    <td>sprites:</td>
                                    <td>
                                        <img src={details && details.sprites.back_default} alt="pokemon back" />
                                        <img src={details && details.sprites.front_default} alt="pokemon back" />
                                        <img src={details && details.sprites.back_shiny} alt="pokemon back" />
                                        <img src={details && details.sprites.front_shiny} alt="pokemon back" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Type(s):</td>
                                    {details && details.types.map((types) => (
                                        <td><div style={{background: typesToColors[types.type.name] }}>{types.type.name}</div>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    <td>weight:</td>
                                    <td>{details && details.weight}</td>
                                </tr>
                                <tr>
                                    <td>stats:</td>
                                    {details && details.stats.map((stat) => (
                                        <td><div>{stat.stat.name}</div>
                                            <div>{stat.base_stat}</div>
                                        </td>
                                    ))}
                                </tr>


                            </tbody>
                        </Table>

                    </div>

                </div>
            </section><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default PokeCard;
