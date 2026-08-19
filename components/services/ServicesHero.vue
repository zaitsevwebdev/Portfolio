<template>
  <section class="services-hero">
    <div class="services-hero__container">
      <NuxtLink
        to="/"
        class="services-hero__back"
      >
        ← На головну
      </NuxtLink>

      <div class="services-hero__heading">
        <div>
          <div class="services-hero__eyebrow">
            <svg
              class="services-hero__eyebrow-icon"
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
              Послуги та ціни
            </span>
          </div>

          <h1 class="services-hero__title">
            Знайдемо формат
            <br>
            під твою задачу
          </h1>
        </div>

        <p class="services-hero__intro">
          Від компактної онлайн-візитки до складнішого сайту
          для бізнесу. Якщо не знаєш, що саме потрібно -
          розберемо задачу разом і підберемо рішення без зайвого.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.services-hero {
  padding-top: 40px;
  padding-bottom: 72px;
  background-color: $primary-bg;
  border-bottom: 1px solid rgba($text-light, 0.1);

  @include breakpoint($tablet) {
    padding-top: 48px;
    padding-bottom: 88px;
  }

  @include breakpoint($tabletLandscape) {
    padding-top: 56px;
    padding-bottom: 104px;
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

  &__back {
    display: inline-block;
    margin-bottom: 64px;
    text-decoration: none;
    transition:
      color 0.25s ease,
      transform 0.25s ease;

    @include font(13px, 1.2, $mainFontName, $text-muted, 500);

    @include breakpoint($tablet) {
      margin-bottom: 88px;
    }

    &:hover {
      color: $color-accent;
      transform: translateX(-3px);
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
    letter-spacing: -2px;

    @include font(40px, 1, $mainFontName, $text-light, 700);

    @include breakpoint($mobile) {
      font-size: 46px;
    }

    @include breakpoint($tablet) {
      font-size: 58px;
    }

    @include breakpoint($tabletLandscape) {
      font-size: 64px;
    }
  }

  &__intro {
    max-width: 420px;
    margin: 0;

    @include font(15px, 1.7, $mainFontName, $text-muted, 400);

    @include breakpoint($tablet) {
      font-size: 16px;
    }
  }
}
</style>