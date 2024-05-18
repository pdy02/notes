import { DefaultTheme } from "vitepress"
type sidebar = DefaultTheme.Sidebar
export default {
  '/notes/java/':[
    {
      text:'基础语法',
      items:[
        { text:'介绍', link:'/notes/java/basics/' },
        { text:'java变量', link:'/notes/java/basics/var' },
      ]
    },{
      text: '编辑器',
      items:[
        { text: 'idea', link: '/notes/java/editor/idea' }
      ]
    },{
      text: '概念性知识',
      items:[
        { text: '类型转换', link: '/notes/java/concept/type_cast' },
        { text: '浮点型在内存的存储', link: '/notes/java/concept/float_storage' },
      ]
    }
  ]
} as sidebar;