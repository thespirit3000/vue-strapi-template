import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";
import VueRouter from "vue-router";

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueApollo);
Vue.use(VueRouter);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

const router = new VueRouter({
  mode: "history",
  routes: [{ path: "/", components: require("./containers/Articles.vue") }],
});

new Vue({
  apolloProvider,
  router,
  render: (h) => h(App),
}).$mount("#app");
