import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import HomePage from "../views/HomePage.vue";
import Dashboard from "../views/Dashboard.vue";
import DashboardData from "../views/DashboardData.vue"
import Messages from "../views/Messages.vue";
import Students from "../views/Students.vue";
import Announcement from "../views/Announcement.vue";
import Forums from "../views/Forums.vue";
import TccArea from "../views/TccArea.vue";
import ViewAllocations from "../views/ViewAllocations.vue";
import AddAllocations from "../views/AddAllocations.vue";
import RemoveAllocations from "../views/RemoveAllocations.vue";


const routes = [
    {
        path: "",
        name: "Login",
        component: Login,
        meta: {
            title: 'Login',
            useLayout: false
        }
    },
    {
        path: "/home",
        name: "HomePage",
        component: HomePage,
        meta: {
            title: 'Home',
            useLayout: true
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            title: 'Dashboard',
            useLayout: true
        }
    },
    {
        path: "/dashboard-data",
        name: "Dashboard Data",
        component: DashboardData,
        meta: {
            title: 'Informações do Curso',
            useLayout: true
        }
    },
    {
        path: "/messages",
        name: "Messages",
        component: Messages,
        meta: {
            title: 'Mensagens',
            useLayout: true
        }
    },
    {
        path: "/students",
        name: "Students",
        component: Students,
        meta: {
            title: 'Estudantes',
            useLayout: true
        }
    },
    {
        path: "/announcement",
        name: "Announcement",
        component: Announcement,
        meta: {
            title: 'Publicar Anúncio',
            useLayout: true
        }
    },
    {
        path: "/forum",
        name: "Forum",
        component: Forums,
        meta: {
            title: 'Fóruns Pendentes',
            useLayout: true
        }
    },
    {
        path: "/tcc-area",
        name: "TccArea",
        component: TccArea,
        meta: {
            title: 'Área TCC',
            useLayout: true
        }
    },
    {
        path: "/view-allocations",
        name: "ViewAllocations",
        component: ViewAllocations,
        meta: {
            title: 'Visualizar Alocações',
            useLayout: true
        }
    },
    {
        path: "/add-allocations",
        name: "AddAllocations",
        component: AddAllocations,
        meta: {
            title: 'Realizar Alocações',
            useLayout: true
        }
    },
    {
        path: "/remove-allocations",
        name: "RemoveAllocations",
        component: RemoveAllocations,
        meta: {
            title: 'Remover Alocações',
            useLayout: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.useLayout !== false) {
        document.title = `${to.meta.title}`
    } else {
        document.title = "Login"
    }
    next()
})

export default router







