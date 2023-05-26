<template>
  <div class="dashBoard">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="mb20" shadow="hover" style="height: 252px">个人简介</el-card>
        <el-card shadow="hover" style="height: 252px">知识体系</el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card shadow="hover" class="grid_content"></el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" class="grid_content"></el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" class="grid_content"></el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height: 403px">涉及知识点</el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover"></el-card>
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

  .grid_content {
    height: 100px;
  }
}
</style>
