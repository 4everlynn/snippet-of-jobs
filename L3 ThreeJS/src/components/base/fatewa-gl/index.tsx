import Component from 'vue-class-component'
import { VNode } from 'vue'
import { Entity, GL, Plugin, PluginInstallOptions } from '@/components/base/types'
import { Prop, Vue } from 'vue-property-decorator'
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { uuid } from '@/libs/lib-utils'
import styled, { css } from 'vue-styled-components'

const Container = styled('div', { width: Number, height: Number, unit: String })`
  width: 100%;
  height: 100%;
  ${(props: any) => props.width && css`
    width: ${props.width}${props.unit || 'px'};
  `}
  ${(props: any) => props.height && css`
    height: ${props.height}${props.unit || 'px'};
  `}
`

@Component({
  name: 'FatewaGL'
})
export default class FatewaGL extends Vue implements GL {
  private id: string = uuid()
  public readonly entities!: Entity[]

  @Prop({ type: Plugin, default: null })
  public readonly plugins!: Plugin[]

  @Prop({ type: Boolean, default: true })
  public readonly antialias !: boolean

  @Prop({ type: Number, default: 800 })
  public readonly width !: number

  @Prop({ type: Number, default: 600 })
  public readonly height !: number

  private scene !: Scene;
  private camera !: PerspectiveCamera;
  private renderer !: WebGLRenderer;

  /**
   * 安装所有插件
   * @param options
   */
  _initPlugins (options: PluginInstallOptions): void {
    for (const plugin of this.plugins) {
      this._installPlugin(plugin, options)
    }
  }

  /**
   * 安装单个插件
   * @param plugin
   * @param options
   */
  _installPlugin (plugin: Plugin, options: PluginInstallOptions): void {
    plugin.beforeInstall(options)
    plugin.install(options)
    plugin.afterInstall(options)
  }

  /**
   * 核心引擎初始化
   */
  _coreInit (): void {
    this.scene = new Scene()
    this.camera = new PerspectiveCamera(35, this.width / this.height, 1, 10000)
    this.camera.position.set(2000, 50, 3000)
    this.renderer = new WebGLRenderer({ antialias: this.antialias, alpha: true })
    this.renderer.setClearColor(0x000000)
    this.renderer.shadowMap.enabled = true
    this.renderer.setSize(this.width, this.height)
    const wrapper = document.getElementById(this.id)
    if (wrapper) {
      const element = this.renderer.domElement
      element.style.width = `${wrapper.offsetWidth}px`
      element.style.height = `${wrapper.offsetHeight}px`
      wrapper.appendChild(element)
      const options: PluginInstallOptions = { scene: this.scene, camera: this.camera, renderer: this.renderer }
      // 安装所有插件
      this._initPlugins(options)
      // 开始周期
      this._main(options)
      // emit event for outside operation
      this.$emit('ready', this.scene, this.camera, this.renderer)
    }
  }

  /**
   * 主循环
   * @param scene
   * @param camera
   * @param renderer
   */
  _main ({ scene, camera, renderer }: PluginInstallOptions): void {
    this.$emit('rendering', scene, camera, renderer)
    this.plugins.forEach(p => p.render({ scene, camera, renderer }))
    renderer.render(scene, camera)
    requestAnimationFrame(() => {
      this._main({ scene, camera, renderer })
    })
  }

  /**
   * DOM 渲染
   */
  render (): VNode {
    return (
      <Container
        width={this.width}
        height={this.height}
        id={this.id}>
      </Container>
    )
  }

  mounted (): void {
    this._coreInit()
  }
}
