<template>
  <div class="chart-wrapper">
    <div class="chart-inner" :style="{height: innerHeight}">
      <div class="header">
        <h4 class="title">{{ title }}</h4>
      </div>
      <div class="risk-list">
        <div v-for="item of 5" :key="item" class="risk-item">
          <div class="risk-item-header">
            <span class="tag">预警</span>
            <span class="name">某站点工程</span>
            <span class="time">2021/04/01</span>
          </div>
          <div class="risk-item-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resize from '@/common/mixins/resize'
import config from '@/common/mixins/config'

export default {
  mixins: [resize, config],
  data() {
    return {
      title: '风险预警'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
.risk-list {
  height: calc(100% - .135417rem);
  overflow: auto;
  .risk-item {
    margin-bottom: .026042rem;
    .risk-item-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgba(255, 255, 255, 0.8);
      font-size: 12px;
      .tag {
        display: inline-block;
        padding: 2px;
        border: 1px solid red;
        color: red;
      }
      .name {
        flex: 1;
        margin-left: 10px;
      }
    }
    .risk-item-body {
      margin-top: 5px;
      color: #fff;
    }
  }
}
</style>
