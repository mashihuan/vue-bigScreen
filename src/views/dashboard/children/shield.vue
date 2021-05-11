<template>
  <bar-chart :title="title" :chart-data="chartData" :chart-x="chartX" :config="{chartHeight: 200}">
    <template #default>
      <ul class="count-list">
        <li class="count-item">
          <div class="desc">完成度</div>
          <div class="num green"><span>20.7</span>%</div>
        </li>
        <li class="count-item">
          <div class="desc">累计推进</div>
          <div class="num red"><span>30</span>环</div>
        </li>
        <li class="count-item">
          <div class="desc">总环数</div>
          <div class="num green"><span>10</span>环</div>
        </li>
      </ul>
      <el-progress
        :text-inside="true"
        :stroke-width="16"
        :percentage="20.7"
      />
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
      title: '盾构检测统计',
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
.el-progress {
  margin-top: .026042rem;
}
</style>
