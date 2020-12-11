import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  

  //Generates 5 random character IDs
  let characterIds = [];
  for(let i=0; i<5; i++){
  let id = Math.floor(Math.random() * 671);
  characterIds.push(id);
  }

  //calls characters from generated character ID's above
  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character/${characterIds}`)
      .then(res=>{
       console.log(res.data)
        setCharacters(res.data);
        console.log(characters);
      })
      .catch(drama=>{
        console.log(drama)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="charactercont">
        {characters.map(c=>{
          return <Character character={c} key={c.id}/>
        })}
      </div>
    </div>
  );
}

export default App;
