export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || 'AC-Control',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200' },
            { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css' },
            { rel: 'stylesheet', href: 'assets/css/style.css' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#EF8157' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        //'@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/moment'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: 'https://reqres.in/api'
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },

    /*
     ** Deploying with ZEIT Now
     */
    generate: {
        dir: "public"
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/login?delay=1', method: 'post', propertyName: 'token' },
                    user: { url: '/users/2', method: 'get', propertyName: '' },
                    logout: false
                }
            }
        },
        redirect: {
            login: '/',
            logout: '/'
        }
    }
}