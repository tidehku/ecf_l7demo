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
        path: "phyTaiO",
        component: () => import("pages/physicalDashboard/phyTaiO.vue")
      },
      {
        path: "bioTaiO",
        component: () => import("pages/biologicalDashboard/bioTaiO.vue")
      },
      {
        path: "phySiuLam",
        component: () => import("pages/physicalDashboard/phySiuLam.vue")
      },
      // bioSiuLam
      {
        path: "phyLukKeng",
        component: () => import("pages/physicalDashboard/phyLukKeng.vue")
      },
      {
        path: "phyLungKwuTan",
        component: () => import("pages/physicalDashboard/phyLungKwuTan.vue")
      },


      {
        path: "phyTaiLongWan",
        component: () => import("pages/physicalDashboard/phyTaiLongWan.vue")
      },
      {
        path: "phyShuiTseng",
        component: () => import("pages/physicalDashboard/phyShuiTseng.vue")
      },
      {
        path: "phyPengChau",
        component: () => import("pages/physicalDashboard/phyPengChau.vue")
      },
      {
        path: "phyPuiO",
        component: () => import("pages/physicalDashboard/phyPuiO.vue")
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

      // bioTsengTau
      {
        path: "phyLaiChiChong",
        component: () => import("pages/physicalDashboard/phyLaiChiChong.vue")
      },
      {
        path: "phyLaiChiChongyr2",
        component:() => import("pages/physicalDashboard/phyLaiChiChongyr2.vue")
      },      
      {
        path: "phyShekO",
        component: () => import("pages/physicalDashboard/phyShekO.vue")
      },
      //bioShekO
      {
        path: "phyWahFu",
        component: () => import("pages/physicalDashboard/phyWahFu.vue")
      },
      //bioWahFu
      {
        path: "phyMiddleBay",
        component: () => import("pages/physicalDashboard/phyMiddleBay.vue")
      },
      //bioMiddleBay
      {
        path: "phyTaiTam",
        component: () => import("pages/physicalDashboard/phyTaiTam.vue")
      },
      //bioTaiTam
      

      {
        path: "phySaiWan",
        component: () => import("pages/physicalDashboard/phySaiWan.vue")
      },
      // bioSaiWan
      {
        path: "phyPakLap",
        component: () => import("pages/physicalDashboard/phyPakLap.vue")
      },
      //bioPakLap
      {
        path: "phyPakShuiWun",
        component: () => import("pages/physicalDashboard/phyPakShuiWun.vue")
      },
      //bioPakShuiMun
      {
        path: "phyKauSaiChau",
        component: () => import("pages/physicalDashboard/phyKauSaiChau.vue")
      },
      //bioKauSaiChau
      

      {
        path: "phyDoubleIsland",
        component: () => import("pages/physicalDashboard/phyDoubleIsland.vue")
      },
      // bioSaiWan
      {
        path: "phyKatO",
        component: () => import("pages/physicalDashboard/phyKatO.vue")
      },
      //bioPakLap
      {
        path: "phyYungShueAu",
        component: () => import("pages/physicalDashboard/phyYungShueAu.vue")
      },
      //bioPakShuiMun
      {
        path: "phyHungShekMun",
        component: () => import("pages/physicalDashboard/phyHungShekMun.vue")
      }
      //bioHungShekMun

    ]
  },

  // Page 404 Not Found: Always leave this as last one
  {
    path: "*",
    component: () => import("pages/MainPage/Error404.vue")
  }
];

export default routes;
