import React from 'react'
import './DataList.css'
import Row from './Row'

const DataList = ({currentData}) => {
  const tableHeaders = currentData[0] ? Object.keys(currentData[0]) : []
  return (
    <table className='DataList'>
      {tableHeaders.map(header => <th>{header}</th>)}
      {currentData.map(item => (
        <Row key={item.id} item={item} />
      ))}
    </table>

  )
}

export default DataList