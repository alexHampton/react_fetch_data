import './App.css'
import DataButton from './DataButton'
import { useEffect, useState } from 'react'

function App() {
  const [currentData, setCurrentData] = useState("");

  useEffect(() => {
    console.log(currentData)
  }, [currentData])

  return (
    <div className="App">
      <section className="App-buttonContainer">
        <DataButton name="users" setCurrentData={setCurrentData} />
        <DataButton name="posts" setCurrentData={setCurrentData} />
        <DataButton name="comments" setCurrentData={setCurrentData} />
      </section>

    
    </div>
  );
}

export default App;
