<template>
  <div id="app">
    <h1>vue-json-schema-editor-visual example</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div style="margin-top: 120px">
      更多 demo 见：
      <a
        href="http://blog.giscafer.com/sinokit/#/./components/jsonschema-editor"
        target="_blank"
        rel="noopener noreferrer"
        >JSON Schema 编辑器</a
      >
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
