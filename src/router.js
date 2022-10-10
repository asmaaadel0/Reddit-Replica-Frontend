import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/users/MainPage.vue";
import ForgetPassword from './components/forget/ForgetPassword.vue'
import ForgetUsername from './components/forget/ForgetUsername'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/main", component: MainPage },
    { path: '/forgetPassword', component: ForgetPassword },
    { path: '/forgetUsername', component: ForgetUsername},
    {
      path:"/user/:userName",
      name: "user",
      component: MainPage,
    },//render user component
    {
      path:"/subreddit/:subredditName",
      name: "subreddit",
      component: MainPage,
    },//render subreddit component
    {
      path:"/post/:postName",
      name: "post",
      component: MainPage,
    },//render post component
    //{ path: '/test', component: null },
    //  { path: '', component: null },
  ],
});

export default router;