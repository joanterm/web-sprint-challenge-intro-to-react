import React, {useState, useEffect} from 'react';
import Character from "./components/Character"
import axios from "axios"

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
    .then((response) => {
      console.log(response.data.results)
      setData(response.data.results)
    })
    .then((error) => {
      return error
    })
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map((item, index) => {
        return <Character key={index} name={item.name}/>
      })}
    </div>
  );
}

export default App;
