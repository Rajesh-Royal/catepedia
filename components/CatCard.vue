<template>
  <div class="bg-white text-blue-dark border border-dashed border-black shadow-lg h-full ">
  <div class="flex items-center">
    <div class="flex-grow p-2">
      <h2 class="text-2xl">{{ catBreed.name }}</h2>
      <p v-if="catBreed.alt_names" class="font-light">
        <abbr title="also known as" class="font-normal italic"> a.k.a. </abbr>
        {{ catBreed.alt_names }}
      </p>
      <h3 class="text-xl">Traits:</h3>
      <div class="flex flex-wrap -m-1">
            <span
              v-for="catTemp in catBreed.temperament.split(', ')"
              :key="`${catTemp}`"
              class="p-1.5 m-1 rounded-lg bg-lavender-dark text-white"
            >
              {{ catTemp }}
            </span>
          </div>
    </div>
    <div v-if="catBreed.reference_image_id" class="w-full md:w-1/2">
      <div v-show="!imageLoading" class="flex justify-center md:justify-end items-center">
        <img :src="`https://cdn2.thecatapi.com/images/${catBreed.reference_image_id}.jpg`"
          :alt="`A picture of a ${catBreed.name ? catBreed.name : 'cat'}`" class="h-48 object-cover"
          @load="imageLoading = false" />
      </div>
      <div v-show="imageLoading" class="m-1 w-full h-48 rounded-lg bg-gray animate-pulse"
        aria-label="loading cat image..."></div>
    </div>
  </div>
  <hr class="border border-dotted border-[1px]">
  <button
      v-if="Object.keys(catBreed).length"
      class="icon-button flex-shrink-0 m-auto flex items-center gap-2 bg-pink py-1 px-8 my-5 border border-lavender border-dashed text-[16px] font-bold text-gray-dark"
      :aria-labelledby="`open-${catBreed.name}`"
      @click="$emit('update:toggle-dialog', catBreed)"
    >
    Read More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10 fill-current"
        role="img"
        viewBox="0 0 24 24"
      >
        <title :id="`open-${catBreed.name}`">
          Learn more about {{ catBreed.name }}
        </title>
        <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 7l-3.36-2.171c-.405.625-.64 1.371-.64 2.171 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-.742 0-1.438.202-2.033.554l2.033 3.446z"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    catBreed: {
      type: Object,
      required: true,
    },
  },
}
</script>
