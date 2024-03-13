import React from 'react'
import './DataButton.css'

const DataButton = ({ name, currentDataType, setCurrentDataType }) => {
  return (
    <button className={currentDataType === name ? 'DataButton DataButton-selected' : 'DataButton'}  onClick={() => setCurrentDataType(name)}>{name}</button>
  )
}

export default DataButton