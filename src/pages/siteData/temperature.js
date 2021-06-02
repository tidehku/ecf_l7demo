export const tempData = {
  SBTemperature1: {
    chart: {
      height: "35%"
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
      type: "time",
      title: {
        text: "Time (hour)"
      },
      accessibility: {
        rangeDescription: "Range: 0-24 h."
      }
    },
    yAxis: {
      title: {
        text: "Temperature"
      },
      labels: {
        formatter: function() {
          return this.value + "°C";
        }
      }
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: "°C"
    },
    legend: {
      // enabled: true,
      layout: "proximate",
      align: "right",
      verticalAlign: "middle"
    },
    series: [
      {
        name: "HH Temperature",
        color: "#D67E32",
        data: [
          [0, 18.56],
          [1, 17.98],
          [2, 17.43],
          [3, 17.07],
          [4, 16.78],
          [5, 16.52],
          [6, 16.26],
          [7, 16.0],
          [8, 16.44],
          [9, 17.35],
          [10, 18.43],
          [11, 19.83],
          [12, 18.11],
          [13, 19.74],
          [14, 20.52],
          [15, 20.78],
          [16, 19.89],
          [17, 18.02],
          [18, 16.85],
          [19, 16.11],
          [20, 15.85],
          [21, 15.78],
          [22, 16.11],
          [23, 16.44]
        ],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
          // fillColor: "white",
          // lineColor: Highcharts.getOptions().colors[0]
        }
      },
      {
        name: "HH Range",
        color: "#F8C762",
        data: [
          [0, 16.5, 20.33],
          [1, 16.83, 19.0],
          [2, 15.5, 18.83],
          [3, 14.83, 18.67],
          [4, 14.17, 18.5],
          [5, 14.0, 18.33],
          [6, 13.67, 18.33],
          [7, 13.67, 18.17],
          [8, 13.83, 18.5],
          [9, 14.83, 20.17],
          [10, 15.5, 22.0],
          [11, 16.33, 24.17],
          [12, 0, 24.67],
          [13, 0, 25.44],
          [14, 0, 27.17],
          [15, 0, 26.33],
          [16, 0, 24.67],
          [17, 0, 23.17],
          [18, 0, 21.67],
          [19, 0, 20.5],
          [20, 0, 20.33],
          [21, 0, 20.33],
          [22, 0, 21.33],
          [23, 0, 20.17]
        ],
        type: "arearange",
        lineWidth: 0,
        linkedTo: ":previous",
        // color: Highcharts.getOptions().colors[0],
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false
        }
      },
      {
        name: "LM Temperature",
        color: "#11B678",
        data: [
          [0, 22.26],
          [1, 21.74],
          [2, 21.15],
          [3, 20.22],
          [4, 19.31],
          [5, 18.43],
          [6, 17.69],
          [7, 17.07],
          [8, 17.06],
          [9, 17.63],
          [10, 18.57],
          [11, 20.41],
          [12, 18.63],
          [13, 18.98],
          [14, 18.8],
          [15, 18.26],
          [16, 18.35],
          [17, 19.31],
          [18, 19.54],
          [19, 19.59],
          [20, 19.72],
          [21, 19.76],
          [22, 19.76],
          [23, 19.72]
        ],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
          // fillColor: "white",
          // lineColor: Highcharts.getOptions().colors[0]
        }
      },
      {
        name: "LM Range",
        color: "#7FDCB9",
        data: [
          [0, 21.5, 23.17],
          [1, 20.5, 22.83],
          [2, 19.33, 22.33],
          [3, 18.17, 22],
          [4, 16.67, 21.67],
          [5, 15.83, 21.5],
          [6, 15.33, 21.17],
          [7, 14.83, 19.17],
          [8, 14.83, 19],
          [9, 15.17, 19.83],
          [10, 15.5, 21.5],
          [11, 16.33, 23.33],
          [12, 0, 23],
          [13, 0, 24],
          [14, 0, 25],
          [15, 0, 22.83],
          [16, 0, 22],
          [17, 0, 23.33],
          [18, 0, 23.5],
          [19, 0, 23.5],
          [20, 0, 23.5],
          [21, 0, 23.5],
          [22, 0, 23.33],
          [23, 0, 23.17]
        ],
        type: "arearange",
        lineWidth: 0,
        linkedTo: ":previous",
        // color: Highcharts.getOptions().colors[0],
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false
        }
      }
    ]
  },
  TOTemperature1: {
    chart: {
      height: "35%"
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
      type: "time",
      title: {
        text: "Time (hour)"
      },
      accessibility: {
        rangeDescription: "Range: 0-24 h."
      }
    },
    yAxis: {
      title: {
        text: "Temperature"
      },
      labels: {
        formatter: function() {
          return this.value + "°C";
        }
      }
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: "°C"
    },
    legend: {
      // enabled: true,
      layout: "proximate",
      align: "right",
      verticalAlign: "middle"
    },
    series: [
      {
        name: "HH Temperature",
        color: "#D67E32",
        data: [
          [0, 18.5],
          [1, 18.16],
          [2, 17.38],
          [3, 16.81],
          [4, 16.15],
          [5, 15.72],
          [6, 15.35],
          [7, 15.14],
          [8, 15.58],
          [9, 16.52],
          [10, 17.6],
          [11, 18.5],
          [12, 19.47],
          [13, 21.95],
          [14, 23.74],
          [15, 23.54],
          [16, 22.41],
          [17, 19.95],
          [18, 17.97],
          [19, 17.75],
          [20, 18.17],
          [21, 18.37],
          [22, 18.43],
          [23, 18.52]
        ],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
          // fillColor: "white",
          // lineColor: Highcharts.getOptions().colors[0]
        }
      },
      {
        name: "HH Range",
        color: "#F8C762",
        data: [
          [0, 13.83, 21.83],
          [1, 15.17, 21.33],
          [2, 10.5, 20.5],
          [3, 9, 20.33],
          [4, 9, 20.17],
          [5, 8.33, 20.17],
          [6, 7.67, 20.17],
          [7, 7.17, 20.33],
          [8, 7.67, 20.67],
          [9, 8.33, 22.33],
          [10, 8, 24.33],
          [11, 9.33, 25.83],
          [12, 10.17, 27.33],
          [13, 14, 29.17],
          [14, 17.67, 29.83],
          [15, 17, 32],
          [16, 16.17, 31.83],
          [17, 14.67, 27.33],
          [18, 11.83, 22.5],
          [19, 11.67, 21.17],
          [20, 12, 21.5],
          [21, 13.67, 21.67],
          [22, 14.5, 21.83],
          [23, 14.83, 21.83]
        ],
        type: "arearange",
        lineWidth: 0,
        linkedTo: ":previous",
        // color: Highcharts.getOptions().colors[0],
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false
        }
      },
      {
        name: "LM Temperature",
        color: "#11B678",
        data: [
          [0, 19.48],
          [1, 19.27],
          [2, 19.05],
          [3, 18.47],
          [4, 17.45],
          [5, 16.91],
          [6, 16.25],
          [7, 15.89],
          [8, 16.38],
          [9, 17.1],
          [10, 18.34],
          [11, 19.16],
          [12, 19.74],
          [13, 20.07],
          [14, 20.16],
          [15, 20.06],
          [16, 19.78],
          [17, 19.65],
          [18, 19.62],
          [19, 19.53],
          [20, 19.52],
          [21, 19.51],
          [22, 19.5],
          [23, 19.48]
        ],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
          // fillColor: "white",
          // lineColor: Highcharts.getOptions().colors[0]
        }
      },
      {
        name: "LM Range",
        color: "#7FDCB9",
        data: [
          [0, 17.33, 22],
          [1, 17, 22],
          [2, 16.33, 21.83],
          [3, 15.67, 21.17],
          [4, 9.33, 20.5],
          [5, 8, 20.67],
          [6, 7.67, 20.67],
          [7, 7.17, 21],
          [8, 7.5, 21],
          [9, 8, 21.17],
          [10, 10.83, 21.5],
          [11, 15.83, 22.33],
          [12, 16.83, 23.17],
          [13, 17, 24.17],
          [14, 17.33, 24.5],
          [15, 17.5, 24],
          [16, 17.5, 22.33],
          [17, 17.17, 22.17],
          [18, 17, 22],
          [19, 17, 22],
          [20, 17, 22],
          [21, 17, 22],
          [22, 17.17, 22],
          [23, 17.33, 22]
        ],
        type: "arearange",
        lineWidth: 0,
        linkedTo: ":previous",
        // color: Highcharts.getOptions().colors[0],
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false
        }
      }
    ]
  }
};
