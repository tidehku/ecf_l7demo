export const chlaData = {
  SBChla1: {
    chart: {
      type: "column",
      // height: (5 / 6) * 100 + "%" // 3:4 ratio
      height: "60%"
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    subtitle: {
      tect: "by ECF at which site location"
    },
    xAxis: {
      type: "category",
      title: {
        text: "Tidal height (Meter above C.D.)"
      }
    },
    yAxis: {
      title: {
        text: "mean of chlorophyll a"
      }
    },
    legend: {
      enabled: false
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
        name: "chlorophyll a",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: true,
        data: [
          ["3.00", 1.71],
          ["2.66", 2.1],
          ["2.31", 9.22],
          ["1.97", 8.64],
          ["1.62", 12.37]
        ]
      }
    ]
  },
  TOChla1: {
    chart: {
      type: "column",
      // height: (5 / 6) * 100 + "%" // 3:4 ratio
      height: "60%"
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    subtitle: {
      tect: "by ECF at which site location"
    },
    xAxis: {
      type: "category",
      title: {
        text: "Tidal height (Meter above C.D.)"
      }
    },
    yAxis: {
      title: {
        text: "mean of chlorophyll a"
      }
    },
    legend: {
      enabled: false
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
        name: "chlorophyll a",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: true,
        data: [
          ["2.45", 4.77],
          ["2.18", 11.8],
          ["1.90", 15.45],
          ["1.63", 16.59],
          ["1.36", 43.46],
          ["1.08", 126.85]
        ]
      }
    ]
  }
};
