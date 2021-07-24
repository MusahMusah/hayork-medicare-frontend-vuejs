<template>
  <div>
    <Breadcrumbs main="Dashboard" title="e-commerce" />
    <div class="container-fluid">
      <div class="row size-column">
        <div class="col-xl-7 box-col-12 xl-100">
          <div class="row dash-chart">
            <div class="col-xl-6 box-col-6 col-md-6">
              <px-card slot="headerAction">
                <div slot="headerCustom">
                  <div class="media">
                    <div class="media-body">
                            <p><span class="f-w-500 font-roboto">Today Total sale</span><span class="ml-2 f-w-700 font-primary">89.21%</span></p>
                            <h4 class="mb-0 f-w-500 f-26">$<span class="counter">3000.56</span></h4>
                          </div>
                  </div>
                </div>
                <div>
                  <div class="media">
                    <div class="media-body">
                      <div class="profit-card">
                        <div id="spaline-chart">
                          <apexchart
                            height="150"
                            type="area"
                            :options="apexTotalsale.options"
                            :series="apexTotalsale.series"
                          ></apexchart>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </px-card>
            </div>
            <div class="col-xl-6 box-col-6 col-md-6">
              <div class="card o-hidden">
                <div class="card-header card-no-border">
                  <div class="card-header-right">
                    <ul class="list-unstyled card-option">
                      <li>
                        <i class="fa fa-spin fa-cog"></i>
                      </li>
                      <li>
                        <i class="view-html fa fa-code"></i>
                      </li>
                      <li>
                        <i class="icofont icofont-maximize full-card"></i>
                      </li>
                      <li>
                        <i class="icofont icofont-minus minimize-card"></i>
                      </li>
                      <li>
                        <i class="icofont icofont-refresh reload-card"></i>
                      </li>
                      <li>
                        <i class="icofont icofont-error close-card"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="media">
                    <div class="media-body">
                      <p>
                        <span class="f-w-500 font-roboto">Today Total visits</span>
                        <span class="ml-2 f-w-700 font-primary">35.00%</span>
                      </p>
                      <h4 class="mb-0 f-w-500 f-26 counter">9,050</h4>
                    </div>
                  </div>
                </div>
                <div class="pt-0 card-body">
                  <div class="monthly-visit">
                    <div id="column-chart">
                      <apexchart
                        height="105"
                        type="bar"
                        :options="apexTotalvisit.options"
                        :series="apexTotalvisit.series"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var primary = localStorage.getItem("primary_color") || "#7366ff";
var secondary = localStorage.getItem("secondary_color") || "#f73164";

