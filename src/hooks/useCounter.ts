import { useState } from 'react'

export interface useCounterProps {
  initialValue?: number
}

interface Return {
  counter: number
  acumulator: (n: number) => void
}

const useCounter = ({ initialValue = 10 }: useCounterProps): Return => {
  const [counter, setCounter] = useState<number>(initialValue)

  const acumulator = (n: number) => setCounter((prevn) => prevn + n)

  return { counter, acumulator }
}

export default useCounter
