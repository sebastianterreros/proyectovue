// vue.config.js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Configura publicPath solo para producción
  publicPath: process.env.NODE_ENV === 'production'
    // El nombre del repositorio es 'proyectovue', por lo tanto, la ruta base es '/proyectovue/'
    ? '/proyectovue/'
    : '/' // Para desarrollo local, la ruta base sigue siendo la raíz
})
