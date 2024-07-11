import Input from './src/input.vue'
import { App } from 'vue'

Input.name = 'rth-input'

Input.install = (app: App): void => {
  // 注册组件
  app.component(Input.name as string, Input)
}

export default Input
