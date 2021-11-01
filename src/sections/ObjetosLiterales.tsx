import Layout from '../components/Layout'

interface Persona {
  edad: number
  nombre: string
  isMale: boolean
  apellido: string
  direccion: Direccion
}

interface Direccion {
  int: number
  avenida: string
  vivienda: Vivienda
}

type Vivienda = 'Casa' | 'Depa' | 'Edificio'

const ObjetosLiterales = () => {
  const cristian: Persona = {
    edad: 25,
    nombre: 'Cristian',
    apellido: 'Gonzalez',
    isMale: true,
    direccion: {
      int: 302,
      avenida: 'Venezuela',
      vivienda: 'Depa'
    }
  }

  return (
    <Layout title="Objetos literales">
      <code>
        <pre>{JSON.stringify(cristian, null, 2)}</pre>
      </code>
    </Layout>
  )
}

export default ObjetosLiterales
