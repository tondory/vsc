<template>
  <body>
    <section class="hero is-large">
      <div class="hero-body has-background-">
        <div class="container has-text-centered transparent">
          <div class="columns is-vcentered">

            <div class="column">
              <figure class="image is-2by2">
                <img class="img" src=" https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/make_it_rain_iwk4.svg">
              </figure>
            </div>

            <div class="column is-5" >
              <h1 class="title is-2">
               Ever felt unsure about a purchase?
              </h1>
              <h1 class="subtitle" style="padding-top: 1%">
                Let your budget decide it!
              </h1>
            </div>

          </div>
        </div>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered transparent"  style="padding-top: 5%">
          <div class="columns is-vcentered ">

            <div class="column is-5">
              <h2 class="title">
                Decide where each penny goes.
              </h2>
            </div>

            <div class="column">
              <figure class="image is-2by2">
                <img class="img" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/journey_lwlj.svg">
              </figure>
            </div>
          </div>
        </div>

        <div class="container has-text-centered transparent" style="padding-top: 5%">
          <div class="columns is-mobile  is-vcentered ">
            <div class="column">
                
            </div>

            <div class="column">

            </div>

            <div class="column">
              
            </div>
          </div>
        </div>

      </div>      
    </section> 
  </body>
</template>

<script>
export default {
  name: 'Home',
    data () {
      return {
            dashboard: false
      }}
    }

</script>

<style scoped>
.transparent {
  opacity: 0.36;
}

.transparent:hover {
  opacity: 0.9;
}

.discordlink {
  color: rgb(95, 89, 89);
  text-decoration: underline
}

.hero.is-large .hero-body {
    padding-bottom: 1rem;
    padding-top: 1rem;
}

.hero1 {
  background-image: url(https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg); 
  background-size: cover;
  background-position: center center;
  background-repeat:  no-repeat;
  /* 50vh = 50% viewport*/
  height: 70vh;
  
}
@media (max-width: 1024px) { .hero1 { background: url(http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg) center / cover; } }
@media (max-width:  768px) { .hero1 { background: url(http://www.catster.com/wp-content/uploads/2017/11/Angry-cat-growling-or-hissing-ears-back.jpg) center / cover; } } 
</style>





