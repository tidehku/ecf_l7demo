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
        text: "Time of the day (hour)"
      },
      accessibility: {
        rangeDescription: "Range: 0-24 h"
      }
    },
    yAxis: {
      title: {
        text: "Temperature (°C)"
      },
      labels: {
        formatter: function() {
          return this.value;
        }
      },
      max: 70
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: " °C",
      valueDecimals: 2
    },
    legend: {
      layout: "proximate",
      align: "right",
      verticalAlign: "middle"
    },
    series: [
      {
        name: "High shore",
        color: "#D67E32",
        data: [],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
        }
      },
      {
        name: "High shore range",
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
        name: "Mid shore",
        color: "#11B678",
        data: [],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
        }
      },
      {
        name: "Mid shore range",
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
  SBTemperature2: {
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
        text: "Time of the day (hour)"
      },
      accessibility: {
        rangeDescription: "Range: 0-24 h"
      }
    },
    yAxis: {
      title: {
        text: "Temperature (°C)"
      },
      labels: {
        formatter: function() {
          return this.value;
        }
      },
      min: 0,
      max: 70
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: " °C",
      valueDecimals: 2
    },
    legend: {
      layout: "proximate",
      align: "right",
      verticalAlign: "middle"
    },
    series: [
      {
        name: "High shore",
        color: "#D67E32",
        data: [],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
        }
      },
      {
        name: "High shore range",
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
        name: "Mid shore",
        color: "#11B678",
        data: [],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
        }
      },
      {
        name: "Mid shore range",
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
        text: "Time of the day (hour)"
      },
      accessibility: {
        rangeDescription: "Range: 0-24 h"
      }
    },
    yAxis: {
      title: {
        text: "Temperature (°C)"
      },
      labels: {
        formatter: function() {
          return this.value;
        }
      },
      max: 60
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: " °C",
      valueDecimals: 2
    },
    legend: {
      layout: "proximate",
      align: "right",
      verticalAlign: "middle"
    },
    series: [
      {
        name: "High shore",
        color: "#D67E32",
        data: [],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
        }
      },
      {
        name: "High shore range",
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
        name: "Mid shore",
        color: "#11B678",
        data: [],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
        }
      },
      {
        name: "Mid shore range",
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
  TOTemperature2: {
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
        text: "Time of the day (hour)"
      },
      accessibility: {
        rangeDescription: "Range: 0-24 h"
      }
    },
    yAxis: {
      title: {
        text: "Temperature (°C)"
      },
      labels: {
        formatter: function() {
          return this.value;
        }
      },
      min: 0
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: " °C",
      valueDecimals: 2
    },
    legend: {
      layout: "proximate",
      align: "right",
      verticalAlign: "middle"
    },
    series: [
      {
        name: "High shore",
        color: "#D67E32",
        data: [],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
        }
      },
      {
        name: "High shore range",
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
        name: "Mid shore",
        color: "#11B678",
        data: [],
        zIndex: 1,
        marker: {
          enabled: false,
          lineWidth: 2
        }
      },
      {
        name: "Mid shore range",
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
