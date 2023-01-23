// import Vue from "vue";
import VuePassword from "./components/VuePassword.vue";

function install(app) {
  if (install.installed) return;
  install.installed = true;

  app.component("VuePassword", VuePassword);
}

// const plugin = {
//   install
// };

// let GlobalVue = null;

// if (typeof window !== "undefined") {
//   GlobalVue = window.Vue;
// } else if (typeof global !== "undefined") {
//   GlobalVue = global.vue;
// }

// if (GlobalVue) {
//   GlobalVue.use(plugin);
// }

VuePassword.install = install;

export default VuePassword;
