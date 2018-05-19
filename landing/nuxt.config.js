module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'سرویس های ابری فندق',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'سرویس های ابری فندق، همه چیز با داکر فایل شروع میشه' }
    ],
    link: [
      { rel: 'iScon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  //css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
      // extend (config) {
      //     const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      //     urlLoader.test = /\.(png|jpe?g|gif)$/
      //
      //     config.module.rules.push({
      //         test: /\.svg$/,
      //         loader: 'svg-inline-loader',
      //         exclude: /node_modules/
      //     })
      // }
  },
  plugins: ['~/plugins/bootstrap.js'],
}
