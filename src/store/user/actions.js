import service from '../../service/auth'
import service_tutoria from '../../service/tutorias'
export default {
  async alterLoggedUser({
    commit
  }, payload) {
    try {
      const config = {
        headers: {
          Accept: "",
          "Content-Type": "multipart/form-data"
        }
      };
      const formData = new FormData();
      formData.append("file", payload.file);
      formData.append("nome", payload.nome);
      formData.append("email", payload.email);
      formData.append("rga", payload.rga);
      formData.append("telefone", payload.telefone);
      formData.append("semestre", payload.semestre);

   

      await service_tutoria.updateUser(payload._id, formData, config)
      commit('perfilLoggedUser', payload)

    } catch (error) {

      throw {
        error: error,
        message: `store/user/actions->alterLoggedUser():<<${error}>>`
      }
    }
  },
  loadLoggedUser({
    commit
  }) {
    try {
      const loggedUser = JSON.parse(localStorage.getItem('user-tutoria'))

      if (loggedUser)
        commit('setLoggedUser', loggedUser)
      else
        commit('loggout')
    } catch (error) {

      throw {
        error: error,
        message: `store/user/actions->loadLoggedUser():<<${error}>>`
      }
    }
  },
  async chargeLoginUser({
    commit
  }, payload) {
    try {
      const user = await service.logar(payload)

      if (user)
        commit("setLoggedUser", user)

    } catch (error) {
      throw {
        error: error,
        message: `store/user/actions->chargeLoginUser():<<${error}>>`
      }
    }
  },
  async registerUser({
    commit
  }, payload) {
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
  async forgotPasswordUser({
    commit
  }, payload) {
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
  async resetPasswordUser({
    commit
  }, payload) {
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
  logoutUser({
    commit
  }) {
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