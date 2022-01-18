import React, { useState } from 'react'

const App = () => {
  const [ counter, setyounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }



  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setyounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setyounter(0)}> 
        zero
      </button>
    </div>
  )
}

export default App