import Vue from "vue";
import VueRouter from "vue-router";
import UsersComponent from "../components/UsersComponent";
import UserComponent from "@/components/UserComponent";
import AlbumsComponent from "@/components/Albums";
import PostsComponent from "@/components/Posts";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'users-page',
        component: UsersComponent
    },
    {
        path: '/:id',
        name: 'user-page',
        component: UserComponent,
        children: [
            {
                path: '/:id/posts',
                name: 'postsUser',
                component: PostsComponent
            },
            {
                path: '/:id/albums',
                name: 'albumsUser',
                component: AlbumsComponent
            },
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
