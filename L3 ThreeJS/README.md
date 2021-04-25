# ThreeJS

## Declare component
```html
<FatewaGL
    :width="width"
    :height="height"
    :plugins="plugins"
/>
```

## Introduce plugins

```js
export default {
    data: () => ({
        width: innerWidth,
        height: innerHeight,
        plugins: [
            new AxesPlugin(),
            new StatsPlugin(),
            new LightPlugin(),
            new ControlsPlugin(),
            new PlanePlugin(1000, 1000),
            new RotatingPlugin()
        ]
    })
}
```

## Custom Plugins
```ts
import { GLPlugin, PluginInstallOptions } from '@/components/base/types'
/**
 * custom plugin
 */
export default class CustomPlugin extends GLPlugin {
    private readonly size !: number;

    /**
     * Constructor can initialize some custom parameters
     * @param size
     */
    constructor (size = 30) {
        super()
        this.size = size
    }


    /**
     * Copy the installation function, 
     * here to add the axis helper as an example.
     * The specific usage still needs to refer to the three api.
     * @param scene
     */
    install ({ scene, camera, renderer }: PluginInstallOptions): void {
        const axesHelper = new AxesHelper(this.size)
        scene.add(axesHelper)
    }
    
}
```
