import { AxesHelper } from 'three'
import { GLPlugin, PluginInstallOptions } from '@/components/base/types'

/**
 * axes plugin for scene
 */
export default class AxesPlugin extends GLPlugin {
  private readonly size !: number;

  constructor (size = 30) {
    super()
    this.size = size
  }

  install ({ scene }: PluginInstallOptions): void {
    const axesHelper = new AxesHelper(this.size)
    scene.add(axesHelper)
  }
}
