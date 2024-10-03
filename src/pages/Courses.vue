<template>
    <div class="Course page">
        <header>
            <p>
                <router-link :to="{ name: 'home' }">Back to courses</router-link>
            </p>
            <h1 v-if="course">{{ title }}</h1>
            <p v-if="course">{{ description }}</p>
            <router-link class="button primary icon" v-if="course"
                :to="`/courses/${courseId}/lessons/${course.lessons[0]?.id}`">
                Start course
            </router-link>
            <p v-else>Course not found.</p>
        </header>
        <div v-if="course">
            <LessonSummary v-for="(lesson, index) in lessons" :key="index" :course-id="courseId" :lesson="lesson"
                :num="index + 1" />
        </div>
    </div>
</template>

<script>
import courses from '../courses'
import { useRoute } from 'vue-router'
import LessonSummary from '../components/LessonSummary.vue'

export default {
    components: {
        LessonSummary
    },
    setup() {
        const route = useRoute();
        const courseId = route.params.courseId;
        const course = courses.find(course => course.id === parseInt(courseId))
        if (!course) {
            return {
                course: null,
                courseId
            }
        }

        const { title, description, lessons } = course;

        return {
            courseId,
            course,
            title,
            description,
            lessons
        }
    }
}
</script>
