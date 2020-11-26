<template>
    <v-row justify="center">
    <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Scan
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="640"
    >
       <QrCodeScan :tutoria="tutoria"/>
    </v-dialog>
  </v-row>
</template>

<script>
import QrCodeScan from '../components/qrcodeScan'
export default {
  props: {
    tutoria: {}
  },
    components: {
        QrCodeScan
    },
    data () {
      return {
        dialog: false,
      }
    },
}
</script>

<style>

</style>