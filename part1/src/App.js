import React from 'react'


const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old. Your score is {props.score}
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} score='68'/>
      <Hello name={name} age={age} score='88'/>
    </div>
  )
}


export default App