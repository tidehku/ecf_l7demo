export const omData = {
    SBOm1: {
        chart: {
            type: "column",
            height: (2 / 3) * 100 + "%", // 3:4 ratio
        },
        credits: {
            enabled: false,
        },
        title: {
            text: "",
        },
        subtitle: {
            tect: "by ECF at which site location",
        },
        xAxis: {
            type: "category",
            title: {
                text: "OM/tidal height",
            },
        },
        yAxis: {
            title: {
                text: "mean of organic matter",
            },
        },
        legend: {
            enabled: false,
        },
        series: [
            {
                name: "organic matter",
                showInLegend: true,
                data: [
                    ["HH", 0.003627237],
                    ["LH", 0.004842155],
                    ["HM", 0.005477579],
                    ["LM", 0.005910919],
                    ["HL", 0.005528363],
                ],
            },
        ],
    }
}