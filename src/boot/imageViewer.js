import Vue from "vue";
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
Vue.use(Viewer, {
  defaultOptions: {
    rotatable: false,
    scalable: false,
    title: false,
    zIndex: 9999,
  },
});

Viewer.install(Vue)