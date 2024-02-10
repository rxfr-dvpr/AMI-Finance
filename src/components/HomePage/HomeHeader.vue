<template>
  <header class="header">
    <div class="container">
      <div class="row">

        <div class="header__top">
          <p class="header__top-txt all-txt">Цифровая платформа сохранения и приумножения активов</p>

          <div class="header__top-links">
            <a :href="link.url" class="header__top-links-item" target="_blank"
            v-for="(link, idx) in links" :key="idx" v-html="link.icon"></a>
          </div>
        </div>

        <h1 class="header-title">
          <span class="yellow-clr">ami</span>
          finance
        </h1>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Home Header',
  data() {
    return {
      links: [
        {
          icon: '<i class="fab fa-telegram-plane"></i>',
          url: 'https://t.me/redfox4ever'
        },
        {
          icon: '<i class="fas fa-envelope"></i>',
          url: 'mailto:saidaliyev.avazbek14@gmail.com'
        },
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

.header {
  max-width: 1600px;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 70px 0;

  .row {
    flex-direction: column;
    justify-content: space-between;
  }

  &__top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-txt {
      max-width: 145px;
      width: 100%;
    }

    &-links {
      max-width: max-content;
      width: 100%;
      display: flex;
      gap: 10px;

      &-item {
        width: 50px;
        height: 50px;
        display: grid;
        place-items: center;
        border: solid 2px rgba($color: #fff, $alpha: .1);
        font-size: 17px;
        transition: .3s;

        &:hover {
          border-color: var(--main-yellow);
        }
      }
    }
  }
  
  &-title {
    max-width: max-content;
    width: 100%;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: calc(27px + 43 * (100vw / 1920));;
    text-transform: uppercase;
    font-weight: 400;
    font-family: var(--title-font) !important;

    .yellow-clr {
      font-family: var(--title-font) !important;
    }
  }
}

@media (min-width: 1920px) {
  .header-title {
    font-size: 70px !important;
  }
}

</style>