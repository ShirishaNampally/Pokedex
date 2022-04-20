import React from 'react';
import { Link } from 'react-router-dom';
import one from '../../../images/Blog/001.png';
import '../style.css';
import Table from 'react-bootstrap/Table';

function PokeCard() {
    return (
        <div>
            {/* section1 */}
            <section>
                <div className="container">
                    <div className="row">
                        <div class="col-12">
                            <h2>bulbasaur</h2>
                        </div>
                        <Table striped bordered hover variant="dark">
                            {/* <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                <tr>
                                    <td><img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"} alt="pokemon" />
                                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"} alt="pokemon" /></td>
                                    <td>ID:</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Description:</td>
                                    <td>A strange seed was planted on its back at birth.The plant sprouts and grows with this POKéMON.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Type(s):</td>
                                    <td>Grass | Poison</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Evolutions:</td>
                                    <td>bulbasaur evolves into ivysaur</td>
                                </tr> 
                                <tr>
                                    <td></td>
                                    <td>species:</td>
                                    <td>bulbasaur</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>sprites:</td>
                                    <td>bulbasaur evolves into ivysaur</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>weight:</td>
                                    <td>bulbasaur evolves into ivysaur</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>stats:</td>
                                    <td>bulbasaur evolves into ivysaur</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>weight:</td>
                                    <td>bulbasaur evolves into ivysaur</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>stats:</td>
                                    <td>bulbasaur evolves into ivysaur</td>
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
