// plugins/vuetify.js
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        icons: {
            defaultSet: 'mdi',
        },
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: colors.blueGrey.darken4, // #E53935

                        secondary: colors.blueGrey.lighten4, // #FFCDD2
                    }
                },
            },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})