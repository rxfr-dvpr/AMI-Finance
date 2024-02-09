<template>
  <router-view/>

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
</style>