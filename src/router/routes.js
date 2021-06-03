// link with Index, demoMap Vue file//
const routes = [
  {
    path: "/",
    component: () => import("src/layouts/layout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/MainPage/HomePage.vue"),
        meta: { keepAlive: true }
      },
      {
        path: "interactiveHabitat",
        component: () => import("pages/iH/interactiveHabitat.vue"),
        meta: { keepAlive: false }
      },
      {
        path: "method",
        component: () => import("pages/MainPage/method.vue"),
        meta: { keepAlive: true }
      },
      {
        path: "speciesSearchEngine",
        component: () => import("pages/MainPage/speciesSearchEngine.vue"),
        meta: { keepAlive: false }
      },
      {
        path: "gallery",
        component: () => import("pages/MainPage/gallery.vue"),
        meta: { keepAlive: true }
      }
    ]
  },
  {
    path: "/interactiveHabitat",
    component: () => import("layouts/layout.vue"),
    children: [
      //six zones separately
      {
        path: "/interactiveHabitat/NW",
        component: () => import("pages/iH/interactiveHabitat_NW.vue"),
        meta: { keepAlive: true }
      },
      {
        path: "/interactiveHabitat/SW",
        component: () => import("pages/iH/interactiveHabitat_SW.vue"),
        meta: { keepAlive: true }
      },
      {
        path: "/interactiveHabitat/SO",
        component: () => import("pages/iH/interactiveHabitat_SO.vue"),
        meta: { keepAlive: true }
      },
      {
        path: "/interactiveHabitat/EA",
        component: () => import("pages/iH/interactiveHabitat_EA.vue"),
        meta: { keepAlive: true }
      },
      {
        path: "/interactiveHabitat/TL",
        component: () => import("pages/iH/interactiveHabitat_TL.vue"),
        meta: { keepAlive: true }
      },
      {
        path: "/interactiveHabitat/NE",
        component: () => import("pages/iH/interactiveHabitat_NE.vue"),
        meta: { keepAlive: true }
      },
      {
        path: "phyStarfishBay",
        component: () => import("pages/physicalDashboard/phyStarfishBay.vue"),
        meta: { keepAlive: true }
      },
      {
        path: "bioStarfishBay",
        component: () => import("pages/biologicalDashboard/bioStarfishBay.vue"),
        meta: { keepAlive: true }
      },
      {
        path: "phyTaiO",
        component: () => import("pages/physicalDashboard/phyTaiO.vue"),
        meta: { keepAlive: true }
      },
      {
        path: "bioTaiO",
        component: () => import("pages/biologicalDashboard/bioTaiO.vue"),
        meta: { keepAlive: true }
      }
    ]
  },

  // Page 404 Not Found: Always leave this as last one
  {
    path: "*",
    component: () => import("pages/MainPage/Error404.vue"),
    meta: { keepAlive: false }
  }
];

export default routes;
