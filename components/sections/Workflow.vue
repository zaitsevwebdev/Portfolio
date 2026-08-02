<template>
  <section id="workflow" class="workflow">
    <div class="workflow__container">
      <div class="workflow__header">
        <span class="workflow__eyebrow">
          Як я працюю
        </span>

        <h2 class="workflow__title">
          Одна послідовність від ідеї до запуску
        </h2>
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
    title: 'Обговорення',
    description:
      'З’ясовуємо задачу, аудиторію та бажаний результат. Формую структуру й обсяг робіт.'
  },
  {
    number: '02',
    title: 'Прототип',
    description:
      'Збираю каркас сторінок: блоки, послідовність, акценти й шлях до заявки.'
  },
  {
    number: '03',
    title: 'Розробка',
    description:
      'Верстаю адаптивно, під’єдную форми та перевіряю поведінку на реальних пристроях.'
  },
  {
    number: '04',
    title: 'Запуск',
    description:
      'Публікую сайт, налаштовую дрібниці й залишаюсь на зв’язку для правок.'
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
    min-height: 930px;
    padding: 112px 0;
    box-sizing: border-box;
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
    max-width: 520px;
  }

  &__eyebrow {
    display: block;
    margin-bottom: 22px;
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
    letter-spacing: -1.3px;

    @include font(
      34px,
      1.08,
      $mainFontName,
      $text-light,
      700
    );

    @include breakpoint($mobile) {
      font-size: 38px;
    }

    @include breakpoint($tablet) {
      font-size: 42px;
    }
  }

  &__list {
    position: relative;
    max-width: 720px;
    margin: 64px 0 0;
    padding: 0;
    list-style: none;

    @include breakpoint($tablet) {
      margin-top: 72px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 8px;
      bottom: 8px;
      left: 4px;
      width: 1px;
      background-color: rgba($text-light, 0.14);
    }
  }

  &__step {
    position: relative;
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 16px;
    padding-left: 28px;

    @include breakpoint($mobile) {
      grid-template-columns: 52px minmax(0, 1fr);
      gap: 20px;
      padding-left: 36px;
    }

    @include breakpoint($tablet) {
      grid-template-columns: 88px minmax(0, 1fr);
      gap: 40px;
      padding-left: 40px;
    }

    &:not(:last-child) {
      margin-bottom: 54px;

      @include breakpoint($tablet) {
        margin-bottom: 52px;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 5px;
      left: 0;
      z-index: 1;
      width: 9px;
      height: 9px;
      background-color: $primary-bg;
      border: 1px solid $color-accent;
      border-radius: 50%;
      box-sizing: border-box;
    }
  }

  &__number {
    padding-top: 1px;
    letter-spacing: 1px;

    @include font(
      12px,
      1.2,
      monospace,
      $color-accent,
      500
    );
  }

  &__content {
    min-width: 0;
  }

  &__step-title {
    margin: 0 0 14px;
    letter-spacing: -0.4px;

    @include font(
      22px,
      1.2,
      $mainFontName,
      $text-light,
      700
    );

    @include breakpoint($tablet) {
      font-size: 24px;
    }
  }

  &__description {
    max-width: 560px;
    margin: 0;

    @include font(
      15px,
      1.6,
      $mainFontName,
      $text-muted,
      400
    );

    @include breakpoint($tablet) {
      font-size: 16px;
    }
  }
}
</style>