<template>
  <bar-chart :title="title" :chart-data="chartData" :chart-x="chartX">
    <template #default>
      <ul class="count-list">
        <li class="count-item">
          <div class="desc">处理率</div>
          <div class="num green"><span>20</span>%</div>
        </li>
        <li class="count-item">
          <div class="desc">现有报警</div>
          <div class="num red"><span>0</span>个</div>
        </li>
        <li class="count-item">
          <div class="desc">已消</div>
          <div class="num green"><span>1000</span>个</div>
        </li>
        <li class="count-item">
          <div class="desc">总报警</div>
          <div class="num yellow"><span>21</span>个</div>
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
      title: '报警检测统计',
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
.count-item {
  width: 23% !important;
}
</style>
