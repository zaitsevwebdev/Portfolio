<template>
  <section
    id="workflow"
    class="workflow"
  >
    <div class="workflow__container">
      <div class="workflow__header">
        <div class="workflow__eyebrow">
          <svg
            class="workflow__eyebrow-icon"
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

        <h2 class="workflow__title">
          Від першої розмови
          <br>
          до готового сайту
        </h2>

        <p class="workflow__subtitle">
          Без складних процесів і зайвої бюрократії.
          На кожному етапі ти розумієш, що відбувається з проєктом.
        </p>
      </div>

      <ol class="workflow__list">
        <li
          v-for="step in steps"
          :key="step.number"
          class="workflow__step"
        >
          <span class="workflow__number">
            {{ step.number }}
          </span>

          <div class="workflow__content">
            <h3 class="workflow__step-title">
              {{ step.title }}
            </h3>

            <p class="workflow__description">
              {{ step.description }}
            </p>
          </div>
        </li>
      </ol>

      <div class="workflow__bottom">
        <span class="workflow__bottom-dot" />

        <p>
          Показую проміжний результат і погоджую важливі рішення,
          щоб фінальний сайт не став сюрпризом.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface WorkflowStep {
  number: string
  title: string
  description: string
}

const steps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Знайомство',
    description:
      'Обговорюємо твій бізнес, ціль сайту, аудиторію та те, який результат хочемо отримати.'
  },
  {
    number: '02',
    title: 'План',
    description:
      'Формую структуру, визначаємо потрібні блоки, функціональність, терміни та вартість роботи.'
  },
  {
    number: '03',
    title: 'Розробка',
    description:
      'Збираю адаптивний сайт, підключаю потрібну логіку, форми та показую проміжний результат.'
  },
  {
    number: '04',
    title: 'Запуск',
    description:
      'Перевіряю сайт, вношу погоджені правки, допомагаю з публікацією та залишаюсь на зв’язку.'
  }
]
</script>

<style lang="scss">
.workflow {
  padding: 72px 0;
  background-color: $primary-bg;
  border-bottom: 1px solid rgba($text-light, 0.1);

  @include breakpoint($tablet) {
    padding: 96px 0;
  }

  @include breakpoint($tabletLandscape) {
    padding: 112px 0;
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
    max-width: 720px;
    margin-bottom: 56px;

    @include breakpoint($tablet) {
      margin-bottom: 64px;
    }

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

    @include font(36px, 1.05, $mainFontName, $text-light, 700);

    @include breakpoint($mobile) {
      font-size: 40px;
    }

    @include breakpoint($tablet) {
      font-size: 48px;
    }

    @include breakpoint($tabletLandscape) {
      font-size: 54px;
    }
  }

  &__subtitle {
    max-width: 580px;
    margin: 0;

    @include font(15px, 1.7, $mainFontName, $text-muted, 400);

    @include breakpoint($tablet) {
      font-size: 16px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid rgba($text-light, 0.12);
    border-radius: 18px;
    list-style: none;

    @include breakpoint($tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include breakpoint($tabletLandscape) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &__step {
    position: relative;
    min-height: 250px;
    padding: 30px 26px;
    box-sizing: border-box;
    background-color: $primary-bg;

    &:not(:last-child) {
      border-bottom: 1px solid rgba($text-light, 0.12);
    }

    @include breakpoint($tablet) {
      min-height: 270px;
      padding: 32px;

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

    @include breakpoint($tabletLandscape) {
      min-height: 300px;
      padding: 34px 30px;

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
        width: 54px;
      }

      .workflow__number {
        color: $text-light;
      }
    }
  }

  &__number {
    display: block;
    margin-bottom: 30px;
    letter-spacing: 1px;
    transition: color 0.25s ease;

    @include font(13px, 1.2, monospace, $color-accent, 600);
  }

  &__content {
    min-width: 0;
  }

  &__step-title {
    margin: 0 0 14px;
    letter-spacing: -0.5px;

    @include font(22px, 1.15, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 24px;
    }
  }

  &__description {
    max-width: 250px;
    margin: 0;

    @include font(14px, 1.65, $mainFontName, $text-muted, 400);

    @include breakpoint($tablet) {
      font-size: 15px;
    }
  }

  &__bottom {
    max-width: 680px;
    margin: 36px auto 0;
    padding: 16px 20px;
    gap: 12px;
    box-sizing: border-box;
    border: 1px solid rgba($text-light, 0.12);
    border-radius: 999px;

    @include flex(center, center);

    p {
      margin: 0;

      @include font(12px, 1.5, $mainFontName, $text-muted, 400);
    }

    @include breakpoint($tablet) {
      margin-top: 42px;

      p {
        font-size: 13px;
      }
    }
  }

  &__bottom-dot {
    width: 5px;
    height: 5px;
    flex-shrink: 0;
    background-color: $color-accent;
    border-radius: 50%;
  }
}
</style>