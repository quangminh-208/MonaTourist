import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import bootstap
import BootstrapCSS from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import BootstrapJS from '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faLocationDot,
  faPhone,
  faMagnifyingGlass,
  faHeart,
  faBagShopping,
  faUser,
  faAngleUp,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

import { faSquareFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
  faLocationDot,
  faPhone,
  faSquareFacebook,
  faInstagram,
  faYoutube,
  faMagnifyingGlass,
  faHeart,
  faBagShopping,
  faUser,
  faAngleUp,
  faEnvelope
)

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
