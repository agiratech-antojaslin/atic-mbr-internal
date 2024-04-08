import store from 'store/store'

export const clearStore = () => {
  store.dispatch({ type: 'LOGOUT' })
}
