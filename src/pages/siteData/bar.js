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
  },
  TOBar1: {
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
          ["2.45", 0.72],
          ["2.18", 1.53],
          ["1.90", 1.26],
          ["1.63", 1.23],
          ["1.36", 1.5],
          ["1.08", 0.99]
        ]
      }
    ]
  },
  TOBar2: {
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
          ["2.45", 0.35],
          ["2.18", 0.67],
          ["1.90", 0.61],
          ["1.63", 0.63],
          ["1.36", 0.77],
          ["1.08", 0.9]
        ]
      }
    ]
  },
  TOBar3: {
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
          ["2.45", 8],
          ["2.18", 9],
          ["1.90", 8],
          ["1.63", 7],
          ["1.36", 7],
          ["1.08", 3]
        ]
      }
    ]
  }
};
