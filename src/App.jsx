import React, { useState } from 'react'

const h = (
  <h1 className="btn" style={{ color: 'hotpink' }}>
    hello Bilibili
  </h1>
)

const AppChild = (props) => {
  return <>{props.counter}</>
}

function App() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <AppChild counter={counter} />
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
    </>
  )
}

export default App
