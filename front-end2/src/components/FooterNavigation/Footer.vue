<template>
  <footer class="marginTop">
    <nav>
      <div class="has-background-grey-darker has-text-grey-lighter" style="width: 100%;"> 
         <div class="columns">
           <div class="column has-text-white">
            <h4>
            © 2019 Budgetcat. <br>  All rights reserved
            </h4>
           </div>
          <div class="column">
            <h3>Something</h3>
            <a href=""></a>
          </div>
          <div class="column">
            <h3>Contact</h3>
            <a href="">Twitter</a>
            <br>
            <a href="">Discord</a>
            <a href=""></a>
          </div>
          <div class="column">
            <h3>Legal</h3> 
            <router-link to="/TOS">TOS</router-link>
            <br>
            <router-link to="/FAQ">FAQ</router-link>
            <br>
            <router-link to="/Privacy">Privacy</router-link>
          </div>
           <div class="column">
            
           </div>
          </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.marginTop {
  margin-top: 0%
}
h3 {

}
h4 {
  font-size: 13px;
}
</style>
