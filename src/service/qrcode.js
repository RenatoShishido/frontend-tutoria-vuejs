import AXIOS_INSTANCE from "./config";

class QrcodeService {
  static async qrcodeUpdate(content) {
    try {
      const response = await AXIOS_INSTANCE.put(`qrcode/${content._id}`,content);

      return response.data.tutorias;
    } catch (err) {
      throw err.response.data;
    }
  }
}

export default QrcodeService;
