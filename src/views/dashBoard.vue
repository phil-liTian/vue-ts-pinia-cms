<template>
  <div class="dashBoard">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="mb20" shadow="hover" style="height: 252px"></el-card>
        <el-card shadow="hover" style="height: 252px"></el-card>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col></el-col>
          <el-col></el-col>
          <el-col></el-col>
        </el-row>
        <el-card shadow="hover" style="height: 403px"></el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card></el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.dashBoard {
  height: 100%;
  background-color: #f0f0f0;

  .mb20 {
    margin-bottom: 20px;
  }

  .el-row {
    margin-bottom: 20px;
  }
}
</style>
