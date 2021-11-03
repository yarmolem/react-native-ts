import { useContext } from 'react'
import Layout from '../components/Layout'
import Alert from '../components/shared/Alert'
import Button from '../components/shared/Button'
import { AuthContext } from '../context/AuthState'

import { sleep } from '../utils/sleep'

const Login = () => {
  const { isLoading, name, token, ...actions } = useContext(AuthContext)

  const handleLogin = async () => {
    actions.loadingAction(true)
    await sleep(3000)
    actions.loginAction({
      name: 'Cristian',
      username: 'Yarmo',
      token: +new Date()
    })
    actions.loadingAction(false)
  }

  if (isLoading) {
    return (
      <Layout title="Login">
        <Alert variants="info" title="Verificando ..." />
      </Layout>
    )
  }

  return (
    <Layout title="Login">
      {token ? (
        <>
          <Alert title={`Autenticado como: ${name}`} />
          <Button
            onClick={actions.logoutAction}
            colorSchema="red"
            variants="outline"
          >
            LOGOUT
          </Button>
        </>
      ) : (
        <>
          <Alert variants="danger" title="No Autenticado" />
          <Button onClick={handleLogin}>LOGIN</Button>
        </>
      )}
    </Layout>
  )
}

export default Login
