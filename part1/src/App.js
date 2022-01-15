import React from 'react'



const Hello = () =>{

  return (
    <div>
      Hello World
    </div>

  )


}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Footer />
    </div>
  )
}


export default App