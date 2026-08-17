<template>
  <section id="main" class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <p class="hero__eyebrow">
          Frontend Developer
          <span>•</span>
          Kyiv, Ukraine
        </p>

        <h1 class="hero__title">
          Твій бізнес заслуговує на сайт,
          яким хочеться <span>пишатися.</span>
        </h1>

        <p class="hero__description">
          Я допомагаю малому бізнесу створювати своє місце в інтернеті —
          не схоже на десятки інших, а справді своє.

          Сайт, який зрозуміло показує твою цінність, викликає довіру
          і який не соромно показувати клієнтам.
        </p>

        <div class="hero__actions">
          <a
            href="#projects"
            class="hero__button hero__button--primary"
          >
            Переглянути проєкти
          </a>

          <NuxtLink
            to="/services"
            class="hero__button hero__button--secondary"
          >
            Дивитися ціни

            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 12L12 4M12 4H6M12 4V10"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NuxtLink>

          <a
            href="#contacts"
            class="hero__button hero__button--secondary"
          >
            Обговорити проєкт
          </a>
        </div>
      </div>

      <div class="hero__aside">
        <div class="hero__code-card">
          <div class="hero__code-header">
            <div class="hero__code-dots">
              <span />
              <span />
              <span />
            </div>

            <span class="hero__filename">
              profile.ts
            </span>
          </div>

          <div class="hero__code">
            <p>
              <span class="hero__code-keyword">const</span>
              developer = &#123;
            </p>

            <p>
              <span class="hero__code-property">name:</span>
              "Олександр Зайцев",
            </p>

            <p>
              <span class="hero__code-property">stack:</span>
              ["Vue", "Nuxt 3", "TS"],
            </p>

            <p>
              <span class="hero__code-property">focus:</span>
              "малий бізнес",
            </p>

            <p>
              <span class="hero__code-property">status:</span>
              <strong>"відкритий до проєктів"</strong>
            </p>

            <p>&#125;</p>
          </div>
        </div>

        <div class="hero__info">
          <div class="hero__info-item">
            <span>
              Фокус
            </span>

            <p>
              Vue / Nuxt
            </p>
          </div>

          <div class="hero__info-item">
            <span>
              Формат
            </span>

            <p>
              Сайти під ключ
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  position: relative;

  padding: 104px 0 64px;

  overflow: hidden;

  background-color: $primary-bg;

  border-bottom: 1px solid rgba($text-light, 0.1);

  box-sizing: border-box;

  @include breakpoint($tablet) {
    padding-top: 128px;
    padding-bottom: 80px;
  }

  @include breakpoint($tabletLandscape) {
    min-height: 968px;

    padding: 144px 32px 110px;
  }

  &::before {
    content: '';

    position: absolute;
    inset: 0;

    pointer-events: none;

    background-image:
      linear-gradient(
        rgba($text-light, 0.045) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba($text-light, 0.045) 1px,
        transparent 1px
      );

    background-size: 80px 80px;

    @include breakpoint($tabletLandscape) {
      background-size: 88px 88px;
    }
  }

  &__container {
    position: relative;
    z-index: 1;

    width: 100%;
    max-width: 1180px;

    margin: 0 auto;
    padding: 0 20px;

    box-sizing: border-box;

    flex-direction: column;
    gap: 64px;

    @include flex(flex-start, stretch);

    @include breakpoint($tablet) {
      padding-right: 32px;
      padding-left: 32px;
    }

    @include breakpoint($tabletLandscape) {
      display: grid;

      grid-template-columns:
        minmax(0, 1fr)
        365px;

      align-items: start;

      gap: 72px;

      padding-right: 0;
      padding-left: 0;
    }

    @include breakpoint($laptop) {
      grid-template-columns:
        minmax(0, 1fr)
        365px;

      gap: 100px;
    }
  }

  &__content {
    min-width: 0;

    @include breakpoint($tabletLandscape) {
      max-width: 700px;
    }
  }

  &__eyebrow {
    position: relative;

    margin: 0 0 34px;
    padding-left: 44px;

    text-transform: uppercase;
    letter-spacing: 4px;

    @include font(
      10px,
      1.4,
      $mainFontName,
      $color-accent,
      600
    );

    @include breakpoint($tablet) {
      font-size: 11px;
    }

    &::before {
      content: '';

      position: absolute;
      top: 50%;
      left: 0;

      width: 30px;
      height: 1px;

      background-color: $color-accent;

      transform: translateY(-50%);
    }

    span {
      margin: 0 7px;
    }
  }

  &__title {
    max-width: 720px;

    margin: 0;

    letter-spacing: -1.8px;

    @include font(
      42px,
      1.2,
      $mainFontName,
      $text-light,
      700
    );

    @include breakpoint($mobile) {
      font-size: 48px;
    }

    @include breakpoint($tablet) {
      font-size: 58px;
      letter-spacing: -2.5px;
    }

    @include breakpoint($tabletLandscape) {
      font-size: 64px;
      letter-spacing: -3.2px;
    }

    span {
      position: relative;

      display: table;

      color: $color-accent;

      &::after {
        content: '';

        position: absolute;
        right: 0;
        bottom: -5px;
        left: 0;

        height: 1px;

        background-color: rgba($color-accent, 0.55);
      }
    }
  }

  &__description {
    max-width: 590px;

    margin: 36px 0 0;

    @include font(
      16px,
      1.55,
      $mainFontName,
      $text-muted,
      400
    );

    @include breakpoint($tablet) {
      font-size: 17px;
    }
  }

  &__actions {
    margin-top: 38px;

    gap: 12px;
    flex-direction: column;

    @include flex(flex-start, stretch);

    @include breakpoint($mobile) {
      align-items: center;
      flex-direction: row;
    }
  }

  &__button {
    min-height: 48px;

    padding: 0 26px;

    gap: 7px;

    border: 1px solid transparent;
    border-radius: 999px;

    box-sizing: border-box;

    text-decoration: none;

    transition:
      color 0.25s ease,
      background-color 0.25s ease,
      border-color 0.25s ease,
      transform 0.25s ease;

    @include flex(center, center);

    @include font(
      14px,
      1.2,
      $mainFontName,
      inherit,
      500
    );

    svg {
      flex-shrink: 0;

      transition: transform 0.25s ease;
    }

    &:hover {
      transform: translateY(-2px);

      svg {
        transform: translate(2px, -2px);
      }
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

    &--secondary {
      color: $text-light;

      background-color: transparent;

      border-color: rgba($text-light, 0.2);

      &:hover {
        color: $color-accent;

        border-color: $color-accent;
      }
    }
  }

  &__aside {
    width: 100%;
    max-width: 520px;

    margin: 0 auto;

    @include breakpoint($tabletLandscape) {
      max-width: 365px;

      margin-top: 12px;
    }
  }

  &__code-card {
    padding: 28px 20px 24px;

    background:
      linear-gradient(
        145deg,
        rgba($card-bg, 0.5),
        rgba($primary-bg, 0.65)
      );

    border: 1px solid rgba($text-light, 0.14);
    border-radius: 14px;

    box-sizing: border-box;

    @include breakpoint($mobile) {
      padding: 30px 22px 26px;
    }
  }

  &__code-header {
    padding-bottom: 20px;

    gap: 14px;

    border-bottom: 1px solid rgba($text-light, 0.12);

    @include flex(flex-start, center);
  }

  &__code-dots {
    gap: 8px;

    @include flex(flex-start, center);

    span {
      width: 8px;
      height: 8px;

      background-color: rgba($text-light, 0.2);

      border-radius: 50%;

      &:last-child {
        background-color: rgba($color-accent, 0.7);
      }
    }
  }

  &__filename {
    letter-spacing: 0.4px;

    @include font(
      11px,
      1.2,
      monospace,
      $text-muted,
      400
    );
  }

  &__code {
    padding-top: 17px;

    overflow-x: auto;

    p {
      min-width: max-content;

      margin: 0 0 13px;

      white-space: nowrap;

      @include font(
        12px,
        1.35,
        monospace,
        $text-muted,
        400
      );

      &:first-child,
      &:last-child {
        padding-left: 0;
      }

      &:not(:first-child, :last-child) {
        padding-left: 16px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    strong {
      color: $text-light;

      font-weight: 400;
    }
  }

  &__code-keyword {
    color: $color-accent;
  }

  &__code-property {
    color: $text-muted;
  }

  &__info {
    display: grid;

    grid-template-columns: 1fr 1fr;

    margin-top: 24px;

    overflow: hidden;

    border: 1px solid rgba($text-light, 0.14);
    border-radius: 14px;
  }

  &__info-item {
    min-width: 0;

    padding: 22px 20px;

    @include breakpoint($mobile) {
      padding: 22px;
    }

    &:not(:last-child) {
      border-right: 1px solid rgba($text-light, 0.12);
    }

    span {
      display: block;

      margin-bottom: 12px;

      text-transform: uppercase;
      letter-spacing: 3px;

      @include font(
        9px,
        1.2,
        $mainFontName,
        $text-muted,
        500
      );
    }

    p {
      margin: 0;

      @include font(
        15px,
        1.3,
        $mainFontName,
        $text-light,
        400
      );

      @include breakpoint($mobile) {
        font-size: 16px;
      }
    }
  }
}
</style>