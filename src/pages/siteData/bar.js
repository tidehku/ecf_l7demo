export const barData = {
  SBBar1: {
    chart: {
      type: "column",
      height: "90%"
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    tooltip: { valueDecimals: 2 },
    xAxis: {
      type: "category",
      title: {
        text: "Tidal height (m + C.D.)"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Shannon's diversity index H'"
      }
    },
    legend: {
      enabled: true
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.y:,.2f}"
        }
      }
    },
    series: [
      {
        name: "Species Abundance",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: false,
        data: []
      }
    ]
  },
  SBBar2: {
    chart: {
      type: "column",
      height: "90%"
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    tooltip: { valueDecimals: 2 },
    xAxis: {
      type: "category",
      title: {
        text: "Tidal height (m + C.D.)"
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
          format: "{point.y:,.2f}"
        }
      }
    },
    series: [
      {
        name: "Species Abundance",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: false,
        data: []
      }
    ]
  },
  SBBar3: {
    chart: {
      type: "column",
      height: "90%"
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
        text: "Tidal height (m + C.D.)"
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
        data: []
      }
    ]
  },
  TOBar1: {
    chart: {
      type: "column",
      height: "90%"
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
        text: "Tidal height (m + C.D.)"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Shannon's diversity index H'"
      }
    },
    tooltip: { valueDecimals: 2 },
    legend: {
      enabled: true
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: "{point.y:,.2f}"
        }
      }
    },
    series: [
      {
        name: "Species Abundance",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: false,
        data: []
      }
    ]
  },
  TOBar2: {
    chart: {
      type: "column",
      height: "90%"
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    tooltip: { valueDecimals: 2 },
    xAxis: {
      type: "category",
      title: {
        text: "Tidal height (m + C.D.)"
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
          format: "{point.y:,.2f}"
        }
      }
    },
    series: [
      {
        name: "Species Abundance",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: false,
        data: []
      }
    ]
  },
  TOBar3: {
    chart: {
      type: "column",
      height: "90%"
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
        text: "Tidal height (m + C.D.)"
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
        data: []
      }
    ]
  }
};
