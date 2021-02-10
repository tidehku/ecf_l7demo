<template>
  <div>
    <!-- 所有地图数据详情见：https://img.hcharts.cn/mapdata/index.html -->
    <script src="https://img.hcharts.cn/mapdata/countries/us/us-all.js"></script>
    <link
      href="https://img.hcharts.cn/libs/font-awesome/css/font-awesome.css"
      rel="stylesheet"
    />
    <div
      id="container"
      style="height: 500px; min-width: 310px; max-width: 800px; margin: 0 auto"
    ></div>
    <!-- 所有地图数据详情见：https://img.hcharts.cn/mapdata/index.html -->
    <script src="https://img.hcharts.cn/mapdata/countries/us/us-all.js"></script>
    <link
      href="https://img.hcharts.cn/libs/font-awesome/css/font-awesome.css"
      rel="stylesheet"
    />
    <div
      id="container"
      style="height: 500px; min-width: 310px; max-width: 800px; margin: 0 auto"
    ></div>

    <!-- Highcharts的CDN资源 -钻取图依赖jquery.js和highcharts.js ,有顺序要求 -->
    <script src="http://cdn.highcharts.com.cn/highcharts/highcharts.js"></script>
    <script src="http://cdn.highcharts.com.cn/highcharts/modules/drilldown.js"></script>
    <!-- 下面是实现highcharts图表导出功能需要依赖的资源-->
    <script src="http://cdn.highcharts.com.cn/highcharts/highcharts-more.js"></script>
    <script src="http://cdn.highcharts.com.cn/highcharts/modules/exporting.js"></script>
    <script src="http://cdn.hcharts.cn/highcharts/modules/drilldown.js"></script>
  </div>
</template>

<script>
export default {};
/*
TODO:
- Check data labels after drilling. Label rank? New positions?
- Not US Mainland text
- Separators
*/
var data = Highcharts.geojson(Highcharts.maps["countries/us/us-all"]),
  container = document.getElementById("container"),
  // Some responsiveness
  small = container.clientWidth < 400;
// Set drilldown pointers
Highcharts.each(data, function (d, i) {
  d.drilldown = d.properties["hc-key"];
  d.value = i; // Non-random bogus data
});
// Instanciate the map
Highcharts.mapChart(container, {
  chart: {
    events: {
      drilldown: function (e) {
        if (!e.seriesOptions) {
          var chart = this,
            mapKey = "countries/us/" + e.point.drilldown + "-all",
            // Handle error, the timeout is cleared on success
            fail = setTimeout(function () {
              if (!Highcharts.maps[mapKey]) {
                chart.showLoading(
                  '<i class="icon-frown"></i> Failed loading ' + e.point.name
                );
                fail = setTimeout(function () {
                  chart.hideLoading();
                }, 1000);
              }
            }, 3000);
          // Show the spinner
          chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>'); // Font Awesome spinner
          // Load the drilldown map
          $.getScript(
            "https://img.hcharts.cn/mapdata/" + mapKey + ".js",
            function () {
              data = Highcharts.geojson(Highcharts.maps[mapKey]);
              // Set a non-random bogus value
              $.each(data, function (i) {
                this.value = i;
              });
              // Hide loading and add series
              chart.hideLoading();
              clearTimeout(fail);
              chart.addSeriesAsDrilldown(e.point, {
                name: e.point.name,
                data: data,
                dataLabels: {
                  enabled: true,
                  format: "{point.name}",
                },
              });
            }
          );
        }
        this.setTitle(null, { text: e.point.name });
      },
      drillup: function () {
        this.setTitle(null, { text: "USA" });
      },
    },
  },
  title: {
    text: "Highcharts Map Drilldown",
  },
  subtitle: {
    text: "USA",
    floating: true,
    align: "right",
    y: 50,
    style: {
      fontSize: "16px",
    },
  },
  legend: small
    ? {}
    : {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
      },
  colorAxis: {
    min: 0,
    minColor: "#E6E7E8",
    maxColor: "#005645",
  },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: "bottom",
    },
  },
  plotOptions: {
    map: {
      states: {
        hover: {
          color: "#EEDD66",
        },
      },
    },
  },
  series: [
    {
      data: data,
      name: "USA",
      dataLabels: {
        enabled: true,
        format: "{point.properties.postal-code}",
      },
    },
  ],
  drilldown: {
    //series: drilldownSeries,
    activeDataLabelStyle: {
      color: "#FFFFFF",
      textDecoration: "none",
      textShadow: "0 0 3px #000000",
    },
    drillUpButton: {
      relativeTo: "spacingBox",
      position: {
        x: 0,
        y: 60,
      },
    },
  },
});
</script>

<style>
</style>