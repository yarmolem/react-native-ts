import * as React from 'react'
import { sleep } from '../utils/sleep'
import { AuthReducer } from './AuthReducer'

interface AuthStateProps {
  children: React.ReactNode
}

export interface AuthStateValues {
  name: string
  username: string
  isLoading: boolean
  token: number | null
}

interface AuthContextValues extends AuthStateValues {
  logoutAction: () => void
  loadingAction: (b: boolean) => void
  loginAction: (p: LoginProps) => void
}

interface LoginProps {
  name: string
  token: number
  username: string
}

const initialState: AuthStateValues = {
  name: '',
  token: null,
  username: '',
  isLoading: true
}

export const AuthContext = React.createContext({} as AuthContextValues)

const AuthState = ({ children }: AuthStateProps) => {
  const [state, dispatch] = React.useReducer(AuthReducer, initialState)

  const loadingAction = React.useCallback((b: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: b })
  }, [])

  const loginAction = React.useCallback((payload: LoginProps) => {
    dispatch({ type: 'LOGIN', payload })
  }, [])

  const logoutAction = React.useCallback(() => dispatch({ type: 'LOGOUT' }), [])

  const init = React.useCallback(async () => {
    await sleep(2000)
    logoutAction()
  }, [logoutAction])

  React.useEffect(() => {
    init()
  }, [init])

  return (
    <AuthContext.Provider
      value={{ ...state, loginAction, logoutAction, loadingAction }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
