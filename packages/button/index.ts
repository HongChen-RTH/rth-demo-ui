import Button from './src/button'
import { App } from 'vue'

Button.install = (app: App): void => {
  // 注册组件
  app.component(Button.name as string, Button)
}

export default Button
