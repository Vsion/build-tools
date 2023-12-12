import svgr from 'esbuild-plugin-svgr';
import * as esbuild from 'esbuild';
import fs from 'fs';

// function deleteFolder(folderPath) {
//   try {
//     if (fs.existsSync(folderPath)) {
//       fs.readdirSync(folderPath).forEach((file) => {
//         const currentPath = folderPath + '/' + file;
//         if (fs.statSync(currentPath).isDirectory()) {
//           // 递归删除子文件夹
//           deleteFolder(currentPath);
//         } else {
//           // 删除文件
//           fs.unlinkSync(currentPath);
//         }
//       });
//       fs.rmdirSync(folderPath);
//       console.log('文件夹删除成功');      
//     } else {
//       // console.log('文件夹不存在');
//     }
//   } catch (err) {
//     console.error('删除文件夹出错：', err);
//   }
// }

// await deleteFolder('./dist');

await esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  // outfile: 'dist/bundle.js',
  outdir: 'dist',
  logLevel: 'info',
  loader: {
    '.css': 'css',
  },
  watch: process.env.NODE_ENV === 'dev',
  plugins: [
    svgr(),
  ]
});

fs.copyFile('./index.html', './dist/index.html', function(err) {
  if (err) throw err;
  console.log('index.html')
})

fs.copyFile('./public/favicon.svg', './dist/favicon.svg', function(err) {
  if (err) throw err;
  console.log('favicon.svg')
})

