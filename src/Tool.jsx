import React, { useEffect, useState, useRef, useContext } from 'react'
import useFetch from './useFetch'
import Axios from 'axios'
import MyContext from './MyContext'

// axios or fetch
// const fetcher = (url) => fetch(url).then((res) => res.json())
const fetcher = (url) => Axios.get(url).then((res) => res.data)

const Tool = () => {
  const { counter, dispatch } = useContext(MyContext)
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
  // const [number, setNumber] = useState(1)
  const { data: pokemon, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}/`,
    fetcher
  )

  const copyRef = useRef()
  // dependency array
  return (
    <>
      <h1>工具人</h1>{' '}
      {!isLoading ? (
        <>
          <h1>{pokemon?.name}</h1>
          {/* <h3>{password}</h3> */}
          <div>
            <button onClick={() => dispatch({ type: 'increment' })}>
              召唤
            </button>
          </div>
          <img src={pokemon?.sprites?.front_default} alt="" />
          <input
            type="text"
            value={pokemon?.forms[0].url}
            onChange={() => {}}
            name="url"
            ref={copyRef}
          />
          <span
            style={{
              color: 'gray',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
            onMouseOver={() => {
              copyRef.current.select()
              document.execCommand('copy')
            }}
          >
            复制
          </span>
        </>
      ) : (
        <h1>我是谁</h1>
      )}
    </>
  )
}

export default Tool
