import React  from 'react';
import styled from 'styled-components';

const TeamName = styled.h2`
color: turquoise;
`


export default function TopRow(props) {

    return (
        <div className="topRow">
            <div className="home">
                <TeamName>Lions</TeamName>

                {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

                <div className="home__score">{props.homeScore}</div>
            </div>
            <div className="timer">00:03</div>
            <div className="away">
                <TeamName>Tigers</TeamName>
                <div className="away__score">{props.awayScore}</div>
            </div>
        </div>
    )
}
