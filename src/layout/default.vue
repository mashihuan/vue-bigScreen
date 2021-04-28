<template>
  <el-container>
    <el-header>
      <app-header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import AppHeader from '@/components/header'

export default {
  name: 'Layout',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

::v-deep.el-container {
  .el-header {
    height: auto !important;
    padding: 0;
  }
  .el-main {
    padding-bottom: 0;
  }
}
</style>
