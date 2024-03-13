import { useEffect, useState } from 'react'
import './App.css'
import DataButton from './DataButton'
import DataList from './DataList'

function App() {
  const API_BASE_URL = "https://jsonplaceholder.typicode.com/";
  const [currentDataType, setCurrentDataType] = useState("");
  const [currentData, setCurrentData] = useState([]);

  // since this will get called any time currentDataType is updated, will
  // make the GET request here
  useEffect( () => {
    const createURL = () => {
      return API_BASE_URL + currentDataType
    }

    const fetchItems = async () => {
      const response = await fetch(createURL())
      if (!response.ok) throw Error('Did not receive expected data')
      const listItems = await response.json()
      setCurrentData(listItems)
    }

    fetchItems();

  }, [currentDataType])

  return (
    <div className="App">
      <section className="App-buttonContainer">
        <DataButton name="users"
                    currentDataType={currentDataType}
                    setCurrentDataType={setCurrentDataType} />
        <DataButton name="posts" 
                    currentDataType={currentDataType}
                    setCurrentDataType={setCurrentDataType} />
        <DataButton name="comments" 
                    currentDataType={currentDataType}
                    setCurrentDataType={setCurrentDataType} />
      </section>
      <DataList currentData={currentData} />


    
    </div>
  );
}

export default App;
