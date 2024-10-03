<template>
    <div class="Homepage">
        <header>
            <h1>Vue Online Course Site</h1>
        </header>
        <CourseSummary v-for="course in courses" :key="course.id" :course="course" />
    </div>
</template>

<script>
import courses from '../courses'
import CourseSummary from '../components/CourseSummary.vue'

export default {
  name: 'Home',
  components: {
    CourseSummary
  },
  data() {
    return {
      courses 
    }
  }
}

</script>