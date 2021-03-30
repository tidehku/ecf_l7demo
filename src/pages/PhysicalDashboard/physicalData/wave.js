export const waveData = {
    SBWaveFetch1: {
        chart: {
            type: "scatter",
            height: (1 / 1) * 100 + "%", // 16:9 ratio
        },
        credits: {
            enabled: false,
        },
        title: {
            text: "",
        },
        subtitle: {
            text: "2020 winter",
        },
        xAxis: {
            title: {
                text: "Force",
            },
        },
        yAxis: {
            title: {
                text: "Percentile",
            },
        },
        legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle",
        },
        series: [
            {
                showInLegend: false,
                name: "2020 winter",
                data: [
                    [0.0033667, 0],
                    [0.1023107, 5],
                    [0.112116, 25],
                    [0.153094, 50],
                    [0.1864048, 75],
                    [0.1929679, 90],
                    [0.2431723, 95],
                    [0.2591848, 95.5],
                    [0.3711364, 97.5],
                    [0.5488238, 99],
                    [0.8391194, 99.5],
                    [1.8295005, 100],
                ],
            },
        ],
    }
}