import categories from "./posts/categories"
export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            categories: categories
        }
    }
})