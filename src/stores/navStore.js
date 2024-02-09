import { defineStore } from "pinia";

export const navStore = defineStore('Nav Store', {
    state: () => ({
        navList: [
            {
                name: 'Главная',
                url: '/home',
                icon: '<i class="fas fa-home-alt"></i>'
            },
            {
                name: 'Фонд',
                url: '/fond',
                icon: '<i class="fas fa-chart-pie-alt"></i>'
            },
            {
                name: 'Торговый бот',
                url: '/bot',
                icon: '<i class="fas fa-user-robot"></i>'
            },
            {
                name: 'О нас',
                url: '/about',
                icon: '<i class="fas fa-info-circle"></i>'
            },
            {
                name: 'Новости',
                url: '/news',
                icon: '<i class="fas fa-newspaper"></i>'
            },
            {
                name: 'Отзывы',
                url: '/reviews',
                icon: '<i class="fas fa-heart-circle"></i>'
            },
            {
                name: 'FAQ',
                url: '/faq',
                icon: '<i class="fas fa-question-circle"></i>'
            },
            {
                name: 'Контакты',
                url: '/contact',
                icon: '<i class="fas fa-phone-office"></i>'
            },
            {
                name: 'Личный кабинет',
                url: '/admin',
                icon: '<i class="fas fa-user-circle"></i>'
            }
        ]
    })
})