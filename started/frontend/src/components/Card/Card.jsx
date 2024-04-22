import React from 'react'

function Card(props) {
  return (
    <div className={`rounded-lg shadow p-2 w-full ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card