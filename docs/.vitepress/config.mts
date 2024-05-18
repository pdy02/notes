import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Dy's Notes",
  description: "A Notebook",
  base:'/notes/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/start' }
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
      '/notes/java/':[
        {
          text:'基础语法',
          items:[
            { text:'介绍', link:'./' },
            { text:'java变量', link:'./var' }
          ]
        }
      ]
    },

    search:{
      provider:'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
