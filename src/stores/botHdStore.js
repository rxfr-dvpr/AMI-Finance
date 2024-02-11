import { defineStore } from "pinia";

export const botHdStore = defineStore('Bot Header Store', {
    state: () =>({
        title: 'торговый бот ami finance',
        txt: 'Управление вашими активами искусственным интеллектом',
        img: 'https://firebasestorage.googleapis.com/v0/b/ami-finance-45e0f.appspot.com/o/BotPage%2Fbot-header.png?alt=media&token=ac26e930-28c0-4fb1-a2a9-1f39772ca3ed'
    })
})