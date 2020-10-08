import JsonSchemaEditor from './src/json-schema-editor';

/* istanbul ignore next */
JsonSchemaEditor.install = function(Vue) {
  Vue.component(JsonSchemaEditor.name, JsonSchemaEditor);
};

export default JsonSchemaEditor;
