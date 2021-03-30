export const barData = {
  SBBar1: {
    chart: {
      type: "column",
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
    xAxis: {
      type: "category",
      title: {
        text: "Transect Height"
      }
      //   labels: {
      //     rotation: 0
      //   }
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
    series: [
      {
        name: "Species Abundance",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: false,
        data: [
          ["High-High", 0.688542623],
          ["Low-High", 0.123213394],
          ["High-Mid", 0.883628328],
          ["Low-Mid", 1.93031178],
          ["High-Low", 1.258707662]
        ]
      }
    ]
  },
  SBBar2: {
    chart: {
      type: "column",
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
    xAxis: {
      type: "category",
      title: {
        text: "Transect Height"
      }
      //   labels: {
      //     rotation: 0
      //   }
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
      {
        name: "Species Abundance",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: false,
        data: [
          ["High-High", 0.993357028],
          ["Low-High", 0.177759353],
          ["High-Mid", 0.549029149],
          ["Low-Mid", 0.928283744],
          ["High-Low", 0.572862544]
        ]
      }
    ]
  },
  SBBar3: {
    chart: {
      type: "column",
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
    xAxis: {
      type: "category",
      title: {
        text: "Transect Height"
      }
      //   labels: {
      //     rotation: 0
      //   }
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
      {
        name: "Species Abundance",
        colorByPoint: true,
        colors: ["#4287f5", "#c20c0c", "#e3ba19", "#5ebf74", "#d190bb"],
        showInLegend: false,
        data: [
          ["High-High", 2],
          ["Low-High", 2],
          ["High-Mid", 5],
          ["Low-Mid", 8],
          ["High-Low", 9]
        ]
      }
    ]
  }
};
