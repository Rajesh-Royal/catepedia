<template>
  <div class="flex text-lavender-dark" :aria-label="`Rated ${value} out of 5`">
    <div v-for="count in 5" :key="`${propertyName}-${count}`">
      <svg
        v-if="count <= value"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
        class="star-style"
        role="img"
      >
        <path
          d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
        />
      </svg>
      <svg
        v-else
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
        class="star-style"
        role="img"
      >
        <path
          d="M1201 1004l306-297-422-62-189-382-189 382-422 62 306 297-73 421 378-199 377 199zm527-357q0 22-26 48l-363 354 86 500q1 7 1 20 0 50-41 50-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    propertyName: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
.star-style {
  @apply h-7 fill-current;
}
</style>
