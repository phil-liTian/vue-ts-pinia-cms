<template>
  <div class="lt-actionBar">
    <template v-if="actionItem.length">
      <div class="actionItem" v-for="item in actionItem" :key="item.key">
        <component :is="`lt-${item.type}`" v-bind="item" v-model:modelValue="actionData[item.key]"></component>
      </div>
    </template>

    <template v-if="actionBtns.length">
      <lt-button 
        @click="handleClick(item)" 
        v-bind="item" class="actionBtnItem" v-for="item in actionBtns" :key="item.key">
        {{ item.label }}
      </lt-button>
    </template>
    
  </div>
</template>
  
<script lang='ts' setup>
  type IActBtn = {
    label: string,
    key: string
  }

  interface IActionBar {
    actionItem: any[],
    actionData: any,
    actionBtns: IActBtn[]
  }
  
  withDefaults(defineProps<IActionBar>(), {
    actionItem: () => [],
    actionData: () => ({}),
    actionBtns: () => []
  })

  const emits = defineEmits(['click'])

  const handleClick = (item: IActBtn) => {
    emits('click', item)
  }
</script>
  
<style lang='scss' scoped>
  .lt-actionBar {
    display: flex;
    align-items: center;
  }
</style>