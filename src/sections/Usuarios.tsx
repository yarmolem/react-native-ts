import Layout from '../components/Layout'
import TableUsuarios from '../components/TableUsuarios'

import Button from '../components/shared/Button'
import useUsers from '../hooks/useUsers'

const Usuarios = () => {
  const { users, paginator, nextPage, prevPage } = useUsers()

  return (
    <Layout title="Usuarios">
      <TableUsuarios users={users} />
      <Button onClick={prevPage}>Prev</Button>
      <span>{paginator}</span>
      <Button className="ml-3" onClick={nextPage}>
        Next
      </Button>
    </Layout>
  )
}

export default Usuarios
