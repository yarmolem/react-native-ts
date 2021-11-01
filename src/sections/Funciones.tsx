import Layout from '../components/Layout'

const Funciones = () => {
  const sumar = (a: number, b: number) => a + b

  return (
    <Layout title="Funciones">
      <p>El resultado es: {sumar(1, 2)}</p>
    </Layout>
  )
}

export default Funciones
