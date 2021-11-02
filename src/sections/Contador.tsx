import Layout from '../components/Layout'
import Button from '../components/shared/Button'
import useCounter, { useCounterProps } from '../hooks/useCounter'

const Contador = () => {
  const { counter, acumulator } = useCounter({} as useCounterProps)

  return (
    <Layout title="Hooks">
      <h3 className="text-2xl">
        Contador: <small>{counter}</small>
      </h3>

      <Button onClick={() => acumulator(1)}>+1</Button>
      <Button onClick={() => acumulator(-1)}>-1</Button>
    </Layout>
  )
}

export default Contador
