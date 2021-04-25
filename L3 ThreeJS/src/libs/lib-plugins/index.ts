import AxesPlugin from '@/libs/lib-plugins/axes-plugin'
import StatsPlugin from '@/libs/lib-plugins/status-plugin'
import GridPlugin from '@/libs/lib-plugins/grid-plugin'
import LightPlugin from '@/libs/lib-plugins/light-plugin'
import ControlsPlugin from './controls-plugin'
import PlanePlugin from '@/libs/lib-plugins/plane-plugin'
import RotatingPlugin from '@/libs/lib-plugins/rotating-plugin'

/**
 * 此处导出的是默认已经实现的插件，
 * 用户也可以自定义实现插件
 */
export {
  RotatingPlugin,
  ControlsPlugin,
  LightPlugin,
  AxesPlugin,
  StatsPlugin,
  GridPlugin,
  PlanePlugin
}
