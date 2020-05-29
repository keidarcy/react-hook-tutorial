import React, { useState, useEffect, useRef } from 'react'
import Tool from './Tool'
import useForm from './useForm'
import Input from './Input'

const MyInput = React.forwardRef(Input)

function App() {
  // const [form, setForm] = useState({ username: 'yoyo', password: '' })
  const [form, handleChange] = useForm({ username: 'yoyo', password: '' })
  const [showTool, setShowTool] = useState(false)
  const nameRef = useRef()

  useEffect(() => {
    nameRef.current.focus()
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
