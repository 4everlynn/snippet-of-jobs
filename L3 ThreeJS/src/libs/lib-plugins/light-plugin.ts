import { AmbientLight, HemisphereLight, SpotLight } from 'three'
import { GLPlugin, PluginInstallOptions } from '@/components/base/types'

/**
 * 灯光的插件，用于点亮场景
 */
export default class LightPlugin extends GLPlugin {
  install ({ scene }: PluginInstallOptions): void {
    let light: any = new AmbientLight(0x888888)
    scene.add(light)
    light = new SpotLight(0x888888)
    light.position.set(0, 2000, 4500)
    light.castShadow = true
    light.shadow.mapSize.height = 4096
    light.shadow.mapSize.width = 4096
    scene.add(light)
    light = new HemisphereLight(0xffffff, 0x444444, 0.6)
    light.position.set(300, 200, 0)
    scene.add(light)
  }
}
