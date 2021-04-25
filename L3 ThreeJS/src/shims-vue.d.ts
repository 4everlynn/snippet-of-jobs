declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// 定义 vue-styled-components 避免报错
declare module 'vue-styled-components' {
  const styled: any
  const ThemeProvider, css, injectGlobal, keyframes
  export {
    ThemeProvider,
    css,
    injectGlobal,
    keyframes
  }
  export default styled
}
