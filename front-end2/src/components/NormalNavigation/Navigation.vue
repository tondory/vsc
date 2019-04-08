
<template>
  <section>
    <div class="hero-head">
      <div class="columns is-mobile is-marginless heading">
        <!-- Left column -->
        <div class="column center">
          <h1 class="subtitle"><router-link class="nav_items_children" to="/">Budgetcat</router-link></h1>
          <!-- <div class="navbar-item" > <img style="max-height: 5rem;" src="http://logo.pizza/img/happy-cat/happy-cat-features.png" width="112" height="112"></div> -->
        </div>

        <!-- middle column -->
        <div class="column is-three-fifths center desktop">
          <p>
            <router-link class="spacing" v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`">{{routes.text}}</router-link>
          </p>
        </div>

        <!-- Right column -->
        <div class="column right">
          <h2>
            <router-link class="spacing" v-for="routes in registration"
            v-bind:key="routes.id"
            :to="`${routes.page}`">{{routes.text}}</router-link>
          </h2>
        </div>
      </div>
    </div>
    </section>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      registration: 
      [
        {
          id:1,
          text: 'Sign up',
          page: '/Signup'
        },
        {
          id:2,
          text: 'Sign in',
          page: '/Signin'
        },
      ],
      links: [
        {
          id: 1,
          text: 'About',
          page: '/About'
        },
        {
          id: 2,
          text: 'What Is Budgetting?',
          page: '/Whatis'
        },
        {
          id: 3,
          text: 'Get started',
          page: '/GetStarted'
        },
        {
          id: 4,
          text: 'Fun',
          page: '/Fun'
        }
      ]
    }
  }
}
</script>

<style scoped>
h2 {
    color: brown;
}

  .spacing {
    margin: 0 2% 0 0;
    padding: 1%;
    font-size: 16px;
  }
.center, .center-column, .top, .right, .bottom, .left {
display: flex;
justify-content: center;
align-items: center;
}
.center-column {
  flex-direction: column;
}
.top    {align-items:     flex-start; }
.right  {justify-content: flex-end;   }
.bottom {align-items:     flex-end;   }
.left   {justify-content: flex-start; }

.single-spaced, .single-spaced * {
    line-height: 1;
}
@media (max-width: 1024px) {
.desktop {
display: none;}
}
</style>
