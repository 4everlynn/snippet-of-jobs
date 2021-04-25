/**
 * performance plugin
 * @author 4everlynn
 * @date 2019/08/15
 */
import { GLPlugin } from '@/components/base/types'
import Stats from 'three/examples/jsm/libs/stats.module'

/**
 * 显示渲染帧数的插件
 */
export default class StatsPlugin extends GLPlugin {
  private stats: Stats

  constructor () {
    super()
    // @ts-ignore
    this.stats = new Stats()
  }

  render (): void {
    this.stats.update()
  }

  install (): void {
    document.body.appendChild(this.stats.domElement)
  }
}
