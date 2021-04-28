export default {
  props: {
    textColor: {
      type: String,
      default: 'rgba(255, 255, 255, 0.8)' // #2571D3
    }
  },
  data() {
    return {
      grid: {
        left: 0,
        top: 50,
        bottom: 15,
        right: 10,
        containLabel: true
      },
      legend: {
        right: 0,
        top: 10,
        itemWidth: 15,
        itemHeight: 8,
        textStyle: {
          color: this.textColor
        }
      },
      tooltip: {
        confine: true,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        transitionDuration: 0,
        textStyle: { color: '#222' },
        extraCssText: 'box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: this.textColor
        },
        splitLine: {
          lineStyle: {
            color: '#052147',
            type: 'dashed'
          }
        }
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: this.textColor
        },
        splitLine: {
          lineStyle: {
            color: '#052147',
            type: 'dashed'
          }
        }
      }
    }
  },
  watch: {
    chartData: {
      handler() {
        this.setOptions()
        this.hideLoading()
      },
      deep: true
    }
  },
  methods: {
    showLoading() {
      this.chart.showLoading({
        maskColor: 'none',
        text: '',
        color: '#058373'
      })
    },
    hideLoading() {
      this.chart.hideLoading()
    }
  }
}
