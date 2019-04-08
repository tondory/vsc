<template>
  <body>
    <section class="hero">
      <div class="hero-body">
          <div>
              <h2>
                  Do you have a steady income?
                  <input type="checkbox" id="checkbox" v-model="steadyIncome">
                {{steadyIncome}}
              </h2>
              <h2>
                Are you a student?
               <input type="checkbox" id="checkbox" v-model="student">
               {{student}}
              </h2>
              <!-- if student no then monthly expenses (gas internet bills etc) -->
              <h2>

              </h2>
          </div>
      </div> 
    </section>
     </body>
</template>

<script>
export default {
  name: 'Setup',
    data () {
      return {
          steadyIncome: null,
          student: null
    }}
}
</script>

<style scoped>

</style>
