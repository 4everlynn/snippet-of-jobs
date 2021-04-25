import { GridHelper } from 'three'
import { GLPlugin, PluginInstallOptions } from '@/components/base/types'

/**
 * grid plugin for scene
 */
export default class GridPlugin extends GLPlugin {
  private readonly width: number;
  private readonly height: number;
  constructor (width = 50, height = 50) {
    super()
    this.width = width
    this.height = height
  }

  /**
   * add grid helper to scene
   * @param options
   */
  install ({ scene }: PluginInstallOptions): void {
    const gridHelper = new GridHelper(this.width, this.height)
    scene.add(gridHelper)
  }
}
