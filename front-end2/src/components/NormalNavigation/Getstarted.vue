<template>
  <div class="small">
 <line-chart :chartdata="chartData" :options="chartOptions"/>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    data: () => ({
      chartdata: {
        datacollection: {
          labels: ['January', 'February'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [40, 20]
            }
          ]
        }
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }),
    mounted () {
      this.renderChart(this.datacollection, this.options)
    },
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>