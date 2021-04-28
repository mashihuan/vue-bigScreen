<template>
  <div id="app">
    <!-- <div class="map">
      <div class="map1" />
      <div class="map2" />
      <div class="map3" />
    </div> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  position: relative;
  min-height: 100vh;
  font-size: 14PX;
  line-height: 1.15;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background: url('./assets/img/body_bg.jpg') no-repeat center center / cover;
  .map {
    position: absolute;
    top: 50%;
    left: 50%;
    /* width: 600px; */
    width: 3.125rem;
    height: 3.125rem;
    transform: translate(-50%, -35%);
    overflow: hidden;
    .map1 {
      position: absolute;
      top: 10%;
      left: 10%;
      width: 80%;
      height: 80%;
      background: url('./assets/img/map.png') no-repeat center center / 100% 100%;
      opacity: 0.3;
    }
    .map2 {
      position: absolute;
      width: 100%;
      height: 100%;
      background: url('./assets/img/lbx.png') no-repeat center center / 100% 100%;
      animation: rotate1 10s linear infinite;
    }
    .map3 {
      position: absolute;
      top: 6%;
      left: 6%;
      width: 88%;
      height: 88%;
      background: url('./assets/img/jt.png') no-repeat center center / 100% 100%;
      animation: rotate2 10s linear infinite;
    }
  }
}

@keyframes rotate1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotate2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@media screen and (max-width: 1024px) {
  html {
    font-size: 100PX !important;
  }
}
</style>
