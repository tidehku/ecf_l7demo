export const pieData = {
  SBPie1: {
    chart: {
      type: "pie",
      height: (1 / 1) * 100 + "%" // 3:4 ratio
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    subtitle: {
      text: ""
    },
    xAxis: {
      type: "category",
      title: {
        text: "Transect Height"
      }
      //   labels: {
      //     rotation: 0
      //   }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Shannon's Diversity index H"
      }
    },
    legend: {
      enabled: true
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        showInLegend: false
      }
    },
    series: [
      {
        name: "Species Abundance",
        colorByPoint: true,
        colors: [
          "#74ccf4",
          "#6aada6",
          "#a0c2a0",
          "#ffdc73",
          "#e8a969",
          "#c6bcd5",
          "#F1948A",
          "#DC7633",
          "#9B59B6",
          "#F1C40F"
        ],
        showInLegend: false,
        data: [
          ["Echinolittorin - malaccana", 54],
          ["Echinolittorin - radiata", 313],
          ["Echinolittorina - vidua", 6],
          ["Lunella - granulata", 24],
          ["Monodonta - labio", 37],
          ["Patelloida - ryukyuensis", 7],
          ["Planaxis - sulcatus", 105],
          ["Reishia - clavigera", 5],
          ["Siphonaria - japonica", 9],
          ["Liolophura - japonica", 116]
        ]
      }
    ]
  },
  SBPie3: {
    chart: {
      type: "pie",
      height: (1 / 1) * 100 + "%" // 3:4 ratio
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    subtitle: {
      text: ""
    },
    xAxis: {
      type: "category",
      title: {
        text: "Transect Height"
      }
      //   labels: {
      //     rotation: 0
      //   }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Shannon's Diversity index H"
      }
    },
    legend: {
      enabled: true
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false
        },
        showInLegend: false
      }
    },
    series: [
      {
        name: "Species Abundance",
        colorByPoint: true,
        colors: [
          "#058DC7",
          "#50B432",
          "#ED561B",
          "#DDDF00",
          "#24CBE5",
          "#64E572",
          "#FF9655",
          "#FFF263",
          "#6AF9C4"
        ],
        showInLegend: false,
        data: [
          ["High shore biofilm", 4],
          ["Hildenbrandia - rubra", 8],
          ["Pseudulvella - applanata", 9],
          ["Ulva - lactuca", 3],
          ["Gelidium - pusillum", 4],
          ["Amphibalanus - amphitrite", 4],
          ["Capitulum - mitella", 5],
          ["Tetraclita - squamosa", 1],
          ["Diadumene - lineata", 1],
          ["Barbatia - virescens", 5],
          ["Brachidontes - variabilis", 1],
          ["Isognomon - ephippium", 1],
          ["Saccostrea - cuccullata", 1],
          ["Xenostrobus - securis", 4]
        ]
      }
    ]
  }
};
