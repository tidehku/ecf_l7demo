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
        colors: ["#719DC8", "#79C6D1", "#a0c2a0", "#ffdc73", "#e8a969"],
        showInLegend: false,
        data: []
      }
    ]
  },
  SBPie2: {
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
        colors: ["#719DC8", "#79C6D1", "#a0c2a0", "#ffdc73", "#e8a969"],
        showInLegend: false,
        data: []
      }
    ]
  },
  TOPie1: {
    chart: {
      type: "pie",
      height: (1 / 1) * 100 + "%"
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
        colors: ["#719DC8", "#79C6D1", "#a0c2a0", "#ffdc73", "#e8a969"],
        showInLegend: false,
        data: [
          ["Patelloida saccharina", 565],
          ["Patelloida ryukyuensis", 246],
          ["Echinolittorina radiata", 202],
          ["Cellana toreuma", 158],
          ["Reishia clavigera", 89]
        ]
      }
    ]
  },
  TOPie3: {
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
        colors: ["#719DC8", "#79C6D1", "#a0c2a0", "#ffdc73", "#e8a969"],
        showInLegend: false,
        data: [
          ["Ulva lactuca", 38],
          ["Gelidium sp.", 31],
          ["Hildenbrandia rubra", 26],
          ["Saccostrea cuccullata", 24],
          ["Feldmannia mitchelliae", 23]
        ]
      }
    ]
  }
};
