export const barData = {
  SBBar1: {
    chart: {
      type: "column",
      height: "100%"
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    xAxis: {
      type: "category",
      title: {
        text: "Transect Height (m)"
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
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.y}"
        }
      }
    },
    series: [
      {
        name: "Species Abundance",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: false,
        data: [
          ["3.00", 0.69],
          ["2.66", 0.12],
          ["2.31", 0.88],
          ["1.97", 1.93],
          ["1.62", 1.26]
        ]
      }
    ]
  },
  SBBar2: {
    chart: {
      type: "column",
      height: "100%"
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    xAxis: {
      type: "category",
      title: {
        text: "Transect Height (m)"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Pielou's evenness J"
      }
    },
    legend: {
      enabled: true
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.y}"
        }
      }
    },
    series: [
      {
        name: "Species Abundance",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: false,
        data: [
          ["3.00", 0.99],
          ["2.66", 0.18],
          ["2.31", 0.55],
          ["1.97", 0.93],
          ["1.62", 0.57]
        ]
      }
    ]
  },
  SBBar3: {
    chart: {
      type: "column",
      height: "100%"
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    xAxis: {
      type: "category",
      title: {
        text: "Transect Height (m)"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Species richness S"
      }
    },
    legend: {
      enabled: true
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.y}"
        }
      }
    },
    series: [
      {
        name: "Species Abundance",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: false,
        data: [
          ["3.00", 2],
          ["2.66", 2],
          ["2.31", 5],
          ["1.97", 8],
          ["1.62", 9]
        ]
      }
    ]
  }
};
