<template>
    <section class="summary">
        <div>
            <div class="title">
                <h2>
                    <router-link class="no-underline cursor-pointer" :to="`/courses/${courseId}/lessons/${lesson.id}`"
                        aria-label="Go to lesson details">
                        {{ num }}. {{ lesson.title }}
                    </router-link>
                </h2>
            </div>
            <p>
                <router-link class="no-underline cursor-pointer" :to="`/courses/${courseId}/lessons/${lesson.id}`"
                    aria-label="Read more about {{ lesson.title }}">
                    {{ lesson.description }}
                </router-link>
            </p>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    courseId: {
        type: String,
        required: true
    },
    num: {
        type: Number,
        required: true
    },
    lesson: {
        type: Object,
        required: true
    }
});
</script>

<style scoped>
.summary {
    padding: 1em;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    margin-bottom: 1em;
    transition: background-color 0.3s;
}

.summary:hover {
    background-color: #f9f9f9;
}

.title h2 {
    margin: 0;
    font-size: 1.25em;
}

.no-underline {
    text-decoration: none;
    color: #333;
}

.no-underline:hover {
    text-decoration: underline;
}
</style>