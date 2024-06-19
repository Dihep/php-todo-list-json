const { createApp } = Vue

createApp({


  data() {
    return {
    debugging: "",
    compiti: ""
    }
  },


  methods: {

  },


  mounted() {
    (this.debugging = "vueApp mounted");
    axios.get("api.php").then(results => {
        console.log("Chiamata partita. Risposta: ", results);
        this.compiti = results.data;
        console.log(this.compiti);
    })
  }
}).mount('#vueApp')