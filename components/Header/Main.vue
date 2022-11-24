<template>
  <header class="container flex flex-col">
    <nav class="flex justify-between py-5 items-center text-black">
        <div class="logo">
          <span class="my-2 text-3xl">
            <span class="text-bs_red">BIG</span>
            <span class="text-bs_blue">STO.RU</span>
          </span>
        </div>
        <ul class="flex uppercase font-medium">
          <li class="px-10 cursor-pointer">Услуги</li>
          <li class="px-10 cursor-pointer">Цены</li>
          <li class="px-10 cursor-pointer">Отзывы</li>
          <li class="px-10 cursor-pointer">Контакты</li>
        </ul>
        <div class="flex flex-col">
          <span>+7(902)253-99-18</span>
          <span>ст.м. Малиновка</span>
        </div>
        <div>
          <ButtonRounded>Заказать звонок</ButtonRounded>
        </div>
      </nav>
      <div class="mt-20">
        <p class="text-xl mb-3">Санкт-Петербург</p>
        <h1 class="text-7xl font-black text-bs_blue uppercase ">Ремонт <br />  ДВС</h1>
        <p class="my-4 text-xl">Сервис по ремонту и <br> обслуживанию деталей <br> двигателей</p>
        <ButtonRounded class="my-6 text-xl">Записаться</ButtonRounded>
      </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="sass" scoped>
</style>
