// link with Index, demoMap Vue file//
const routes = [
  {
    path: "/",
    component: () => import("src/layouts/layout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/MainPage/HomePage.vue")
      },
      {
        path: "interactiveHabitat",
        component: () => import("pages/iH/interactiveHabitat.vue")
      },
      {
        path: "method",
        component: () => import("pages/MainPage/method.vue")
      },
      {
        path: "speciesSearchEngine",
        component: () => import("pages/MainPage/speciesSearchEngine.vue")
      },
      {
        path: "gallery",
        component: () => import("pages/MainPage/gallery.vue")
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
        component: () => import("pages/iH/interactiveHabitat_NW.vue")
      },
      {
        path: "/interactiveHabitat/SW",
        component: () => import("pages/iH/interactiveHabitat_SW.vue")
      },
      {
        path: "/interactiveHabitat/SO",
        component: () => import("pages/iH/interactiveHabitat_SO.vue")
      },
      {
        path: "/interactiveHabitat/EA",
        component: () => import("pages/iH/interactiveHabitat_EA.vue")
      },
      {
        path: "/interactiveHabitat/TL",
        component: () => import("pages/iH/interactiveHabitat_TL.vue")
      },
      {
        path: "/interactiveHabitat/NE",
        component: () => import("pages/iH/interactiveHabitat_NE.vue")
      },
      {
        path: "phyStarfishBay",
        component: () => import("pages/physicalDashboard/phyStarfishBay.vue")
      },
      {
        path: "bioStarfishBay",
        component: () => import("pages/biologicalDashboard/bioStarfishBay.vue")
      },
      {
        path: "phyMaShiChau",
        component: () => import("pages/physicalDashboard/phyMaShiChau.vue")
      },
      // {
      //   path: "bioMaShiChau",
      //   component: () => import("pages/physicalDashboard/bioMaShiChau.vue")
      // },
      {
        path: "phyTsengTau",
        component: () => import("pages/physicalDashboard/phyTsengTau.vue")
      },
      {
        path: "phyTaiO",
        component: () => import("pages/physicalDashboard/phyTaiO.vue")
      },
      {
        path: "bioTaiO",
        component: () => import("pages/biologicalDashboard/bioTaiO.vue")
      }
    ]
  },

  // Page 404 Not Found: Always leave this as last one
  {
    path: "*",
    component: () => import("pages/MainPage/Error404.vue")
  }
];

export default routes;
