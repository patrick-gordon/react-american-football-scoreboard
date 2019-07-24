import React, {useState} from 'react'

export default function Buttons(props) {


    return (
        <>
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() =>props.setHomeScore(props.homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => props.setHomeScore(props.homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => props.setAwayScore(props.awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => props.setAwayScore(props.awayScore + 3)}>Away Field Goal</button>
        </div>   
        </>
    )
}
