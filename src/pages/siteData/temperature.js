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
      layout: "proximate",
      align: "right",
      verticalAlign: "middle"
    },
    series: [
      {
        name: "HH Temperature",
        color: "#D67E32",
        data: [],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
        }
      },
      {
        name: "HH Range",
        color: "#F8C762",
        data: [],
        type: "arearange",
        lineWidth: 0,
        linkedTo: ":previous",
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false
        }
      },
      {
        name: "LM Temperature",
        color: "#11B678",
        data: [],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
        }
      },
      {
        name: "LM Range",
        color: "#7FDCB9",
        data: [],
        type: "arearange",
        lineWidth: 0,
        linkedTo: ":previous",
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
      layout: "proximate",
      align: "right",
      verticalAlign: "middle"
    },
    series: [
      {
        name: "HH Temperature",
        color: "#D67E32",
        data: [],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
        }
      },
      {
        name: "HH Range",
        color: "#F8C762",
        data: [],
        type: "arearange",
        lineWidth: 0,
        linkedTo: ":previous",
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false
        }
      },
      {
        name: "LM Temperature",
        color: "#11B678",
        data: [],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
        }
      },
      {
        name: "LM Range",
        color: "#7FDCB9",
        data: [],
        type: "arearange",
        lineWidth: 0,
        linkedTo: ":previous",
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false
        }
      }
    ]
  }
};
