import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback
} from 'react'
import Tool from './Tool'
import useForm from './useForm'
import Input from './Input'

const MyInput = React.forwardRef(Input)

const Counter = React.memo(({ onClick, name }) => {
  let number = useRef(0)
  console.log('number is: ' + number.current++)
  return (
    <>
      <button onClick={onClick}>{name}</button>
    </>
  )
})

function App() {
  // const [form, setForm] = useState({ username: 'yoyo', password: '' })
  const [form, handleChange] = useForm({ username: 'yoyo', password: '' })
  const [showTool, setShowTool] = useState(false)
  const [emoji, setEmoji] = useState('🥳')

  const [counter, setCounter] = useState(0)
  const nameRef = useRef()

  useEffect(() => {
    setEmoji('😌')
    nameRef.current.focus()
  }, [])

  useLayoutEffect(() => {
    setEmoji('😍')
  }, [])

  const onClick = useCallback(() => {
    setCounter((c) => c + 1)
  }, [setCounter])

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
      <h1>{counter}</h1>
      <Counter onClick={onClick} name={'增加'} />
      <div>
        <button onClick={() => setShowTool(!showTool)}>召唤</button>
      </div>
      {showTool && <Tool />}
    </>
  )
}

export default App
