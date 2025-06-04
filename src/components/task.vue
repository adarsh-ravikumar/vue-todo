<script setup lang="ts">
import { useTaskStore } from '@/stores/task'
import { ref, watch } from 'vue'

const { done, id } = defineProps<{ id: string; done: boolean }>()

const doneState = ref(done)
watch(
  () => done,
  (newVal) => {
    doneState.value = newVal
  },
)

const tasks = useTaskStore()

function handleCheck() {
  doneState.value = !doneState.value

  tasks.toggle(id)
}

function handleDelete() {
  tasks.delete(id)
}
</script>

<template>
  <div class="task">
    <div class="left">
      <input type="checkbox" :checked="done" v-on:input="handleCheck()" v-model="doneState" />
      <p :class="doneState ? 'done' : ''"><slot></slot></p>
    </div>
    <button class="del" v-on:click="handleDelete()">
      <span class="material-symbols-outlined">close</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.task {
  display: flex;
  justify-content: space-between;
  outline: 1px solid $text-disabled;

  padding: 0.9rem 1.3rem;
  border-radius: 0.8rem;
  margin-block: 1.5rem;
  align-items: center;

  .left {
    display: flex;
    gap: 1rem;
    font-size: 1rem;
    align-items: center;

    input {
      accent-color: $black;
      cursor: pointer;
      scale: 140%;
    }
  }

  .del {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    display: grid;
    place-content: center;
  }

  .done {
    text-decoration: line-through;
    color: $text-disabled;
    font-style: italic;
  }
}
</style>
