import React from 'react'
import './DataList.css'

const DataList = ({currentData}) => {
  return (
    <ul className='DataList'>
      {currentData.map(item => <li key={item.id}>{JSON.stringify(item)}</li>)}
    </ul>
  )
}

export default DataList