import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import "../styles/PlayerSection.css";

function PlayerSection({ state, score, winner }) {
    function CodeGenerator(state) {
        return (
            state.map(item => (
                <div className="card" key={uuidv4()}>
                    <img src={item.image_source} alt={item.name} className="image" />
                    <div className="CardContent">
                        <div className="name">
                            {item.name}
                        </div>
                        <div className="baseExperience">
                            {item.baseExperience}
                        </div>
                    </div>
                </div >
            ))
        )
    }

    return (
        <div>
            <h2>
                Player
                {winner
                    ? ` Wins !!`
                    : ` Loses !!`
                }
            </h2>
            <h4>
                Score: {score}
            </h4>
            {CodeGenerator(state)}
        </div>
    )
}

export default PlayerSection;