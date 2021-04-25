import { Camera, Scene, Renderer } from 'three'
import { pass } from '@/libs/lib-utils'

/**
 * 插件安装参数
 */
interface PluginInstallOptions {
  /**
   * 场景
   */
  scene: Scene,
  /**
   * 摄像头
   */
  camera: Camera,
  /**
   * 渲染器
   */
  renderer: Renderer
}

/**
 * 插件的钩子函数
 */
interface PluginHooks {
  beforeInstall (options: PluginInstallOptions): void
  afterInstall (options: PluginInstallOptions): void

  /**
   * 渲染函数，将在整个主循环中进行渲染
   * 需要注意的是，逻辑应尽可能地简单，否则会影响到整体渲染的帧数
   * @param options
   */
  render (options: PluginInstallOptions): void
}

/**
 * 插件接口
 */
interface Plugin extends PluginHooks {
  /**
   * 所有的插件需要实现安装方法
   * @param options
   */
  install (options: PluginInstallOptions): void
}

/**
 * 插件适配器，对于不关心钩子函数的插件
 * 直接继承抽象类即可
 */
abstract class GLPlugin implements Plugin {
  /**
   * 钩子函数的默认实现
   * @param options
   */
  afterInstall (options: PluginInstallOptions): void { pass(options) }
  /**
   * 钩子函数的默认实现
   * @param options
   */
  beforeInstall (options: PluginInstallOptions): void { pass(options) }
  abstract install(options: PluginInstallOptions): void
  /**
   * 钩子函数的默认实现
   * @param options
   */
  render (options: PluginInstallOptions): void { pass(options) }
}

/**
 * 实体类，暂未实现参数
 */
interface Entity {
  none: any
}

/**
 * 组件的 Prop 定义
 */
interface GL {
  entities: Entity [],
  plugins: Plugin []
}

export {
  GL,
  Entity,
  Plugin,
  PluginInstallOptions,
  GLPlugin
}
