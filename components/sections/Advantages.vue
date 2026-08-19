<template>
  <section id="advantages" class="advantages">
    <div class="advantages__container">
      <div class="advantages__header">
        <div class="advantages__eyebrow">
          <svg
            class="advantages__eyebrow-icon"
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
            Що ти отримаєш
          </span>
        </div>

        <h2 class="advantages__title">
          Не просто сайт -
          <br>
          а нормальний результат
        </h2>

        <p class="advantages__subtitle">
          Продуманий сайт, який добре виглядає, зрозуміло працює
          і не створює проблем після запуску.
        </p>
      </div>

      <div class="advantages__grid">
        <article
          class="
            advantages__card
            advantages__card--adaptive
          "
        >
          <span class="advantages__number">
            01
          </span>

          <h3 class="advantages__card-title">
            Добре виглядає всюди
          </h3>

          <p class="advantages__description">
            Сайт адаптується під телефон, планшет і великий екран,
            щоб клієнту було зручно незалежно від пристрою.
          </p>

          <div
            class="advantages__devices"
            aria-hidden="true"
          >
            <span
              class="
                advantages__device
                advantages__device--phone
              "
            />

            <span
              class="
                advantages__device
                advantages__device--tablet
              "
            />

            <span
              class="
                advantages__device
                advantages__device--desktop
              "
            />
          </div>
        </article>

        <article
          class="
            advantages__card
            advantages__card--interface
          "
        >
          <span class="advantages__number">
            02
          </span>

          <h3 class="advantages__card-title">
            Зрозуміло для клієнта
          </h3>

          <p class="advantages__description">
            Без хаосу й зайвих блоків. Людина швидко розуміє,
            хто ти, що пропонуєш і куди натиснути далі.
          </p>
        </article>

        <article
          class="
            advantages__card
            advantages__card--speed
          "
        >
          <span class="advantages__number">
            03
          </span>

          <h3 class="advantages__card-title">
            Без зайвого очікування
          </h3>

          <p class="advantages__description">
            Оптимізую зображення, код і основні ресурси,
            щоб сайт завантажувався швидко й не дратував відвідувачів.
          </p>
        </article>

        <article
          class="
            advantages__card
            advantages__card--support
          "
        >
          <span class="advantages__number">
            04
          </span>

          <h3 class="advantages__card-title">
            Не зникаю після запуску
          </h3>

          <p class="advantages__description">
            Якщо після публікації потрібно щось поправити,
            оновити або пояснити - залишаюсь на зв’язку.
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
    padding: 104px 0 112px;
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
    max-width: 700px;
    margin-bottom: 48px;

    @include breakpoint($tablet) {
      margin-bottom: 56px;
    }

    @include breakpoint($tabletLandscape) {
      margin-bottom: 64px;
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
    margin: 0;
    letter-spacing: -1.4px;

    @include font(34px, 1.08, $mainFontName, $text-light, 700);

    @include breakpoint($mobile) {
      font-size: 38px;
    }

    @include breakpoint($tablet) {
      font-size: 46px;
    }
  }

  &__subtitle {
    max-width: 560px;
    margin: 20px 0 0;

    @include font(15px, 1.7, $mainFontName, $text-muted, 400);

    @include breakpoint($tablet) {
      font-size: 16px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    overflow: hidden;
    background-color: $primary-bg;
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
    border-bottom: 1px solid rgba($text-light, 0.14);
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease;

    &:last-child {
      border-bottom: 0;
    }

    @include breakpoint($tablet) {
      min-height: 270px;
      padding: 38px 32px;
      border-bottom: 1px solid rgba($text-light, 0.14);
      border-right: 0;
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
        border-bottom: 1px solid rgba($text-light, 0.14);
      }

      @include breakpoint($tabletLandscape) {
        grid-column: span 4;
        min-height: 402px;
        padding: 54px 48px 48px;
        border-right: 1px solid rgba($text-light, 0.14);
        border-bottom: 1px solid rgba($text-light, 0.14);
      }
    }

    &--interface {
      @include breakpoint($tablet) {
        border-right: 1px solid rgba($text-light, 0.14);
        border-bottom: 1px solid rgba($text-light, 0.14);
      }

      @include breakpoint($tabletLandscape) {
        grid-column: span 2;
        min-height: 402px;
        padding: 54px 40px;
        border-right: 0;
        border-bottom: 1px solid rgba($text-light, 0.14);
      }
    }

    &--speed {
      @include breakpoint($tablet) {
        border-bottom: 1px solid rgba($text-light, 0.14);
      }

      @include breakpoint($tabletLandscape) {
        grid-column: span 3;
        border-right: 1px solid rgba($text-light, 0.14);
        border-bottom: 0;
      }
    }

    &--support {
      @include breakpoint($tablet) {
        grid-column: 1 / -1;
        border-bottom: 0;
      }

      @include breakpoint($tabletLandscape) {
        grid-column: span 3;
        border-bottom: 0;
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
    gap: 12px;

    @include flex(flex-start, flex-end);

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