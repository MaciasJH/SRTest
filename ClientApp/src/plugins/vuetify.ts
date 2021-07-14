import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify, {
  VAlert,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VToolbar,
  VDataTable,
  VProgressLinear,
} from 'vuetify/lib';

// vue-cli a-la-carte installation
Vue.use(Vuetify, {
  components: {
    VAlert,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VToolbar,
    VDataTable,
    VProgressLinear,
  },
});

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#FFFFFF',
        secondary: '#71767c',
        accent: '#00884a',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        anchor: '#56b0ff'
      },
      // dark: {
      // }
    },
  },
};

export default new Vuetify(opts);
