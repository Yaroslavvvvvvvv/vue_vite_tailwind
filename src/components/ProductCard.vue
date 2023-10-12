<template>
  <div class="bg-gray-100 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4" v-for="product in products" :key="product.id">
          <div class="h-[460px] rounded-lg bg-gray-300 mb-4">
            <img class="w-full h-full object-cover" :src="product.imageSrc" alt="Product Image">
          </div>
        </div>
        <div class="md:flex-1 px-4" v-for="product in products" :key="product.id">
          <h2 class="text-2xl font-bold mb-2">{{product.name}}</h2>
          <p class="text-gray-700 text-sm mb-4">{{product.about}}
          </p>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700">ЦІна:</span>
              <span class="text-gray-700 ml-2">{{product.price}}</span>
            </div>
            <div>
              <span class="font-bold text-gray-700">Наявність:</span>
              <span class="text-gray-600 ml-2">{{product.availability}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: 'Полуторна постільна білизна МІ0025',
    about: 'Матеріал: 100% microfiber. До комплекту входить: Наволочка 50х70 - 1шт Підковдра 145х210 - 1шт Простирадло ' +
        '145х214 1шт. Тканина не просвічується, витримує часте прання.',
    price: '410.00 грн',
    availability:'в наявності',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/MI0025_1.jpg',
  },
]
</script>