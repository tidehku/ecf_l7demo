export const chlaData = {
  SBChla1: {
    chart: {
      type: "column",
      height: "60%"
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
        data: []
      }
    ]
  },
  TOChla1: {
    chart: {
      type: "column",
      height: "60%"
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
        data: []
      }
    ]
  }
};
