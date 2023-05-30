<template>
  <el-dialog
    v-bind="$attrs"
    class="lt-dialog" 
    v-model="visible"
    :title="title">
    <slot></slot>
    <template #footer>
      <div class="lt-dialog__footer">
        <lt-button 
          v-for="item in footerBtns" 
          v-bind="item" 
          :key="item.key">
          {{ item.label }}
        </lt-button>
      </div>
    </template>
  </el-dialog>
</template>
  
<script lang='ts' setup>
  import { computed } from "vue"
  type IDialog = {
    modelValue: boolean,
    title: string,
    confirmTxt: string,
    cancelTxt: string,
    customBtns: any[]
  }

  const props = withDefaults(defineProps<IDialog>(), {
    modelValue: true,
    title: '提示',
    confirmTxt: '确认',
    cancelTxt: '取消',
    customBtns: () => [] // 可自定义底部按钮
  })
  
  const emits = defineEmits(['update:modelValue'])

  const visible = computed({
    get() {
      return props.modelValue
    },
    set(val) {
      emits('update:modelValue', val)
    }
  })

  const footerBtns = computed(() => {
    if( props.customBtns.length ) {
      return props.customBtns
    }
    return [
      { key: 'cancel', label: props.cancelTxt },
      { key: 'confirm', label: props.confirmTxt, type: 'primary' },
    ]
  })
</script>
  
<style lang='scss' scoped>
  .lt-dialog {
    &__footer {
      display: flex;
      justify-content: flex-end;
      .lt-button {
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }
  }
</style>