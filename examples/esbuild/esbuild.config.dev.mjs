import svgr from 'esbuild-plugin-svgr';
import * as esbuild from 'esbuild';
import fs from 'fs';

fs.mkdir('dist', () => {
  console.log('create dist dir')
});

// Create a context for incremental builds
const context = await esbuild.context({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  // outfile: 'dist/bundle.js',
  outdir: 'dist',
  logLevel: 'info',
  loader: {
    '.css': 'css',
  },
  plugins: [
    svgr(),
  ]
})

// Manually do an incremental build
// const result = await context.rebuild()

// Enable watch mode
await context.watch({
  
})

// Enable serve mode
await context.serve({
  servedir: 'dist',
})

// Dispose of the context
// context.dispose()

fs.copyFile('./index.html', './dist/index.html', function(err) {
  if (err) throw err;
  console.log('index.html')
})

fs.copyFile('./public/favicon.svg', './dist/favicon.svg', function(err) {
  if (err) throw err;
  console.log('favicon.svg')
})

