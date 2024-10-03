<template>
    <section class="summary">
        <div>
            <div class="title">
                <h2>
                    <router-link class="no-underline cursor-pointer"
                        :to="{ name: 'course', params: { courseId: course.id } }">
                        {{ course.title }}
                    </router-link>
                </h2>
            </div>
            <p>
                <router-link class="no-underline cursor-pointer"
                    :to="{ name: 'course', params: { courseId: course.id } }">
                    {{ course.description }}
                </router-link>
            </p>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        course: {
            type: Object,
            require: true
        }
    },
})
</script>
