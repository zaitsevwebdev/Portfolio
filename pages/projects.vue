<script setup lang="ts">
import { projects } from '~/data/projects'

useHead({
  title: 'Проєкти — Zaitsev.dev',
  meta: [
    {
      name: 'description',
      content:
        'Проєкти Олександра Зайцева — сайти на Vue, Nuxt 3 та TypeScript.'
    }
  ]
})
</script>

<template>
  <main class="projects-page">
    <section class="projects-page__hero">
      <div class="projects-page__container">
        <NuxtLink
          to="/"
          class="projects-page__back"
        >
          ← На головну
        </NuxtLink>

        <div class="projects-page__heading">
          <div>
            <span class="projects-page__eyebrow">
              Portfolio
            </span>

            <h1 class="projects-page__title">
              Мої проєкти
            </h1>
          </div>

          <p class="projects-page__intro">
            Сайти та концепти, створені для практики й малого бізнесу.
            У кожному проєкті приділяю увагу структурі, адаптивності
            та зрозумілому інтерфейсу.
          </p>
        </div>
      </div>
    </section>

    <section class="projects-page__catalog">
      <div class="projects-page__container">
        <div class="projects-page__grid">
          <article
            v-for="(project, index) in projects"
            :key="project.id"
            class="projects-page__card"
          >
            <a
              :href="project.demoUrl"
              class="projects-page__preview"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                :src="project.image"
                :alt="`${project.title} — ${project.type}`"
                class="projects-page__image"
              >

              <span class="projects-page__preview-link">
                Відкрити сайт ↗
              </span>
            </a>

            <div class="projects-page__content">
              <span class="projects-page__number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <p class="projects-page__type">
                {{ project.type }}
              </p>

              <h2 class="projects-page__card-title">
                {{ project.title }}
              </h2>

              <p class="projects-page__description">
                {{ project.description }}
              </p>

              <ul class="projects-page__technologies">
                <li
                    v-for="technology in project.technologies"
                    :key="technology"
                >
                    {{ technology }}
                </li>
              </ul>

              <div class="projects-page__actions">
                <a
                  :href="project.demoUrl"
                  class="projects-page__button projects-page__button--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Переглянути сайт
                </a>

                <a
                  :href="project.githubUrl"
                  class="projects-page__button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.projects-page {
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

  &__catalog {
    padding-top: 64px;
    padding-bottom: 80px;

    @include breakpoint($tablet) {
      padding-top: 80px;
      padding-bottom: 100px;
    }

    @include breakpoint($tabletLandscape) {
      padding-top: 96px;
      padding-bottom: 120px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 56px;

    @include breakpoint($tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      column-gap: 24px;
      row-gap: 72px;
    }

    @include breakpoint($laptopSmall) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 28px;
      row-gap: 80px;
    }
  }

  &__card {
    min-width: 0;
  }

  &__preview {
    position: relative;
    display: block;
    height: 240px;
    overflow: hidden;
    background-color: $card-bg;
    border: 1px solid rgba($text-light, 0.12);
    border-radius: 14px;
    text-decoration: none;

    @include breakpoint($mobile) {
      height: 280px;
    }

    @include breakpoint($tablet) {
      height: 250px;
    }

    @include breakpoint($laptopSmall) {
      height: 230px;
    }

    &:hover {
      .projects-page__image {
        transform: scale(1.03);
      }

      .projects-page__preview-link {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &__preview-link {
    position: absolute;
    right: 16px;
    bottom: 16px;
    min-height: 38px;
    padding: 0 16px;
    visibility: hidden;
    opacity: 0;
    color: $primary-bg;
    background-color: $color-accent;
    border-radius: 999px;
    transform: translateY(8px);
    transition:
      visibility 0.25s ease,
      opacity 0.25s ease,
      transform 0.25s ease;

    @include flex(center, center);
    @include font(12px, 1.2, $mainFontName, $primary-bg, 600);
  }

  &__content {
    padding-top: 24px;
  }

  &__number {
    display: block;
    margin-bottom: 18px;
    letter-spacing: 2px;

    @include font(
      10px,
      1,
      monospace,
      $color-accent,
      500
    );
  }

  &__type {
    margin: 0 0 10px;

    @include font(
      12px,
      1.4,
      $mainFontName,
      $text-muted,
      400
    );
  }

  &__card-title {
    margin: 0 0 16px;
    letter-spacing: -0.6px;

    @include font(
      24px,
      1.2,
      $mainFontName,
      $text-light,
      700
    );
  }

  &__description {
    margin: 0;

    @include font(
      14px,
      1.6,
      $mainFontName,
      $text-muted,
      400
    );
  }

  &__technologies {
    margin: 24px 0 28px;
    padding: 0;
    gap: 8px;
    list-style: none;
    flex-wrap: wrap;

    @include flex(flex-start, center);

    li {
      padding: 8px 12px;
      border: 1px solid rgba($text-light, 0.16);
      border-radius: 999px;
      white-space: nowrap;

      @include font(
        11px,
        1.2,
        monospace,
        $text-muted,
        400
      );
    }
  }

  &__actions {
    gap: 10px;
    flex-wrap: wrap;
    @include flex(flex-start, center);
  }

  &__button {
    min-height: 42px;
    padding: 0 18px;
    border: 1px solid rgba($text-light, 0.16);
    border-radius: 999px;
    text-decoration: none;
    transition:
      color 0.25s ease,
      background-color 0.25s ease,
      border-color 0.25s ease;

    @include flex(center, center);

    @include font(
      12px,
      1.2,
      $mainFontName,
      $text-muted,
      500
    );

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
  }
}
</style>