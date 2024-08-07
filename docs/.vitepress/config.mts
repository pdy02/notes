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
      { text: '快速开始', link: '/guide/start' }
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
            { text: 'Docker', link: '/guide/docker' },
            { text: 'Kubernetes', link: '/guide/k8s' },
            { text: 'Jenkins', link: '/guide/jenkins' },
            { text: 'Nginx', link: '/guide/nginx' },
            { text: 'Linux', link: '/guide/linux' },
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
