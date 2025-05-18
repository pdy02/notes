import { defineConfig, loadEnv } from 'vitepress'
// 引入侧边栏配置
import javaSidebarConfig from '../.vitepress/themeConfig/sidebar/javaSidebar.mts'
import jsSidebarConfig from '../.vitepress/themeConfig/sidebar/jsSidebar.mts'
// 加载环境变量
const env = loadEnv(process.env.NODE_ENV??'development', process.cwd());

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Dy's Notes",
  description: "A Notebook",
  base: env.VITE_BASE_URL,
  markdown:{
    image:{
      // 开启图片懒加载
      lazyLoading: true,
    }
  },
  themeConfig: {
    // 右边的章节导航
    outline: {
      level:[1, 3], // 右边大纲显示的标题级别
      label: '本页大纲'
    },
    // 最后更新时间戳
    lastUpdated: {
      text: '最后更新时间',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/start' },
      { text: '前端', link: '/前端/前端路线' },
      { text: '办公', link: '/办公/Office免费下载激活' },
      { text: '移动端',
      items:[
        { text: 'Flutter', link: '/移动端/Flutter/入门/环境搭建' },
        { text: 'React Native', link: '/移动端/ReactNative/环境搭建' },
      ]
      },
      { text: '生活', link: '/life/'}
    ],
    sidebar: {
      '/guide/':[
      {
        text: 'Examples',
        items: [
        { text: '快速开始', link: '/guide/start' },
        ]
      },{
        text:'前端',
        items:[
        { text: 'Vue', link: '/guide/vue' },
        { text: 'React', link: '/guide/react' },
        { text: 'JavaScript', link: '/guide/js' },
        { text: 'CSS', link: '/guide/css' },
        { text: 'HTML', link: '/guide/html' },
        { text: 'JS设计模式', link: '/guide/design' },
        { text: '前端开发', link: '/前端/前端路线' },
        ]
      },{
        text:'后端',
        items:[
        { text: 'Node', link: '/guide/node' },
        { text: 'Java', link: '/guide/java' },
        { text: 'Python', link: '/guide/python' },
        { text: 'Rust', link: '/guide/rust' },
        ]
      },{
        text: '工具',
        items: [
        { text: 'Git', link: '/guide/git' },
        { text: '错误记录', link: '/guide/err' },
        ]
      }
      ],
      '/notes/node/':[
      {
        text: '入门',
        items:[
        { text: '介绍', link: '/notes/node/' }
        ]
      },
      {
        text: '工具',
        items:[
        {
          text:'nvm',
          collapsed: true,
          items:[
          { text: '安装和使用', link: '/notes/node/tools/nvm/nvm-using' },
          { text: '常用命令', link: '/notes/node/tools/nvm/nvm-cmd' },
          ]
        },
        ]
      }
      ],
      '/notes/design/':[
      {
        text: '设计模式',
        items:[
        { text: '单例模式', link: '/notes/design/design-singleton' }
        ]
      }
      ],
      '/notes/react/':[
      {
        text: '快速开始',
        items:[
        { text: '介绍', link: '/notes/react/' }
        ]
      },{
        text: 'hooks',
        items:[
        { text: 'useState', link: '/notes/react/hook/useState' },
        { text: 'useMemo', link: '/notes/react/hook/useMemo' },
        { text: 'useEffect', link: '/notes/react/hook/useEffect' },
        ]
      }
      ],
      '/notes/error/':[
      {
        text:"错误记录",
        items:[
        { text: 'electron', link: '/notes/error/electron-err' }
        ]
      }
      ],
      '/前端/':[
      {
        text: '前端路线',
        items:[
        { text: '前端路线', link: '/前端/前端路线' },
        { text: '前端书籍', link: '/前端/前端书籍推荐' }
        ]
      }
      ],
      '/办公/':[
      {
        text: '办公',
        items:[
        { text: 'Office免费下载激活', link: '/办公/Office免费下载激活' },
        ]
      }
      ],
      '/移动端/Flutter/':[
      {
        text: 'Flutter路线导图',
        items:[
        { text: 'Flutter路线导图', link: '/移动端/Flutter/Flutter路线导图' },
        ]
      },
      {
        text: '入门',
        items:[
        {text: '环境搭建', link: '/移动端/Flutter/入门/环境搭建' },
        {}
        ]
      },
      {
        text: 'Dart语言',
        items:[
        {text: '0.1-Dart', link: '/移动端/Flutter/Dart语言/0.1-Dart' },
        {text: '0.2-Dart导图', link: '/移动端/Flutter/Dart语言/0.2-Dart导图' },
        {text: '0.3-Dart学习路线', link: '/移动端/Flutter/Dart语言/0.3-Dart学习路线' },
        {text: '1.1-数据类型', link: '/移动端/Flutter/Dart语言/1.1-数据类型' },
        {text: '1.2-数据类型2', link: '/移动端/Flutter/Dart语言/1.2-数据类型2' },
        {text: '1.3-数据结构', link: '/移动端/Flutter/Dart语言/1.3-数据结构' },
        {text: '1.4-运算符和表达式', link: '/移动端/Flutter/Dart语言/1.4-运算符和表达式' },
        {text: '1.5-流程控制', link: '/移动端/Flutter/Dart语言/1.5-流程控制' },
        {text: '1.6-函数与作用域', link: '/移动端/Flutter/Dart语言/1.6-函数与作用域' },
        ]
      },
      ],
      '/life/':[
      {
        text: 'PC',
        items:[
        { text: 'C盘清理', link: '/life/PC/电脑C盘清理' },
        ]
      }
      ],

      ...javaSidebarConfig,
      ...jsSidebarConfig
    },

    // 开启本地搜索
    search:{
      provider:'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pdy02/notes' }
    ]
  }
})
