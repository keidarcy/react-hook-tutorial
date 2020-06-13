import React, { useRef, useImperativeHandle } from 'react'

const Input = React.forwardRef(({ type, name, value, onChange }, ref) => {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    hey: () => alert('bilibili')
  }))
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
    </>
  )
})

export default Input
