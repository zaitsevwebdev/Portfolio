<template>
  <section id="advantages" class="advantages">
    <div class="advantages__container">
      <div class="advantages__header">
        <h2 class="advantages__title">
          Що ви отримаєте
        </h2>

        <span class="advantages__label">
          01 — Підхід
        </span>
      </div>

      <div class="advantages__grid">
        <article
          class="
            advantages__card
            advantages__card--adaptive
          "
        >
          <span class="advantages__number">01</span>

          <h3 class="advantages__card-title">
            Адаптивність
          </h3>

          <p class="advantages__description">
            Сайт коректно виглядає й працює на телефоні, планшеті
            та десктопі — без зламаних блоків і горизонтального скролу.
          </p>

          <div
            class="advantages__devices"
            aria-hidden="true"
          >
            <span class="advantages__device advantages__device--phone" />
            <span class="advantages__device advantages__device--tablet" />
            <span class="advantages__device advantages__device--desktop" />
          </div>
        </article>

        <article
          class="
            advantages__card
            advantages__card--interface
          "
        >
          <span class="advantages__number">02</span>

          <h3 class="advantages__card-title">
            Зрозумілий інтерфейс
          </h3>

          <p class="advantages__description">
            Проста структура й акценти, які ведуть відвідувача до заявки.
          </p>
        </article>

        <article
          class="
            advantages__card
            advantages__card--speed
          "
        >
          <span class="advantages__number">03</span>

          <h3 class="advantages__card-title">
            Швидке завантаження
          </h3>

          <p class="advantages__description">
            Оптимізовані зображення, легкий код і мінімум зайвих залежностей.
          </p>
        </article>

        <article
          class="
            advantages__card
            advantages__card--support
          "
        >
          <span class="advantages__number">04</span>

          <h3 class="advantages__card-title">
            Підтримка після запуску
          </h3>

          <p class="advantages__description">
            Допомагаю з правками, оновленням контенту й дрібними доробками.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.advantages {
  padding: 72px 0;
  background-color: $primary-bg;
  border-bottom: 1px solid rgba($text-light, 0.1);

  @include breakpoint($tablet) {
    padding: 88px 0;
  }

  @include breakpoint($tabletLandscape) {
    padding: 96px 0 108px;
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
    margin-bottom: 44px;
    gap: 24px;
    @include flex(space-between, flex-end);

    @include breakpoint($tabletLandscape) {
      margin-bottom: 56px;
    }
  }

  &__title {
    margin: 0;
    letter-spacing: -1px;
    @include font(30px, 1.15, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 36px;
    }
  }

  &__label {
    display: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    white-space: nowrap;
    @include font(10px, 1.2, monospace, $text-muted, 500);

    @include breakpoint($tablet) {
      display: block;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    overflow: hidden;
    background-color: rgba($text-light, 0.14);
    border: 1px solid rgba($text-light, 0.14);
    border-radius: 16px;

    @include breakpoint($tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include breakpoint($tabletLandscape) {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
  }

  &__card {
    position: relative;
    min-height: 250px;
    padding: 32px 24px;
    overflow: hidden;
    background-color: $primary-bg;
    box-sizing: border-box;
    transition: background-color 0.3s ease;

    @include breakpoint($tablet) {
      min-height: 270px;
      padding: 38px 32px;
    }

    @include breakpoint($tabletLandscape) {
      min-height: 220px;
      padding: 42px 40px;
    }

    &:hover {
      background-color: rgba($card-bg, 0.18);
    }

    &--adaptive {
      min-height: 390px;

      @include breakpoint($tablet) {
        grid-column: 1 / -1;
        min-height: 400px;
      }

      @include breakpoint($tabletLandscape) {
        grid-column: span 4;
        min-height: 402px;
        padding: 54px 48px 48px;
      }
    }

    &--interface {
      @include breakpoint($tabletLandscape) {
        grid-column: span 2;
        min-height: 402px;
        padding: 54px 40px;
      }
    }

    &--speed {
      @include breakpoint($tabletLandscape) {
        grid-column: span 3;
      }
    }

    &--support {
      @include breakpoint($tabletLandscape) {
        grid-column: span 3;
      }
    }
  }

  &__number {
    display: block;
    margin-bottom: 24px;
    letter-spacing: 1px;
    @include font(11px, 1.2, monospace, $color-accent, 500);

    @include breakpoint($tabletLandscape) {
      margin-bottom: 26px;
    }
  }

  &__card-title {
    max-width: 420px;
    margin: 0 0 18px;
    letter-spacing: -0.5px;
    @include font(23px, 1.2, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 25px;
    }

    @include breakpoint($tabletLandscape) {
      margin-bottom: 16px;
    }
  }

  &__description {
    max-width: 470px;
    margin: 0;
    @include font(15px, 1.65, $mainFontName, $text-muted, 400);

    @include breakpoint($tablet) {
      font-size: 16px;
    }
  }

  &__devices {
    position: absolute;
    right: 24px;
    bottom: 32px;
    left: 24px;
    height: 100px;
    @include flex(flex-start, flex-end);
    gap: 12px;

    @include breakpoint($mobile) {
      right: 32px;
      left: 32px;
    }

    @include breakpoint($tabletLandscape) {
      right: 48px;
      bottom: 48px;
      left: 48px;
    }
  }

  &__device {
    display: block;
    background-color: $primary-bg;
    border: 1px solid rgba($text-light, 0.2);
    border-radius: 8px;
    box-sizing: border-box;
    transition:
      border-color 0.25s ease,
      box-shadow 0.25s ease;

    &--phone {
      width: 40px;
      height: 65px;

      @include breakpoint($tabletLandscape) {
        width: 40px;
        height: 64px;
      }
    }

    &--tablet {
      width: 64px;
      height: 82px;

      @include breakpoint($tabletLandscape) {
        width: 64px;
        height: 80px;
      }
    }

    &--desktop {
      width: 160px;
      height: 98px;
      border-color: rgba($color-accent, 0.7);
      box-shadow: inset 0 0 20px rgba($color-accent, 0.03);

      @include breakpoint($tabletLandscape) {
        width: 160px;
        height: 96px;
      }
    }
  }

  &__card--adaptive:hover &__device {
    border-color: rgba($color-accent, 0.65);

    &--desktop {
      box-shadow: 0 0 20px rgba($color-accent, 0.08);
    }
  }
}
</style>