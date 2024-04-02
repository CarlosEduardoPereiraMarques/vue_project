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
import Callback from "../views/Callback.vue";
import SingleMessage from "../views/SingleMessage.vue";


const routes = [
    {
        path: "",
        name: "Login",
        component: Login,
        meta: {
            title: 'Login'
        }
    },
    {
        path: '/callback',
        name: 'Callback',
        component: Callback,
        meta: {
            title: 'Callback'
        }
    },
    {
        path: "/home",
        name: "HomePage",
        component: HomePage,
        meta: {
            title: 'Home'
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            title: 'Dashboard'
        }
    },
    {
        path: "/dashboard-data",
        name: "Dashboard Data",
        component: DashboardData,
        meta: {
            title: 'Informações do Curso'
        }
    },
    {
        path: "/messages",
        name: "Messages",
        component: Messages,
        meta: {
            title: 'Mensagens'
        }
    },
    {
        path: '/message/:id',
        name: 'Single Message',
        component: SingleMessage,
        props: true,
        meta: {
            title: 'Mensagem'
        }
    },
    {
        path: "/students",
        name: "Students",
        component: Students,
        meta: {
            title: 'Estudantes'
        }
    },
    {
        path: "/announcement",
        name: "Announcement",
        component: Announcement,
        meta: {
            title: 'Publicar Anúncio'
        }
    },
    {
        path: "/forum",
        name: "Forum",
        component: Forums,
        meta: {
            title: 'Fóruns Pendentes'
        }
    },
    {
        path: "/tcc-area",
        name: "TccArea",
        component: TccArea,
        meta: {
            title: 'Área TCC'
        }
    },
    {
        path: "/view-allocations",
        name: "ViewAllocations",
        component: ViewAllocations,
        meta: {
            title: 'Visualizar Alocações'
        }
    },
    {
        path: "/add-allocations",
        name: "AddAllocations",
        component: AddAllocations,
        meta: {
            title: 'Realizar Alocações'
        }
    },
    {
        path: "/remove-allocations",
        name: "RemoveAllocations",
        component: RemoveAllocations,
        meta: {
            title: 'Remover Alocações'
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







