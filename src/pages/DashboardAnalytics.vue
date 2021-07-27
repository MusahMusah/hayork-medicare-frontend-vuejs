<template>
  <div>
    <Breadcrumbs title="DashBoard" />
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4 col-xl-4 col-md-4">
          <px-card class="bg-primary static-top-widget-card">
            <div slot="with-padding">
              <div class="media static-top-widget">
                <div class="text-center align-self-center">
                  <feather type="users" class="middle"></feather>
                </div>
                <div class="media-body">
                  <span class="m-0">Doctors</span>
                  <h4 class="mb-0 counter">{{dashboardData.doctorsCounts}}</h4>
                  <feather type="users" class="icon-bg"></feather>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-sm-4 col-xl-4 col-md-4">
          <px-card class="bg-secondary static-top-widget-card">
            <div slot="with-padding">
              <div class="media static-top-widget">
                <div class="text-center align-self-center">
                  <i class="fa fa-users middle" style="font-size: 2em"></i>
                </div>
                <div class="media-body">
                  <span class="m-0">Patients</span>
                  <h4 class="mb-0 counter">{{dashboardData.patientCounts}}</h4>
                </div>
              </div>
            </div>
          </px-card>
        </div>
        <div class="col-sm-4 col-xl-4 col-md-4">
          <px-card class="bg-primary static-top-widget-card">
            <div slot="with-padding">
              <div class="media static-top-widget">
                <div class="text-center align-self-center">
                  <feather type="navigation" class="middle"></feather>
                </div>
                <div class="media-body">
                  <span class="m-0">Total Encounter</span>
                  <h4 class="mb-0 counter">{{dashboardData.totalEncounter}}</h4>
                  <feather type="navigation" class="icon-bg"></feather>
                </div>
              </div>
            </div>
          </px-card>
        </div>
      </div>
       <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header card-no-border">
              <h5>Patient Analytics by Gender</h5>
            </div>
            <div class="card-body chart-block">
              <GChart
                class="chart-overflow"
                id="pie-chart2"
                type="PieChart"
                :data="dashboardData.analyticsByGender"
                :options="pie_chart.options_2"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row size-column">
        <div class="col-xl-7 box-col-12 xl-100">
          <div class="row dash-chart">
            <div class="col-md-12">
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
                      <h4 class="f-w-500 font-roboto">
                        Patients Analytics by age
                      </h4>
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
                        :series="[{ 
                          name: 'age',
                          data: dashboardData.analyticsByAge.data
                          }]"
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
    <!-- Container-fluid Ends-->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { GChart } from "vue-google-charts";
var primary = localStorage.getItem("primary_color") || "#7366ff";
var secondary = localStorage.getItem("secondary_color") || "#f73164";

export default {
  name: "Dashboard",
  components: { GChart },
  data: () => ({
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
            "(0-10) years",
            "(11-20) years",
            "(21-30) years",
            "(31-40) years",
            "(41-50) years",
            "(51-60) years",
            "(61-70) years",
            "(71-80) years",
            "(81-90) years",
            "(91- Above)",
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
          name: "",
          data: [2.3, 5.1, 3.0, 9.1, 2.0, 4.6, 2.2, 9.3, 5.4, 4.8, 3.5, 5.2],
        },
      ],
    },
    pie_chart: {
      chartData_1: [
        ["Task", "Hours per Day"],
        ["Male", 200],
        ["Female", 300],
      ],
      options_2: {
        title: "Daily Analytics",
        is3D: true,
        width: "100%",
        height: 400,
        colors: ["#7366ff", "#f73164", "#51bb25", "#007bff", "#FF5370"],
      },
    },
  }),
  computed: {
    ...mapState({
      dashboardData: state => state.healthworkers.analyticsData,
      activeUser: (state) => state.auth.user,
    })
  },
  created() {
    if (!this.activeUser.is_health_worker) {
      this.$router.replace({ name: "user-account", params:{ id: this.activeUser.id } }).catch(() => {})
    }
    this.getAnalyticsData()
  },
  methods: {
    ...mapActions({
      getAnalyticsData: 'healthworkers/getAnalyticsData'
    })
  }
};
</script>