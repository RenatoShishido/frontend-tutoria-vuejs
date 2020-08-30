import AXIOS_INSTANCE from '../../service/config'
export default {
  setLoggedUser(state, payload) {
    state.nome = payload.user.nome
    state.email = payload.user.email
    state._id = payload.user._id
    state.profile = payload.user.profile
    state.rga = payload.user.rga
    state.admin = payload.user.admin
    state.data = payload.user.data
    AXIOS_INSTANCE.defaults.headers['x-access-token'] = payload.token
    localStorage.setItem('user-tutoria', JSON.stringify(payload))
  },

  perfilLoggedUser(state, payload) {
    state.nome = payload.nome
    state.profile = payload.profile
    state.rga = payload.rga
    state.telefone = payload.telefone
  },

  loggout(state) {
    state.nome = ''
    state.rga = ''
    state.email = ''
    state.data = ''
    state._id = ''
    state.profile = ''
    state.admin = ''
    AXIOS_INSTANCE.defaults.headers['x-acess-token'] = ''
    localStorage.removeItem('user-tutoria')
  },
}