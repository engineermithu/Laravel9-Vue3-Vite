// import app from "./components/App";
// require('./bootstrap');
// import ('../css/bootstrap.min.css');

import ('../css/bootstrap.css');
import ('../js/bootstrap.js');
import {createApp} from 'vue'

import App from './components/App.vue'
import router from './router'

createApp(App).use(router).mount("#app")
