// import { viteBundler } from '@vuepress/bundler-vite'
// import { defaultTheme } from '@vuepress/theme-default'
// import { defineUserConfig } from 'vuepress'

module.exports = {
  themeConfig: {
    description: 'MCMOD',
    lastUpdated: '上次更新',
    title: 'MCMOD',
    sidebar: {
        '/': [
            { title: "首页", path: '/' },
            { title: "反馈文档", path: 'https://doc.yrxs.net' },
            {
                title: '系列模组',
                collapsable: true,
                children: [
                    { title: "破译行动", collapsable: true, path: '/破译行动/',
                        children: [
                            {
                                title: "主包",
                                collapsable: true,
                                children: [
                                    { title: "更新日志", path: '/破译行动/main/更新日志' },
                                    { title: "特性", path: '/破译行动/main/特性' },
                                    { title: "教程", path: '/破译行动/main/教程' },
                                    { title: "常见问题", path: '/破译行动/main/常见问题' },
                                ]
                            },
                            {
                                title: "交易行",
                                collapsable: true,
                                children: [
                                    { title: "更新日志", path: '/破译行动/trade/更新日志' },
                                    { title: "特性", path: '/破译行动/trade/特性' },
                                    { title: "教程", path: '/破译行动/trade/教程' },
                                    { title: "常见问题", path: '/破译行动/trade/常见问题' },
                                ]
                            },
                            {
                                title: "背包扩展",
                                collapsable: true,
                                children: [
                                    { title: "教程", path: '/破译行动/backpack/教程' },
                                    { title: "特性", path: '/破译行动/backpack/特性' },
                                    { title: "常见问题", path: '/破译行动/backpack/常见问题' },
                                    { title: "更新日志", path: '/破译行动/backpack/更新日志' }
                                ]
                            },
                            {
                                title: "钥匙门",
                                collapsable: true,
                                children: [
                                    { title: "更新日志", path: '/破译行动/door/更新日志' },
                                    { title: "特性", path: '/破译行动/door/特性' },
                                    { title: "教程", path: '/破译行动/door/教程' },
                                    { title: "常见问题", path: '/破译行动/door/常见问题' },
                                ]
                            },
                            {
                                title: "容器扩展",
                                collapsable: true,
                                children: [
                                    { title: "教程", path: '/破译行动/more/教程' },
                                    { title: "特性", path: '/破译行动/more/特性' },
                                    { title: "常见问题", path: '/破译行动/more/常见问题' },
                                    { title: "更新日志", path: '/破译行动/more/更新日志' }
                                ]
                            },
                            // {
                            //     title: "特勤处",
                            //     collapsable: true,
                            //     children: [
                            //         { title: "教程", path: '/破译行动/service/教程' },
                            //         { title: "特性", path: '/破译行动/service/特性' },
                            //         { title: "常见问题", path: '/破译行动/service/常见问题' },
                            //         { title: "更新日志", path: '/破译行动/service/更新日志' }
                            //     ]
                            // },
                            { title: "工具", path: '/破译行动/工具' },
                            {
                                title: "指令",
                                collapsable: true,
                                path: '/破译行动/main/指令'
                            },
                            {
                                title: "问题反馈",
                                path: 'https://doc.yrxs.net/docs/1/fill'
                            },
                            {
                                title: "新内容反馈",
                                path: 'https://doc.yrxs.net/docs/2/fill'
                            }
                        ]
                     },
                    { title: "CS系列", collapsable: true, path: '/CS/',
                        children: [
                            {
                                title: "武器箱",
                                collapsable: true,
                                children: [
                                    { title: "更新日志", path: '/CS/knife/更新日志' },
                                    { title: "特性", path: '/CS/knife/特性' },
                                    { title: "教程", path: '/CS/knife/教程' },
                                    { title: "常见问题", path: '/CS/knife/常见问题' },
                                ]
                            },
                            {
                                title: "物品库通行证",
                                collapsable: true,
                                children: [
                                    { title: "更新日志", path: '/CS/pass/更新日志' },
                                    { title: "特性", path: '/CS/pass/特性' },
                                    { title: "教程", path: '/CS/pass/教程' },
                                    { title: "常见问题", path: '/CS/pass/常见问题' },
                                ]
                            }
                        ]
                     },
                    // { title: "方块饱饱", collapsable: true, path: '/方块饱饱/',
                    //     children: [
                    //         {
                    //             title: "主包",
                    //             collapsable: true,
                    //             children: [
                    //                 { title: "更新日志", path: '/方块饱饱/main/更新日志' },
                    //                 { title: "特性", path: '/方块饱饱/main/特性' },
                    //                 { title: "教程", path: '/方块饱饱/main/教程' },
                    //                 { title: "常见问题", path: '/方块饱饱/main/常见问题' },
                    //             ]
                    //         },
                    //         {
                    //             title: "地图",
                    //             collapsable: true,
                    //             children: [
                    //                 { title: "更新日志", path: '/方块饱饱/map/更新日志' },
                    //                 { title: "教程", path: '/方块饱饱/map/教程' },
                    //                 { title: "常见问题", path: '/方块饱饱/map/常见问题' },
                    //             ]
                    //         }
                    //     ]
                    //  },
                    // { title: "特殊生存系列", collapsable: true, path: '//',
                    //     children: [
                    //     ]
                    //  },
                    { title: "装备强化", collapsable: true}
                ]
            },
            {
                title: '非系列模组',
                collapsable: true,
                children: [
                    {
                        title: "模组列表",
                        collapsable: true,
                        children: [
                            {
                                title: "更多投掷物",
                                collapsable: true
                            },
                            {
                                title: "更多投掷物2",
                                collapsable: true
                            },
                            {
                                title: "自定义功能盒子",
                                collapsable: true
                            },
                            {
                                title: "每日委托",
                                collapsable: true
                            },
                            {
                                title: "30倍掉落生存",
                                collapsable: true
                            }
                        ]
                    },
                    {
                        title: "问题反馈",
                        path: 'https://doc.yrxs.net/docs/4/fill'
                    },
                    {
                        title: "新内容反馈",
                        path: 'https://doc.yrxs.net/docs/5/fill'
                    }
                ]
            }
        ]
    },
    nav: [
        { text: "首页", link: "/" },
        { text: "反馈文档", link: "https://doc.yrxs.net" },
        { text: "Github", link: "https://github.com/Terrxxx/mcmoddocs_web" },
        { text: "开发人员", items: [
            { text: 'Terrxx', link: "https://space.bilibili.com/158591843" }
        ] },
        { text: "反馈群", link: "https://qm.qq.com/q/yKmfqKL1xm" }
    ]
  },
  dev: {
    assetsPublicPath: '/'
  },
  plugins: [
    'vuepress-plugin-mermaidjs'
  ]
}