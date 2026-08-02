<template>
  <section id="about" class="about">
    <div class="about__container">
      <div class="about__heading">
        <span class="about__eyebrow">
          Про мене
        </span>

        <h2 class="about__title">
          Олександр Зайцев
        </h2>

        <p class="about__position">
          Frontend Developer • Київ
        </p>
      </div>

      <div class="about__content">
        <p class="about__description">
          Я Олександр, Frontend Developer з Києва. Розробляю прості
          та зрозумілі сайти для малого бізнесу. Допомагаю
          <strong>
            швидко запустити проєкт, презентувати послуги та
            отримувати перші заявки.
          </strong>
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
    display: block;
    margin-bottom: 22px;
    text-transform: uppercase;
    letter-spacing: 4px;

    @include font(
      10px,
      1.3,
      monospace,
      $color-accent,
      500
    );
  }

  &__title {
    margin: 0 0 16px;
    letter-spacing: -1px;

    @include font(
      34px,
      1.1,
      $mainFontName,
      $text-light,
      700
    );

    @include breakpoint($tablet) {
      font-size: 38px;
    }
  }

  &__position {
    margin: 0;

    @include font(
      14px,
      1.4,
      $mainFontName,
      $text-muted,
      400
    );
  }

  &__content {
    min-width: 0;
  }

  &__description {
    max-width: 680px;
    margin: 0;

    @include font(
      22px,
      1.6,
      $mainFontName,
      $text-light,
      400
    );

    @include breakpoint($tablet) {
      font-size: 24px;
    }

    strong {
      font-weight: 700;
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

    @include font(
      10px,
      1.3,
      monospace,
      $text-muted,
      500
    );
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
      background-color: rgba($text-light, 0.08);
    }
  }

  &__stack-item {
    position: relative;
    min-height: 52px;
    padding: 0 20px 0 38px;
    background-color: $primary-bg;
    box-sizing: border-box;

    @include flex(flex-start, center);

    @include font(
      14px,
      1.3,
      $mainFontName,
      $text-light,
      400
    );

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