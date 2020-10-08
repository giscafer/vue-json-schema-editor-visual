<template>
  <div>
    <el-autocomplete
      v-model="mockValue"
      class="certain-category-search"
      :fetch-suggestions="querySearchAsync"
      placeholder="mock"
      :value="schema.mock ? schema.mock.mock : ''"
      :disabled="schema.type === 'object' || schema.type === 'array'"
      @change="handleChange"
    >
      <el-button slot="append" icon="el-icon-edit" @click="showEdit"></el-button>
    </el-autocomplete>
  </div>
</template>

<script>
export default {
  name: 'MockSelect',
  props: {
    schema: {
      type: Object,
      default: () => {}
    },
    mock: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      mockValue: ''
    }
  },
  created() {},
  mounted() {},
  methods: {
    showEdit() {
      this.$emit('showEdit')
    },
    handleChange(e) {
      this.$emit('change', e)
    },
    querySearchAsync(queryString, cb) {
      const arr = this.mock || []
      const results = queryString
        ? arr.filter(this.createStateFilter(queryString))
        : arr

      cb(results)
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
