<template>
  <section id="projects" class="portfolio">
    <div class="portfolio__container">
      <div class="portfolio__header">
        <h2 class="portfolio__title">
          Мої роботи
        </h2>

        <p class="portfolio__subtitle">
          Три кейси, що показують підхід до структури,
          типографіки та інтерфейсу.
        </p>
      </div>

      <div class="portfolio__list">
        <article
          v-for="project in projects"
          :key="project.index"
          class="portfolio__project"
          :class="{
            'portfolio__project--reverse':
              Number(project.index) % 2 === 0
          }"
        >
          <div class="portfolio__preview">
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

              <component :is="mockups[project.mockup]" />
            </div>
          </div>

          <div class="portfolio__info">
            <span class="portfolio__index">
              {{ project.index }}
            </span>

            <h3 class="portfolio__project-title">
              {{ project.title }}
            </h3>

            <p class="portfolio__type">
              {{ project.type }}
            </p>

            <p class="portfolio__description">
              {{ project.description }}
            </p>

            <ul class="portfolio__tech-list">
              <li
                v-for="technology in project.tech"
                :key="technology"
              >
                {{ technology }}
              </li>
            </ul>

            <div class="portfolio__actions">
              <a
                :href="project.demoUrl"
                class="portfolio__button"
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
    </div>
  </section>
</template>

<script setup lang="ts">
import CafeMockup from '~/components/ui/mockup/CafeMockup.vue'
import BarberMockup from '~/components/ui/mockup/BarberMockup.vue'
import ServiceMockup from '~/components/ui/mockup/ServiceMockup.vue'

const mockups = {
  cafe: CafeMockup,
  barber: BarberMockup,
  service: ServiceMockup
} as const

type MockupName = keyof typeof mockups

interface Project {
  index: string
  title: string
  type: string
  description: string
  tech: string[]
  mockup: MockupName
  domain: string
  demoUrl: string
  githubUrl: string
}

const projects: Project[] = [
  {
    index: '01',
    title: 'Сайт для кав’ярні',
    type: 'Лендинг • Меню • Локації',
    description:
      'Односторінковий сайт з меню, атмосферою закладу та контактами. Акцент на швидкому перегляді позицій з телефона й простому шляху до візиту.',
    tech: ['Vue.js', 'SCSS', 'Адаптивна верстка'],
    mockup: 'cafe',
    domain: 'coffee-shop.local',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    index: '02',
    title: 'Сайт для барбершопу (концепт)',
    type: 'Концепт • Послуги • Запис',
    description:
      'Концепт сайту з прайсом, майстрами та формою запису. Стриманий інтерфейс, у якому головне — ціна, послуга й кнопка запису.',
    tech: ['Nuxt 3', 'TypeScript', 'Форми'],
    mockup: 'barber',
    domain: 'barbershop.concept',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    index: '03',
    title: 'Сайт для сервісу',
    type: 'Сервіс • Тарифи • Заявки',
    description:
      'Сайт сервісної компанії зі структурою послуг, тарифами та інтеграцією форм заявок через API.',
    tech: ['Vue.js', 'TypeScript', 'API'],
    mockup: 'service',
    domain: 'service.app',
    demoUrl: '#',
    githubUrl: '#'
  }
]
</script>

<style lang="scss">
.portfolio {
  padding: 72px 0;
  background-color: $primary-bg;
  border-bottom: 1px solid rgba($text-light, 0.1);

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
    padding: 0 20px;
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
    @include font(38px, 1.1, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 48px;
    }
  }

  &__subtitle {
    max-width: 310px;
    margin: 0;
    @include font(14px, 1.6, $mainFontName, $text-muted, 400);
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
    grid-template-columns: 1fr;
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
    min-width: 0;
  }

  &__browser {
    overflow: hidden;
    background-color: $primary-bg;
    border: 1px solid rgba($text-light, 0.16);
    border-radius: 14px;
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
      padding: 0 20px;
    }
  }

  &__browser-dots {
    gap: 7px;
    @include flex(flex-start, center);

    span {
      width: 8px;
      height: 8px;
      background-color: rgba($text-light, 0.2);
      border-radius: 50%;
    }
  }

  &__browser-domain {
    padding: 6px 12px;
    border: 1px solid rgba($text-light, 0.13);
    border-radius: 999px;
    @include font(10px, 1, monospace, $text-muted, 400);
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

  &__project-title {
    margin: 0 0 10px;
    letter-spacing: -0.7px;
    @include font(28px, 1.2, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 30px;
    }
  }

  &__type {
    margin: 0 0 24px;
    @include font(14px, 1.4, $mainFontName, $text-muted, 400);
  }

  &__description {
    max-width: 470px;
    margin: 0 0 24px;
    @include font(16px, 1.6, $mainFontName, $text-muted, 400);
  }

  &__tech-list {
    margin: 0 0 32px;
    padding: 0;
    gap: 8px;
    list-style: none;
    flex-wrap: wrap;
    @include flex(flex-start, center);

    li {
      padding: 8px 12px;
      border: 1px solid rgba($text-light, 0.14);
      border-radius: 999px;
      @include font(11px, 1, monospace, $text-muted, 400);
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
    text-decoration: none;
    transition:
      color 0.25s ease,
      border-color 0.25s ease,
      background-color 0.25s ease;

    @include flex(center, center);
    @include font(13px, 1.2, $mainFontName, $text-muted, 400);

    &:hover {
      color: $primary-bg;
      background-color: $color-accent;
      border-color: $color-accent;
    }
  }
}
</style>