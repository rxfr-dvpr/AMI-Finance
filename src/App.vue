<template>
  <div class="main-app">
    <router-view/>

    <SideNavBar/>
  </div>
</template>

<script>
import SideNavBar from './components/SideNavBar.vue'

export default {
  name: 'App',
  components: {
    SideNavBar
  }
}

</script>

<style lang="scss" scoped>

.main-app {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

</style>