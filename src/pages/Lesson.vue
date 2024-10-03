<template>
    <div class="Lesson page">
        <header>
            <p>
                <router-link :to="`/courses/${course.id}`">Back to {{ course.title }}</router-link>
            </p>
            <h1>{{ lesson.title }}</h1>
        </header>
        <div class="Content">
            <vue-vimeo-player :video-id="lesson.vimeoId" :options="{ responsive: true }" />
        </div>
    </div>
</template>

<script>
import courses from '../courses'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const { courseId, lessonId } = route.params
        
        const course = courses.find(course => course.id === parseInt(courseId))

        if (!course) {
            console.error('Course not found:', courseId);
            return { course: {}, lesson: {} }; 
        }

        const lesson = course.lessons.find(lesson => lesson.id === parseInt(lessonId))

        if (!lesson) {
            console.error('Lesson not found:', lessonId);
            return { course, lesson: {} }; 
        }

        return {
            course,
            lesson
        }
    }
}
</script>
