import { createApp } from 'vue';
import App from './App.vue';

import MyLib from './components/index';

createApp(App)
  .use(MyLib) // 全局注册, 支持在 App.vue 中调试组件库
  .mount('#app');
