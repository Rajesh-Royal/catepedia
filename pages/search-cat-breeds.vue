<template>
  <div>
    <info-dialog
      v-show="toggleDialog"
      :cat-breed="catBreed"
      @close-dialog="toggleDialog = !toggleDialog"
    />
    <div class="py-7">
      <h1 class="text-4xl font-bold pl-1">
       Search cats by their breed name
      </h1>
      <p class="mt-2.5 pl-1">
        Learn more about all the furry felines around you by searching for them.
        It's the cat-cyclopedia you didn't know you needed till now!
      </p>
      <form
        class="text-2xl mt-6 flex flex-wrap lg:flex-nowrap gap-3"
        @submit.prevent="searchBreed"
      >
        <label v-show="false" for="search-a-cat-breed">
          Enter a search term
        </label>
        <input
          id="search-a-cat-breed"
          v-model="searchStr"
          name="search-a-cat-breed"
          type="text"
          class="p-2 min-w-full lg:min-w-0 w-full outline-none border-2 border-white bg-white focus:border-blue-dark rounded border border-dashed border-white shadow-lg"
          placeholder="Search for a cat breed"
          @input="searchBreed"
        />
        <button
          type="submit"
          aria-label="Search Now"
          class="py-2 px-4 flex-shrink-0 outline-none border-2 border-blue-dark focus:bg-white focus:text-blue-dark bg-blue-dark text-white border border-dashed border-white shadow-lg"
        >
          Search Meow!
        </button>
      </form>
      <div>
        <skeleton-loader
          :is-loading="isLoading && !firstLoad"
          :count-per-page="countPerPage"
        />
        <div
          v-if="searchResults.length && !isLoading"
          class="flex flex-wrap mt-6 -mx-3"
        >
          <div
            v-for="searchResult in searchResults"
            :key="searchResult.id"
            class="w-full md:w-1/2 lg:w-1/3 p-3"
          >
            <cat-card
              :cat-breed="searchResult"
              @update:toggle-dialog="showDialog"
            />
          </div>
        </div>
        <div
          v-else-if="
            !searchResults.length &&
            error &&
            Object.keys(error).length &&
            !isLoading
          "
          class="mt-6"
        >
          <lazy-cat-404 v-if="Math.floor(error.errorCode) === 404" />
          <p v-else>
            Error {{ Math.floor(error.errorCode) }} : {{ error.error.error }}
          </p>
        </div>
      </div>
      <lazy-pagination
        v-if="searchResults.length"
        :page-num.sync="pageNum"
        :is-loading="isLoading"
        :last-page-num="Math.ceil(resultCount / countPerPage) - 1"
      />
      <div
        v-if="searchResults.length && !isLoading"
        class="text-center text-sm text-gray-dark mt-1"
      >
        {{ resultCount }} results found!
      </div>
    </div>
  </div>
</template>

<script setup>
import { debounce } from '../utility/debounce';

const searchStr = ref('');
const timeoutId = ref(null);
const searchResults = ref([]);
const resultCount = ref(0);
const pageNum = ref(0);
const catBreed = ref({});
const isLoading = ref(true);
const firstLoad = ref(true);
const toggleDialog = ref(false);
const nextDisable = ref(false);
const error = ref({}); 

const {isDesktop, isTablet} = useDevice();

const countPerPage = computed(() => {
  let cardCount = 5
  if (isDesktop) {
    cardCount = 9
  } else if (isTablet) {
    cardCount = 6
  }
  return cardCount
})

watch(pageNum, () => {
  isLoading.value = true
  timeoutId.value = debounce(findBreeds, timeoutId.value)()
})

watch(toggleDialog, (newVal) => {
  if (newVal) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
})

const searchBreed = () => {
  error.value = {}
  if (searchStr.value) {
    isLoading.value = true
    firstLoad.value = false
    pageNum.value = 0
    timeoutId.value = debounce(findBreeds, timeoutId.value)()
  } else {
    isLoading.value = false
    pageNum.value = 0
    timeoutId.value = null
    searchResults.value = []
  }
}

const findBreeds = async () => {
  if (searchStr.value) {
    const searchRes = await useFetch(`/api/theCatApi/fetchCatsByBreed?breed=${searchStr.value}`)
  
    if (searchRes && searchRes.data.value && searchRes.data.value.length) {
      resultCount.value = searchRes.data.value.length
      searchResults.value = searchRes.data.value
      nextDisable.value =
        resultCount.value < (pageNum.value + 1) * countPerPage.value
    } else if (searchRes && searchRes.error.value?.statusCode) {
      resultCount.value = 0
      searchResults.value = []
      error.value = searchRes.error
    }
  }
  timeoutId.value = null
  isLoading.value = false
}

const showDialog = (selectedBreed) => {
  catBreed.value = selectedBreed
  toggleDialog.value = !toggleDialog.value
}
</script>


