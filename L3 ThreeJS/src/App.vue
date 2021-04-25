<template>
  <FatewaGL
    :width="width"
    :height="height"
    :plugins="plugins"
  />
</template>

<style lang="stylus">
html, body
  padding 0
  margin 0
</style>

<!--suppress JSMismatchedCollectionQueryUpdate -->
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import FatewaGL from '@/components/base/fatewa-gl'
import { Plugin } from '@/components/base/types'
import {
  AxesPlugin,
  ControlsPlugin,
  LightPlugin,
  PlanePlugin, RotatingPlugin,
  StatsPlugin
} from '@/libs/lib-plugins'

@Component({
  components: { FatewaGL },
  data: () => ({
    width: innerWidth,
    height: innerHeight
  })
})
export default class App extends Vue {
  private plugins: Plugin [] = [
    new AxesPlugin(),
    new StatsPlugin(),
    new LightPlugin(),
    new ControlsPlugin(),
    new PlanePlugin(1000, 1000),
    new RotatingPlugin()
  ]
}
</script>
