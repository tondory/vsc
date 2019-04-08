<template>
  <body>
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-centered">

              <div class="column is-one-quarter">
                <h3>
                  Blank
                </h3>
              </div>
              <div class="column is-one-quarter has-background-warning"></div>
              <div class="column is-one-quarter has-background-danger"></div>

              <div class="o"> <p>hey tondy </p></div>
          
        </div>
        </div>
      </div> 
    </section>
     </body>
</template>

<script>
export default {
  name: 'About',
    data () {
      return {
        companyName: 'Budgetcat',
        creator1: 'Tondy',
        creator2: 'Financefox'
    }}
}
</script>

<style scoped>
.o {
  cursor: pointer;
  background: red;
  height: 100px;
  width: 100px;
}

.o:hover {width: 200px;}
</style>
