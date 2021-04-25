import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLPlugin, PluginInstallOptions } from '@/components/base/types'

/**
 * controls plugin
 */
export default class ControlsPlugin extends GLPlugin {
  private orbit !: OrbitControls;
  install ({ camera, renderer }: PluginInstallOptions): void {
    this.orbit = new OrbitControls(camera, renderer.domElement)
    this.orbit.maxPolarAngle = Math.PI * 0.35
    this.orbit.minDistance = 30
    this.orbit.maxDistance = 6800
    this.orbit.update()
  }
}
