export const BarChart = {
         chart: {
           type: "column",
           height: (2 / 3) * 100 + "%" // 3:4 ratio
         },
         credits: {
           enabled: false
         },
         title: {
           text: ""
         },
         subtitle: {
           tect: "by ECF at which site location"
         },
         xAxis: {
           type: "category",
           labels: {
             rotation: -45
           }
         },
         yAxis: {
           min: 0,
           title: {
             text: "Abundance"
           }
         },
         legend: {
           enabled: false
         },
         series: [
           {
             name: "Species Abundance",
             showInLegend: true,
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
