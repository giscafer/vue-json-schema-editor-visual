<template>
  <div>
    <el-dialog
      title="RAW源码查看"
      width="700px"
      v-bind="$attrs"
      v-on="$listeners"
      @open="onOpen"
      @close="onClose"
    >
      <div class="sourcecode">
        <json-editor :value="schema"></json-editor>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import JsonEditor from '../json-editor'
export default {
  name: 'RawDialog',
  components: { JsonEditor },
  inheritAttrs: false,
  props: {
    schema: { type: Object, default: () => ({}) },
  },
  data() {
    return {}
  },
  created() {},
  methods: {
    onOpen() {},
    onClose() {},
    close() {
      this.$emit('update:visible', false)
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
