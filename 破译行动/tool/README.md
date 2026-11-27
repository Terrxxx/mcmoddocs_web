# 破译行动 · 物品池编辑器

在浏览器中打开 [物品池编辑器](./pyxd_customitemlist.html)。分发时将 HTML 和同级的 `pool-editor-assets/` 一起复制。

## 编辑和交换密文

在左栏新建、复制或删除物品池。在右侧设置名称、生成模式和图标，选择品质后点击槽位编辑物品。可用物品目录搜索，也可输入第三方 MOD 的物品 ID。编辑槽位的数量、生成权重或附加值后，点击「应用」。

从游戏导出的物品池分享文本粘贴到「导入」。校验通过后，物品池会追加到现有草稿。使用「导出」可以生成当前物品池或全部物品池的分享文本，再粘贴到游戏内的物品池导入窗口。浏览器允许本地存储时会自动保留草稿。

## 模拟搜索

点击「模拟搜索」进入容器区，再点「开始搜索」。默认使用 6 × 6 容器。放大镜依次在棋盘格遮罩上播放搜索动画，搜完一格就显示该处物品。需要大量试验时，可设置模拟容器数并点击「统计结果」。

## 预设分享

在 [share-presets.js](./pool-editor-assets/share-presets.js) 的 `entries` 数组中添加预设。每条填写 `title` 和 `text`，`description` 可省略。保存文件后刷新网页，玩家可以从「预设分享」页点击「加载并编辑」。

```js
{ title: '预设名称', description: '可选简介', text: '粘贴游戏导出的完整分享文本' },
```

导入和预设加载会识别物品池、物品基础数据和容器预设。其他网页编辑器接入后，可在同一文件的 `targets` 中填写相对 HTML 路径，使用 `item-sizes` 或 `container-presets` 作为键。跳转会通过 URL 片段的 `share` 参数传递原始分享文本，目标编辑器可用 `URLSearchParams(location.hash.slice(1)).get('share')` 读取。当前只提供物品池编辑器，其他两类文本在接入目标前会显示对应类型和加载失败原因。

## Markdown

下面的路径以 Markdown 渲染后的页面和编辑器位于同一目录为例。

```markdown
[打开物品池编辑器](./pyxd_customitemlist.html)

<iframe
  src="./pyxd_customitemlist.html"
  title="破译行动物品池编辑器"
  width="100%"
  height="900"
  allow="clipboard-write">
</iframe>
```

支持 HTML iframe 的 Markdown 渲染器可以直接显示编辑器。普通链接适用于只显示 Markdown 链接的页面。

## VuePress 2

将 `pyxd_customitemlist.html` 和 `pool-editor-assets/` 一起放在 VuePress 文档源目录下的 `.vuepress/public/tools/html/`。在 Markdown 中使用以下片段，站点部署在子路径时也能解析地址。VuePress 内置的 HTML 和模板语法即可处理。 [VuePress Markdown](https://v2.vuepress.vuejs.org/guide/markdown.html) · [公共文件和站点 base](https://v2.vuepress.vuejs.org/guide/assets.html#base-helper)

```html
<a :href="$withBase('/tools/html/pyxd_customitemlist.html')">打开物品池编辑器</a>

<iframe
  :src="$withBase('/tools/html/pyxd_customitemlist.html')"
  title="破译行动物品池编辑器"
  width="100%"
  height="900"
  allow="clipboard-write">
</iframe>
```

## 重新构建

在现有的 `app/mctool/` 工程中运行 `npm run build:static`。脚本和样式会写入 `tools/html/pool-editor-assets/`，入口 HTML 会更新资源版本号。发布新版时一起替换 HTML 和资源目录。
