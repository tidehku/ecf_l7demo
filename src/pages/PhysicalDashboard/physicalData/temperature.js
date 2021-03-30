export const tempData = {
    SBTemperature1: {
        chart: {
            type: "line",
            // height: (1 / 2) * 100 + "%", // 16:9 ratio
            height: '48%'
        },
        credits: {
            enabled: false,
        },
        title: {
            text: "",
        },
        subtitle: {
            text: "2020 Winter Mean Temperature",
        },
        yAxis: {
            title: {
                text: "Temperature",
            },
            labels: {
                formatter: function () {
                    return this.value + "°";
                },
            },
        },
        legend: {
            enabled: false,
            // layout: "proximate",
            // align: "right",
            // verticalAlign: "middle",
        },
        series: [
            {
                name: "HH",
                data: [
                    16.68333333,
                    16.03333333,
                    15.6,
                    15.26666667,
                    15.05,
                    14.75,
                    14.6,
                    14.33333333,
                    15.08333333,
                    15.9,
                    17.06666667,
                    18.26666667,
                    17.21666667,
                    18.13333333,
                    18.71666667,
                    18.41666667,
                    16.96666667,
                    15.91666667,
                    14.81666667,
                    14.33333333,
                    14.2,
                    14.13333333,
                    14.51666667,
                    14.88333333,
                ],
            },
            {
                name: "LM",
                color: "indigo",
                marker: {
                    symbol: "diamond",
                },
                data: [
                    20.01666667,
                    19.36666667,
                    18.85,
                    17.95,
                    17.05,
                    16.35,
                    15.75,
                    15.1,
                    15.41666667,
                    16,
                    17.16666667,
                    18.98333334,
                    16.73333334,
                    17.18333333,
                    16.7,
                    16.41666667,
                    16.71666667,
                    17.61666667,
                    17.6,
                    17.68333333,
                    17.76666667,
                    17.78333333,
                    17.75,
                ],
            },
        ],
    },
    SBTemperature2: {
        chart: {
            type: "line",
            // height: (1 / 2) * 100 + "%", // 16:9 ratio
            height: '60%'
        },
        credits: {
            enabled: false,
        },
        title: {
            text: "",
        },
        subtitle: {
            text: "2020 Winter Maximum Temperature",
        },
        yAxis: {
            title: {
                text: "Temperature",
            },
            labels: {
                formatter: function () {
                    return this.value + "°";
                },
            },
        },
        series: [
            {
                name: "HH",
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
                    21.5,
                ],
            },
            {
                name: "LM",
                color: "indigo",
                marker: {
                    symbol: "diamond",
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
                    23.16666667,
                ],
            },
        ],
    },
}