import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue";
import Courses from "./pages/Courses.vue";
import Lesson from "./pages/Lesson.vue";

const routes =[
    { name: 'home', path: '/', component: Home },
    { name: 'course', path: '/courses/:courseId', component: Courses },
    { name: 'lesson', path: '/courses/:courseId/lessons/:lessonId', component: Lesson }
      
]

const router= createRouter({
    history: createWebHistory(), routes
})

export default router