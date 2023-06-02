<template>
  <div class="dashBoard">
    <el-row :gutter="25">
      <el-col :span="8">
        <el-card class="mb20" shadow="hover" style="height: 300px">
          <div class="user-info">
            <el-avatar :src="avatarUrl" :size="120"></el-avatar>
            <div class="user-info-base">
              <div>{{ userName }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="login-info">
            <div>上次登录时间: 2023-06-02 09:51</div>
            <div>上次登录地点: 上海市</div>
          </div>
        </el-card>
        <el-card shadow="hover" style="height: 300px">
          <template #header>语言</template>
          Vue<el-progress :percentage="80" color="#1989fa"></el-progress>
          TypeScript<el-progress :percentage="20"></el-progress>
          Css<el-progress :percentage="60" color="#5cb87a"></el-progress>
          Html<el-progress :percentage="60" color="#5cb87a"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid_content">
                <el-icon class="grid-con-icon grid-con-1"> <User /> </el-icon>
                <div class="grid-cont-right">
                  <div class="grid-num-1">999</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid_content">
                <el-icon class="grid-con-icon grid-con-2"> <Goods /> </el-icon>
                <div class="grid-cont-right">
                  <div class="grid-num-2">8888</div>
                  <div>商品数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid_content">
                <el-icon class="grid-con-icon grid-con-3"> <ChatDotRound /> </el-icon>
                <div class="grid-cont-right">
                  <div class="grid-num-3">1</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height: 503px">
          <template #header>涉及知识点</template>
          <lt-checkbox :dataList="knowPoints" v-model="checkedPoints"></lt-checkbox>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import avatarUrl from '@/assets/imgs/phil.png'
import { ref } from 'vue'
const userName = localStorage.getItem('cms_username') || 'user'
const role = { admin: '超级管理员', user: '普通用户' }[userName]
const knowPoints = [
  { label: '使用pinia实现状态管理, 允许跨组件/页面实现状态共享', key: '1' },
  { label: 'mock.js 是一款模拟数据生成器，帮助前端人员独立于后端进行开发', key: '2' },
  { label: '使用vue.use方法进行插件开发, 第二个参数是传递给插件的选项，使用插件的方式处理基础组件、指令等', key: '3' },
  { label: '使用md-editor-v3实现markdown, wangEditor实现富文本编辑器', key: '4' },
  { label: '对element-plus进行二次封装, 实现符合自身业务需求的组件, 可持续丰富', key: '5' },
  { label: '对input输入内容进行严格类型校验, 当前实现price和number, 可直接使用, 后续可持续丰富', key: '6' },
  { label: '个人中心实现一个打字机typing效果, 可移植', key: '7' },
  { label: '当前Content Manage System开发基础框架, 方便扩展', key: '8' },
]
const checkedPoints = ref(['1', '2', '3', '4', '5', '6', '7' , '8'])
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
    display: flex;
    align-items: center;
    height: 100px;
    .grid-con-icon {
      width: 100px;
	    height: 100px;
      font-size: 50px;
      line-height: 100px;
      color: #fff;
      text-align: center;
      &.grid-con-1 {
        background-color: rgb(45, 140, 240);

        
      }

      &.grid-con-2 {
        background: rgb(100, 213, 114);
      }

      &.grid-con-3 {
        background: rgb(242, 94, 67);
      }
    }

    .grid-cont-right {
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: #999;
      [class ^= "grid-num"] {
        font-weight: 600;
        font-size: 30px;
      }

      .grid-num-1 {
        color: rgb(45, 140, 240);
      }
      .grid-num-2 {
        color: rgb(100, 213, 114);
      }
      .grid-num-3 {
        color: rgb(242, 94, 67);
      }
    }
  }

  .user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
    &-base {
      padding-left: 50px;
      flex: 1;
      >div {
        color: #999;
        font-size: 14px;
        &:first-child {
          font-size: 30px;
          color: #222;
        }
      }
    }
  }

  .login-info {
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
}
</style>
