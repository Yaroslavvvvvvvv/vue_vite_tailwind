<template>
  <div class="overflow-y-hidden animate-fade-down animate-duration-1000">
    <div class="flex justify-center items-center">
      <div class="2xl:mx-auto 2xl:container py-6 bg-stone-100 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div class="flex flex-col jusitfy-center items-center space-y-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
            <router-link to="/list">
              <div class="relative group flex justify-center items-center h-full w-full">
                <img class="object-center object-cover h-full w-full"
                     src="https://eney-plus.com.ua/newphoto/big/MI0024_1.jpg" alt="girl-image"/>
                <button
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute
                  text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Полуторна
                </button>
                <div
                    class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36
                  bg-white bg-opacity-50"></div>
              </div>
            </router-link>
            <div class="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
              <div class="relative group flex justify-center items-center h-full w-full">
                <img class="object-center object-cover h-full w-full"
                     src="https://eney-plus.com.ua/newphoto/big/MI0009_2.jpg" alt="shoe-image"/>
                <button
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10
                    absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Подвійна
                </button>
                <div
                    class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20
                    w-36 bg-white bg-opacity-50"></div>
              </div>
              <div class="relative group flex justify-center items-center h-full w-full">
                <img class="object-center object-cover h-full w-full"
                     src="https://eney-plus.com.ua/newphoto/big/MI0032_1.jpg" alt="watch-image"/>
                <button
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10
                    absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Євро
                </button>
                <div
                    class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20
                    w-36 bg-white bg-opacity-50"></div>
              </div>
            </div>

            <div class="relative group justify-center items-center h-full w-full hidden lg:flex">
              <img class="object-center object-cover h-full w-full"
                   src="https://eney-plus.com.ua/newphoto/big/MI0006_2.jpg" alt="girl-image"/>
              <button
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Сімейна
              </button>
              <div
                  class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
            <div class="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
              <img class="object-center object-cover h-full w-full hidden md:block"
                   src="https://eney-plus.com.ua/newphoto/big/MI0006_2.jpg" alt="girl-image"/>
              <img class="object-center object-cover h-full w-full md:hidden"
                   src="https://eney-plus.com.ua/newphoto/big/MI0006_2.jpg"
                   alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"/>
              <button
                  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Сімейна
              </button>
              <div
                  class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
          </div>
          <div class="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
            <img class="object-center object-cover h-full w-full hidden md:block"
                 src="https://eney-plus.com.ua/newphoto/big/MI0006_2.jpg" alt="girl-image"/>
            <img class="object-center object-cover h-full w-full sm:hidden"
                 src="https://eney-plus.com.ua/newphoto/big/MI0006_2.jpg"
                 alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"/>
            <button
                class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
              Сімейна
            </button>
            <div
                class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "component",
  data() {
    return {};
  },
};
</script>

<style>
</style>
