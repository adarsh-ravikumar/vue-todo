<script setup lang="ts">
import '@/styles/app.scss'
import { useQuoteStore } from './stores/quote'
import { onMounted } from 'vue'
import axios from 'axios'
import { useTaskStore } from './stores/task'

onMounted(async () => {
  let stored = localStorage.getItem('tasks')
  if (stored) {
    const tasks = useTaskStore()
    tasks.list = JSON.parse(stored)
  }

  // load quote on site load. having this logic within
  // the quote component causes it to run whenever todo
  // is navigated to which is not the desired behaviour
  const quote = useQuoteStore()
  let quoteRes = await axios.get('http://api.quotable.io/random')
  quote.author = quoteRes.data.author
  quote.quote = quoteRes.data.content
})
</script>

<template>
  <div class="app">
    <header>
      <h1>Vue To Do</h1>
      <nav>
        <RouterLink to="/" name="todo"> Todo </RouterLink>
        <RouterLink to="/about" name="about">About</RouterLink>
      </nav>
    </header>

    <RouterView />

    <p class="credit">Made with 💖 by <a href="https://www.github.com/adarsh-ravikumar/">Adarsh Ravikumar</a></p>
  </div>
</template>
