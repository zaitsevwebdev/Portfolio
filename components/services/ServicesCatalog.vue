<script setup lang="ts">
import { services } from '~/data/services'
</script>

<template>
  <section class="services-catalog">
    <div class="services-catalog__container">
      <div class="services-catalog__grid">
        <article
          v-for="service in services"
          :key="service.id"
          class="services-catalog__card"
          :class="{
            'services-catalog__card--featured': service.featured
          }"
        >
          <div
            v-if="service.featured"
            class="services-catalog__badge"
          >
            <span>✦</span>
            Найпопулярніше
          </div>

          <div class="services-catalog__card-top">
            <div>
              <div class="services-catalog__type">
                <svg
                  class="services-catalog__type-icon"
                  width="14"
                  height="14"
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
                  {{ service.type }}
                </span>
              </div>

              <h2 class="services-catalog__card-title">
                {{ service.title }}
              </h2>
            </div>

            <span class="services-catalog__card-number">
              {{ String(service.id).padStart(2, '0') }}
            </span>
          </div>

          <p class="services-catalog__description">
            {{ service.description }}
          </p>

          <div class="services-catalog__price-block">
            <span class="services-catalog__meta-label">
              Вартість
            </span>

            <strong class="services-catalog__price">
              {{ service.price }}
            </strong>

            <span class="services-catalog__duration">
              {{ service.duration }}
            </span>
          </div>

          <ul class="services-catalog__features">
            <li
              v-for="feature in service.features"
              :key="feature"
            >
              <span class="services-catalog__check">
                ✓
              </span>

              <span>
                {{ feature }}
              </span>
            </li>
          </ul>

          <NuxtLink
            to="/#contacts"
            class="services-catalog__button"
            :class="{
              'services-catalog__button--primary': service.featured
            }"
          >
            Обговорити проєкт

            <svg
              width="18"
              height="18"
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
        </article>
      </div>

      <div class="services-catalog__note">
        <span class="services-catalog__note-dot" />

        <p>
          Не знаєш, який формат підійде саме тобі?
          Напиши мені — коротко розберемо задачу,
          визначимо потрібний обсяг роботи та точну вартість.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.services-catalog {
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

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    @include breakpoint($tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include breakpoint($tabletLandscape) {
      gap: 28px;
    }
  }

  &__card {
    position: relative;
    display: flex;
    min-width: 0;
    padding: 28px;
    flex-direction: column;
    background-color: $card-bg;
    border: 1px solid rgba($text-light, 0.13);
    border-radius: 18px;
    transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      box-shadow 0.25s ease;

    @include breakpoint($tablet) {
      padding: 34px;
    }

    &:hover {
      border-color: rgba($color-accent, 0.4);

      @include breakpoint($tabletLandscape) {
        transform: translateY(-4px);
      }
    }

    &--featured {
      border-color: rgba($color-accent, 0.75);
      box-shadow:
        0 0 45px rgba($color-accent, 0.08),
        0 20px 60px rgba($color-accent, 0.06);
    }
  }

  &__badge {
    position: absolute;
    top: 0;
    left: 28px;
    min-height: 28px;
    padding: 0 12px;
    gap: 6px;
    color: $primary-bg;
    background-color: $color-accent;
    border-radius: 999px;
    transform: translateY(-50%);

    @include flex(center, center);
    @include font(10px, 1, $mainFontName, $primary-bg, 600);
  }

  &__card-top {
    gap: 20px;

    @include flex(space-between, flex-start);
  }

  &__card-number {
    flex-shrink: 0;
    letter-spacing: 1px;

    @include font(11px, 1, monospace, rgba($text-light, 0.28), 500);
  }

  &__type {
    width: fit-content;
    margin: 0 0 12px;
    gap: 7px;
    text-transform: uppercase;
    letter-spacing: 2px;
    transform-origin: left center;

    @include flex(flex-start, center);
    @include font(10px, 1.4, $mainFontName, $color-accent, 600);
  }

  &__type-icon {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    color: $color-accent;
  }

  &__card-title {
    margin: 0;
    letter-spacing: -0.8px;

    @include font(27px, 1.15, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 30px;
    }
  }

  &__description {
    max-width: 500px;
    margin: 20px 0 30px;

    @include font(14px, 1.65, $mainFontName, $text-muted, 400);
  }

  &__price-block {
    margin-bottom: 30px;
    padding: 24px 0;
    border-top: 1px solid rgba($text-light, 0.1);
    border-bottom: 1px solid rgba($text-light, 0.1);
  }

  &__meta-label {
    display: block;
    margin-bottom: 9px;
    text-transform: uppercase;
    letter-spacing: 2px;

    @include font(9px, 1.2, monospace, $text-muted, 500);
  }

  &__price {
    display: block;
    margin-bottom: 8px;
    letter-spacing: -1px;

    @include font(30px, 1.1, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 34px;
    }
  }

  &__duration {
    display: block;

    @include font(12px, 1.4, $mainFontName, $text-muted, 400);
  }

  &__features {
    margin: 0 0 34px;
    padding: 0;
    list-style: none;

    li {
      gap: 11px;

      @include flex(flex-start, flex-start);
      @include font(13px, 1.5, $mainFontName, $text-muted, 400);

      &:not(:last-child) {
        margin-bottom: 13px;
      }
    }
  }

  &__check {
    flex-shrink: 0;
    color: $color-accent;
    font-size: 13px;
  }

  &__button {
    width: 100%;
    min-height: 50px;
    margin-top: auto;
    padding: 0 22px;
    gap: 10px;
    box-sizing: border-box;
    color: $text-light;
    background-color: transparent;
    border: 1px solid rgba($text-light, 0.17);
    border-radius: 999px;
    text-decoration: none;
    transition:
      color 0.25s ease,
      background-color 0.25s ease,
      border-color 0.25s ease,
      transform 0.25s ease;

    @include flex(center, center);
    @include font(12px, 1.2, $mainFontName, $text-light, 600);

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

    &--primary {
      color: $primary-bg;
      background-color: $color-accent;
      border-color: $color-accent;

      &:hover {
        color: $color-accent;
        background-color: transparent;
      }
    }
  }

  &__note {
    max-width: 720px;
    margin: 44px auto 0;
    padding: 16px 20px;
    gap: 12px;
    box-sizing: border-box;
    border: 1px solid rgba($text-light, 0.12);
    border-radius: 16px;

    @include flex(center, flex-start);

    @include breakpoint($tablet) {
      padding: 18px 24px;
      border-radius: 999px;
    }

    p {
      margin: 0;

      @include font(12px, 1.6, $mainFontName, $text-muted, 400);

      @include breakpoint($tablet) {
        font-size: 13px;
      }
    }
  }

  &__note-dot {
    width: 5px;
    height: 5px;
    margin-top: 7px;
    flex-shrink: 0;
    background-color: $color-accent;
    border-radius: 50%;
  }
}
</style>