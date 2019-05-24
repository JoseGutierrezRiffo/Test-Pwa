import pkg from "./package";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "@nuxtjs/pwa",
    "bootstrap-vue/nuxt"
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  icon: {
    // Icon options
    iconSrc: "./static/img/icons/icon-144x144.png"
  },
  /*
   **
   */
  manifest: {
    short_name: "PwaJano",
    name: "JAGR",
    theme_color: "#2196f3",
    background_color: "#2196f3",
    display: "standalone",
    Scope: "/",
    start_url: "/"
  },
  /*
   **
   */
  sitemap: {
    path: "/sitemap.xml",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate
    routes: ["/", "/contactos", "/nosotros"]
  }
};
