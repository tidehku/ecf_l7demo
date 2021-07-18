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
        name: "Species abundance",
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
    tooltip: {
      valuePrefix: "0."
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
        name: "Incidence proportion",
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
        name: "Species abundance",
        colorByPoint: true,
        colors: ["#719DC8", "#79C6D1", "#a0c2a0", "#ffdc73", "#e8a969"],
        showInLegend: false,
        data: []
      }
    ]
  },
  TOPie2: {
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
    tooltip: {
      valuePrefix: "0."
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
        name: "Incidence proportion",
        colorByPoint: true,
        colors: ["#719DC8", "#79C6D1", "#a0c2a0", "#ffdc73", "#e8a969"],
        showInLegend: false,
        data: []
      }
    ]
  }
};
