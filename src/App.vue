<template>
  <div class="main-app">
    <router-view/>
  </div>

  <SideNavBar/>
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
  max-width: 1560px;
  width: 100%;
}

</style>