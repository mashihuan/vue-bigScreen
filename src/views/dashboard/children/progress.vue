<template>
  <bar-chart :title="title" :chart-data="chartData" :chart-x="chartX" :config="{height: 552, chartHeight: 410}">
    <template #default>
      <ul class="count-list">
        <li class="count-item">
          <div class="desc">本月实际完成</div>
          <div class="num yellow"><span>32320</span>万元</div>
        </li>
        <li class="count-item">
          <div class="desc">本月计划完成</div>
          <div class="num yellow"><span>50500</span>万元</div>
        </li>
        <li class="count-item">
          <div class="desc">实际占比</div>
          <div class="num yellow"><span>64.6</span>%</div>
        </li>
        <li class="count-item">
          <div class="desc">累计完成</div>
          <div class="num green"><span>1280349</span>万元</div>
        </li>
        <li class="count-item">
          <div class="desc">合同造价</div>
          <div class="num red"><span>1753920</span>万元</div>
        </li>
        <li class="count-item">
          <div class="desc">累计占比</div>
          <div class="num green"><span>73.1</span>%</div>
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
      title: '进度统计',
      chartData: [
        { name: '本月实际', value: [10, 20, 30, 40, 50, 40, 30, 20, 10, 6] },
        { name: '本月计划', value: [0, 10, 20, 30, 40, 50, 40, 30, 20, 0] },
        { name: '累计计划完成', value: [20, 40, 5, 20, 30, 40, 50, 40, 30, 20] },
        { name: '累计实际完成', value: [25, 45, 55, 25, 35, 45, 55, 45, 35, 25] }
      ],
      chartX: ['1月', '2月', '1月', '2月', '1月', '2月', '1月', '2月', '1月', '2月']
    }
  }
}
</script>

<style lang="scss" scoped>
.count-list {
  flex-wrap: wrap;
  .count-item {
    flex-direction: column;
    padding: .052083rem;
    margin-bottom: .052083rem;
    .num {
      margin-top: .052083rem;
      span {
        font-size: .083333rem;
      }
    }
  }
}

</style>
