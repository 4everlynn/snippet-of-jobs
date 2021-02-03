import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class RestfulTemplate extends Vue {
  @Prop({ type: String, default: 'Edward Jobs' })
  private msg!: string

  render () {
    return (
      <div>{this.msg}</div>
    )
  }
}
