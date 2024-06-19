const { createApp } = Vue

createApp({


  data() {
    return {
    debugging: ""
    }
  },


  methods: {

  },


  mounted() {
    (this.debugging = "vueApp mounted")
  }
}).mount('#vueApp')