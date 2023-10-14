<template>
  <div class="bg-stone-100 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img :src="product.imageSrc" alt="постіль"
                 class="h-full w-full object-cover object-center group-hover:opacity-75"
                 @click="showProductModal(product)"/>
          </div>
          <h3 class="mt-4 text-md text-gray-700 font-medium">{{ product.name }}</h3>
          <p class="mt-1 text-sm text-gray-900">{{ product.about }}</p>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Dialog -->
  <div v-if="selectedProduct"
       class="fixed inset-0 flex items-center justify-center z-50 animate-fade-down animate-duration-1000">
    <div class="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row bg-gray-200">
      <div class="md:w-1/2 sm:h-3/4 ">
        <img :src="selectedProduct.imageSrc" alt="постіль"/>
      </div>
      <div class="bg-gray-200 p-4 md:p-8 w-full md:w-1/2">
        <h2 class="font-semibold  text-2xl">{{ selectedProduct.name }}</h2>
        <p>{{ selectedProduct.about }}</p>
        <div class="flex justify-between">
          <p class="font-bold text-gray-700">Ціна:<span class="text-gray-700">{{selectedProduct.price }}</span></p>
          <button @click="closeProductModal" class="text-blue-500">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {products} from '../assets/products/products.js';

const selectedProduct = ref(null);

const showProductModal = (product) => {
  selectedProduct.value = product;
};

const closeProductModal = () => {
  selectedProduct.value = null;
};
</script>
