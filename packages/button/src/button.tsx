import { defineComponent } from 'vue'
import { buttonProps } from './types'

const NAME = 'rth-button'

export default defineComponent({
  name: NAME,
  props: buttonProps,
  setup (props, context) {
    console.log(props, context)
    return () => (
      <div class={NAME}>
        <div>
          rth-button
        </div>
      </div>
    )
  }
})
