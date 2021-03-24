export const PieChart = {
         credits: {
           enabled: false
         },
         chart: {
           plotBackgroundColor: null,
           plotBorderWidth: null,
           plotShadow: false,
           type: "pie",
           height: (1 / 1) * 100 + "%" // 3:4 ratio
         },
         title: {
           text: ""
         },
         tooltip: {
           pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
         },
         accessibility: {
           point: {
             valueSuffix: "%"
           }
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
             name: "Brands",
             colorByPoint: true,
             colors: [
               "#058DC7",
               "#50B432",
               "#ED561B",
               "#DDDF00",
               "#24CBE5",
               "#64E572",
               "#FF9655",
               "#FFF263",
               "#6AF9C4",
               
             ],
             data: [
               ["species1", 3],
               ["species2", 10],
               ["species3", 5],
               ["species4", 15],
               ["species5", 3],
               ["species6", 5],
               ["species7", 2],
               ["species8", 16],
               ["species9", 10],
               ["species10", 2],
               ["species11", 12],
               ["species12", 19],
               ["species13", 6],
               ["species14", 1],
               ["species15", 5]
             ]
           }
         ]
       };
