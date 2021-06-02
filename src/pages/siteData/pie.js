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
          "#719DC8",
          "#79C6D1",
          "#a0c2a0",
          "#ffdc73",
          "#e8a969"
          // "#F1948A",
          // "#EF4A3E",
          // "#3EABEF"
          // "#9B59B6",
          // "#888C90"
        ],
        showInLegend: false,
        data: [
          ["Echinolittorina radiata", 313],
          ["Liolophura japonica", 116],
          ["Planaxis sulcatus", 105],
          ["Echinolittorina malaccana", 54],
          ["Monodonta labio", 37]
          // ["Lunella granulata", 24],
          // ["Siphonaria japonica", 9],
          // ["Patelloida ryukyuensis", 7]
          // ["Echinolittorina vidua", 6],
          // ["Reishia clavigera", 5]
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
          "#719DC8",
          "#79C6D1",
          "#a0c2a0",
          "#ffdc73",
          "#e8a969"
          // "#F1948A",
          // "#EF4A3E",
          // "#3EABEF"
          // "#9B59B6",
          // "#888C90"
        ],
        showInLegend: false,
        data: [
          ["Pseudulvella applanata", 9],
          ["Hildenbrandia rubra", 8],
          ["Xenostrobus securis", 6],
          ["Capitulum mitella", 5],
          ["Barbatia virescens", 5]
          // ["Lunella granulata", 24],
          // ["Siphonaria japonica", 9],
          // ["Patelloida ryukyuensis", 7]
          // ["Echinolittorina vidua", 6],
          // ["Reishia clavigera", 5]
        ]
      }
    ]
  }
};
