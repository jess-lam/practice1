import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

const characters = [
  "Harry Potter",
  "Ron Weasley",
  "Luna Lovegood",
  "Hermione Granger",
  "Severus Snape",
  "Ginny Weasley",
  "Dumbledore",
  "Draco Malfoy",
  "Neville Longbottom",
  "Bellatrix Lestrange",
  "Sirius Black",
  "Rubeus Hagrid",
  "Cho Chang"
]
function App() {
  const [searchTerm, setSearchTerm] = useState([])
  const [searchResults, setSearchResults] = useState(characters)

  useEffect(() => {
    const results = characters.filter(character => {
      return character.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results)

  }, [searchTerm])

  const handleChange= event => {
    setSearchTerm(event.target.value)
  }


  return (
    <div className="App">
      <form>
        <input
        id= "name"
        type= "text"
        name= "textfield"
        placeholder= "Search"
        onChange = {handleChange}
        value={searchTerm} />
      </form>
      <div>
      <ul>
        {searchResults.map(character => {
          return <li key={character}>{character}</li>
        })}
      </ul>
      </div>
    </div>
  );
}

export default App;
