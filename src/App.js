import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CharacterList from './CharacterList'

// const characters = [
//   "Harry Potter",
//   "Ron Weasley",
//   "Luna Lovegood",
//   "Hermione Granger",
//   "Severus Snape",
//   "Ginny Weasley",
//   "Dumbledore",
//   "Draco Malfoy",
//   "Neville Longbottom",
//   "Bellatrix Lestrange",
//   "Sirius Black",
//   "Rubeus Hagrid",
//   "Cho Chang"
// ]
function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      setCharacters(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })

  }, [])



  return (
    <div className="App">
      <CharacterList character ={characters}/>
    </div>
  );
}

export default App;

const CharacterCard = styled.div`
border: 1px solid blue;
width: 40%;
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
