// @ts-ignore
export default defineNuxtConfig({
  app: {
    head: {
      title: "Welcome to Maraboo",
      meta: [
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1.0",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap",
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
  css: ["~/assets/css/tailwind.css", "vue-final-modal/style.css"],
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
  devServer: {
    port: 8080,
  },
  runtimeConfig: {
    public: {
      baseUrl: "",
    },
  },
});
