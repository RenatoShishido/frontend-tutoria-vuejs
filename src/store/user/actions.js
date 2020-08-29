import service from '../../service/auth'
export default {
  loadLoggedUser( { commit }) {
    try {
      const loggedUser = JSON.parse(localStorage.getItem('user-tutoria'))

      if(loggedUser)
        commit('setLoggedUser', loggedUser)
    } catch (error) {

      throw {
        error: error,
        message: `store/user/actions->loadLoggedUser():<<${error}>>`
      } 
    }
  },
  async chargeLoginUser( { commit }, payload) {
    try {
      const user = await service.logar(payload)

      if(user)
        commit("setLoggedUser", user)
      
    } catch (error) {
      throw {
        error: error,
        message: `store/user/actions->chargeLoginUser():<<${error}>>`
      }
    }
  },
  async registerUser({ commit }, payload) {
    try {
       await service.registrar(payload)
       commit

    } catch (error) {
      throw {
        error: error,
        message: `store/user/actions->registerUser():<<${error}>>`
      }
    }
  },
  async forgotPasswordUser({ commit }, payload) {
    try {
       await service.forgotPassword(payload)
       commit

    } catch (error) {
      throw {
        error: error,
        message: `store/user/actions->forgotPasswordUser():<<${error}>>`
      }
    }
  },
  async resetPasswordUser({ commit }, payload) {
    try {
      await service.resetPassword(payload)
      commit

   } catch (error) {
    throw {
      error: error,
      message: `store/user/actions->resetPasswordUser():<<${error}>>`
    }
   }
  },
  logoutUser({ commit }) {
    try {
      commit('loggout')

   } catch (error) {
    throw {
      error: error,
      message: `store/user/actions->logoutUser():<<${error}>>`
    }
   }
  }
}