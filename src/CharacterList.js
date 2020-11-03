import React, {useState, useEffect} from 'react';

const CharacterList = ({character}) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState(character)
    console.log({searchResults})


    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        console.log('searchResults:', searchResults)
        setSearchResults(character)
    },[character])


    useEffect(() => {
        console.log('searchResults with searchTerm:', searchResults)
        console.log({searchTerm})
        const search = searchTerm.toLowerCase()
        const results = 
                character.filter(char=> {
                return char.name.toLowerCase().includes(search)
            })

        setSearchResults(results)
    },[searchTerm])


    return (
        <div>
            <form>
                <input 
                id="name"
                type="text"
                name="textbox"
                onChange={handleChange}
                value={searchTerm}/>
            </form>
            <div>
                <ul>
                {searchResults.map(char => {
                    return <div key={char.id}>{char.name}</div>

                })}

                </ul>
            </div>

        </div>
    )
}

export default CharacterList;