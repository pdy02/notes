import { DefaultTheme } from "vitepress";

export  default  {
  '/notes/js/':[
    {
      text:'Start',
      items:[
        { text: '介绍', link: '/notes/js/' },
        { text: '反射Reflect', link: '/notes/js/reflect' },
      ]
    }
  ]
} as DefaultTheme.Sidebar;