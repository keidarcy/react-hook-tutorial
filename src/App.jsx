import React, { useState, useEffect } from 'react'
import useFetch from './useFetch'
import Axios from 'axios'

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return [form, handleChange]
}

const Tool = () => {
  useEffect(() => {
    const focusOnUsername = (e) => {
      if (e.keyCode === 191) {
        document.querySelector('input[name="username"]').focus()
      }
    }
    window.addEventListener('keydown', focusOnUsername)
    return () => {
      window.removeEventListener('keydown', focusOnUsername)
    }
  }, [])
  // dependency array
  return <h1>工具人</h1>
}

// const fetcher = (url) => fetch(url).then((res) => res.json())
const fetcher = (url) => Axios.get(url).then((res) => res.data)

function App() {
  // const [form, setForm] = useState({ username: 'yoyo', password: '' })
  const [form, handleChange] = useForm({ username: 'yoyo', password: '' })
  const [showTool, setShowTool] = useState(false)
  const [number, setNumber] = useState(1)

  // axios or fetch

  const { data: pokemon, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${number}/`,
    fetcher
  )
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
      <div>
        <button onClick={() => setShowTool(!showTool)}>召唤</button>
      </div>
      <div>
        <button onClick={() => setNumber(number + 1)}>召唤</button>
      </div>
      {showTool && <Tool />}
      {!isLoading ? (
        <>
          <h1>{pokemon?.name}</h1>
          <img src={pokemon?.sprites?.front_default} alt="" />
        </>
      ) : (
        <h1>我是谁</h1>
      )}
    </>
  )
}

export default App
