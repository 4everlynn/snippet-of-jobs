import { GLPlugin, PluginInstallOptions } from '@/components/base/types'

/**
 * Demo Plugin，将整个场景顺时针进行旋转
 */
export default class RotatingPlugin extends GLPlugin {
  install (): void {
    console.log('installing')
  }

  render ({ scene }: PluginInstallOptions): void {
    scene.rotation.y -= 0.003
  }
}
