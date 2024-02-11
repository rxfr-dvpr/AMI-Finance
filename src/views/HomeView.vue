<template>
  <Header/>

  <img :src="img" alt="" class="header-bg">
</template>

<script>
import HomeHeader from '@/components/HomePage/HomeHeader.vue'

export default {
  name: 'Home Page',
  components: {
    Header: HomeHeader
  },
  data() {
    return {
      img: 'https://firebasestorage.googleapis.com/v0/b/ami-finance-45e0f.appspot.com/o/HomePage%2Fheader-bg.png?alt=media&token=c1f79cb8-be72-4be5-8d91-07e441575a95'
    }
  }
}

</script>

<style lang="scss" scoped>

.header-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
}

</style>