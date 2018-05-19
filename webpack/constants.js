const package = require('../package.json');
const path = require('path');
const basePath = __dirname;
const src = path.join( basePath, "../src" );
const dependencies = package.dependencies;
console.log(basePath,src);

module.exports = {
  vendors: (excluded) => Object.keys(dependencies).filter( d => !excluded.includes(d) ),
  paths: {
    root: path.join(basePath,'../'),
    build: path.join( basePath, "../build" ),
    src: src,
    srcStatic: path.join( basePath, "../assets/static" ),
    indexJs : path.join( src, "index.tsx" ),
    indexHtml : path.join( src, "index.html" )
  },
  ports:{ dev: 3000 }
}
