<template>
  <div class="bg-pink">
    <lazy-info-dialog v-if="toggleHelp" :toggle-dialog.sync="toggleHelp">
      <template #card >
        <div
          role="dialog"
          aria-labelledby="app-info"
          aria-describedby="app-description"
          class="mx-auto max-w-3xl shadow-lg rounded border border-dashed border-2 bg-white-dark w-full p-4 overflow-auto"
        >
          <button
            ref="closeHelp"
            aria-label="close help"
            class="float-right icon-button"
            aria-labelledby="close-info-help"
            role="img"
            @click="toggleHelp = !toggleHelp"
          >
            <svg
              class="h-12 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <title id="close-info-help">Close help</title>
              <path
                d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 12.21875 10.78125 L 10.78125 12.21875 L 14.5625 16 L 10.78125 19.78125 L 12.21875 21.21875 L 16 17.4375 L 19.78125 21.21875 L 21.21875 19.78125 L 17.4375 16 L 21.21875 12.21875 L 19.78125 10.78125 L 16 14.5625 Z"
              />
            </svg>
          </button>

          <h2 id="app-info" class="text-4xl font-bold mb-2">
            What is Catepedia
          </h2>
          <p id="app-description" class="mb-2">
            Catepedia is a single-page app
            (SPA) using Vue & Nuxt for searching for cat breeds. It has a search
            bar where the user can enter the cat breed’s name and the results
            are shown as cards below the search bar in a list.
          </p>
          <p>
            To get started, start by entering a search term in the input box
            below.
          </p>
        </div>
      </template>
    </lazy-info-dialog>
    <div class="container mx-auto min-h-screen px-6">
      <div class="py-3 flex justify-center flex-wrap sm:justify-between gap-3">
        <Logo />
        <div class="flex">
          <button
            type="button"
            class="p-2 my-2 mr-2 flex text-xl items-center outline-none border-2 border-lavender-dark focus:bg-white focus:text-blue-dark bg-lavender-dark text-white border border-dashed border-white shadow-lg"
            aria-labelledby="toggle-help"
            @click="() => {
              toggleHelp = !toggleHelp
              $nextTick(() => {
                if (toggleHelp) $refs.closeHelp.focus()
              })
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 fill-current"
              :class="{ 'mr-2': !$device.isMobile }"
              viewBox="0 0 32 32"
              role="img"
            >
              <title id="toggle-help">Open help dialog</title>
              <path
                d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15 10 L 15 12 L 17 12 L 17 10 Z M 15 14 L 15 22 L 17 22 L 17 14 Z"
              />
            </svg>
            {{ $device.isMobile ? '' : 'Help' }}
          </button>
          <a
            href="https://github.com/Rajesh-Royal/catepedia"
            target="_blank"
            class="p-2 my-2 flex justify-center text-xl outline-none border-2 bg-blue-dark border-blue-dark text-white focus:bg-white focus:text-blue-dark border border-dashed border-white shadow-lg"
            rel="noopener noreferrer"
            aria-labelledby="open-github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 fill-current"
              viewBox="0 0 32 32"
              role="img"
            >
              <title id="open-github">Read source code on github</title>
              <path
                fill-rule="evenodd"
                d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
              />
            </svg>
          </a>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      toggleHelp: false,
    }
  },
}
</script>
