<template>
  <div class="chart-wrapper">
    <div class="chart-inner" :style="{height: innerHeight}">
      <h4 class="header">
        <span class="title">{{ title }}</span>
      </h4>
      <slot />
      <div ref="myChart" class="chart" :style="{height: chartHeight}" />
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import resize from '@/common/mixins/resize'
import config from '@/common/mixins/config'
import { colors } from '@/common/config'

export default {
  mixins: [resize, config],
  props: {
    config: {
      type: Object,
      default() {
        return {}
      }
    },
    chartData: {
      type: Array,
      default() {
        return []
      }
    },
    chartX: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myChart)
      // this.showLoading()
      this.setOptions()
    },
    setOptions() {
      const series = this.chartData.map(item => {
        return {
          type: 'line',
          stack: true,
          data: item.value,
          name: item.name,
          symbol: 'circle',
          showSymbol: false,
          symbolSize: 2,
          areaStyle: {
            opacity: 0.2
          }
        }
      })
      this.chart.setOption({
        color: colors,
        grid: this.grid,
        legend: this.legend,
        xAxis: {
          ...this.xAxis,
          data: this.chartX,
          name: this.unit,
          boundaryGap: false
        },
        yAxis: {
          ...this.yAxis,
          type: 'value'
        },
        tooltip: {
          ...this.tooltip,
          trigger: 'axis'
        },
        series: series
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
</style>
