// @ts-ignore
export default defineNuxtConfig({
  app: {
    head: {
      title: "Welcome to Maraboo",
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
          href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Lato:wght@400;700;900&family=Open+Sans:wght@400&display=swap",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          type: "image/x-icon",
          href: "/apple-touch-icon.png",
        },
        { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", href: "/favicon-16x16.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#011627" },
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
    locales: [
      { code: "en", file: "en.json" },
      { code: "fr", file: "fr.json" },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    precompile: {
      strictMessage: false,
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_API_BASE_URL,
    },
  },
});
