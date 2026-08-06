<script setup lang="ts">
import { projects } from '~/data/projects'

const featuredProjects = projects
  .filter(project => project.featured)
  .slice(0, 3)
</script>

<template>
  <section
    id="projects"
    class="portfolio"
  >
    <div class="portfolio__container">
      <div class="portfolio__header">
        <h2 class="portfolio__title">
          Обрані проєкти
        </h2>

        <p class="portfolio__subtitle">
          Три проєкти, що демонструють мій підхід до дизайну,
          структури, адаптивності та розробки інтерфейсів.
        </p>
      </div>

      <div class="portfolio__list">
        <article
          v-for="(project, index) in featuredProjects"
          :key="project.id"
          class="portfolio__project"
          :class="{
            'portfolio__project--reverse': (index + 1) % 2 === 0
          }"
        >
          <a
            :href="project.demoUrl"
            class="portfolio__preview"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Переглянути проєкт ${project.title}`"
          >
            <div class="portfolio__browser">
              <div class="portfolio__browser-header">
                <div class="portfolio__browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span class="portfolio__browser-domain">
                  {{ project.domain }}
                </span>
              </div>

              <div class="portfolio__image-wrapper">
                <img
                  :src="project.image"
                  :alt="`${project.title} — ${project.type}`"
                  class="portfolio__image"
                  loading="lazy"
                >
              </div>
            </div>
          </a>

          <div class="portfolio__info">
            <span class="portfolio__index">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <p class="portfolio__type">
              {{ project.type }}
            </p>

            <h3 class="portfolio__project-title">
              {{ project.title }}
            </h3>

            <p class="portfolio__description">
              {{ project.description }}
            </p>

            <ul class="portfolio__technologies">
              <li
                v-for="technology in project.technologies"
                :key="technology"
              >
                {{ technology }}
              </li>
            </ul>

            <div class="portfolio__actions">
              <a
                :href="project.demoUrl"
                class="portfolio__button portfolio__button--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Переглянути сайт
              </a>

              <a
                :href="project.githubUrl"
                class="portfolio__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>

      <div class="portfolio__more">
        <NuxtLink
          to="/projects"
          class="portfolio__button portfolio__button--more"
        >
          Переглянути всі проєкти
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.portfolio {
  padding: 72px 0;
  background-color: $primary-bg;

  @include breakpoint($tablet) {
    padding: 88px 0;
  }

  @include breakpoint($tabletLandscape) {
    padding: 104px 0 120px;
  }

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

  &__header {
    margin-bottom: 56px;
    gap: 24px;
    flex-direction: column;

    @include flex(space-between, flex-start);

    @include breakpoint($tablet) {
      align-items: flex-end;
      flex-direction: row;
    }

    @include breakpoint($tabletLandscape) {
      margin-bottom: 68px;
    }
  }

  &__title {
    margin: 0;
    letter-spacing: -1.5px;

    @include font(
      38px,
      1.1,
      $mainFontName,
      $text-light,
      700
    );

    @include breakpoint($tablet) {
      font-size: 48px;
    }
  }

  &__subtitle {
    max-width: 420px;
    margin: 0;

    @include font(
      14px,
      1.6,
      $mainFontName,
      $text-muted,
      400
    );

    @include breakpoint($tablet) {
      font-size: 15px;
    }
  }

  &__list {
    gap: 80px;
    flex-direction: column;

    @include flex(flex-start, stretch);

    @include breakpoint($tabletLandscape) {
      gap: 110px;
    }
  }

  &__project {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: center;
    gap: 38px;

    @include breakpoint($tabletLandscape) {
      grid-template-columns:
        minmax(0, 1.35fr)
        minmax(320px, 0.9fr);
      gap: 56px;
    }

    @include breakpoint($laptop) {
      gap: 72px;
    }

    &--reverse {
      @include breakpoint($tabletLandscape) {
        grid-template-columns:
          minmax(320px, 0.9fr)
          minmax(0, 1.35fr);
      }

      .portfolio__preview {
        @include breakpoint($tabletLandscape) {
          order: 2;
        }
      }

      .portfolio__info {
        @include breakpoint($tabletLandscape) {
          order: 1;
        }
      }
    }
  }

  &__preview {
    display: block;
    min-width: 0;
    color: inherit;
    text-decoration: none;

    &:hover {
      .portfolio__image {
        transform: scale(1.02);
      }

      .portfolio__browser {
        border-color: rgba($color-accent, 0.45);
      }
    }
  }

  &__browser {
    overflow: hidden;
    background-color: $card-bg;
    border: 1px solid rgba($text-light, 0.16);
    border-radius: 14px;
    transition: border-color 0.25s ease;
  }

  &__browser-header {
    min-height: 48px;
    padding: 0 16px;
    gap: 16px;
    background-color: rgba($card-bg, 0.36);
    border-bottom: 1px solid rgba($text-light, 0.12);
    box-sizing: border-box;

    @include flex(flex-start, center);

    @include breakpoint($tablet) {
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  &__browser-dots {
    flex-shrink: 0;
    gap: 7px;

    @include flex(flex-start, center);

    span {
      width: 8px;
      height: 8px;
      background-color: rgba($text-light, 0.2);
      border-radius: 50%;
    }

    span:last-child {
      background-color: rgba($color-accent, 0.75);
    }
  }

  &__browser-domain {
    overflow: hidden;
    padding: 6px 12px;
    border: 1px solid rgba($text-light, 0.13);
    border-radius: 999px;
    text-overflow: ellipsis;
    white-space: nowrap;

    @include font(
      10px,
      1,
      monospace,
      $text-muted,
      400
    );
  }

  &__image-wrapper {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.4s ease;
  }

  &__info {
    min-width: 0;
  }

  &__index {
    display: block;
    margin-bottom: 22px;
    letter-spacing: 2px;

    @include font(
      11px,
      1,
      monospace,
      $color-accent,
      500
    );
  }

  &__type {
    margin: 0 0 10px;

    @include font(
      14px,
      1.4,
      $mainFontName,
      $text-muted,
      400
    );
  }

  &__project-title {
    margin: 0 0 16px;
    letter-spacing: -0.7px;

    @include font(
      28px,
      1.2,
      $mainFontName,
      $text-light,
      700
    );

    @include breakpoint($tablet) {
      font-size: 30px;
    }
  }

  &__description {
    max-width: 470px;
    margin: 0 0 24px;

    @include font(
      16px,
      1.6,
      $mainFontName,
      $text-muted,
      400
    );
  }

  &__technologies {
    margin: 0 0 32px;
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
    gap: 12px;
    flex-wrap: wrap;

    @include flex(flex-start, center);
  }

  &__button {
    min-height: 44px;
    padding: 0 20px;
    border: 1px solid rgba($text-light, 0.16);
    border-radius: 999px;
    box-sizing: border-box;
    text-decoration: none;
    transition:
      color 0.25s ease,
      border-color 0.25s ease,
      background-color 0.25s ease;

    @include flexCenter();

    @include font(
      13px,
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

    &--more {
      min-height: 50px;
      padding-right: 26px;
      padding-left: 26px;
    }
  }

  &__more {
    margin-top: 56px;

    @include flex(flex-start, center);

    @include breakpoint($tablet) {
      margin-top: 72px;
    }

    @include breakpoint($tabletLandscape) {
      margin-top: 88px;

      @include flexCenter();
    }
  }
}
</style>