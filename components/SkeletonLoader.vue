<template>
  <div v-if="isLoading" class="flex flex-wrap mt-6 -mx-3">
    <div
      v-for="(loader, index) in countPerPage"
      :key="index"
      class="w-full md:w-1/2 lg:w-1/3 p-3"
    >
      <slot name="loader">
        <div
          class="bg-white text-blue-dark rounded-xl shadow-lg p-2.5 h-full flex items-center"
        >
          <div class="flex-grow pr-2">
            <h2 class="w-2/3 mb-1 h-8 rounded-md bg-gray animate-pulse"></h2>
            <p class="h-6 mt-1 rounded-md bg-gray animate-pulse"></p>
          </div>
          <div class="h-8 w-8 m-1 rounded-full bg-gray animate-pulse"></div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    countPerPage: {
      type: Number,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
