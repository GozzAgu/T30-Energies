export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  sitemap: {
    hostname: 'https://www.t30energies.com',
    routes: ['/about', '/contact']
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://www.t30energies.com/sitemap.xml'
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300..700&display=swap' },
      ]
    }
  },
  modules: ['@nuxt/icon', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})