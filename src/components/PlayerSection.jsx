import React from 'react'
import { CodeGenerator } from '../Helper';

import "../styles/PlayerSection.css";

function PlayerSection({ state, score, winner }) {
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