import service from '../../service/auth'
export default {
  loadLoggedUser( { commit }) {
    try {
      const loggedUser = JSON.parse(localStorage.getItem('user-tutoria'))

      if(loggedUser)
        commit('setLoggedUser', loggedUser)
    } catch (error) {
      console.log(`store/user/actions->loadLoggedUser():<<${error}>>`)
    }
  },
  async chargeLoginUser( { commit }, payload) {
    try {
      const user = await service.logar(payload)

      if(user)
        commit("setLoggedUser", user)
      
    } catch (error) {
      console.log(`store/user/actions->chargeLoginUser():<<${error}>>`)
      throw error
    }
  },
  async registerUser({ commit }, payload) {
    try {
       await service.registrar(payload)
       commit

    } catch (error) {
      console.log(`store/user/actions->chargeLoginUser():<<${error}>>`)
      throw error
    }
  },
  async forgotPasswordUser({ commit }, payload) {
    try {
       await service.forgotPassword(payload)
       commit

    } catch (error) {
      console.log(`store/user/actions->chargeLoginUser():<<${error}>>`)
      throw error
    }
  },
  async resetPasswordUser({ commit }, payload) {
    try {
      await service.resetPassword(payload)
      commit

   } catch (error) {
     console.log(`store/user/actions->chargeLoginUser():<<${error}>>`)
     throw error
   }
  }
}