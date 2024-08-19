<template>
  <div>
    <SplashScreenVue v-if="isLoading"></SplashScreenVue>
    <MainVue v-else></MainVue>
  </div>
</template>

<script>
import SplashScreenVue from './components/SplashScreenVue.vue'
import MainVue from './components/pages/MainVue.vue'


export default {
  name: 'App',
  components: {
    MainVue,
    SplashScreenVue
  },
  data(){
    return {
      isLoading: true
    }
  }
}
</script>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap";

button.prev-btn,
button.next-btn,
button.submit-btn {
    font-size: 17px;
    font-weight: bold;
    position: relative;
    width: 130px;
    height: 50px;
    background: #FFF;
    margin: 0 auto;
    margin-top: 40px;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
    transition: color .3s;
    text-align: center;
    color: #2ba5f6;
    border: 0;
    -webkit-border-bottom-right-radius: 5px;
    -webkit-border-bottom-left-radius: 5px;
    -moz-border-radius-bottomright: 5px;
    -moz-border-radius-bottomleft: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
 
button.prev-btn:after,
button.next-btn:after,
button.submit-btn:after {
    position: absolute;
    top: 90%;
    left: 0;
    width: 100%;
    height: 100%;
    background: #021c2d;
    color: #FFF;
    content: "";
    z-index: -2;
    transition: transform .3s;
}
 
button.prev-btn:hover::after,
button.next-btn:hover::after,
button.submit-btn:hover::after {
    transform: translateY(-80%);
    transition: transform .3s;
    color: #FFF;
}


</style>