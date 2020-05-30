import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import Tool from './Tool'
import useForm from './useForm'
import Input from './Input'

const MyInput = React.forwardRef(Input)

function App() {
  // const [form, setForm] = useState({ username: 'yoyo', password: '' })
  const [form, handleChange] = useForm({ username: 'yoyo', password: '' })
  const [showTool, setShowTool] = useState(false)
  const [emoji, setEmoji] = useState('🥳')
  const nameRef = useRef()

  useEffect(() => {
    console.log('from Effect')
    setEmoji('😌')
    nameRef.current.focus()
  }, [])

  useLayoutEffect(() => {
    setEmoji('😍')
    console.log('from layoutEffect')
  }, [])

  return (
    <>
      <MyInput
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
        ref={nameRef}
      />
      <h1>{emoji}</h1>
      <input
        onChange={handleChange}
        type="text"
        name="password"
        value={form.password}
      />
      <div>
        <button onClick={() => setShowTool(!showTool)}>召唤</button>
      </div>
      {showTool && <Tool />}
    </>
  )
}

export default App
