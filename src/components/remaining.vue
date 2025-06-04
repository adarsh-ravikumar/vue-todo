<script setup lang="ts">
import { useTaskStore } from '@/stores/task'
import { computed, watch } from 'vue'

const tasks = useTaskStore()

</script>

<template>
  <p>You Have {{ tasks.remaining }} task{{ tasks.remaining === 1 ? "" : "s" }} remaining</p>
</template>
