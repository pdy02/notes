import { defineConfig } from 'vitepress'
// 引入侧边栏配置
import javaSidebarConfig from '../.vitepress/themeConfig/sidebar/javaSidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Dy's Notes",
  description: "A Notebook",
  themeConfig: {
    // 右边的章节导航
    outline: {
      level:[2, 6],
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
            { text: 'JavaScript', link: '/guide/javascript' },
            { text: 'CSS', link: '/guide/css' },
            { text: 'HTML', link: '/guide/html' },
          ]
        },{
          text:'后端',
          items:[
            { text: 'Node', link: '/guide/node' },
            { text: 'Java', link: '/guide/java' },
            { text: 'Python', link: '/guide/python' },
            { text: 'Go', link: '/guide/rust' },
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
          ]
        }
      ],
      ...javaSidebarConfig
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