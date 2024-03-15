# 组件库模板

- [x] 基于 Vite `Library` 模式
- [x] 支持 `SPA` 模式下本地调试
- [x] 支持 `Storybook` 本地调试 + 文档生成
- [x] 支持构建 ESM、CJS 模块
- [x] 借助 `vite-plugin-dts` 支持自动生成 Typescript 类型文件
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
import { MyInput } from 'fe-library-template';
import 'fe-library-template/dist/style.css';
```

```xml
<script setup lang="ts">
import { ref } from "vue";
import { MyInput } from "fe-library-template"

const count = ref<number>(0)

const handleChange = (n: number) => {
  count.value = n
}
</script>
<template>
  <MyInput :value="count" @change="handleChange" />
</template>
```