export default {
  data() {
    return {
      apexTotalsale: {
        options: {
          chart: {
            height: 150,
            type: "area",
            toolbar: {
              show: false,
            },
          },
          colors: [primary, secondary],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 0,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
            ],
          },
          yaxis: {
            low: 0,
            offsetX: 0,
            offsetY: 0,
            show: false,
            labels: {
              low: 0,
              offsetX: 0,
              show: false,
            },
            axisBorder: {
              low: 0,
              offsetX: 0,
              show: false,
            },
          },
          fill: {
            type: "gradient",
            opacity: [1, 0.4, 0.25],
            gradient: {
              shade: "light",
              type: "horizontal",
              shadeIntensity: 1,
              gradientToColors: ["#a26cf8", "#a927f9", primary],
              opacityFrom: [1, 0.4, 0.25],
              opacityTo: [1, 0.4, 0.25],
              stops: [30, 100],
              colorStops: [],
            },
            colors: [primary, primary, primary],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          legend: {
            show: false,
          },
          grid: {
            show: false,
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: -40,
            },
          },
        },
        series: [
          {
            name: "series1",
            data: [280, 170, 440, 170, 270, 130],
          },
          {
            name: "series2",
            data: [150, 500, 300, 250, 420, 350],
          },
          {
            name: "series3",
            data: [450, 150, 320, 500, 280, 100],
          },
        ],
      },
      apexTotalvisit: {
        options: {
          chart: {
            height: 105,
            type: "bar",
            stacked: true,
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: "top", // top, center, bottom
              },
              columnWidth: "20%",
              startingShape: "rounded",
              endingShape: "rounded",
            },
          },
          colors: [primary],
          dataLabels: {
            enabled: false,

            formatter: function (val) {
              return val + "%";
            },
            offsetY: -10,
            style: {
              fontSize: "12px",
              colors: [primary],
            },
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            position: "bottom",

            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            crosshairs: {
              fill: {
                type: "gradient",
                gradient: {
                  colorFrom: primary,
                  colorTo: secondary,
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                },
              },
            },
            tooltip: {
              enabled: true,
            },
            labels: {
              show: false,
            },
          },
          yaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                return val + "%";
              },
            },
          },
          grid: {
            show: false,
            padding: {
              top: -35,
              right: -45,
              bottom: -20,
              left: -10,
            },
          },
        },
        series: [
          {
            name: "Inflation",
            data: [2.3, 5.1, 3.0, 9.1, 2.0, 4.6, 2.2, 9.3, 5.4, 4.8, 3.5, 5.2],
          },
        ],
      },
      apexTotalprofit: {
        options: {
          chart: {
            type: "bar",
            height: 320,
            stacked: true,
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              vertical: true,
              columnWidth: "40%",
              barHeight: "80%",
              startingShape: "rounded",
              endingShape: "rounded",
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 0,
          },
          legend: {
            show: false,
          },
          colors: [primary],
          dataLabels: {
            enabled: false,

            formatter: function (val) {
              return val + "%";
            },
            offsetY: -10,
            style: {
              fontSize: "12px",
              colors: [primary],
            },
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "July",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            labels: {
              show: true,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            min: -5,
            max: 5,
            show: false,
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          tooltip: {
            shared: true,
            x: {
              formatter: function (val) {
                return val;
              },
            },
            y: {
              formatter: function (val) {
                return Math.abs(val) + "%";
              },
            },
          },
          fill: {
            // type: 'solid',
            opacity: [0.8, 0.8, 0.2, 0.2],
            colors: [
              function ({ value, seriesIndex, w }) {
                if (value < 0.75) {
                  return primary;
                } else {
                  return secondary;
                }
              },
            ],
          },
          grid: {
            xaxis: {
              lines: {
                show: false,
              },
            },
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
        },
        series: [
          {
            name: "Daily",
            data: [
              0.4,
              0.5,
              0.6,
              0.7,
              0.8,
              0.9,
              1.1,
              1.15,
              1.2,
              1.25,
              1.3,
              1.35,
              1.4,
              1.45,
              1.5,
              1.55,
              1.5,
              1.45,
              1.4,
              1.35,
              1.3,
              1.25,
              1.2,
              1.15,
              1.1,
              1.05,
              0.9,
              0.85,
              0.8,
              0.75,
              0.7,
              0.65,
              0.6,
              0.55,
              0.5,
              0.45,
              0.4,
              0.35,
            ],
          },
          {
            name: "Weekly",
            data: [
              -0.4,
              -0.5,
              -0.6,
              -0.7,
              -0.8,
              -0.9,
              -1.1,
              -1.15,
              -1.2,
              -1.25,
              -1.3,
              -1.35,
              -1.4,
              -1.45,
              -1.5,
              -1.55,
              -1.5,
              -1.45,
              -1.4,
              -1.35,
              -1.3,
              -1.25,
              -1.2,
              -1.15,
              -1.1,
              -1.05,
              -0.9,
              -0.85,
              -0.8,
              -0.75,
              -0.7,
              -0.65,
              -0.6,
              -0.55,
              -0.5,
              -0.45,
              -0.4,
              -0.35,
            ],
          },
          {
            name: "Monthly",
            data: [
              -1.35,
              -1.45,
              -1.55,
              -1.65,
              -1.75,
              -1.85,
              -1.95,
              -2.15,
              -2.25,
              -2.35,
              -2.45,
              -2.55,
              -2.65,
              -2.75,
              -2.85,
              -2.95,
              -3.0,
              -3.1,
              -3.2,
              -3.25,
              -3.1,
              -3.0,
              -2.95,
              -2.85,
              -2.75,
              -2.65,
              -2.55,
              -2.45,
              -2.35,
              -2.25,
              -2.15,
              -1.95,
              -1.85,
              -1.75,
              -1.65,
              -1.55,
              -1.45,
              -1.35,
            ],
          },
          {
            name: "Yearly",
            data: [
              1.35,
              1.45,
              1.55,
              1.65,
              1.75,
              1.85,
              1.95,
              2.15,
              2.25,
              2.35,
              2.45,
              2.55,
              2.65,
              2.75,
              2.85,
              2.95,
              3.0,
              3.1,
              3.2,
              3.25,
              3.1,
              3.0,
              2.95,
              2.85,
              2.75,
              2.65,
              2.55,
              2.45,
              2.35,
              2.25,
              2.15,
              1.95,
              1.85,
              1.75,
              1.65,
              1.55,
              1.45,
              1.35,
            ],
          },
        ],
      },
      apexRiskchart: {
        options: {
          chart: {
            height: 350,
            type: "radialBar",
            offsetY: -10,
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              inverseOrder: true,
              hollow: {
                margin: 5,
                size: "60%",
                image: require("@/assets/images/dashboard-2/radial-image.png"),
                imageWidth: 140,
                imageHeight: 140,
                imageClipped: false,
              },
              track: {
                opacity: 0.4,
                colors: primary,
              },
              dataLabels: {
                enabled: false,
                enabledOnSeries: undefined,
                formatter: function (val, opts) {
                  return val + "%";
                },
                textAnchor: "middle",
                distributed: false,
                offsetX: 0,
                offsetY: 0,
                style: {
                  fontSize: "14px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fill: ["#2b2b2b"],
                },
              },
            },
          },
          labels: ["Selling rate"],
          colors: [primary],
          stroke: {
            dashArray: 15,
            strokecolor: ["#ffffff"],
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "light",
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
              gradientToColors: ["#a927f9"],
              type: "horizontal",
            },
          },
        },
        series: [70],
      },
    };
  }
};
</script>