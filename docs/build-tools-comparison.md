# 前端构建工具横向对比

## 简介
### Webpack:

- **简介：** Webpack 是一个强大而灵活的模块打包工具，它将应用程序的所有资源（JavaScript、CSS、图像等）视为模块，并生成适用于浏览器的最终打包文件。
  
- **优点：**
  - **丰富的生态系统：** 强大的插件系统和生态系统，可以找到大量的社区支持和解决方案，适用于各种场景。
  - **高度可配置：**  极高的可配置性，允许根据项目的需求进行定制。这对于复杂的项目和特殊的构建需求非常有用。
  - **成熟和稳定：** 广泛应用于大型项目，并且经历了多个版本的迭代，具有相对稳定的稳定性。

- **缺点：**
  - **学习曲线陡峭：** 概念 / 配置项复杂，对新手不友好。
  - **构建速度可能较慢：** 对于大型项目，Webpack 的构建速度可能相对较慢。在开发阶段的热更新也可能受到一些影响。
  - **繁多的配置选项：** 可能导致过度配置或选择困难。

- **配置：** [详细参考](https://webpack.docschina.org/concepts/)
```js
  // webpack.config.js
  const path = require('path');

  module.exports = {
    entry: './src/index.js',                   // 入口文件
    output: {                                  // 输出配置
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [                                 // 处理规则, babel-loader 处理 js 文件               
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
  };
```
---

### Vite:

- **简介：** Vite 是一个基于 esbuild 的构建工具，在开发体验和构建速度上有着显著的优势。它适用于现代前端框架（如 Vue.js 和 React）。

- **优点：**
  - **极快的冷启动速度：** Vite 的开发服务器使用原生 ES 模块的方式，无需提前构建，因此在启动时具有非常快的冷启动速度。
  - **简单的配置：** 配置相对简单，甚至可以零配置开发服务器。
  - **支持 Vue.js 和 React：** Vite 是为 Vue.js 设计的，但也支持 React。

- **缺点：**
  - **相对年轻的生态系统：** Vite 是一个相对年轻的项目，其生态系统可能相对较小。这可能导致在寻找解决方案或插件时的选择受限。
  - **Vue.js 和 React 优势：** 最初是为 Vue.js 设计的。在使用 React 时，一些 React 的社区工具和模式可能不如在传统的构建工具中那样成熟。
  - **配置的扩展性：** 默认配置相对简单，当需要进行一些高度定制的配置时，扩展性相对较低。

- **配置：** [详细参考](https://cn.vitejs.dev/config/)
```js
  // vite.config.js
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';        // esbuild & babel
  // import react from "@vitejs/plugin-react-swc"; // exbuild & swc

  export default defineConfig({
    plugins: [react()],
  })
```
---

### esbuild:

- **简介：** esbuild 是一个极快的 JavaScript/TypeScript 构建工具，提供出色的构建速度。对性能敏感的应用推荐使用。

- **优点：**
  - **极快的构建速度：** 以极快的速度执行构建。在启动和执行构建时相对较快，在处理大型项目时表现出色。
  - **低内存占用：** 以低内存占用的方式执行构建任务，在大型项目中运行时占用的系统资源相对较少。
  - **原生支持 ES6+：** 原生支持 ES6+，无需额外的转译工作，有助于减少构建时间和提高性能。
  - **强大的代码分割：** 对代码分割的支持非常出色，可以轻松实现按需加载和减小最终输出文件的大小。

- **缺点：**
  - **相对较新：** 相对较新的构建工具，相比于像Webpack这样的成熟工具，其生态系统可能相对较小。
  - **插件系统限制：** 插件系统相对较简单，与一些复杂的构建需求可能不够灵活。
  - **可配置性相对较低：** 被设计为简单易用，因此其可配置性相对较低。

- **配置：** [详细参考](https://cn.vitejs.dev/config/)
```js
  // esbuild.config.mjs
  import * as esbuild from 'esbuild';
  esbuild.build({
    entryPoints: ['src/index.tsx'],       // 入口文件
    // bundle: true,                      // 所有模块打包成一个文件 (减少请求数), 默认为 false (按需加载)
    // outfile: 'dist/bundle.js',         // 输出文件
    logLevel: 'info',                     // 日志级别
    outdir: 'dist'                        // 输出文件目录
  });
```
```json
  // package.json
  {
    "scripts": {
      "build": "node esbuild.config.mjs"
    }
  }
```
---

### Turbopack <sup>beta</sup>:

- **简介：** Turbopack 是一款基于 Rust 的下一代打包工具，使用了 SWC (对标Babel) 作为其转换器，可以将 JavaScript 和 TypeScript 代码转换为支持所有主流浏览器的代码，可以提供极快的开发体验。

- **优点：**
  - **高性能效率：** 使用高度优化的机器代码和低层级增量计算引擎，可以缓存到单个函数的级别，从而提高了性能和效率。
  - **插件系统：** 提供了一个与 Webpack 兼容的插件系统，可以支持各种自定义的转换和优化。
  - **一站式解决方案：** 与 Next.js 等流行的框架集成，可提供全面的开发支持。

- **缺点：**
  - **框架支持：** 目前只支持 Next.js 和 React，对于其他框架和库的支持还不完善。
  - **安装量大：** 影响一些对空间敏感的用户。

---

### Snowpack:

- **简介：** Snowpack 是一个高性能的前端构建工具，采用零配置的开发服务器，旨在提供快速的开发和构建速度。

- **优点：**
  - **快速启动和开发体验：** 通过避免繁重的打包和重新构建过程，使开发者能够更快地查看和调试代码。
  - **零配置：** 提供零配置的开发服务器，使得项目的初始设置变得非常简单。
  - **ESM（ECMAScript 模块）支持：** 支持**原生的 ES 模块**，无需额外的转译。

- **缺点：**
  - **不再维护：** Aug 27, 2021 发布 3.8.8 后, 不再维护
    >  Update (April 20, 2022): Snowpack is no longer actively maintained and is not recommended for new projects.
    >
    > Check out [Vite](https://vitejs.dev/) for a well-maintained Snowpack alternative.  
    > See also: [esbuild](https://esbuild.github.io/), [parcel](https://parceljs.org/)
  - **生态系统不完善：** 不如一些成熟的构建工具稳定。
  - **不适用于所有项目：** 对于大型、复杂的应用程序，可能需要更复杂的构建工具和配置。

- **配置：** [详细参考](https://www.snowpack.dev/reference/configuration)
```js
  // Example: snowpack.config.mjs
  // The added "@type" comment will enable TypeScript type information via VSCode, etc.

  /** @type {import("snowpack").SnowpackUserConfig } */
  export default {
    plugins: [
      /* ... */
    ],
  };
```
---

### Parcel:

- **简介：** Parcel 是一个零配置，提供开箱即用的体验，适用于小型项目的构建工具。

- **优点：**
  - **零配置：** 不需要复杂的配置文件，Parcel 会根据项目的内容自动推断配置。内置了对JS, CSS, HTML, 文件等常见资源的支持，以及Babel, PostCSS, PostHTML等转换器的支持。
  - **自动化：** Parcel 内置了许多自动化的功能，如自动安装依赖项、自动刷新、自动代码拆分、压缩代码、优化图像等。
  - **快速启动(自称闪电般的速度 Lightning fast)：** 编译器使用 Rust 编写，利用多核处理和文件系统缓存，提供了极快的构建速度。
  - **灵活入口文件：** 支持各种类型的文件作为入口 (推荐 js / html)，自动检测和打包依赖的资源。

- **缺点：**
  - **插件生态系统相对较小：** 插件生态系统可能相对较小，在某些特定需求下的选择受限。
  - **不灵活的配置：** 对于小型到中型的项目是非常适用，但在一些大型、复杂的项目中，一些更高度自定义的配置选项可能更为重要。

- **配置：零配置** [详细参考](https://parceljs.org/features/development)
---

<br><br>

## 对比
#### (其中 stars 统计截止到 2023/12/18)

| 特性/框架         | Webpack                | Vite                           | esbuild                       | Turbopack      | Snowpack                       | Parcel                        |
|------------------|------------------------|--------------------------------|-------------------------------|-------------------------------|--------------------------------|-------------------------------|
| **类型**         | 模块打包工具           | 构建工具                     | 构建工具                       | 构建工具                       | 构建工具                        | 构建工具                       |
| **语言**         | 任意                   | React, Vue                 | 任意                         | 任意                         | React, Vue                     | 任意                   |
| **构建系统**     |Webpack                 | 使用 Vite (基于 esbuild)           | esbuild                | 使用 Rollup (基于 esbuild)     | Snowpack                           | Parcel                            |
| **零配置**       | ❌                     | ✅                             | ✅                             | ❌                            | ✅                              | ✅                            |
| **热模块替换**   | ✅                     | ✅                             | ✅                            | ✅                            | ✅                              | ✅                            |
| **服务端渲染**   | ✅(通过插件配置)       | ✅(node)                             | ❌                            | ❌                           | ❌                              | ❌                            |
| **静态网站生成** | ✅                     | ✅                             | ✅                            | ❌                           | ❌                              | ❌                            |
| **自动代码拆分** | ✅                     | ✅                             | ✅                            | ✅                            | ✅                              | ✅                            |
| **插件系统**     | ✅                     | ✅                           | ✅                             | ❌                           | ✅                              | ✅                             |
| **社区支持<br>(stars)** | 63k                 | 61k                           | 23k                         | 23k                         | 19.6k                         | 42.8k                       |
| **是否维护**       | ✅                    | ✅                            | ✅                         | ✅                        | ❌                         | ✅                       |
| **生态系统**       | 大而丰富               | 逐渐增长                      | 逐渐增长                     | 较新，但有潜力             | 较新，但有潜力      | 较小                 |
| **适用场景**       | 中到大型项目          | Web应用，大型项目              | 中小型项目                     | 快速 JavaScript 模块打包      | 小型到中型项目                  | 小型到中型项目                 |
| **构建速度**       | 中到慢（尤其在大型项目中） | 极快                            | 极快                         | 极快                         | 快                                | 极快                              |
| **学习成本**     | 高                     | 中                             | 中                             | 低                           | 中                              | 低                            |
| **最新版本**     | v5.89.0             | v5.0.10             | v0.19.9             | v1.11.2             | 3.8.8               | v2.10.3             |
| **最近更新日期** | 2023-10-14            | 2023-12-15          | 2023-12-10          | 2023-12-12          | 2021-08-27 | 2023-11-15          |

---

<br><br>

## 总结：

### Webpack
- **类型：** 模块打包工具
- **优点：** 丰富的生态系统，高度可配置，成熟和稳定
- **缺点：** 学习曲线陡峭，构建速度可能较慢，配置选项繁多
- **适用场景：** 中到大型项目，复杂场景

### Vite
- **类型：** 构建工具
- **优点：** 极快的冷启动速度，简单的配置，支持 Vue.js 和 React
- **缺点：** 相对年轻的生态系统，配置的扩展性相对较低
- **适用场景：** Web应用，大型项目，追求快速开发体验和构建速度

### esbuild
- **类型：** 构建工具
- **优点：** 极快的构建速度，低内存占用，原生支持 ES6+，强大的代码分割
- **缺点：** 相对较新，插件系统限制，可配置性相对较低
- **适用场景：** 中小型项目，性能敏感的应用

### Turbopack
- **类型：** 构建工具
- **优点：** 高性能效率，插件系统，一站式解决方案
- **缺点：** 框架支持有限，安装量较大
- **适用场景：** Next.js 和 React 项目

### Snowpack
- **类型：** 构建工具
- **优点：** 快速启动和开发体验，零配置，ESM（ECMAScript 模块）支持
- **缺点：** 不再维护，生态系统不完善，不适用于所有项目
- **适用场景：** 小型到中型项目，快速原型开发

### Parcel
- **类型：** 构建工具
- **优点：** 零配置，自动化功能，快速启动，灵活入口文件
- **缺点：** 插件生态系统相对较小，不灵活的配置
- **适用场景：** 小型项目，快速原型开发

总体而言，Webpack 在大型项目和复杂场景中表现出色，Vite 和 Snowpack 更适合小到中型项目，尤其是对于快速开发体验和构建速度的需求。Esbuild 和 Turbopack 则注重速度，尤其在大型项目中有着显著的性能优势。Parcel 提供了开箱即用的体验，适合小型项目和快速原型开发。