export default{
                path:"/move",
                name:'move',
                component: () => import ('@/views/move/move.vue'),
                children:[
                {
                                path:'city',
                                name:'city',
                                component:() => import('@/components/city/city.vue')
                },
                {
                                path:'comingsoon',
                                name:'comingsoon',
                                component:() => import('@/components/comingsoon/comingsoon.vue')
                },
                {
                                path:'noplaying',
                                name:'noplaying',
                                component:() => import('@/components/noplaying/noplaying.vue')
                },
                {
                                path:'seach',
                                name:'seach',
                                component:() => import('@/components/seach/seach.vue')
                },
                {
                                path:'/move',
                                redirect: '/move/noplaying'
                }
]

}