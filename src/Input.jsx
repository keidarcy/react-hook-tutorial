import React from 'react'

const Input = ({ type, name, value, onChange }, ref) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    </>
  )
}

export default Input
