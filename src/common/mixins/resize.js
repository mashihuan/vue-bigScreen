import { debounce } from '@/utils'

export default {
  props: {
    config: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      htmlFontSize: 0
    }
  },
  computed: {
    // 大屏  1920  ->  1rem = 192px  height = 370px 以此为基准
    // 中屏  1366  ->  1rem = 128px  height = ?px
    // 动态计算图表高度(px)   height = height / (192/htmlFontSize)
    // rem    height = height / htmlFontSize
    innerHeight() {
      if (this.config.height) {
        return (this.config.height / (192 / this.htmlFontSize)) / this.htmlFontSize + 'rem'
      } else {
        return (270 / (192 / this.htmlFontSize)) / this.htmlFontSize + 'rem'
      }
    },
    chartHeight() {
      if (this.config.chartHeight) {
        return (this.config.chartHeight / (192 / this.htmlFontSize)) / this.htmlFontSize + 'rem'
      }
      if (this.config.height) {
        return ((this.config.height - 50) / (192 / this.htmlFontSize)) / this.htmlFontSize + 'rem'
      } else {
        return (220 / (192 / this.htmlFontSize)) / this.htmlFontSize + 'rem'
      }
    }
  },
  watch: {
    'config.height': {
      handler() {
        this._resizeHandler()
      }
    },
    chartLabelColor() {
      this.setOptions()
    },
    chartLineColor() {
      this.setOptions()
    }
  },
  mounted() {
    this._getHtmlFontSize()
    this._resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    this._resizeHandler()
    this._initResizeEvent()
  },
  beforeDestroy() {
    this._destroyResizeEvent()
    this.chart = null
  },
  methods: {
    _getHtmlFontSize() {
      const htmlFontSize = document.documentElement.style.fontSize.replace('px', '')
      this.htmlFontSize = htmlFontSize
    },
    _initResizeEvent() {
      window.addEventListener('resize', this._resizeHandler)
    },
    _destroyResizeEvent() {
      window.removeEventListener('resize', this._resizeHandler)
    }
  }
}
