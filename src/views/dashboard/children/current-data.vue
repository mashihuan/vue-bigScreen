<template>
  <div class="chart-wrapper">
    <div class="chart-inner">
      <div class="header">
        <h4 class="title">{{ title }}</h4>
      </div>
      <div class="data-list">
        <div class="data-item">
          <div class="desc text-ellipsis">质量检查</div>
          <count-to class="count" :end-val="100" />
        </div>
        <div class="data-item">
          <div class="desc text-ellipsis">安全检查</div>
          <count-to class="count" :end-val="80" />
        </div>
        <div class="data-item">
          <div class="desc text-ellipsis">文明施工</div>
          <count-to class="count" :end-val="80" />
        </div>
        <div class="data-item">
          <div class="desc">检测报警</div>
          <count-to class="count" :end-val="66" />
        </div>
        <div class="data-item">
          <div class="desc">盾构推进</div>
          <count-to class="count" :end-val="40" />
        </div>
        <div class="data-item">
          <div class="desc">在场人员</div>
          <count-to class="count" :end-val="107" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resize from '@/common/mixins/resize'
import config from '@/common/mixins/config'

import countTo from 'vue-count-to'

export default {
  components: {
    countTo
  },
  mixins: [resize, config],
  data() {
    return {
      title: '今日实时数据'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/chart.scss';
.chart-inner {
  /* height: 130px; */
  height: .677083rem !important;
  .data-list {
    display: flex;
    align-self: center;
    justify-content: space-between;
    margin-top: .078125rem;
    .data-item {
      width: 16.66%;
      text-align: center;
      .desc {
        width: 100%;
        font-size: .072917rem;
        color: rgba(255, 255, 255, 0.8);
      }
      .count {
        display: inline-block;
        margin-top: .078125rem;
        font-size: .239583rem;
        font-weight: bold;
        font-family: electronicFont;
        color: #ffeb7b;
      }
    }
  }
}
</style>
