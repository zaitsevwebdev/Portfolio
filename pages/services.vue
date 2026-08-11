<script setup lang="ts">
import { services, additionalServices, workSteps } from '~/data/services'

useSeoMeta({
  title: 'Послуги з розробки сайтів — Zaitsev.dev',
  description:
    'Розробка лендингів, сайтів-візиток, сайтів-каталогів та невеликих інтернет-магазинів на Vue і Nuxt.'
})
</script>

<template>
  <main class="services-page">
    <section class="services-page__hero">
      <div class="services-page__container">
        <NuxtLink
          to="/"
          class="services-page__back"
        >
          ← На головну
        </NuxtLink>

        <div class="services-page__heading">
          <div>
            <span class="services-page__eyebrow">
              Services
            </span>

            <h1 class="services-page__title">
              Послуги
            </h1>
          </div>

          <p class="services-page__intro">
            Розробляю сучасні адаптивні сайти для малого бізнесу,
            спеціалістів і нових проєктів. Допомагаю пройти шлях
            від ідеї до готового сайту.
          </p>
        </div>
      </div>
    </section>

    <section class="services-page__catalog">
      <div class="services-page__container">
        <div class="services-page__grid">
          <article
            v-for="service in services"
            :key="service.id"
            class="services-page__card"
            :class="{
              'services-page__card--featured': service.featured
            }"
          >
            <span
              v-if="service.featured"
              class="services-page__badge"
            >
              Популярний варіант
            </span>

            <p class="services-page__type">
              {{ service.type }}
            </p>

            <h2 class="services-page__card-title">
              {{ service.title }}
            </h2>

            <p class="services-page__description">
              {{ service.description }}
            </p>

            <div class="services-page__meta">
              <div>
                <span class="services-page__meta-label">
                  Вартість
                </span>

                <strong class="services-page__price">
                  {{ service.price }}
                </strong>
              </div>

              <div>
                <span class="services-page__meta-label">
                  Термін
                </span>

                <span class="services-page__duration">
                  {{ service.duration }}
                </span>
              </div>
            </div>

            <ul class="services-page__features">
              <li
                v-for="feature in service.features"
                :key="feature"
              >
                <span aria-hidden="true">+</span>
                {{ feature }}
              </li>
            </ul>

            <NuxtLink
              to="/#contacts"
              class="services-page__button"
              :class="{
                'services-page__button--primary': service.featured
              }"
            >
              Обговорити проєкт
            </NuxtLink>
          </article>
        </div>

        <p class="services-page__price-note">
          Зазначена вартість є орієнтовною. Остаточна ціна залежить
          від дизайну, кількості сторінок, функціональності та інтеграцій.
          Точну оцінку надам після короткого обговорення проєкту.
        </p>
      </div>
    </section>

    <section class="services-page__additional">
      <div class="services-page__container">
        <div class="services-page__section-heading">
          <span class="services-page__eyebrow">
            Additional
          </span>

          <h2 class="services-page__section-title">
            Додаткові послуги
          </h2>
        </div>

        <ul class="services-page__additional-list">
          <li
            v-for="service in additionalServices"
            :key="service.name"
            class="services-page__additional-item"
          >
            <span>{{ service.name }}</span>
            <strong>{{ service.price }}</strong>
          </li>
        </ul>
      </div>
    </section>

    <section class="services-page__process">
      <div class="services-page__container">
        <div class="services-page__section-heading">
          <span class="services-page__eyebrow">
            Process
          </span>

          <h2 class="services-page__section-title">
            Як проходить робота
          </h2>
        </div>

        <div class="services-page__steps">
          <article
            v-for="step in workSteps"
            :key="step.number"
            class="services-page__step"
          >
            <span class="services-page__step-number">
              {{ step.number }}
            </span>

            <h3 class="services-page__step-title">
              {{ step.title }}
            </h3>

            <p class="services-page__step-description">
              {{ step.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="services-page__cta">
      <div class="services-page__container">
        <div class="services-page__cta-content">
          <div>
            <span class="services-page__eyebrow">
              Start a project
            </span>

            <h2 class="services-page__cta-title">
              Маєте ідею для сайту?
            </h2>

            <p class="services-page__cta-text">
              Розкажіть коротко про свій проєкт. Я допоможу визначити
              потрібний формат сайту, терміни та орієнтовну вартість.
            </p>
          </div>

          <NuxtLink
            to="/#contacts"
            class="services-page__button services-page__button--primary
              services-page__button--large"
          >
            Написати мені
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.services-page {
  min-height: 100vh;
  background-color: $primary-bg;

  &__container {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding-right: 20px;
    padding-left: 20px;
    box-sizing: border-box;

    @include breakpoint($tablet) {
      padding-right: 32px;
      padding-left: 32px;
    }

    @include breakpoint($laptop) {
      padding-right: 0;
      padding-left: 0;
    }
  }

  &__hero {
    padding-top: 40px;
    padding-bottom: 64px;
    border-bottom: 1px solid rgba($text-light, 0.1);

    @include breakpoint($tablet) {
      padding-top: 48px;
      padding-bottom: 80px;
    }

    @include breakpoint($tabletLandscape) {
      padding-top: 56px;
      padding-bottom: 96px;
    }
  }

  &__back {
    display: inline-block;
    margin-bottom: 64px;
    text-decoration: none;
    transition: color 0.25s ease;

    @include font(
      13px,
      1.2,
      $mainFontName,
      $text-muted,
      500
    );

    @include breakpoint($tablet) {
      margin-bottom: 88px;
    }

    &:hover {
      color: $color-accent;
    }
  }

  &__heading {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @include breakpoint($tablet) {
      grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
      align-items: end;
      gap: 64px;
    }
  }

  &__eyebrow {
    display: block;
    margin-bottom: 18px;
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
    margin: 0;
    letter-spacing: -2px;

    @include font(
      44px,
      1,
      $mainFontName,
      $text-light,
      700
    );

    @include breakpoint($tablet) {
      font-size: 64px;
    }
  }

  &__intro {
    max-width: 420px;
    margin: 0;

    @include font(
      15px,
      1.65,
      $mainFontName,
      $text-muted,
      400
    );

    @include breakpoint($tablet) {
      font-size: 16px;
    }
  }

  &__catalog,
  &__additional,
  &__process,
  &__cta {
    padding: 64px 0;
    border-bottom: 1px solid rgba($text-light, 0.1);

    @include breakpoint($tablet) {
      padding: 80px 0;
    }

    @include breakpoint($tabletLandscape) {
      padding: 96px 0;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    @include breakpoint($tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  &__card {
    position: relative;
    display: flex;
    min-width: 0;
    padding: 28px;
    flex-direction: column;
    background-color: $card-bg;
    border: 1px solid rgba($text-light, 0.12);
    border-radius: 14px;

    @include breakpoint($tablet) {
      padding: 36px;
    }

    &--featured {
      border-color: rgba($color-accent, 0.65);
    }
  }

  &__badge {
    display: inline-flex;
    width: fit-content;
    min-height: 28px;
    margin-bottom: 24px;
    padding: 0 12px;
    color: $primary-bg;
    background-color: $color-accent;
    border-radius: 999px;

    @include flex(center, center);
    @include font(10px, 1.2, $mainFontName, $primary-bg, 600);
  }

  &__type {
    margin: 0 0 10px;
    text-transform: uppercase;
    letter-spacing: 2px;

    @include font(
      10px,
      1.4,
      monospace,
      $color-accent,
      500
    );
  }

  &__card-title {
    margin: 0 0 16px;
    letter-spacing: -0.7px;

    @include font(
      28px,
      1.2,
      $mainFontName,
      $text-light,
      700
    );
  }

  &__description {
    margin: 0 0 28px;

    @include font(
      14px,
      1.65,
      $mainFontName,
      $text-muted,
      400
    );
  }

  &__meta {
    display: grid;
    margin-bottom: 28px;
    padding: 22px 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
    border-top: 1px solid rgba($text-light, 0.1);
    border-bottom: 1px solid rgba($text-light, 0.1);
  }

  &__meta-label {
    display: block;
    margin-bottom: 8px;

    @include font(
      10px,
      1.2,
      monospace,
      $text-muted,
      400
    );
  }

  &__price {
    display: block;

    @include font(
      20px,
      1.2,
      $mainFontName,
      $text-light,
      700
    );
  }

  &__duration {
    display: block;

    @include font(
      13px,
      1.4,
      $mainFontName,
      $text-light,
      500
    );
  }

  &__features {
    margin: 0 0 32px;
    padding: 0;
    list-style: none;

    li {
      display: flex;
      padding: 9px 0;
      gap: 10px;

      @include font(
        13px,
        1.45,
        $mainFontName,
        $text-muted,
        400
      );

      span {
        color: $color-accent;
      }
    }
  }

  &__button {
    width: fit-content;
    min-height: 44px;
    margin-top: auto;
    padding: 0 20px;
    border: 1px solid rgba($text-light, 0.16);
    border-radius: 999px;
    text-decoration: none;
    transition:
      color 0.25s ease,
      background-color 0.25s ease,
      border-color 0.25s ease;

    @include flex(center, center);
    @include font(12px, 1.2, $mainFontName, $text-muted, 500);

    &:hover {
      color: $color-accent;
      border-color: $color-accent;
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

    &--large {
      min-height: 50px;
      padding-right: 28px;
      padding-left: 28px;
      flex-shrink: 0;
    }
  }

  &__price-note {
    max-width: 760px;
    margin: 40px 0 0;

    @include font(
      13px,
      1.65,
      $mainFontName,
      $text-muted,
      400
    );
  }

  &__section-heading {
    margin-bottom: 40px;

    @include breakpoint($tablet) {
      margin-bottom: 56px;
    }
  }

  &__section-title {
    margin: 0;
    letter-spacing: -1.2px;

    @include font(
      34px,
      1.1,
      $mainFontName,
      $text-light,
      700
    );

    @include breakpoint($tablet) {
      font-size: 46px;
    }
  }

  &__additional-list {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid rgba($text-light, 0.12);
  }

  &__additional-item {
    display: flex;
    padding: 22px 0;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid rgba($text-light, 0.12);

    @include font(
      14px,
      1.4,
      $mainFontName,
      $text-light,
      500
    );

    strong {
      flex-shrink: 0;
      color: $color-accent;
      font-weight: 500;
    }
  }

  &__steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @include breakpoint($tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include breakpoint($laptopSmall) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 24px;
    }
  }

  &__step {
    padding-top: 24px;
    border-top: 1px solid rgba($text-light, 0.16);
  }

  &__step-number {
    display: block;
    margin-bottom: 36px;
    letter-spacing: 2px;

    @include font(
      10px,
      1,
      monospace,
      $color-accent,
      500
    );
  }

  &__step-title {
    margin: 0 0 12px;

    @include font(
      20px,
      1.2,
      $mainFontName,
      $text-light,
      700
    );
  }

  &__step-description {
    margin: 0;

    @include font(
      13px,
      1.6,
      $mainFontName,
      $text-muted,
      400
    );
  }

  &__cta {
    border-bottom: 0;
  }

  &__cta-content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 36px;

    @include breakpoint($tablet) {
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: row;
      gap: 64px;
    }
  }

  &__cta-title {
    margin: 0 0 18px;
    letter-spacing: -1.2px;

    @include font(
      36px,
      1.1,
      $mainFontName,
      $text-light,
      700
    );

    @include breakpoint($tablet) {
      font-size: 48px;
    }
  }

  &__cta-text {
    max-width: 600px;
    margin: 0;

    @include font(
      15px,
      1.65,
      $mainFontName,
      $text-muted,
      400
    );
  }
}
</style>