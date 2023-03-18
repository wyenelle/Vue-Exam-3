import { createRouter, createWebHistory } from "vue-router";
import Repo from '../views/Repo.vue'
import Home from '../views/Home.vue'
import InfoDetails from '../views/InfoDetails.vue'
import Error from '../views/Error.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/repo', name: 'repository page', component: Repo},
        {path: '/repo/:id', name: 'repo details page', component: InfoDetails},
        {path: '/:pathMatch(.*)*', name: '404  page', component: Error}
    ]
})
export default router