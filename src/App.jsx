import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo,
  useReducer
} from 'react'
import Tool from './Tool'
import useForm from './useForm'
import Input from './Input'

const Counter = React.memo(({ onClick, name }) => {
  let number = useRef(0)
  console.log('number is: ' + number.current++)
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  )
})

const reducer = (state, action) => {
  switch (action.type) {
    case 'input':
      return {
        todos: state.todos,
        text: action.payload
      }
    case 'add':
      return {
        todos: [...state.todos, { thing: action.payload, completed: false }],
        text: ''
      }
    case 'complete':
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.payload
            ? { thing: t.thing, completed: !t.completed }
            : t
        ),
        text: state.text
      }
    default:
      break
  }
}

function App() {
  // const [form, setForm] = useState({ username: 'yoyo', password: '' })
  const [form, handleChange] = useForm({ username: 'yoyo', password: '' })
  const [showTool, setShowTool] = useState(false)
  const [emoji, setEmoji] = useState('🥳')

  // const [counter, setCounter] = useState(0)
  // const [counter, dispatch] = useReducer(reducer, 0)
  const [{ todos, text }, dispatch] = useReducer(reducer, {
    todos: [],
    text: ''
  })
  const nameRef = useRef()

  useEffect(() => {
    setEmoji('😌')
    nameRef.current.focus()
  }, [])

  useLayoutEffect(() => {
    setEmoji('😍')
  }, [])

  // const onClick = useCallback(() => {
  //   setCounter((c) => c + 1)
  // }, [setCounter])

  // const bigNum = useMemo(() => {
  //   let num = 0
  //   for (let i = 0; i < 800000000; i++) {
  //     num++
  //   }
  //   return num
  // }, [])

  return (
    <>
      {/* <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button> */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch({ type: 'add', payload: text })
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => dispatch({ type: 'input', payload: e.target.value })}
        />
      </form>
      <ul>
        {todos.map((t, idx) => (
          <li
            key={idx}
            style={{ textDecoration: t.completed ? 'line-through' : '' }}
            onClick={() => {
              dispatch({ type: 'complete', payload: idx })
            }}
          >
            {t.thing}
          </li>
        ))}
      </ul>
      <Input
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
        ref={nameRef}
      />
      <h1
        onClick={() => {
          nameRef.current.hey()
        }}
      >
        {emoji}
      </h1>
      <input
        onChange={handleChange}
        type="text"
        name="password"
        value={form.password}
      />
      {/* <h1>
        {counter} - {bigNum}
      </h1>
      <Counter onClick={onClick} name={'增加'} /> */}
      <div>
        <button onClick={() => setShowTool(!showTool)}>召唤</button>
      </div>
      {showTool && <Tool />}
    </>
  )
}

export default App
