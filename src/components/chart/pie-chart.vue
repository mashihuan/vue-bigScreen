<template>
  <div class="chart-wrapper">
    <div class="chart-inner" :style="{height: innerHeight}">
      <h4 class="title">{{ title }}</h4>
      <div ref="myChart" class="Chart" :style="{height: chartHeight}" />
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
      this.showLoading()
      this.setOptions()
    },
    setOptions() {
      this.chart.setOption({
        color: colors,
        title: {
          text: this.title,
          left: 'center',
          top: 'middle'
        },
        grid: this.grid,
        tooltip: {
          ...this.tooltip,
          trigger: 'item',
          formatter(param) {
            return `${param.marker} ${param.name}：${param.value}<br/>${param.percent}%`
          }
        },
        series: [
          {
            type: 'pie',
            data: this.chartData,
            radius: ['60%', '80%'],
            minAngle: 10,
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 5
            },
            label: {
              show: true,
              position: 'outer',
              alignTo: 'none',
              bleedMargin: 0
            }
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
</style>
