<template>
  <line-chart :title="title" :chart-data="chartData" :chart-x="chartX">
    <template #default>
      <ul class="count-list">
        <li class="count-item">
          <div class="desc">人员在岗率</div>
          <div class="num green"><span>90</span>%</div>
        </li>
        <li class="count-item">
          <div class="desc">人员总数</div>
          <div class="num blue">89</div>
        </li>
        <li class="count-item">
          <div class="desc">周平均时长</div>
          <div class="num yellow">89</div>
        </li>
      </ul>
    </template>
  </line-chart>
</template>

<script>

import LineChart from '@/components/chart/line-chart'

export default {
  components: {
    LineChart
  },
  data() {
    return {
      title: '人员统计',
      chartData: [
        { name: '现场管理', value: [10, 20, 30, 40, 50, 40, 30, 20, 10, 6] },
        { name: '现场特种', value: [0, 10, 20, 30, 40, 50, 40, 30, 20, 0] },
        { name: '现场劳务', value: [20, 40, 5, 20, 30, 40, 50, 40, 30, 20] }
      ],
      chartX: ['1月', '2月', '1月', '2月', '1月', '2月', '1月', '2月', '1月', '2月']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
