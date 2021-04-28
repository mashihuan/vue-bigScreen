<template>
  <bar-chart :title="title" :chart-data="chartData" :chart-x="chartX">
    <template #default>
      <ul class="count-list">
        <li class="count-item">
          <div class="desc">闭环率</div>
          <div class="num green"><span>98</span>%</div>
        </li>
        <li class="count-item">
          <div class="desc">检查次数</div>
          <div class="num blue"><span>30</span>次</div>
        </li>
        <li class="count-item">
          <div class="desc">发现问题数</div>
          <div class="num red"><span>20</span>次</div>
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
      title: '文明施工统计',
      chartData: [
        { name: '发现问题数', value: [10, 20, 30, 40, 50, 40, 30, 20, 10, 6] },
        { name: '已闭环数', value: [0, 10, 20, 30, 40, 50, 40, 30, 20, 0] }
      ],
      chartX: ['1月', '2月', '1月', '2月', '1月', '2月', '1月', '2月', '1月', '2月']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
