<template>
  <div class="py-7">
      <h1 class="text-6xl font-bold pl-1 text-center font-['CuteMeow'] shadow-text">
        <span class="text-9xl">Meow</span>-sic to Your Ears<span class="text-lavender">:</span> A <span class="text-9xl">Cat</span> Breed Search Engine 🎵
      </h1>
      <p class="mt-2.5 pl-1 text-center">
        Do you love cats? Of course you do, who doesn’t? But how much do you really know about them? Do you know the difference between a Persian and a Ragdoll? A Siamese and a Sphynx? A Maine Coon and a Norwegian Forest?</p>

        <p class="mt-2.5 pl-1 text-center">If not, don’t worry, we have the solution for you! Introducing Meow-sic to Your Ears, the search engine that lets you learn everything about cat breeds. Just type in the name of the breed you want to know more about and get ready to be amazed. You will find out their history, personality, health, and more. You will also see how they compare to other breeds and which one is the best fit for you.</p>

        <p class="mt-2.5 pl-1 text-center">So what are you waiting for? Start your search now and discover the meow-sic to your ears. It’s the cat-cyclopedia you didn’t know you needed till now! 😻.</p>
      <form
        class="text-2xl mt-6 flex flex-wrap lg:flex-nowrap gap-3"
        @submit.prevent=""
      >
        <label v-show="false" for="search-a-cat-breed">
          Enter a search term
        </label>
        <input
          id="search-a-cat-breed"
          v-model="breedSearchString"
          name="search-a-cat-breed"
          type="text"
          class="p-2 min-w-full lg:min-w-0 w-full outline-none border-2 border-white bg-white focus:border-blue-dark rounded border border-dashed border-white shadow-lg"
          placeholder="Search for a cat breed"
          @input=""
        />
        <button
         :disabled="!breedSearchString"
          type="submit"
          aria-label="Search Now"
          class="py-2 px-4 flex-shrink-0 outline-none border-2 border-blue-dark focus:bg-white focus:text-blue-dark bg-blue-dark text-white border border-dashed border-white shadow-lg disabled:opacity-30"
        >
          Search Meow!
        </button>
      </form>
      <img src="../assets/images/catepedia.gif" class="m-auto h-48 w-48 mt-8" />
    </div>
</template>

<script setup lang="ts">
const breedSearchString = ref('');
</script>

<style scoped>
.shadow-text {
  text-shadow: 2px 2px 0 #ffffff, 4px 4px 0 #ffffff, 6px 6px 0 rgb(109 88 146 / 1);
}
</style>
