import React from 'react'
import './DataList.css'

const DataList = ({currentData}) => {
  const tableHeaders = Object.keys(currentData[0])
  return (
    <table className='DataList'>
      {tableHeaders.map(header => <th>{header}</th>)}
      {currentData.map(item => (
        <tr key={item.id}>
          {Object.keys(item).map(key => (
            <td>{JSON.stringify(item[key])}</td>
          ))}
        </tr>
      ))}
    </table>

  )
}

export default DataList