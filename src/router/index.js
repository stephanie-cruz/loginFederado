import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Profile from "@/components/Profile";
import SignUp from "@/components/SignUp";
import Products from "@/components/Products"

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
  
    {
      path: "/",
      name: "Home",
      component: Home
    },  {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      name:'SignUp',
      component: SignUp
    },
    {
      path: "/products",
      name:'Products',
      component: Products,
      meta: { requiresAuth: true }
    }
  ]
});
