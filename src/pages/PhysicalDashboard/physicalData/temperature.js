export const tempData = {
  SBTemperature1: {
    chart: {
      type: "line",
      // height: (1 / 2) * 100 + "%", // 16:9 ratio
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
    yAxis: {
      title: {
        text: "Temperature"
      },
      labels: {
        formatter: function() {
          return this.value + "°";
        }
      }
    },
    legend: {
      // enabled: true,
      layout: "proximate",
      align: "right",
      verticalAlign: "middle"
    },
    series: [
      {
        name: "Average HH",
        data: [
          16.68,
          16.03,
          15.6,
          15.27,
          15.05,
          14.75,
          14.6,
          14.33,
          15.08,
          15.9,
          17.07,
          18.27,
          17.22,
          18.13,
          18.72,
          18.42,
          16.97,
          15.92,
          14.82,
          14.33,
          14.2,
          14.13,
          14.57,
          14.88
        ]
      },
      {
        name: "Average LM",
        color: "#a50000",
        marker: {
          symbol: "diamond"
        },
        data: [
          20.02,
          19.37,
          18.85,
          17.95,
          17.05,
          16.35,
          15.75,
          15.1,
          15.42,
          16.0,
          17.17,
          18.98,
          16.73,
          17.18,
          16.7,
          16.42,
          16.72,
          17.62,
          17.6,
          17.68,
          17.77,
          17.78,
          17.75,
          17.77
        ]
      },
      {
        name: "Maximum HH",
        data: [
          19.83,
          19.0,
          18.67,
          18.67,
          18.5,
          18.33,
          18.17,
          18.17,
          18.83,
          20.67,
          23.0,
          24.83,
          25.67,
          26.33,
          27.67,
          25.67,
          23.83,
          22.67,
          21.0,
          20.33,
          20.33,
          20.33,
          21.17,
          21.5
        ]
      },
      {
        name: "Maximum LM",
        color: "#eb7d46",
        marker: {
          symbol: "diamond"
        },
        data: [
          23.16666667,
          22.83333333,
          22.5,
          22,
          21.66666667,
          21.5,
          21,
          18.5,
          19.16666667,
          19.83333333,
          22.66666667,
          23.5,
          23.16666667,
          24.16666667,
          25.33333333,
          22.16666667,
          22.83333333,
          23.5,
          23.5,
          23.5,
          23.5,
          23.5,
          23.16666667,
          23.16666667
        ]
      }
    ]
  },
  SBTemperature2: {
    chart: {
      type: "line",
      // height: (1 / 2) * 100 + "%", // 16:9 ratio
      height: "45%"
    },
    credits: {
      enabled: false
    },
    title: {
      text: ""
    },
    subtitle: {
      text: "Maximum Temperature - 2020 winter"
    },
    yAxis: {
      title: {
        text: "Temperature"
      },
      labels: {
        formatter: function() {
          return this.value + "°";
        }
      }
    },
    legend: {
      // enabled: false,
      layout: "proximate",
      align: "right",
      verticalAlign: "middle"
    },
    series: [
      {
        name: "Maximum HH",
        data: [
          19.83333333,
          19,
          18.66666667,
          18.66666667,
          18.5,
          18.33333333,
          18.16666667,
          18.16666667,
          18.83333333,
          20.66666667,
          23,
          24.83333333,
          25.66666667,
          26.33333333,
          27.66666667,
          25.66666667,
          23.83333333,
          22.66666667,
          21,
          20.33333333,
          20.33333333,
          20.33333333,
          21.16666667,
          21.5
        ]
      },
      {
        name: "Maximum LM",
        color: "#a50000",
        marker: {
          symbol: "diamond"
        },
        data: [
          23.16666667,
          22.83333333,
          22.5,
          22,
          21.66666667,
          21.5,
          21,
          18.5,
          19.16666667,
          19.83333333,
          22.66666667,
          23.5,
          23.16666667,
          24.16666667,
          25.33333333,
          22.16666667,
          22.83333333,
          23.5,
          23.5,
          23.5,
          23.5,
          23.5,
          23.16666667,
          23.16666667
        ]
      }
    ]
  }
};
