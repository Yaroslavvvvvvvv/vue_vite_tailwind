<script setup>
import {ref} from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'


const mobileMenuOpen = ref(false)
const scrollTo = (target) => {
  const targetElement = document.querySelector(target);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}

</script>

<template>
  <header class="sticky top-0 bg-stone-400/75 z-50">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 animate-fade-down animate-duration-1000"
         aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="text-4xl h-8 w-auto text-teal-700 font-black">Warmly.</span>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <router-link
            to="/"
            @click="scrollTo('#home')"
            class="text-lg font-semibold leading-6 text-gray-900 hover:text-teal-700">Головна
        </router-link>
        <router-link
            to="/"
            @click="scrollTo('#catalog')"
            class="text-lg font-semibold leading-6 text-gray-900 hover:text-teal-700">Каталог
        </router-link>
        <a href="#" class="text-lg font-semibold leading-6 text-gray-900 hover:text-teal-700">Умови співпраці</a>
        <a href="#" class="text-lg font-semibold leading-6 text-gray-900 hover:text-teal-700">Популярні запитання</a>
        <a
            @click="scrollTo('#footer')"
            class="text-lg font-semibold leading-6 text-gray-900 hover:text-teal-700">Зв'язок з нами</a>
      </PopoverGroup>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10"/>
      <DialogPanel @click="mobileMenuOpen = false"
                   class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-stone-400/75 px-6 py-6 sm:max-w-sm sm:ring-1
              sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="text-4xl h-8 w-auto text-teal-700 font-black hover:text-green-800">Warmly.</span>
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="#"
                 @click="scrollTo('#home')"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Головна
              </a>
              <a href="#catalog"
                 @click="scrollTo('#catalog')"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Каталог
              </a>
              <a href="#"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Умови
                співпраці</a>
              <a href="#"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Популярні
                запитання</a>
              <a @click="scrollTo('#footer')"
                 href="#footer"
                 class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Зв'язок
                з нами</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>