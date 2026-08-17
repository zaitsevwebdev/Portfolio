<script setup lang="ts">
import { additionalServices } from '~/data/services'
</script>

<template>
  <section class="services-additional">
    <div class="services-additional__container">
      <div class="services-additional__heading">
        <div class="services-additional__eyebrow">
          <svg
            class="services-additional__eyebrow-icon"
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

          <span>
            Додаткові можливості
          </span>
        </div>

        <h2 class="services-additional__title">
          Якщо потрібно трохи більше
        </h2>

        <p class="services-additional__description">
          Окремі функції можна додати до основної розробки
          або оцінити як самостійне завдання.
        </p>
      </div>

      <ul class="services-additional__list">
        <li
          v-for="service in additionalServices"
          :key="service.name"
          class="services-additional__item"
        >
          <span>
            {{ service.name }}
          </span>

          <strong>
            {{ service.price }}
          </strong>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.services-additional {
  padding: 72px 0;
  background-color: $primary-bg;
  border-bottom: 1px solid rgba($text-light, 0.1);

  @include breakpoint($tablet) {
    padding: 88px 0;
  }

  @include breakpoint($tabletLandscape) {
    padding: 104px 0;
  }

  &__container {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;

    @include breakpoint($tablet) {
      padding: 0 32px;
    }

    @include breakpoint($laptop) {
      padding: 0;
    }
  }

  &__heading {
    max-width: 700px;
    margin-bottom: 48px;

    @include breakpoint($tablet) {
      margin-bottom: 60px;
    }
  }

  &__eyebrow {
    width: fit-content;
    margin-bottom: 24px;
    gap: 10px;
    text-transform: uppercase;
    letter-spacing: 3.2px;
    transform: rotate(2deg);
    transform-origin: left center;

    @include flex(flex-start, center);
    @include font(11px, 1.3, $mainFontName, $color-accent, 600);
  }

  &__eyebrow-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  &__title {
    margin: 0;
    letter-spacing: -1.2px;

    @include font(34px, 1.08, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 46px;
    }
  }

  &__description {
    max-width: 560px;
    margin: 20px 0 0;

    @include font(14px, 1.7, $mainFontName, $text-muted, 400);

    @include breakpoint($tablet) {
      font-size: 15px;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid rgba($text-light, 0.12);
  }

  &__item {
    display: flex;
    padding: 22px 0;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid rgba($text-light, 0.12);
    transition: padding-left 0.25s ease;

    @include font(14px, 1.4, $mainFontName, $text-light, 500);

    @include breakpoint($tablet) {
      padding: 24px 0;
      font-size: 15px;
    }

    &:hover {
      padding-left: 8px;
    }

    strong {
      flex-shrink: 0;
      color: $color-accent;
      font-weight: 500;
    }
  }
}
</style>