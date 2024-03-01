/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/sass')],

    prepemdData:'@import "main.sass"'
  },
}

 module.export = nextConfig;
