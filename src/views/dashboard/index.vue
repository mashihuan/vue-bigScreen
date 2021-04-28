<template>
  <div>
    <el-row :gutter="10">
      <el-col :md="4">
        <!-- 人员统计 -->
        <Personnel />
        <!-- 机械统计 -->
        <Machine />
        <!-- 设备统计 -->
        <Equipment />
      </el-col>
      <el-col :md="4">
        <!-- 进度统计 -->
        <Progress />
        <!-- 质量统计 -->
        <Quality />
      </el-col>
      <el-col :md="8">
        <!-- BIM -->
        <bim-model />
        <!-- 今日实时数据 -->
        <CurrentData />
      </el-col>
      <el-col :md="4">
        <!-- 风险预警 -->
        <Risk />
        <!-- 安全统计 -->
        <Safety />
        <!-- 文明施工统计 -->
        <Construction />
      </el-col>
      <el-col :md="4">
        <!-- 报警检测统计 -->
        <Alarm />
        <!-- 视频监控统计 -->
        <Video />
        <!-- 盾构检测统计 -->
        <Shield />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Personnel from './children/personnel' // 人员统计
import Machine from './children/mechine' // 机械统计
import Equipment from './children/equipment' // 设备材料统计
import Progress from './children/progress' // 进度统计
import Quality from './children/quality' // 质量统计
import BimModel from './children/BIM-model' // BIM model
import CurrentData from './children/current-data' // 今日实时数据
import Risk from './children/risk' // 风险预警
import Safety from './children/safety' // 安全统计
import Construction from './children/construction' // 文明施工统计
import Alarm from './children/alarm' // 报警检测统计
import Video from './children/video' // 视频监控统计
import Shield from './children/shield' // 盾构检测统计

export default {
  components: {
    Personnel,
    Machine,
    Equipment,
    Progress,
    Quality,
    BimModel,
    CurrentData,
    Risk,
    Safety,
    Construction,
    Alarm,
    Video,
    Shield
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 992px) {
  .el-col-md-4 {
    width: 18.5%;
  }
  .el-col-md-8 {
    width: 26%;
  }
}
</style>
