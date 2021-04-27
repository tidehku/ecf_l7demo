// link with Index, demoMap Vue file//
const routes = [
  {
    path: "/",
    component: () => import("layouts/NewLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/MainPage/homePage.vue") },
      {
        path: "interactiveHabitat",
        component: () => import("pages/iH/interactiveHabitat.vue")
      },
      {
        path: "speciesSearchEngine",
        component: () => import("pages/MainPage/SpeciesSearchEngine.vue")
      },
      {
        path: "physicalSB",
        component: () =>
          import("pages/physicalDashboard/phyStarfishBayCopy.vue")
      }
    ]
  },
  {
    path: "/interactiveHabitat",
    component: () => import("layouts/NewLayout.vue"),
    children: [
      //six zones separately
      // { path: '/interactiveHabitat/copy', component: () => import('pages/iH/interactiveHabitat_copy.vue') },
      {
        path: "/interactiveHabitat/historical",
        component: () => import("pages/iH/interactiveHabitat_historical.vue")
      },
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
      }
    ]
  },
  {
    path: "/biologicalDashboard",
    component: () => import("src/layouts/NewLayout.vue"), //biological dashboard//
    children: [
      {
        path: "",
        component: () => import("pages/biologicalDashboard/biologicalDemo.vue")
      },
      {
        path: "Starfish Bay",
        component: () => import("pages/biologicalDashboard/bioStarfishBay.vue")
      }
    ]
  },
  {
    path: "/physicalDashboard",
    component: () => import("src/layouts/NewLayout.vue"), //physical dashboard//
    children: [
      {
        path: "",
        component: () => import("pages/physicalDashboard/physicalDemo.vue")
      },
      {
        path: "Starfish Bay",
        component: () => import("pages/physicalDashboard/PhyStarfishBay.vue")
      }
    ]
  },
  {
    path: "/SpeciesSearchEngine",
    component: () => import("pages/MainPage/SpeciesSearchEngine.vue")
  },
  {
    path: "/l",
    component: () => import("layouts/NewLayout.vue"),
    children: [
      {
        path: "/l/demo1",
        component: () => import("pages/leafletDemo/demo1.vue")
      },
      {
        path: "/l/demo2",
        component: () => import("pages/leafletDemo/demo2.vue")
      },
      {
        path: "/l/demo3",
        component: () => import("pages/leafletDemo/demo3.vue")
      }
    ]
  },
  {
    path: "/speciesSearchEngine",
    component: () => import("layouts/NewLayout.vue"),
    children: [
      //have not been built yet
      {
        path: "/SpeciesSearchEngine",
        component: () => import("pages/iH/interactiveHabitat_NW.vue")
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
