import React from 'react';
import styled from 'styled-components';

function Character(props){
    const {character} = props
    console.log(character)
    let color;
    if(character.status === "Alive"){
        color = "mediumseagreen";
    }
    else if(character.status === "Dead"){
        color = "crimson";
    }
    else{
        color = "darkgray";
    }
    return(
        <CharStyle>
            <div className="imgWrapper">
                <img src={character.image} alt={`${character.name}`}/>
            </div>
            <div className="info">
                <h3>{character.name}</h3>
                <h5>{character.gender}</h5>
                <h5>{character.species} || {character.type}</h5>
            <p color={{color}}>{character.status}</p>
            <p>Location: {character.location.name}</p>
            </div>
        </CharStyle>
    )
}

export default Character

const CharStyle = styled.div`
display: flex;
padding: 5%;
align-items: center;
justify-content: space-around;
background-color: rgb(153, 0, 230, 0.8);
margin: 5%;
color: white;
border-radius: 15px;
border: 3px solid black;

.imgwrapper{
width: 50%;
}
img{
    border-radius: 15px;
}
`