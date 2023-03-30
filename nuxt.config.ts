export default defineNuxtConfig({
  app: {
    head: {
      title: "Welcome to MaraBoo",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;800&family=Lato:wght@400;700;900&family=Open+Sans:wght@400&display=swap",
        },
      ],
    },
  },
  components: [
    {
      path: "~/components/calculator",
      global: true,
    },
    {
      path: "~/components/global",
      global: true,
      prefix: "Global",
    },
    "~/components",
  ],
  ssr: false,
  pages: true,
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss"],
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    vueI18n: {
      legacy: false,
      locale: "en",
      messages: {
        en: {
          welcome: "Welcome",
        },
        fr: {
          welcome: "Bienvenue",
        },
      },
    },
  },
  tailwindcss: {
    viewer: true,
  },
});
