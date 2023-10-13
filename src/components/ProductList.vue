<template>
  <div class="bg-stone-100 animate-fade-down animate-duration-1000">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <router-link v-for="product in products" :key="product.id" :to="product.href" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img :src="product.imageSrc" alt="постіль" class="h-full w-full object-cover object-center group-hover:opacity-75" />
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
  },
  {
    id: 2,
    name: 'Полуторна постільна білизна МІ0027',
    about:'Матеріал: 100% microfiber. До комплекту входить: Наволочка 50х70 - 1шт Підковдра 145х210 - 1шт Простирадло ' +
        '145х214 1шт. Тканина не просвічується, витримує часте прання.',
    href: '/card',
    price: '420.00 грн',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/MI0027_1.jpg',
  },
  {
    id: 3,
    name: 'Полуторна постільна білизна МІ0024',
    about: 'Матеріал: 100% microfiber. До комплекту входить: Наволочка 50х70 - 1шт Підковдра 145х210 - 1шт Простирадло ' +
        '145х214 1шт. Тканина не просвічується, витримує часте прання.',
    href: '#',
    price: '410.00 грн',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/MI0024_1.jpg',
  },
  {
    id: 4,
    name: 'Полуторна постільна білизна МІ0022',
    about: 'Матеріал: 100% microfiber. До комплекту входить: Наволочка 50х70 - 1шт Підковдра 145х210 - 1шт Простирадло ' +
        '145х214 1шт. Тканина не просвічується, витримує часте прання.',
    href: '#',
    price: '410.00 грн',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/MI0022_1.jpg',
  },
  {
    id: 5,
    name: 'Полуторна постільна білизна МІ0004',
    about: 'Матеріал: 100% microfiber. До комплекту входить: Наволочка 50х70 - 1шт Підковдра 145х210 - 1шт Простирадло ' +
        '145х214 1шт. Тканина не просвічується, витримує часте прання.',
    href: '#',
    price: '410.00 грн',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/MI0004_1.jpg',
  },
  {
    id: 6,
    name: 'Полуторна постільна білизна МІ0006',
    about: 'Матеріал: 100% microfiber. До комплекту входить: Наволочка 50х70 - 1шт Підковдра 145х210 - 1шт Простирадло ' +
        '145х214 1шт. Тканина не просвічується, витримує часте прання.',
    href: '#',
    price: '410.00 грн',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/MI0006_2.jpg',
  },
  {
    id: 7,
    name: 'Полуторна постільна білизна МІ0003',
    about: 'Матеріал: 100% microfiber. До комплекту входить: Наволочка 50х70 - 1шт Підковдра 145х210 - 1шт Простирадло ' +
        '145х214 1шт. Тканина не просвічується, витримує часте прання.',
    href: '#',
    price: '410.00 грн',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/MI0003_2.jpg',
  },
  {
    id: 8,
    name: 'Полуторна постільна білизна МІ0032',
    about: 'Матеріал: 100% microfiber. До комплекту входить: Наволочка 50х70 - 1шт Підковдра 145х210 - 1шт Простирадло ' +
        '145х214 1шт. Тканина не просвічується, витримує часте прання.',
    href: '#',
    price: '420.00 грн',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/MI0032_1.jpg',
  },
  {
    id: 9,
    name: 'Полуторна постільна білизна МІ0031',
    about: 'Матеріал: 100% microfiber. До комплекту входить: Наволочка 50х70 - 1шт Підковдра 145х210 - 1шт Простирадло ' +
        '145х214 1шт. Тканина не просвічується, витримує часте прання.',
    href: '#',
    price: '420.00 грн',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/MI0031_1.jpg',
  },
  {
    id: 10,
    name: 'Полуторна постільна білизна Т0735',
    about: 'Матеріал: бязь, 100% бавовна. До комплекту входить: Наволочка 50х70 - 1шт Підковдра 145х210 - 1шт Простирадло' +
        ' 145х214 1шт Щільність 125 гр/м',
    href: '#',
    price: '720.00 грн',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/T0735_1.jpg',
  },
  {
    id: 11,
    name: 'Полуторна постільна білизна МІ0033',
    about: 'Матеріал: 100% microfiber. До комплекту входить: Наволочка 50х70 - 1шт Підковдра 145х210 - 1шт Простирадло ' +
        '145х214 1шт. Тканина не просвічується, витримує часте прання.',
    href: '#',
    price: '420.00 грн',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/MI0033_1.jpg',
  },
  {
    id: 12,
    name: 'Полуторна постільна білизна Т0363',
    about: 'Матеріал: бязь, 100% бавовна. До комплекту входить: Наволочка 50х70 - 1шт Підковдра 145х210 - 1шт ' +
        'Простирадло 145х214 1шт Щільність 125 гр/м',
    href: '#',
    price: '720.00 грн',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/T0363_2.jpg',
  },
  {
    id: 13,
    name: 'Полуторна постільна білизна МІ0027 з простирадлом на гумці',
    about: 'Матеріал: 100% microfiber. До комплекту входить: Наволочка 50х70 - 1шт Підковдра 145х210 - 1шт Простирадло ' +
        'на гумці на вибір: (80х200, 90х200) - 1шт. Тканина не просвічується, витримує часте прання.',
    href: '#',
    price: '670.00 грн',
    imageSrc: 'https://eney-plus.com.ua/newphoto/big/MI0027_1.jpg',
  },


]
</script>