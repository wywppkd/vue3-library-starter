import type { Meta, StoryObj } from '@storybook/vue3';

import MyInput from './MyInput.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/MyInput',
  component: MyInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'], // 自动生成文档
  // 属性类型
  argTypes: {
    value: {
      type: 'number',
      description: '输入框的值',
      control: { type: 'number' },
      defaultValue: 0,
    },
  },
} satisfies Meta<typeof MyInput>;

export default meta;

type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {
  render: (args) => {
    return {
      components: { MyInput },
      setup() {
        return { args };
      },
      template: '<MyInput v-bind="args" />',
    };
  },
  args: {
    value: 101,
  },
};
