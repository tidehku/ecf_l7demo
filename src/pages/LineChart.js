export const LineChart = {
         lineChart1: {
           chart: {
             type: "spline",
             height: (1 / 2) * 100 + "%" // 16:9 ratio
           },
           credits: {
             enabled: false
           },
           title: {
             text: ""
           },
           subtitle: {
             text: "Summer"
           },
           series: [
             {
               showInLegend: false,
               data: [10, 6, 8, 2, 8, 4, 6, 7]
             }
           ]
         },
        //  lineChart2: {
        //    chart: {
        //      type: "spline",
        //      height: (1 / 2) * 100 + "%" // 16:9 ratio
        //    },
        //    credits: {
        //      enabled: false
        //    },
        //    title: {
        //      text: ""
        //    },
        //    subtitle: {
        //      text: "Winter"
        //    },
        //    series: [
        //      {
        //        showInLegend: false,
        //        data: [2, 3, 9, 5, 6, 4, 1, 2]
        //      }
        //    ]
        //  }
       };
