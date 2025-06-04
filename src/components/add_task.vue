<script setup lang="ts">
import { useTaskStore } from '@/stores/task'
import { ref } from 'vue'

const tasks = useTaskStore()

const nameState = ref('')

function handleCreate() {
  if (nameState.value.trim().length === 0) {
    return
  }

  tasks.add(nameState.value)

  nameState.value = ''
}
</script>

<template>
  <div class="add_task">
    <input type="text" v-model="nameState" placeholder="Add new task"/>
    <button class="add" v-on:click="handleCreate()">
      <span class="material-symbols-outlined">add</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.add_task {
  width: 100%;
  display: flex;
  justify-content: space-between;


  input {
    width: 90%;
    border: none;
    outline: none;
    border-bottom: 2px solid $text-disabled;
    font-size: 1.1rem;
  }

  button {
    width: 3rem;
    aspect-ratio: 1;
    border: none;
    outline: none;
    border-radius: 0.5rem;
    background: $black;
    cursor: pointer;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);

    transition: scale 0.2s ease-in-out;

    &:hover {
      scale: 110%;
    }
    &:active {
      scale: 90%;
    }

    display: grid;
    place-items: center;

    span {
      color: $white;
      scale: 130%;
    }
  }
}
</style>
