<template>
  <bar-chart :title="title" :chart-data="chartData" :chart-x="chartX" :colors="colors">
    <template #default>
      <ul class="count-list">
        <li class="count-item">
          <div class="desc">总合格率</div>
          <div class="num green"><span>90</span>%</div>
        </li>
        <li class="count-item">
          <div class="desc">总交货</div>
          <div class="num blue"><span>30</span>次</div>
        </li>
        <li class="count-item">
          <div class="desc">合格交货</div>
          <div class="num yellow"><span>20</span>次</div>
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
      title: '设备材料统计',
      chartData: [
        { name: '交货', value: [10, 20, 30, 40, 50, 40, 30, 20, 10, 6] },
        { name: '合格次数统计', value: [0, 10, 20, 30, 40, 50, 40, 30, 20, 0] }
      ],
      chartX: ['1月', '2月', '1月', '2月', '1月', '2月', '1月', '2月', '1月', '2月'],
      colors: ['#235EA8', '#187B6E']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
