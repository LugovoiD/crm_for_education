import Vue from "vue";
import Vuelidate from "vuelidate";
import VueMeta from "vue-meta";
import Paginate from "vuejs-paginate";
import App from "./App.vue";
import "./registerServiceWorker";
import dateFilter from "./filters/date.filter";
import currencyFilter from "./filters/currency.filter";
import localizeFilter from "./filters/localize.filter";
import messagePlugin from "./utils/message.plugin";
import titlePlugin from "./utils/title.plugin";
import tooltipDirective from "./directives/tooltip.directive";
import router from "./router";
import store from "./store";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Loader from "./components/app/Loader";
import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(VueMeta);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.filter('localize', localizeFilter)
Vue.directive('tooltip', tooltipDirective);
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate)
let app

firebase.initializeApp({
  apiKey: "AIzaSyB9VVNL0wbURNN-44lkQdRUt6sx9798B0U",
  authDomain: "vue-crm-test-f66b7.firebaseapp.com",
  databaseURL: "https://vue-crm-test-f66b7.firebaseio.com",
  projectId: "vue-crm-test-f66b7",
  storageBucket: "vue-crm-test-f66b7.appspot.com",
  messagingSenderId: "890055662811",
  appId: "1:890055662811:web:79c55973392ee656dbc0fe",
  measurementId: "G-K9NZ5P2JSW"
});

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})
