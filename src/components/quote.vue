<script setup lang="ts">
import { useQuoteStore } from '@/stores/quote'

const quote = useQuoteStore()

</script>

<template>
  <div class="quote">
    <p class="quote">"{{ quote.quote }}"</p>

    <p class="author">- {{ quote.author }}</p>
  </div>
</template>

<style lang="scss" scoped>
.quote,
.author {
  font-style: italic;
  color: $text-disabled;
  flex: 1;
}
</style>
