<template>
  <div class="chart-wrapper">
    <div class="chart-inner">
      <div id="domId" ref="domId" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import resize from '@/common/mixins/resize'
import config from '@/common/mixins/config'

export default {
  mixins: [resize, config],
  data() {
    return {
      title: '',
      viewToken: '24448941b05340968a92ae84a2a0812a',
      viewer3D: '',
      app: '',
      viewAdded: false,
      modelId: '1641597995361472'
    }
  },
  mounted() {
    const options = new BimfaceSDKLoaderConfig()
    options.viewToken = this.viewToken
    BimfaceSDKLoader.load(options, this.successCallback, this.failureCallback)
  },
  methods: {
    // 加载成功回调函数
    successCallback(viewMetaData) {
      if (viewMetaData.viewType == '3DView') {
        // ======== 判断是否为3D模型 ========
        // 获取DOM元素
        const dom4Show = this.$refs.domId
        const webAppConfig = new Glodon.Bimface.Application.WebApplication3DConfig()
        webAppConfig.domElement = dom4Show
        // 创建WebApplication
        this.app = new Glodon.Bimface.Application.WebApplication3D(webAppConfig)
        // 添加待显示的模型
        this.app.addView(this.viewToken)
        // 从WebApplication获取viewer3D对象
        this.viewer3D = this.app.getViewer()
        // 监听添加view完成的事件
        this.viewer3D.addEventListener(Glodon.Bimface.Viewer.Viewer3DEvent.ViewAdded, () => {
          this.viewAdded = true
          // 自适应屏幕大小
          window.onresize = () => {
            this.viewer3D.resize(document.documentElement.clientWidth, document.documentElement.clientHeight - 40)
          }
          // 渲染3D模型
          this.viewer3D.render()
        })
      }
    },
    // 加载失败回调
    failureCallback(error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
.chart-inner {
  /* height: 690px; */
  height: 3.609375rem !important;
  padding: .052083rem !important;
  #domId {
    width: 100%;
    height: 100%;
  }
}

@media screen and(max-width: 992px) {
  .chart-inner {
    height: 600px !important;
    overflow-x: auto;
  }
  .chart {
    height: 600px !important;
  }
}
</style>
