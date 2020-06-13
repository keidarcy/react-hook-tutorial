import { useState } from 'react'

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return [form, handleChange]
}

export default useForm
