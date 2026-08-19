<template>
  <section id="about" class="about">
    <div class="about__container">
      <div class="about__heading">
        <div class="about__eyebrow">
          <svg
            class="about__eyebrow-icon"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M9 1.5C9 5.64 12.36 9 16.5 9C12.36 9 9 12.36 9 16.5C9 12.36 5.64 9 1.5 9C5.64 9 9 5.64 9 1.5Z"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linejoin="round"
            />
          </svg>

          <span>Трохи про мене</span>
        </div>

        <h2 class="about__title">
          Олександр Зайцев
        </h2>

        <p class="about__position">
          Frontend Developer • Київ
        </p>
      </div>

      <div class="about__content">
        <p class="about__description">
          Я хочу допомагати малому бізнесу
          <span class="about__description-highlight">
            створювати своє місце в інтернеті
          </span>
          - сучасне, зрозуміле та таке, що викликає довіру.

          <span class="about__description-accent">
            Створюю сайти, які не соромно показувати клієнтам -
            зрозумілі, сучасні та без зайвого.
          </span>

          <span class="about__description-bottom">
            Ти займаєшся бізнесом - я подбаю про те, як він виглядає онлайн.
          </span>
        </p>

        <div class="about__stack">
          <span class="about__stack-label">
            Стек
          </span>

          <ul class="about__stack-list">
            <li
              v-for="technology in technologies"
              :key="technology"
              class="about__stack-item"
            >
              {{ technology }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const technologies: string[] = [
  'Vue.js',
  'Nuxt 3',
  'TypeScript',
  'JavaScript',
  'SCSS',
  'Адаптивна верстка',
  'API та форми'
]
</script>

<style lang="scss">
.about {
  padding: 72px 0;
  background-color: $primary-bg;
  border-bottom: 1px solid rgba($text-light, 0.1);

  @include breakpoint($tablet) {
    padding: 88px 0;
  }

  @include breakpoint($tabletLandscape) {
    padding: 96px 0 72px;
  }

  &__container {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    gap: 52px;

    @include breakpoint($tablet) {
      padding-right: 32px;
      padding-left: 32px;
    }

    @include breakpoint($tabletLandscape) {
      grid-template-columns: minmax(300px, 0.75fr) minmax(0, 1.4fr);
      align-items: start;
      gap: 90px;
    }

    @include breakpoint($laptop) {
      padding-right: 0;
      padding-left: 0;
    }
  }

  &__heading {
    min-width: 0;
  }

  &__eyebrow {
    width: fit-content;
    margin-bottom: 28px;
    gap: 10px;
    text-transform: uppercase;
    letter-spacing: 3.2px;
    transform: rotate(2deg);
    transform-origin: left center;

    @include flex(flex-start, center);
    @include font(11px, 1.3, $mainFontName, $color-accent, 600);

    @include breakpoint($tablet) {
      margin-bottom: 30px;
      font-size: 12px;
    }
  }

  &__eyebrow-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: $color-accent;
  }

  &__title {
    margin: 0 0 16px;
    letter-spacing: -1px;

    @include font(34px, 1.1, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 38px;
    }
  }

  &__position {
    margin: 0;

    @include font(14px, 1.4, $mainFontName, $text-muted, 400);
  }

  &__content {
    min-width: 0;
  }

  &__description {
    max-width: 680px;
    margin: 0;
    letter-spacing: -0.2px;

    @include font(19px, 1.7, $mainFontName, $text-muted, 400);

    @include breakpoint($tablet) {
      font-size: 21px;
    }
  }

  &__description-highlight {
    color: $text-light;
    font-weight: 500;
  }

  &__description-accent {
    display: block;
    margin-top: 22px;

    @include font(20px, 1.55, $mainFontName, $color-accent, 500);

    @include breakpoint($tablet) {
      font-size: 22px;
    }
  }

  &__description-bottom {
    display: block;
    margin-top: 18px;

    @include font(15px, 1.6, $mainFontName, $text-muted, 400);

    @include breakpoint($tablet) {
      font-size: 16px;
    }
  }

  &__stack {
    margin-top: 48px;

    @include breakpoint($tabletLandscape) {
      margin-top: 52px;
    }
  }

  &__stack-label {
    display: block;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 4px;

    @include font(10px, 1.3, monospace, $text-muted, 500);
  }

  &__stack-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgba($text-light, 0.13);
    border: 1px solid rgba($text-light, 0.13);
    border-radius: 14px;
    list-style: none;

    @include breakpoint($mobile) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    &::after {
      content: '';
      min-height: 52px;
      background-color: $primary-bg;
    }
  }

  &__stack-item {
    position: relative;
    min-height: 52px;
    padding: 0 20px 0 38px;
    background-color: $primary-bg;
    box-sizing: border-box;

    @include flex(flex-start, center);
    @include font(14px, 1.3, $mainFontName, $text-light, 400);

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 20px;
      width: 8px;
      height: 1px;
      background-color: $color-accent;
      transform: translateY(-50%);
    }
  }
}
</style>