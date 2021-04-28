<template>
  <div class="chart-wrapper">
    <div class="chart-inner" :style="{height: innerHeight}">
      <div class="header">
        <h4 class="title">{{ title }}</h4>
      </div>
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
    colors: {
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
          type: 'bar',
          data: item.value,
          name: item.name,
          barWidth: 5
        }
      })
      this.chart.setOption({
        color: this.colors.length ? this.colors : colors,
        legend: {
          ...this.legend,
          itemWidth: 8,
          itemHeight: 8
        },
        grid: {
          ...this.grid
        },
        xAxis: {
          ...this.xAxis,
          data: this.chartX,
          type: this.config.yAxisType === 'category' ? 'value' : 'category'
        },
        yAxis: {
          ...this.yAxis,
          type: this.config.yAxisType || 'value',
          data: this.chartX
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
