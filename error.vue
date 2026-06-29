<!-- error.vue -->
<template>
  <div class="error-page">
    <div class="error-page__content">
      <h1 class="error-page__code">404</h1>
      <h2 class="error-page__title">Сторінку не знайдено</h2>
      <p class="error-page__text">
        Можливо, адреса застаріла або в ній є помилка. Спробуйте повернутися на головну сторінку.
      </p>
      <button class="error-page__btn" @click="handleClearError">
        На головну
      </button>
    </div>
  </div>
</template>

<script setup>
// Отримуємо об'єкт помилки (опціонально, якщо знадобиться логування)
defineProps({
  error: Object
})

// Вбудована функція Nuxt 3 для безпечного очищення помилки та редіректу
const handleClearError = () => {
  clearError({ redirect: '/' })
}
</script>

<style lang="scss">
.error-page {
  min-height: 100vh;
  background-color: #121212;
  @include flexCenter();
  padding: 24px;
  box-sizing: border-box;
  text-align: center;

  &__content {
    max-width: 480px;
    @include flex(center, center);
    flex-direction: column;
  }

  &__code {
    @include font(120px, 1, $mainFontName, #2EC4B6, 900);
    margin: 0 0 16px 0;

    @include breakpointMax($mobile) {
      font-size: 80px;
    }
  }

  &__title {
    @include font(28px, 1.2, $mainFontName, #E0E0E0, 700);
    margin: 0 0 16px 0;

    @include breakpointMax($mobile) {
      font-size: 22px;
    }
  }

  &__text {
    @include font(16px, 1.4, $mainFontName, #AFAFAF, 500);
    margin: 0 0 32px 0;
  }

  &__btn {
    height: 50px;
    padding: 0 32px;
    background: #2EC4B6;
    border: 1px solid #2EC4B6;
    border-radius: 8px;
    @include font(14px, 1.2, $mainFontName, #121212, 600);
    cursor: pointer;
    transition: all 0.25s ease;

    @include breakpointMax($mobile) {
      width: 100%;
    }

    &:hover {
      background: transparent;
      color: #2EC4B6;
    }
  }
}
</style>
