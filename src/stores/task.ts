import { defineStore } from 'pinia'
import type ITask from '@/types/task'
import { nanoid } from 'nanoid'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    list: {} as { [key: string]: ITask },
  }),

  actions: {
    add(title: string) {
      let id = nanoid(5)
      this.list[id] = { id, title, done: false }
      this.update()
    },

    delete(id: string) {
      delete this.list[id]
      this.update()
    },

    toggle(id: string) {
      this.list[id].done = !this.list[id].done
      this.update()
    },

    update() {
      localStorage.setItem('tasks', JSON.stringify(this.list))
    },
  },

  getters: {
    remaining: (state) => {
      return Object.values(state.list).filter((task) => !task.done).length
    },
  },
})
