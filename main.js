const { createApp } = Vue

createApp({


  data() {
    return {
    debugging: "",
    compiti: ""
    }
  },


  methods: {
    cambiaStato(i) {
      const element = document.querySelector("ul>li:nth-child("+(i+1)+")");
      if (element.classList.contains("daFare")) {
        element.classList.remove("daFare");
        element.classList.add("completato");
      }
      else {
        element.classList.remove("completato");
        element.classList.add("daFare");
      }
    }
  },


  mounted() {
    (this.debugging = "vueApp mounted");
    axios.get("list.php").then(results => {
        console.log("Chiamata partita. Risposta: ", results);
        this.compiti = results.data;
        console.log(this.compiti);
    })
  }
}).mount('#vueApp')