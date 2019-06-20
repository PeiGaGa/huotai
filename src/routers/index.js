import {
    Home,
    Login,
    NotFound,
    Settings,
    User
} from "views"

export const  mainRouter=[
    
    {
        pathname:"/login",
        component:Login
    },
    
    {
        pathname:"/404",
        component:NotFound
    },
    
]
export const pageRouter=[
    {
        pathname:"/admin/home",
        component:Home,
        title:"首页"
    },
    {
        pathname:"/admin/settings",
        component:Settings,
        title:"班级管理",
        icon:"sketch",
        children:[
            {
                title:"我的班级",
                pathname:"/admin/settings1"
            },
            {
                title:"班级查看",
                pathname:"/admin/settings2"
            }
        ]
    },
    {
        pathname:"/admin/user",
        component:User,
        title:"班级荣誉",
        icon:"alipay",
        children:[
            {
                title:"班级徽章",
                pathname:"/admin/user1"
            },
            {
                title:"班级竞技",
                pathname:"/admin/user2"
            }
        ]
    },
]