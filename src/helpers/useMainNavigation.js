import { ref } from "vue";

export function useMainNavigation() {

    const mainMenu = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/instructions',
            name: 'Instructions'
        },
        {
            path: '/search',
            name: 'Search'
        }
    ]

    const showMainMenu = ref(false);

    return {
        mainMenu,
        showMainMenu
    }
}