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

  TOShannon: {
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
      categories: ["1.08", "1.36", "1.63", "1.90", "2.18", "2.45"],
      crosshair: true,
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
    series: [
      { name: "Winter2020", data: [] },
      { name: "Summer2021", data: [] }
    ]
  },
  TOPielou: {
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
      categories: ["1.08", "1.36", "1.63", "1.90", "2.18", "2.45"],
      crosshair: true,
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
    series: [
      { name: "Winter2020", data: [] },
      { name: "Summer2021", data: [] }
    ]
    // series: [
    //   {
    //     name: "Species Abundance",
    //     colorByPoint: true,
    //     colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
    //     showInLegend: false,
    //     data: []
    //   }
    // ]
  },
  TORichness: {
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
      categories: ["1.08", "1.36", "1.63", "1.90", "2.18", "2.45"],
      crosshair: true,
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
    series: [
      { name: "Winter2020", data: [] },
      { name: "Summer2021", data: [] }
    ]
    // series: [
    //   {
    //     name: "Species Abundance",
    //     colorByPoint: true,
    //     colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
    //     showInLegend: false,
    //     data: []
    //   }
    // ]
  },
  SBShannon: {
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
      categories: ["1.28", "1.62", "1.97", "2.31", "2.66", "3.00"],
      crosshair: true,
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
    series: [
      { name: "Winter2020", data: [] },
      { name: "Summer2021", data: [] }
    ]
  },
  SBPielou: {
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
      categories: ["1.28", "1.62", "1.97", "2.31", "2.66", "3.00"],
      crosshair: true,
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
    series: [
      { name: "Winter2020", data: [] },
      { name: "Summer2021", data: [] }
    ]
  },
  SBRichness: {
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
      categories: ["1.28", "1.62", "1.97", "2.31", "2.66", "3.00"],
      crosshair: true,
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
    series: [
      { name: "Winter2020", data: [] },
      { name: "Summer2021", data: [] }
    ]
  }
};
