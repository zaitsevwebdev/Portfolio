<script setup lang="ts">
import { servicesBlock } from '@/data/services'
</script>

<template>
  <section
    id="services"
    class="about-services"
  >
    <div class="about-services__container">
      <div class="about-services__header">
        <div class="about-services__eyebrow">
          <svg
            class="about-services__eyebrow-icon"
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
            Послуги та ціни
          </span>
        </div>

        <h2 class="about-services__title">
          Обери формат для
          <br>
          свого бізнесу
        </h2>

        <p class="about-services__subtitle">
          Від простої онлайн-візитки до повноцінного сайту.
          Якщо не знаєш, який формат потрібен — допоможу визначити
          оптимальний варіант перед початком роботи.
        </p>
      </div>

      <div class="about-services__list">
        <article
          v-for="service in servicesBlock"
          :key="service.id"
          class="about-services__card"
          :class="{
            'about-services__card--featured': service.featured
          }"
        >
          <div
            v-if="service.featured"
            class="about-services__badge"
          >
            <svg
              class="about-services__badge-icon"
              width="13"
              height="13"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M9 1.5C9 5.64 12.36 9 16.5 9C12.36 9 9 12.36 9 16.5C9 12.36 5.64 9 1.5 9C5.64 9 9 5.64 9 1.5Z"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linejoin="round"
              />
            </svg>

            <span>
              Найпопулярніше
            </span>
          </div>

          <div class="about-services__card-head">
            <h3 class="about-services__card-title">
              {{ service.title }}
            </h3>

            <p class="about-services__type">
              {{ service.type }}
            </p>
          </div>

          <p class="about-services__price">
            {{ service.price }}
          </p>

          <p class="about-services__description">
            {{ service.description }}
          </p>

          <ul class="about-services__features">
            <li
              v-for="feature in service.features"
              :key="feature"
            >
              <span class="about-services__check">
                ✓
              </span>

              <span>
                {{ feature }}
              </span>
            </li>
          </ul>

          <NuxtLink
            to="/#contacts"
            class="about-services__button"
            :class="{
              'about-services__button--featured': service.featured
            }"
          >
            Обговорити проєкт
          </NuxtLink>
        </article>
      </div>

      <div class="about-services__footer">
        <NuxtLink
          to="/services"
          class="about-services__all-services"
        >
          Переглянути всі послуги

          <svg
            width="20"
            height="20"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4 14H23M23 14L17 8M23 14L17 20"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-services {
  padding: 80px 0;
  background-color: $primary-bg;

  @include breakpoint($tablet) {
    padding: 96px 0;
  }

  @include breakpoint($tabletLandscape) {
    padding: 120px 0;
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

  &__header {
    max-width: 720px;
    margin-bottom: 56px;

    @include breakpoint($tabletLandscape) {
      margin-bottom: 72px;
    }
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
    margin: 0 0 22px;
    letter-spacing: -1.5px;
    text-transform: uppercase;

    @include font(38px, 1.05, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 50px;
    }

    @include breakpoint($tabletLandscape) {
      font-size: 58px;
    }
  }

  &__subtitle {
    max-width: 620px;
    margin: 0;

    @include font(15px, 1.7, $mainFontName, $text-muted, 400);

    @include breakpoint($tablet) {
      font-size: 16px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    @include breakpoint($tabletLandscape) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      align-items: stretch;
      gap: 22px;
    }
  }

  &__card {
    position: relative;
    display: flex;
    min-width: 0;
    padding: 28px;
    flex-direction: column;
    background-color: $card-bg;
    border: 1px solid rgba($text-light, 0.14);
    border-radius: 20px;
    transition:
      border-color 0.25s ease,
      transform 0.25s ease,
      box-shadow 0.25s ease;

    @include breakpoint($tablet) {
      padding: 32px;
    }

    &:hover {
      border-color: rgba($color-accent, 0.4);

      @include breakpoint($tabletLandscape) {
        transform: translateY(-4px);
      }
    }

    &--featured {
      border-color: $color-accent;
      box-shadow:
        0 0 40px rgba($color-accent, 0.1),
        0 15px 50px rgba($color-accent, 0.08);

      @include breakpoint($tabletLandscape) {
        transform: translateY(-10px);

        &:hover {
          transform: translateY(-14px);
        }
      }
    }
  }

  &__badge {
    position: absolute;
    top: 0;
    left: 28px;
    padding: 8px 14px;
    gap: 7px;
    color: $primary-bg;
    background-color: $color-accent;
    border-radius: 999px;
    transform: translateY(-50%);
    transform-origin: left center;

    @include flex(flex-start, center);
    @include font(10px, 1, $mainFontName, $primary-bg, 600);
  }

  &__badge-icon {
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    color: currentColor;
  }

  &__card-head {
    margin-bottom: 28px;
  }

  &__card-title {
    margin: 0 0 6px;

    @include font(23px, 1.2, $mainFontName, $text-light, 700);
  }

  &__type {
    margin: 0;

    @include font(13px, 1.4, $mainFontName, $text-muted, 400);
  }

  &__price {
    margin: 0 0 18px;
    letter-spacing: -1.5px;

    @include font(38px, 1, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 42px;
    }
  }

  &__description {
    min-height: 76px;
    margin: 0 0 28px;

    @include font(14px, 1.6, $mainFontName, $text-muted, 400);
  }

  &__features {
    margin: 0 0 36px;
    padding: 0;
    list-style: none;

    li {
      gap: 12px;

      @include flex(flex-start, flex-start);
      @include font(13px, 1.5, $mainFontName, $text-muted, 400);

      &:not(:last-child) {
        margin-bottom: 14px;
      }
    }
  }

  &__check {
    flex-shrink: 0;
    color: $color-accent;
    font-size: 14px;
    line-height: 1.5;
  }

  &__button {
    width: 100%;
    min-height: 50px;
    margin-top: auto;
    color: $text-light;
    background-color: transparent;
    border: 1px solid rgba($text-light, 0.18);
    border-radius: 999px;
    text-decoration: none;
    transition:
      color 0.25s ease,
      background-color 0.25s ease,
      border-color 0.25s ease,
      transform 0.25s ease;

    @include flexCenter();
    @include font(13px, 1.2, $mainFontName, $text-light, 600);

    &:hover {
      color: $color-accent;
      border-color: $color-accent;
      transform: translateY(-2px);
    }

    &--featured {
      color: $primary-bg;
      background-color: $color-accent;
      border-color: $color-accent;

      &:hover {
        color: $color-accent;
        background-color: transparent;
      }
    }
  }

  &__footer {
    margin-top: 48px;

    @include flexCenter();

    @include breakpoint($tablet) {
      margin-top: 64px;
    }
  }

  &__all-services {
    min-height: 52px;
    padding: 0 26px;
    gap: 10px;
    color: $text-light;
    text-decoration: none;
    border: 1px solid rgba($text-light, 0.18);
    border-radius: 999px;
    transition:
      color 0.25s ease,
      border-color 0.25s ease,
      transform 0.25s ease;

    @include flexCenter();
    @include font(13px, 1.2, $mainFontName, $text-light, 600);

    svg {
      flex-shrink: 0;
      transition: transform 0.25s ease;
    }

    &:hover {
      color: $color-accent;
      border-color: $color-accent;
      transform: translateY(-2px);

      svg {
        transform: translateX(4px);
      }
    }
  }
}
</style>