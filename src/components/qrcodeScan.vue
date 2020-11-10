<template>
  <video id="preview"></video>
</template>

<script>
export default {
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
    self.scanner.addListener("scan", function (content) {
      self.scans.unshift({ date: +Date.now(), content: content });
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