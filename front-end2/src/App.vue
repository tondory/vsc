<template>
      <div id="app">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
          
          <div v-if="navbool==true"> <Navigation></Navigation> </div>
          
          <button v-if="navbool==true" @click="navboolfalse()">Explosion</button>
          <button v-if="navbool==false" @click="navbooltrue()">Explosion</button>
           
          <router-view class="background"></router-view>

          <div v-if="navbool==false"> <Navigation2> </Navigation2> </div>

        <Footer></Footer>

        </div>
</template>


<script>
import Navigation from './components/NormalNavigation/Navigation'
import Footer from './components/FooterNavigation/Footer'
import Navigation2 from './components/AdvancedNavigation/Navigation2'


export default {
  name: 'App',
    components: {
    'Navigation': Navigation,
    'Footer': Footer,
    'Navigation2': Navigation2
  },
    data () 
    {
      return {
          navbool: false
        }
    },
  methods: 
        {
          navboolfalse: function () {
          this.navbool = false
        },
          navbooltrue: function () {
          this.navbool = true
        },
  }}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0%;
}

.background {
  background: radial-gradient(circle at 94.02% 88.03%, #54a4ff, transparent 100%),radial-gradient(circle at 25.99% 27.79%, #ff94fb, transparent 100%),radial-gradient(circle at 50% 50%, #000000, #000000 100%);
}

</style>
