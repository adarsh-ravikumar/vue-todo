<script setup lang="ts">
import Quote from '@/components/quote.vue'
import Task from '@/components/task.vue'

import AddTask from '@/components/add_task.vue'
import Remaining from '@/components/remaining.vue'

import { useTaskStore } from '@/stores/task'

const tasks = useTaskStore()
</script>
<template>
  <div class="info">
    <Remaining />
    <Quote />
  </div>

  <AddTask />

  <ul class="tasks">
    <li v-for="task in Object.keys(tasks.list)" :key="task">
      <Task :id="task" :done="tasks.list[task].done">
        {{ tasks.list[task].title }}
      </Task>
    </li>
  </ul>
  <p v-if="Object.keys(tasks.list).length === 0" class="no_tasks">No Tasks Added Yet...</p>
</template>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tasks {
  list-style: none;
}

.no_tasks {
  text-align: center;
  padding: 2rem;
  color: $text-disabled;
  font-style: italic;
  font-size: 1.1rem;
}
</style>
