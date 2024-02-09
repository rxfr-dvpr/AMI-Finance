<template>
  <header class="header">
    <div class="container">
      <div class="row">
          
      </div>
    </div>

    <img src="@/assets/images/header-bg.png" alt="" class="header-bg">
  </header>
</template>

<script>

export default {
  name: 'Home Header'
}

</script>

<style lang="scss" scoped>

.header {
  width: 100%;
  min-height: 100vh;
  position: relative;

  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}

</style>