<template>
  <Header/>

  <img src="@/assets/images/header-bg.png" alt="" class="header-bg">
</template>

<script>
import HomeHeader from '@/components/HomePage/HomeHeader.vue'

export default {
  name: 'Home Page',
  components: {
    Header: HomeHeader
  }
}

</script>

<style lang="scss" scoped>

.header-bg {
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
}

</style>