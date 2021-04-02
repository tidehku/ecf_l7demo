export const chlaData = {
  SBChla1: {
    chart: {
      type: "column",
      height: (2 / 3) * 100 + "%" // 3:4 ratio
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
        text: "Chla/tidal height"
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
    series: [
      {
        name: "chlorophyll a",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: true,
        data: [
          ["HH", 1.71245155],
          ["LH", 2.095226323],
          ["HM", 9.217318676],
          ["LM", 8.640319233],
          ["HL", 12.3657206]
        ]
      }
    ]
  }
};
