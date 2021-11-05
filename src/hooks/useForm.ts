import { useState } from 'react'

type Value = string | number | boolean
const useForm = <T extends Object>(initialValues: T) => {
  const [state, setState] = useState(initialValues)

  const handleChange = (name: keyof T, value: Value) => {
    setState((f) => ({ ...f, [name]: value }))
  }

  return { form: state, handleChange }
}

export default useForm
