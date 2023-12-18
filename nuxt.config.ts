// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    imports: {
        dirs: [
          // Scan top-level modules
          'composables/**',]
        },
    modules: [
        '@vueuse/nuxt',
        '@nuxt/content',
        'usebootstrap',
        'nuxt-icon',
        "@nuxt/image"
    ],
    app: {
        head: {
            title: '財務会計アプリ(デモ)',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
        },
    },
    css: [
        "bootstrap/scss/bootstrap.scss"
    ],
    vite: {
        server: {
            watch: {
                usePolling: true
            }
        },
    }
})