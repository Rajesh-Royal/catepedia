<template>
  <div
    class="z-10 p-6 md:p-10 fixed w-screen h-screen overflow-hidden bg-blue-dark bg-opacity-70 flex justify-center items-center inset-0"
  >
    <slot name="card">
      <div
        v-if="!slotHasValue && Object.keys(catBreed).length"
        role="dialog"
        :aria-labelledby="catBreed && catBreed.name ? 'aria-labelledby' : ''"
        :aria-describedby="
          catBreed && catBreed.description ? 'cat-description' : ''
        "
        class="mx-auto max-w-3xl shadow-lg rounded border border-dashed border-2 bg-white-dark h-full w-full p-4 grid grid-cols-12 gap-3 auto-rows-min overflow-auto"
      >
        <div class="col-span-12">
          <button
            ref="closeDialog"
            class="float-right icon-button"
            aria-labelledby="close-info-dialog"
            @click="$emit('close-dialog')"
          >
            <svg
              class="h-12 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              role="img"
            >
              <title id="close-info-dialog">Close dialog</title>
              <path
                d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 12.21875 10.78125 L 10.78125 12.21875 L 14.5625 16 L 10.78125 19.78125 L 12.21875 21.21875 L 16 17.4375 L 19.78125 21.21875 L 21.21875 19.78125 L 17.4375 16 L 21.21875 12.21875 L 19.78125 10.78125 L 16 14.5625 Z"
              />
            </svg>
          </button>
        </div>
        <div class="col-span-12 flex flex-wrap md:flex-nowrap justify-between">
          <div class="flex-shrink p-1">
            <h2
              v-if="catBreed.name"
              id="cat-name"
              class="text-4xl font-bold mb-2"
            >
              {{ catBreed.name }}
            </h2>
            <p v-if="catBreed.alt_names" class="text-md font-light">
              <abbr title="also known as" class="font-normal italic">
                a.k.a.
              </abbr>
              {{ catBreed.alt_names }}
            </p>
          </div>
          <div v-if="catBreed.reference_image_id" class="w-full md:w-1/3">
            <div
              v-show="!imageLoading"
              class="flex justify-center md:justify-end items-center p-1"
            >
              <img
                :src="`https://cdn2.thecatapi.com/images/${catBreed.reference_image_id}.jpg`"
                :alt="`A picture of a ${catBreed.name ? catBreed.name : 'cat'}`"
                class="rounded-lg h-48"
                @load="imageLoading = false"
              />
            </div>
            <div
              v-show="imageLoading"
              class="m-1 w-full h-48 rounded-lg bg-gray animate-pulse"
              aria-label="loading cat image..."
            ></div>
          </div>
        </div>
        <p v-if="catBreed.description" id="cat-description" class="col-span-12">
          {{ catBreed.description }}
        </p>
        <div v-if="catBreed.temperament" class="col-span-12">
          <h3 class="cat-property-title">Nature</h3>
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
        <div v-if="catBreed.origin" class="col-span-12 md:col-span-4">
          <h3 class="cat-property-title">Origin:</h3>
          <p class="large-highlight-text">
            {{ catBreed.origin }}
          </p>
        </div>
        <div v-if="catBreed.life_span" class="col-span-6 md:col-span-4">
          <h3 class="cat-property-title">Lifespan:</h3>
          <p class="italic">
            <span class="large-highlight-text not-italic">{{
              catBreed.life_span
            }}</span>
            years
          </p>
        </div>
        <div
          v-if="catBreed.weight && catBreed.weight.metric"
          class="col-span-6 md:col-span-4"
        >
          <h3 class="cat-property-title">Weight:</h3>
          <p class="italic">
            <span class="large-highlight-text not-italic">{{
              catBreed.weight.metric
            }}</span>
            kg
          </p>
        </div>
        <div class="col-span-6 md:col-span-4">
          <h3 class="cat-property-title">Rare:</h3>
          <p class="large-highlight-text not-italic">
            {{ catBreed.rare ? 'Yes' : 'No' }}
          </p>
        </div>
        <div class="col-span-6 md:col-span-4">
          <h3 class="cat-property-title">Short Legs:</h3>
          <p class="large-highlight-text not-italic">
            {{ catBreed.short_legs ? 'Yes' : 'No' }}
          </p>
        </div>
        <div class="col-span-6 md:col-span-4">
          <h3 class="cat-property-title">Hairless:</h3>
          <p class="large-highlight-text not-italic">
            {{ catBreed.hairless ? 'Yes' : 'No' }}
          </p>
        </div>
        <div class="col-span-12 md:col-span-6">
          <h3 class="cat-property-title">Hypoallergenic:</h3>
          <p class="large-highlight-text not-italic">
            {{ catBreed.hypoallergenic ? 'Yes' : 'No' }}
          </p>
        </div>
        <div class="col-span-12 md:col-span-6">
          <h3 class="cat-property-title">Suppressed Tails:</h3>
          <p class="large-highlight-text not-italic">
            {{ catBreed.suppressed_tail ? 'Yes' : 'No' }}
          </p>
        </div>
        <div class="col-span-12 md:col-span-4">
          <h3 class="cat-property-title">Adaptability:</h3>
          <star-rating
            :value="catBreed.adaptability"
            property-name="adaptability"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <h3 class="cat-property-title">Affection Level:</h3>
          <star-rating
            :value="catBreed.affection_level"
            property-name="affection_level"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <h3 class="cat-property-title">Child Friendly :</h3>
          <star-rating
            :value="catBreed.child_friendly"
            property-name="child_friendly"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <h3 class="cat-property-title">Dog Friendly:</h3>
          <star-rating
            :value="catBreed.dog_friendly"
            property-name="dog_friendly"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <h3 class="cat-property-title">Energy Level:</h3>
          <star-rating
            :value="catBreed.energy_level"
            property-name="energy_level"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <h3 class="cat-property-title">Grooming:</h3>
          <star-rating :value="catBreed.grooming" property-name="grooming" />
        </div>
        <div class="col-span-12 md:col-span-4">
          <h3 class="cat-property-title">Health Issues:</h3>
          <star-rating
            :value="catBreed.health_issues"
            property-name="health_issues"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <h3 class="cat-property-title">Intelligence:</h3>
          <star-rating
            :value="catBreed.intelligence"
            property-name="intelligence"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <h3 class="cat-property-title">Shedding Level:</h3>
          <star-rating
            :value="catBreed.shedding_level"
            property-name="shedding_level"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <h3 class="cat-property-title">Social Needs:</h3>
          <star-rating
            :value="catBreed.social_needs"
            property-name="social_needs"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <h3 class="cat-property-title">Stranger Friendly:</h3>
          <star-rating
            :value="catBreed.stranger_friendly"
            property-name="stranger_friendly"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <h3 class="cat-property-title">Vocalisation:</h3>
          <star-rating
            :value="catBreed.vocalisation"
            property-name="vocalisation"
          />
        </div>
        <div class="col-span-12 h-2"></div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    catBreed: {
      type: Object,
      default: () => {},
    },
    toggleDialog: {
      type: Boolean,
      required: true,
    },
  },
  data: () => {
    return {
      imageLoading: true,
    }
  },
  computed: {
    slotHasValue() {
      return !!(this.$slots.card || [])[0]
    },
  },
  methods: {
    focusClose() {
      console.log(this.toggleDialog)
      this.imageLoading = true
      this.$nextTick(() => this.$refs.closeDialog.focus())
    },
  },
}
</script>
<style scoped>
.large-highlight-text {
  @apply text-2xl text-lavender-dark font-bold;
}

.cat-property-title {
  @apply text-xl mb-1 mt-2.5;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #6D5892; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
