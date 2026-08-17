<template>
  <section
    class="ticker"
    aria-label="Ключові переваги"
  >
    <div class="ticker__track">
      <div
        v-for="groupIndex in 2"
        :key="groupIndex"
        class="ticker__group"
        aria-hidden="true"
      >
        <template
          v-for="(item, index) in items"
          :key="`${groupIndex}-${item}`"
        >
          <span class="ticker__item">
            {{ item }}
          </span>

          <span
            v-if="index !== items.length - 1"
            class="ticker__dot"
          >
            •
          </span>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items: string[] = [
  'Сайти для бізнесу',
  'Без шаблонного вигляду',
  'Адаптив під усі пристрої',
  'Від ідеї до запуску',
  'Лендинги та сайти-візитки',
  'Підтримка після запуску'
]
</script>

<style scoped lang="scss">
.ticker {
  width: 100%;
  overflow: hidden;

  background-color: $primary-bg;

  border-top: 1px solid rgba($text-light, 0.1);
  border-bottom: 1px solid rgba($text-light, 0.1);

  &__track {
    display: flex;
    width: max-content;

    animation: ticker-scroll 30s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  }

  &__group {
    display: flex;
    flex-shrink: 0;
    align-items: center;

    padding: 22px 0;
  }

  &__item {
    padding: 0 28px;

    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.6px;

    @include font(
      14px,
      1.2,
      $mainFontName,
      $text-light,
      700
    );

    @include breakpoint($tablet) {
      padding-right: 34px;
      padding-left: 34px;

      font-size: 16px;
    }

    @include breakpoint($tabletLandscape) {
      font-size: 17px;
    }
  }

  &__dot {
    flex-shrink: 0;

    color: $color-accent;

    font-size: 18px;
    line-height: 1;
  }
}

@keyframes ticker-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ticker__track {
    animation: none;
  }
}
</style>