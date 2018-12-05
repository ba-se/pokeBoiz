import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "@/views/About.vue";
import Pokemon from "@/views/Pokemon.vue";
// import Pikachu from "@/views/Pikachu.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/", //this is the url you will be using to access the page. 
      name: "home", //just a name. can use to reference really complicated paths 
      component: Home 
    },
    {
      path: "/:name", //colon before means it is going to be a dynamic property and in this instance we want it to bind to name
      name: "pokemon",
      component: Pokemon,
    }
    // {
    //   path: "/pikachu",
    //   name: "pikachu",
    //   component: Pikachu,
    // }
  ]
});
