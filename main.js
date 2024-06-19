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
    debugMount() {
        this.debugging = "vueApp mounted";
    }
  }
}).mount('#app')