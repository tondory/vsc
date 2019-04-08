<template>
  <body>
    <section class="hero is-fullheight" >
      <div class="hero-body">
        <div class="container">
          <div class="columns ">
            <div class="column is-6" >
              <div class="notification is-success " style="padding: 5px; width: 300px; margin: auto;">
                <h1 class="title has-text-black-ter text-align-center">
                 What is cat? </h1>
              </div>
              <div class="notification firstPar">
                    <p class="text-align-left" style="padding: 5%">
                      Many people think of budgeting as its only for poor people, so they try to avoid it because they don't want to feel that way.<br>
                      We have searched a long time for a good definition and we believe it is using money in a responable and efficient manner.
                      It means you take choices with what happens with your money before you actually are on the edge of spending. <br>
                      Budgeting is very important to maintain a healthy finance! <br>
                      Anyone budgets even children! <br>
                      When a child gets some money from its parents it will choose (for example) to spend that money on candy, or save it for later.
                     <br> Budgeting makes it easier for people with incomes and expenses of all sizes to make conscious decisions about how they’d prefer to allocate their money. It can also help people to save for what they've always wanted!
                    </p>
              </div>
              </div>  
            <div class="column is-5 is-offset-1 is-vcentered has-image-centered">
              <figure class="image is4by3" >
                <img src="https://i.chzbgr.com/full/9112752128/h94C6655E/">
                <p> cat </p>
              </figure>
            </div>
          </div>
        </div>
       </div>
      </section>
    <section>
      <div>
        <div>

        </div>
      </div>
    </section>
  </body>
</template>

<script>
export default {
  name: 'Whatis',
    data () {
      return {
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  text-align: center;
}
.text-align-left {
  text-align: left;
}
h1 {
  margin: 3% 0 1.5% 0;
  font-size: 20pt;
}
img {
  margin: 4% 0 2% 0;
}
h2 a{
  padding: 5%;
}
h4 {
  margin: 2% 0% -1% 0%;
  font-size: 14pt;
}
.firstPar {
  font-size: 100%;
  margin-top: 3%;
}

.has-image-centered {
  margin: auto;
}
</style>
