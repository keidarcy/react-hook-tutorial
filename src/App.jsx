import React, { useState } from 'react'

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return [form, handleChange]
}

function App() {
  // const [form, setForm] = useState({ username: 'yoyo', password: '' })
  const [form, handleChange] = useForm({ username: 'yoyo', password: '' })
  return (
    <>
      <input
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
      />
      <input
        onChange={handleChange}
        type="text"
        name="password"
        value={form.password}
      />
    </>
  )
}

export default App
