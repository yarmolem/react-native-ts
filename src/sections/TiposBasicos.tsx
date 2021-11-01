import Layout from '../components/Layout'

type Nombres = 'Cristian' | 'Alberto'

const TiposBasicos = () => {
  const edad: 24 | 25 = 25
  const nombre: Nombres = 'Cristian'
  const isMale: boolean | 0 | 1 = true
  const hobbies: ('Programar' | 'Jugar')[] = ['Programar', 'Jugar']

  return (
    <Layout title="Tipos básicos">
      <p> Nombre: {nombre} </p>
      <p> Edad: {edad} </p>
      <p> Sexo: {isMale ? 'Masculino' : 'Femenino'} </p>
      <p> Hobbies: {hobbies.join(', ')} </p>
    </Layout>
  )
}

export default TiposBasicos
