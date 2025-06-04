import { defineStore } from 'pinia'


export const useQuoteStore = defineStore(
  'quote',
  {
    state: () => ({ author: '', quote: '' }),
  }
)
