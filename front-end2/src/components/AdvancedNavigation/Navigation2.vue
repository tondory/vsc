
<template>
<!-- svgs are images drawn by code based on d (you tell them where to draw) -->
    <div>
    <svg style="display:none;">
      <defs>

        <g id="home">
          <path fill="#90A4AE" d="M42,48H6c-3.3,0-6-2.7-6-6V6c0-3.3,2.7-6,6-6h36c3.3,0,6,2.7,6,6v36C48,45.3,45.3,48,42,48z"/>
          <path fill="#212121" d="M20.8,35.5v-9.6h6.4v9.6h8V22.7H40L24,8.3L8,22.7h4.8v12.8H20.8z"/>
        </g>

        <g id="Dashboard">
          <path fill="#90A4AE" d="M22.9,20.1h-1.5l-0.5-0.5c1.8-2.1,2.9-4.8,2.9-7.7C23.8,5.3,18.5,0,11.9,0S0,5.3,0,11.9s5.3,11.9,11.9,11.9
          c3,0,5.7-1.1,7.7-2.9l0.5,0.5v1.4l9.1,9.1l2.7-2.7L22.9,20.1z M11.9,20.1c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2
          S16.4,20.1,11.9,20.1z"/>
        </g>

        <g id="map">
          <path fill="#90A4AE" d="M16,14.2c-1,0-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8c1,0,1.8-0.8,1.8-1.8S17,14.2,16,14.2z M16,0
          C7.2,0,0,7.2,0,16c0,8.8,7.2,16,16,16s16-7.2,16-16C32,7.2,24.8,0,16,0z M19.5,19.5L6.4,25.6l6.1-13.1l13.1-6.1L19.5,19.5z"/>
        </g>

        <g id="planner">
          <path fill="#90A4AE" d="M28.4,3.6h-1.8V0h-3.6v3.6H8.9V0H5.3v3.6H3.6C1.6,3.6,0,5.1,0,7.1L0,32c0,2,1.6,3.6,3.6,3.6h24.9c2,0,3.6-1.6,3.6-3.6V7.1C32,5.1,30.4,3.6,28.4,3.6z M28.4,32H3.6V12.4h24.9V32z M7.1,16H16v8.9H7.1V16z"/>
        </g>

      </defs>
    </svg>

 
    <div>
      <nav class="nav_cont">
        <ul class="nav">

          <li class="nav_items ">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <use xlink:href="#home"></use>
            </svg>
            
            <router-link class="nav_items_children" to="/">Home</router-link>
            
            </div>
          </li>
          
          <li class="nav_items ">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <use xlink:href="#Dashboard"></use>
            </svg>
            <router-link class="nav_items_children" to="/Dashboard">Dashboard</router-link>
            </div>
          </li>
            
          <li class="nav_items ">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <use xlink:href="#map"></use>
            </svg>
            <router-link class="nav_items_children" to="/Setup">Setup</router-link>
          </div>
          </li>
            
          <li class="nav_items">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 35.6">
              <use xlink:href="#planner"></use></svg>
            <a class="nav_items_children" href="">Planner</a>
            </div>
          </li>
          
        </ul>
      </nav>
    </div>
    </div>
</template>
https://codepen.io/vincebrown/pen/yyLNPR

<script>

export default {
  name: 'Navigation2',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.nav_cont {
  /* this is the flickering bug delete hover for 'fix' */
  position: fixed;
  width: 60px;
  top:0;
  height: 100vh;
  z-index: 100;
  background-color: #202020;
  overflow:hidden;
  transition:width .3s ease;
  cursor:pointer;
  box-shadow:4px 7px 10px rgba(0,0,0,.4);}

  @media screen and (min-width: 600px) {
    width: 80px;
  }

.nav {
  list-style-type: none;
  color:white; }
   :first-child {
    padding-top:0%;
  }


.nav_items {
  padding-bottom:4rem;
  font-family: 'roboto';
  margin-left: 0%
}

.nav_cont:hover {
  width: 150px;
}

/* for big icons add padding below */
.nav_items_children {
    position: relative;
    display: block;
    top:-35px;
    transition:all .3s ease;
    margin-left:25px;
    margin-right:10px;
    text-decoration: none;
    color: white;
    font-family: 'roboto';
    font-weight: 100;
    font-size: 1.35em;
   }
     :after { 
       /* This is the color behind the text */
       content:'';
       width: 100%;
       height: 100%;
       position: absolute;
       top:0;
       left:0;
       border-radius:2px;
       background:radial-gradient(circle at 94.02% 88.03%, #54a4ff, transparent 100%);
       opacity:0;
       transition:all .5s ease;
       z-index: -10;
     }
  :hover a:after {
    opacity:1;
  }
   svg{
     /* This makes the text & icons smaller */
    width:26px;
    height:26px;
    position: relative;
    right: 30%;
    cursor:pointer;
    @media screen and(min-width:600px) {+
      width:32px;
      height:32px;
     left:-15px;
    }
  }

</style>
