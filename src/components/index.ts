import type { App } from 'vue';
import { MyInput } from './MyInput';
import { sleep } from './utils/sleep';

export {
  // 组件写这里(支持按需引入)
  MyInput, // 公共组件
  sleep, // 工具函数
};

const components = {
  // 组件写这里(支持全局挂载)
  MyInput,
};

export default {
  install(app: App) {
    for (const key in components) {
      if (Object.prototype.hasOwnProperty.call(components, key)) {
        // @ts-ignore
        const element = components[key];
        console.log('🚀 ~ file: index.ts:23 ~ install ~ element.name:', element.name);
        app.component(key, element);
      }
    }
  },
};
