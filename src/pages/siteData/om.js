export const omData = {
  SBOm1: {
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
        text: "mean of organic matter"
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
        name: "organic matter",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: false,
        data: [
          ["3.00", 3.63],
          ["2.66", 4.84],
          ["2.31", 5.48],
          ["1.97", 5.91],
          ["1.62", 5.53]
        ]
      }
    ]
  }
};
