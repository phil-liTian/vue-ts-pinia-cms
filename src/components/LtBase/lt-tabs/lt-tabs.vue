<template>
  <div class="lt-tabs">
    <el-tabs v-model="value" :before-leave="handleBeforeLeave">
      <el-tab-pane 
        v-bind="item"
        v-for="item in dataList" 
        :key="item.label" 
        :label="item.label" 
        :name="item.name">
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
  
<script lang='ts' setup name="LtTabs">
  import { computed } from 'vue'
  interface ITabItem {
    name: string,
    label: string
  }

  type ITabs = {
    dataList: ITabItem[],
    modelValue: string
  }
  const props = withDefaults(defineProps<ITabs>(), {
    dataList: () => [],
    modelValue: ''
  })

  const emits = defineEmits(['update:modelValue', 'beforeLeave'])

  const value = computed({
    get() {
      return props.modelValue
    },
    set(val) {
      emits('update:modelValue', val)
    }
  })

  const handleBeforeLeave = (item) => {
    // TODO
    // return Promise.reject()
  }
</script>
  
<style lang='scss' scoped>
  
</style>