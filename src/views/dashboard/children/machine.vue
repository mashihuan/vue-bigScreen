<template>
  <bar-chart :title="title" :chart-data="chartData" :chart-x="chartX" :config="{yAxisType: 'category'}">
    <template #default>
      <ul class="count-list">
        <li class="count-item">
          <div class="desc">问题率</div>
          <div class="num red"><span>20</span>%</div>
        </li>
        <li class="count-item">
          <div class="desc">整改率</div>
          <div class="num green"><span>89</span>%</div>
        </li>
        <li class="count-item">
          <div class="desc">在场</div>
          <div class="num green"><span>1000</span>台</div>
        </li>
        <li class="count-item">
          <div class="desc">离场</div>
          <div class="num yellow"><span>300</span>台</div>
        </li>
      </ul>
    </template>
  </bar-chart>
</template>

<script>
import BarChart from '@/components/chart/bar-chart'

export default {
  components: {
    BarChart
  },
  data() {
    return {
      title: '机械统计',
      chartData: [
        { name: '检查次数', value: [10, 20, 30, 40, 50, 40, 30, 20, 10, 6] },
        { name: '发现问题数', value: [0, 10, 20, 30, 40, 50, 40, 30, 20, 0] },
        { name: '已整改数', value: [20, 40, 5, 20, 30, 40, 50, 40, 30, 20] }
      ],
      chartX: ['1月', '2月', '1月', '2月', '1月', '2月', '1月', '2月', '1月', '2月']
    }
  }
}
</script>

<style lang="scss" scoped>
.count-item {
  width: 23% !important;
}
</style>
