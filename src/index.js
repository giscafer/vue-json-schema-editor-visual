import JsonSchemaEditor from './json-schema-editor.vue';
import CustomEventPlugin from './event';

const install = function(Vue) {
  Vue.use(CustomEventPlugin);

  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

JsonSchemaEditor.install = install;

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default JsonSchemaEditor;
