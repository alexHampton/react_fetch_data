import React from 'react'

const DataButton = ({ name, setCurrentData }) => {
  return (
    <button onClick={() => setCurrentData(name)}>{name}</button>
  )
}

export default DataButton