// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxt/content',
        'usebootstrap',
        'nuxt-icon'
    ],
    css: [
        "bootstrap/scss/bootstrap.scss"
    ]
})
