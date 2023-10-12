<template>
  <div class="bg-stone-100 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <router-link v-for="product in products" :key="product.id" :to="product.href" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-md text-gray-700 font-medium">{{ product.name }}</h3>
          <p class="mt-1 text-sm text-gray-900">{{ product.about }}</p>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
        </router-link>
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
    href: '/card',
    price: '410.00 грн',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/MI0025_1.jpg',
    imageAlt: 'постіль',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]
</script>