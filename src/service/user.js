import AXIOS_INSTANCE from "./config";

class UserService {
  static async listarUser() {
    try {
      const response = await AXIOS_INSTANCE.get("users");

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }
  static async listarUserId(id) {
    try {
      const response = await AXIOS_INSTANCE.get(`users/perfil/${id}`);

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }
  static async updateUser(id, content) {
    try {
      const response = await AXIOS_INSTANCE.put(`users/update/${id}`, content);

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }
  static async removeUser(id) {
    try {
      const response = await AXIOS_INSTANCE.delete(`users/remove/${id}`);

      return response.data;
    } catch (err) {
      throw err.response.data;
    }
  }
}


export default UserService;