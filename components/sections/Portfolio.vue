<script setup lang="ts">
import { ref } from 'vue'
import { projects } from '~/data/projects'

const featuredProjects = projects
  .filter(project => project.featured)
  .slice(0, 3)

const projectsList = ref<HTMLElement | null>(null)
const activeProject = ref(0)

const goToProject = (index: number) => {
  if (!projectsList.value) {
    return
  }

  activeProject.value = index

  projectsList.value.scrollTo({
    left: projectsList.value.clientWidth * index,
    behavior: 'smooth'
  })
}

const scrollProjects = (direction: 'prev' | 'next') => {
  const maxIndex = featuredProjects.length - 1

  if (direction === 'next') {
    goToProject(Math.min(activeProject.value + 1, maxIndex))
    return
  }

  goToProject(Math.max(activeProject.value - 1, 0))
}

const handleScroll = () => {
  if (!projectsList.value) {
    return
  }

  const container = projectsList.value
  const width = container.clientWidth

  if (!width) {
    return
  }

  activeProject.value = Math.round(container.scrollLeft / width)
}
</script>

<template>
  <section
    id="projects"
    class="portfolio"
  >
    <div class="portfolio__container">
      <div class="portfolio__header">
        <div>
          <div class="portfolio__eyebrow">
            <svg
              class="portfolio__eyebrow-icon"
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
              Роботи, якими я пишаюся
            </span>
          </div>

          <h2 class="portfolio__title">
            Обрані проєкти
          </h2>
        </div>

        <p class="portfolio__subtitle">
          Кілька робіт, у яких можна побачити мій підхід
          до структури, дизайну, адаптивності та деталей.
        </p>
      </div>

      <div class="portfolio__slider">
        <div
          ref="projectsList"
          class="portfolio__list"
          @scroll="handleScroll"
        >
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

        <div class="portfolio__navigation">
          <button
            class="portfolio__navigation-arrow"
            type="button"
            aria-label="Попередній проєкт"
            :disabled="activeProject === 0"
            @click="scrollProjects('prev')"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M24 14H5M5 14L11 8M5 14L11 20"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div class="portfolio__pagination">
            <button
              v-for="(_, index) in featuredProjects"
              :key="index"
              class="portfolio__pagination-item"
              :class="{
                'portfolio__pagination-item--active': activeProject === index
              }"
              type="button"
              :aria-label="`Перейти до проєкту ${index + 1}`"
              @click="goToProject(index)"
            />
          </div>

          <button
            class="portfolio__navigation-arrow"
            type="button"
            aria-label="Наступний проєкт"
            :disabled="activeProject === featuredProjects.length - 1"
            @click="scrollProjects('next')"
          >
            <svg
              width="24"
              height="24"
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
          </button>
        </div>
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
    gap: 28px;
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
    letter-spacing: -1.5px;

    @include font(38px, 1.1, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 48px;
    }
  }

  &__subtitle {
    max-width: 420px;
    margin: 0;

    @include font(14px, 1.6, $mainFontName, $text-muted, 400);

    @include breakpoint($tablet) {
      font-size: 15px;
    }
  }

  &__slider {
    position: relative;
  }

  &__list {
    display: flex;
    gap: 0;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    @include breakpoint($tabletLandscape) {
      overflow: visible;
      gap: 110px;
      flex-direction: column;
      scroll-snap-type: none;

      @include flex(flex-start, stretch);
    }
  }

  &__project {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    align-items: center;
    flex: 0 0 100%;
    min-width: 0;
    gap: 38px;
    scroll-snap-align: start;
    scroll-snap-stop: always;

    @include breakpoint($tabletLandscape) {
      grid-template-columns:
        minmax(0, 1.35fr)
        minmax(320px, 0.9fr);
      flex: initial;
      gap: 56px;
      scroll-snap-align: none;
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

    @include font(10px, 1, monospace, $text-muted, 400);
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

    @include font(11px, 1, monospace, $color-accent, 500);
  }

  &__type {
    margin: 0 0 10px;

    @include font(14px, 1.4, $mainFontName, $text-muted, 400);
  }

  &__project-title {
    margin: 0 0 16px;
    letter-spacing: -0.7px;

    @include font(28px, 1.2, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 30px;
    }
  }

  &__description {
    max-width: 470px;
    margin: 0 0 24px;

    @include font(16px, 1.6, $mainFontName, $text-muted, 400);
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

      @include font(11px, 1.2, monospace, $text-muted, 400);
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
    @include font(13px, 1.2, $mainFontName, $text-muted, 500);

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

  &__navigation {
    margin-top: 32px;
    gap: 24px;

    @include flex(center, center);

    @include breakpoint($tabletLandscape) {
      display: none;
    }
  }

  &__navigation-arrow {
    width: 44px;
    height: 44px;
    padding: 0;
    flex-shrink: 0;
    color: $text-light;
    background-color: transparent;
    border: 1px solid rgba($text-light, 0.18);
    border-radius: 50%;
    cursor: pointer;
    transition:
      color 0.25s ease,
      border-color 0.25s ease,
      opacity 0.25s ease;

    @include flexCenter();

    svg {
      display: block;
    }

    &:hover:not(:disabled) {
      color: $color-accent;
      border-color: $color-accent;
    }

    &:disabled {
      opacity: 0.25;
      cursor: default;
    }
  }

  &__pagination {
    gap: 8px;

    @include flex(center, center);
  }

  &__pagination-item {
    width: 22px;
    height: 3px;
    padding: 0;
    background-color: rgba($text-light, 0.2);
    border: 0;
    border-radius: 999px;
    cursor: pointer;
    transition:
      width 0.25s ease,
      background-color 0.25s ease;

    &--active {
      width: 40px;
      background-color: $color-accent;
    }
  }

  &__more {
    margin-top: 56px;

    @include flexCenter();

    @include breakpoint($tablet) {
      margin-top: 72px;
    }

    @include breakpoint($tabletLandscape) {
      margin-top: 88px;
    }
  }
}
</style>