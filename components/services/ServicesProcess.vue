<script setup lang="ts">
import { workSteps } from '~/data/services'
</script>

<template>
  <section class="services-process">
    <div class="services-process__container">
      <div class="services-process__heading">
        <div class="services-process__eyebrow">
          <svg
            class="services-process__eyebrow-icon"
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
            Як проходить співпраця
          </span>
        </div>

        <h2 class="services-process__title">
          Від першої розмови
          <br>
          до готового сайту
        </h2>

        <p class="services-process__description">
          Без складних процесів і зайвої бюрократії.
          На кожному етапі ти розумієш, що відбувається з проєктом.
        </p>
      </div>

      <div class="services-process__steps">
        <article
          v-for="step in workSteps"
          :key="step.number"
          class="services-process__step"
        >
          <span class="services-process__step-number">
            {{ step.number }}
          </span>

          <h3 class="services-process__step-title">
            {{ step.title }}
          </h3>

          <p class="services-process__step-description">
            {{ step.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.services-process {
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

    @include breakpoint($tablet) {
      margin-bottom: 26px;
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

  &__steps {
    display: grid;
    grid-template-columns: 1fr;
    overflow: hidden;
    border: 1px solid rgba($text-light, 0.12);
    border-radius: 18px;

    @include breakpoint($tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include breakpoint($laptopSmall) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &__step {
    position: relative;
    min-height: 230px;
    padding: 28px;
    box-sizing: border-box;
    background-color: $primary-bg;

    &:not(:last-child) {
      border-bottom: 1px solid rgba($text-light, 0.12);
    }

    @include breakpoint($tablet) {
      min-height: 250px;
      padding: 30px;

      &:not(:last-child) {
        border-bottom: 0;
      }

      &:nth-child(odd) {
        border-right: 1px solid rgba($text-light, 0.12);
      }

      &:nth-child(-n + 2) {
        border-bottom: 1px solid rgba($text-light, 0.12);
      }
    }

    @include breakpoint($laptopSmall) {
      min-height: 270px;

      &:nth-child(odd),
      &:nth-child(-n + 2) {
        border-bottom: 0;
      }

      &:not(:last-child) {
        border-right: 1px solid rgba($text-light, 0.12);
      }
    }

    &::after {
      content: '';
      position: absolute;
      right: 24px;
      bottom: 24px;
      width: 32px;
      height: 1px;
      background-color: rgba($color-accent, 0.55);
      transition: width 0.25s ease;
    }

    &:hover {
      &::after {
        width: 52px;
      }

      .services-process__step-number {
        color: $text-light;
      }
    }
  }

  &__step-number {
    display: block;
    margin-bottom: 42px;
    letter-spacing: 2px;
    transition: color 0.25s ease;

    @include font(11px, 1, monospace, $color-accent, 600);
  }

  &__step-title {
    margin: 0 0 14px;
    letter-spacing: -0.4px;

    @include font(21px, 1.2, $mainFontName, $text-light, 700);
  }

  &__step-description {
    max-width: 240px;
    margin: 0;

    @include font(13px, 1.6, $mainFontName, $text-muted, 400);
  }
}
</style>