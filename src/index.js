import Vue from 'vue';
import JsonSchemaEditor from './json-schema-editor.vue';
import CustomEventPlugin from './event';
Vue.use(CustomEventPlugin);

/* istanbul ignore next */
JsonSchemaEditor.install = function(Vue) {
  Vue.component(JsonSchemaEditor.name, JsonSchemaEditor);
};

export default JsonSchemaEditor;
