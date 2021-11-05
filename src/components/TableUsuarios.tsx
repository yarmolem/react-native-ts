import { User } from '../interfaces/UserList'
import Table from './shared/Table'

interface TableUsuariosProps {
  users: User[]
}

const TableUsuarios = ({ users = [] }: TableUsuariosProps) => {
  const renderItem = (u: User) => (
    <tr key={`user-${u.id}`}>
      <td className="w-11">
        <img
          src={u.avatar}
          alt={u.first_name}
          className="w-8 h-8 rounded-full"
        />
      </td>
      <td>
        {u.first_name} {u.last_name}
      </td>
      <td>{u.email}</td>
    </tr>
  )

  return (
    <Table>
      <thead>
        <tr>
          <th scope="col">Avatar</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>{users.map(renderItem)}</tbody>
    </Table>
  )
}

export default TableUsuarios
