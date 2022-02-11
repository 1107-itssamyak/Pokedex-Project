import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { changeNumbertoString, imageAPIlink, pokemonAPIlink } from '../Helper';
import PlayerSection from './PlayerSection';

import "../styles/Pokegame.css";

function Pokegame() {
    // state variables
    const [Player_one, setPlayer_one] = useState([]);
    const [Player_second, setPlayer_second] = useState([]);
    const [Player_one_score, setPlayer_one_score] = useState(0);
    const [Player_second_score, setPlayer_second_score] = useState(0);

    useEffect(() => {
        async function fetchFunction(number, setState, setScore) {
            const data = await axios.get(`${pokemonAPIlink}${number}`)
                .then(res => res.data)
                .catch(err => console.log(err))

            let imageIndex = changeNumbertoString(number);
            let source = `${imageAPIlink}${imageIndex}.png`;

            setState(prevState => [
                ...prevState, {
                    name: data.name,
                    baseExperience: data.base_experience,
                    image_source: source
                }
            ])

            setScore(prevState => (
                prevState = prevState + data.base_experience
            ))
        }

        for (let i = 0; i < 3; i++) {
            const number_one = Math.floor(Math.random() * 897) + 1;
            fetchFunction(number_one, setPlayer_one, setPlayer_one_score);

            const number_second = Math.floor(Math.random() * 897) + 1;
            fetchFunction(number_second, setPlayer_second, setPlayer_second_score);
        }
    }, []);

    let sum_one_result = false, sum_two_result = false;
    Player_one_score >= Player_second_score
        ? sum_one_result = true
        : sum_two_result = true

    return (
        <div className='pokegame_container'>
            <div>
                <PlayerSection state={Player_one} score={Player_one_score} winner={sum_one_result} />
            </div>
            <div>
                <PlayerSection state={Player_second} score={Player_second_score} winner={sum_two_result} />
            </div>
        </div>
    )
}

export default Pokegame;