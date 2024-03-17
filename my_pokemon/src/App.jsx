import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [num, setNum] = useState()

  useEffect(() => {
    console.log('After re-rendering the value the useEffect will print the output.')

    async function getDataFromServer() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
        console.log(response)
      }
      catch (error) {
        console.log(error)
      }
    }
    getDataFromServer()
  });

  return <>
    <h1> You have selected {num} </h1>
    <select value={num} onChange={(event) => setNum(event.target.value)}>
      <option value="1"> 1 </option>
      <option value="2"> 2 </option>
      <option value="3"> 3 </option>
      <option value="4"> 4 </option>
      <option value="5"> 5 </option>
    </select>
  </>
}

export default App;