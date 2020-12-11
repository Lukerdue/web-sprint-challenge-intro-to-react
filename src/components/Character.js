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
        <div>
            <div className="imgWrapper">
                <img src={character.image} alt={`${character.name}`}/>
            </div>
            <div className="info">
                <h3>{character.name}</h3>
                <h5>{character.gender}</h5>
                <h5>{character.species} || {character.type}</h5>
            <p strokeColor={color}>{character.status}</p>
            <p>Location: {character.location.name}</p>
            </div>
        </div>
    )
}

export default Character

const CharStyle = styled.div`
color: green;
`