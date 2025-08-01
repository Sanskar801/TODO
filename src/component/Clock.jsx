import React from 'react'

const Clock = () => {
  return (
    <div className='clock'>
        <div className='clock-display'>
            <p>22:23:01</p>
        </div>
        <div className='clock-details'>
            <h3>Morning</h3>
            <p>08:00 - 11:00</p>
            <p>GMT+5:30</p>
        </div>
    </div>
  )
}

export default Clock