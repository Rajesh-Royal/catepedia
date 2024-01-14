<template>
  <div class="flex justify-center">
    <button
      :disabled="pageNum === 0 || isLoading"
      autocomplete="off"
      class="p-2 mr-4 border-2 border-blue-dark focus:bg-white focus:text-blue-dark disabled:opacity-20 bg-blue-dark text-white rounded-xl shadow-lg"
      @click="firstPage"
    >
      First
    </button>
    <button
      :disabled="prevDisable || isLoading"
      autocomplete="off"
      class="p-2 mr-4 border-2 border-blue-dark focus:bg-white focus:text-blue-dark disabled:opacity-20 bg-blue-dark text-white rounded-xl shadow-lg"
      @click="prevPage"
    >
      Prev
    </button>
    <span
      class="px-2 mr-4 text-xl place-self-center border-2 border-blue-dark rounded-xl"
    >
      {{ pageNum + 1 }}
    </span>
    <button
      :disabled="nextDisable || isLoading"
      class="p-2 mr-4 border-2 border-blue-dark focus:bg-white focus:text-blue-dark disabled:opacity-20 bg-blue-dark text-white rounded-xl shadow-lg"
      @click="nextPage"
    >
      Next
    </button>
    <button
      :disabled="nextDisable || isLoading"
      autocomplete="off"
      class="p-2 border-2 border-blue-dark focus:bg-white focus:text-blue-dark disabled:opacity-20 bg-blue-dark text-white rounded-xl shadow-lg"
      @click="lastPage"
    >
      Last
    </button>
  </div>
</template>

<script>
export default {
  props: {
    pageNum: {
      type: Number,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    lastPageNum: {
      type: Number,
      required: true,
    },
  },
  computed: {
    prevDisable() {
      return this.pageNum === 0
    },
    nextDisable() {
      return this.pageNum === this.lastPageNum
    },
  },
  methods: {
    nextPage() {
      this.$emit('update:page-num', this.pageNum + 1)
    },
    prevPage() {
      this.$emit('update:page-num', this.pageNum - 1)
    },
    firstPage() {
      this.$emit('update:page-num', 0)
    },
    lastPage() {
      this.$emit('update:page-num', this.lastPageNum)
    },
  },
}
</script>
