<template>

  <img :src="img" alt="" class="bot-bg">
</template>

<script>

export default {
    name: 'Bot Page',
    data() {
        return {
            img: 'https://firebasestorage.googleapis.com/v0/b/ami-finance-45e0f.appspot.com/o/BotPage%2Fmain-bg.png?alt=media&token=0769f7ee-b0a9-459e-a888-65fe17f11daa'
        }
    }
}

</script>

<style lang="scss" scoped>

.bot-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
}

</style>