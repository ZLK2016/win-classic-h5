<template>
  <div class="home" oncontextmenu="return false;">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Desktop/>
    <TaskBar/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TaskBar from '@/components/taskbar.vue';
import Desktop from '@/components/desktop.vue';
export default {
  name: 'Home',
  components: {
    // HelloWorld,
    TaskBar,
    Desktop,
  }
}
</script>

<style scoped>
  .home{width:100%;height:100%;}
  .home{display:flex;flex-direction:column;}
  .taskbar{flex:none;}
</style>