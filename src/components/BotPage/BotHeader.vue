<template>
  <header class="bot__header">
    <div class="container">
        <div class="row">
            <div class="bot__header-top">
                <div class="header__descr">
                    <h1 class="header__descr-title all-title">{{ store.title }}</h1>
                    <p class="header__descr-txt">{{ store.txt  }}</p>
                </div>
            </div>

            <img :src="store.img" alt="" class="bot__header-img">
        </div>
    </div>
  </header>
</template>

<script>
import { botHdStore } from "@/stores/botHdStore.js";

export default {
    name: 'Bot Page Header',
    data() {
        return {
            store: botHdStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.bot__header {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 70px 0;
    overflow: hidden;

    .row {
        flex-direction: column;
        justify-content: space-between;
    }

    &-img {
        max-width: 800px;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 55%;
        transform: translate(-50%, -50%);
    }

    &-top {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .header__descr {
            max-width: 315px;
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    }
}

</style>