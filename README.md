# 组件库模板

- [x] 基于 Vite `Library` 模式搭建
- [x] 支持 `SPA` 模式下本地调试
- [x] 支持 `Storybook` 本地调试 + 文档生成
- [x] 支持构建 ESM、CJS 模块
- [x] 借助 `vite-plugin-dts` 实现自动生成 Typescript 类型声明文件
- [x] 支持 `husky + eslint + prettier` 控制代码质量

## Project Setup

```sh
pnpm install
pnpm run dev # 本地调试(SPA)
pnpm run storybook # 本地调试(Storybook)
pnpm run build # 构建
```

## 引入组件库示例

```ts
import { MyInput } from 'vue3-library-starter';
import 'vue3-library-starter/dist/style.css';
```

```xml
<script setup lang="ts">
import { ref } from "vue";
import { MyInput } from "vue3-library-starter"

const count = ref<number>(0)

const handleChange = (n: number) => {
  count.value = n
}
</script>
<template>
  <MyInput :value="count" @change="handleChange" />
</template>
```
