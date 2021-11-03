import { AuthStateValues } from './AuthState'

interface LoginPayload {
  name: string
  token: number
  username: string
}

type AuthReducerAction =
  | { type: 'LOGOUT' }
  | { type: 'LOGIN'; payload: LoginPayload }
  | { type: 'SET_LOADING'; payload: boolean }

export const AuthReducer = (
  state: AuthStateValues,
  action: AuthReducerAction
): AuthStateValues => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }

    case 'LOGIN':
      return {
        ...state,
        name: action.payload.name,
        token: action.payload.token,
        username: action.payload.username
      }

    case 'LOGOUT':
      return {
        name: '',
        token: null,
        username: '',
        isLoading: false
      }

    default:
      return state
  }
}
