const appInstance = {
  data(){
      return {
            isOn:true
      };
  },
  methods: {
     bulbSwitch(){
        this.isOn=!this.isOn
        // if (this.isOn==true) {
        //     this.isOn=true
        // }
        // else{
        //     this.isOn=false
        // }
     }
}
}

Vue.createApp(appInstance).mount('#app')