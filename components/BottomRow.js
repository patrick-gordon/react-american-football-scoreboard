import React from "react";
import "../App.css";
import styled from 'styled-components';

const Color = styled.h3`
color: turquoise
font-family: "Ozone";
font-size: 5rem;
width: 13rem;
text-align: center;
background-color: var(--black);
margin-top: 1rem;
border-radius: 4px;
padding: 1.6rem;
border: 1px solid white;
`

const Color1 = styled.div`
color: turquoise
font-family: "Ozone";
font-size: 5rem;
width: 20rem;
text-align: center;
background-color: var(--black);
margin-top: 1rem;
border-radius: 4px;
padding: 1.6rem;
border: 1px solid white;
`

const BottomRow = () => {
  return (
    <div className="bottomRow">
      <div className="down">
        <Color>Down</Color>
        <Color>3</Color>
      </div>
      <div className="toGo">
        <Color>To Go</Color>
        <Color>7</Color>
      </div>
      <div className="ballOn">
        <Color>Ball on</Color>
        <Color>21</Color>
      </div>
      <div className="quarter">
        <Color1>Quarter</Color1>
        <Color>4</Color>
      </div>
    </div>
  );
};

export default BottomRow;
