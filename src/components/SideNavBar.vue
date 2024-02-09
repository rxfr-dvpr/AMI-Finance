<template>
  <nav class="sidenav">
    <ul class="nav__list">
      <li class="nav__list-item" v-for="(link, idx) in store.navList" :key="idx">
        <router-link :to="link.url" class="nav__list-link">
          <span class="link-icon" v-html="link.icon"></span>
          {{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { navStore } from "@/stores/navStore.js";

export default {
  name: 'Navigation',
  data() {
    return {
      store: navStore()
    }
  }
}

</script>

<style lang="scss" scoped>

.sidenav {
  max-width: 320px;
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  right: 0;

  .nav__list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    &-item {
      max-width: 160px;
      width: 100%;
    }

    li:nth-child(odd) {
      border-right: 1px solid rgba($color: #fff, $alpha: .3);
      border-left: 1px solid rgba($color: #fff, $alpha: .3);
    }

    &-link {
      width: 100%;
      padding: 40px 0;
      border-bottom: 2px solid rgba($color: #fff, $alpha: .3);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;
      text-align: center;
      font-size: 22px;
      font-weight: 100;
      transition: .3s;
      text-transform: uppercase;

      &:hover {
        background: rgba($color: #fff, $alpha: .05);
      }

      &.router-link-exact-active {
        background: rgba($color: #fff, $alpha: .05);
      }
    }

    li:last-of-type {
      max-width: 100% !important;
      .nav__list-link {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
    }
  }
}

</style>