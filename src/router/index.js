import Vue from 'vue'
import VueRouter  from 'vue-router'
import Layout from "../layout/Layout";
import Login from "../views/Login";
import Home from "../views/Home";
import Register from "../views/Register";
import test from "../views/test";
import Layout2 from "../components/Layout2";
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            name:'Layout',
            component:Layout,
            redirect:'/home',
            children:[
                {
                    path:'/home',
                    name:'Home',
                    component:Home
                }
            ]
        },
        {
            path:'/lay2',
            name:'Layout2',
            component:Layout2
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        },
        {
            path:'/register',
            name:'Register',
            component:Register
        },
        {
            path:'/test',
            name:'test',
            component:test
        }


    ]

})
