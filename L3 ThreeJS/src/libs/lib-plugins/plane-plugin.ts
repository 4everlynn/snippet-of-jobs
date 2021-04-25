import { BoxBufferGeometry, ImageLoader, Mesh, MeshPhongMaterial, RepeatWrapping, Texture } from 'three'
import { GLPlugin, PluginInstallOptions } from '@/components/base/types'

export default class PlanePlugin extends GLPlugin {
  private readonly width: number;
  private readonly height: number;
  constructor (width = 200, height = 200) {
    super()
    this.width = width
    this.height = height
  }

  install ({ scene }: PluginInstallOptions): void {
    const planeGeometry = new BoxBufferGeometry(this.width, this.height, 1, 100)

    const texture = new Texture()
    const loader = new ImageLoader()

    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(10, 10)

    // eslint-disable-next-line
    loader.load(require('../../textures/texture.jpg'), img => {
      // 将图片值赋于纹理
      texture.image = img
      texture.needsUpdate = true
    })

    const meshMaterial = new MeshPhongMaterial({
      transparent: true,
      opacity: 0.8,
      map: texture
    })

    const pane = new Mesh(planeGeometry, meshMaterial)
    pane.receiveShadow = true
    pane.position.y = 1
    pane.rotation.x = -0.5 * Math.PI
    scene.add(pane)
  }
}
