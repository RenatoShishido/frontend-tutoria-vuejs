<template>
  <video id="preview"></video>
</template>

<script>
import qrcodeService from "../service/qrcode"
export default {
  props: {
    tutoria: {}
  },
  data: function () {
    return {
      scanner: null,
      activeCameraId: null,
      cameras: [],
      scans: [],
    };
  },
  mounted: function () {
    var self = this;

    // eslint-disable-next-line no-undef
    self.scanner = new Instascan.Scanner({
      video: document.getElementById("preview"),
      scanPeriod: 5,
    });
    self.scanner.addListener("scan", async (content) => {
      self.scans.unshift({ date: +Date.now(), content: content });
      const valido = {
        data_ini: this.tutoria.data,
        data_fim: new Date(),
        valido: true,
      }
      this.tutoria.qrcode_valido = valido
      try {
        return await qrcodeService
        .qrcodeUpdate(this.tutoria)

      } catch (error) {
       console.log(error);
      }
      
    });
    // eslint-disable-next-line no-undef
    Instascan.Camera.getCameras()
      .then(function (cameras) {
        self.cameras = cameras;
        if (cameras.length > 0) {
          self.activeCameraId = cameras[0];
          self.scanner.start(cameras[0]);
        } else {
          console.error("No cameras found.");
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  methods: {},
};
</script>

<style>
</style>