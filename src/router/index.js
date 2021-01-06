import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Places from "../views/Places.vue";
import Details from "../views/Details.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/places",
    name: "Places",
    component: Places
  },
  {
    path: "/details/:id",
    name: "Details",
    props: true,
    component: Details
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
