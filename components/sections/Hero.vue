<template>
  <section class="hero">
    <div class="hero__container">

      <div class="hero__content">
        <span class="hero__greeting">Привіт, я Олександр 👋🏻</span>
        <h1 class="hero__title">Frontend Developer</h1>

        <div class="hero__description-wrapper">
          <p class="hero__description">
            Створюю сайти для малого бізнесу, які допомагають представити послуги та отримувати перші заявки.
            Працюю з нішами:
          </p>
          <div class="hero__ticker">
            <div class="hero__ticker-inner">
              <div class="hero__ticker-item">кав’ярень</div>
              <div class="hero__ticker-item">барбершопів</div>
              <div class="hero__ticker-item">локальних сервісів</div>
              <div class="hero__ticker-item">салонів краси</div>
              <div class="hero__ticker-item">кав’ярень</div>
            </div>
          </div>
        </div>

        <div class="hero__actions">
          <a href="#contacts" class="hero__btn hero__btn--primary">Зв’язатися</a>
          <a href="#portfolio" class="hero__btn hero__btn--secondary">Мої роботи</a>
        </div>
      </div>

      <div class="hero__graphic">
        <div class="hero__sphere hero__sphere--outer">
          <div class="hero__tech-tag hero__tech-tag--nuxt">Nuxt</div>
          <div class="hero__tech-tag hero__tech-tag--ts">TS</div>

          <div class="hero__sphere hero__sphere--middle">
            <div class="hero__tech-tag hero__tech-tag--vue">Vue</div>
            <div class="hero__tech-tag hero__tech-tag--scss">SCSS</div>

            <div class="hero__sphere hero__sphere--inner">
              <div class="hero__center-core">⚡</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss">
  .hero {
    display: flex;
    align-items: center;
    min-height: calc(100vh - 80px);
    padding-top: 48px;
    padding-bottom: 48px;
    overflow: hidden;
    background-color: #121212;

    @include breakpoint($tabletLandscape) {
      padding-top: 40px;
      padding-bottom: 80px;
    }

    &__container {
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
      padding-left: 24px;
      padding-right: 24px;
      box-sizing: border-box;
      @include flex(flex-start, center);
      flex-direction: column-reverse;
      gap: 64px;
      text-align: center;

      @include breakpoint($tabletLandscape) {
        flex-direction: row;
        justify-content: space-between;
        gap: 48px;
        text-align: left;
      }
    }

    &__content {
      width: 100%;
      @include flex(flex-start, center);
      flex-direction: column;

      @include breakpoint($tabletLandscape) {
        max-width: 610px;
        align-items: flex-start;
      }
    }

    &__greeting {
      @include font(18px, 1.2, $mainFontName, #E0E0E0, 500);
      margin-bottom: 16px;

      @include breakpoint($tabletLandscape) {
        font-size: 24px;
      }
    }

    &__title {
      @include font(36px, 1.2, $mainFontName, #2EC4B6, 900);
      margin: 0 0 24px 0;

      @include breakpoint($tabletLandscape) {
        font-size: 64px;
      }
    }

    &__description-wrapper {
      @include flex(center, flex-start);
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 32px;

      @include breakpoint($tabletLandscape) {
        justify-content: flex-start;
      }
    }

    &__description {
      @include font(16px, 1.3, $mainFontName, #E0E0E0, 500);
      margin: 0;
      display: inline;

      @include breakpoint($tabletLandscape) {
        font-size: 24px;
      }
    }

    &__ticker {
      display: inline-block;
      overflow: hidden;
      position: relative;
      vertical-align: bottom;
      height: 21px;
      width: 100%;

      @include breakpoint($tabletLandscape) {
        height: 31px;
        width: auto;
      }
    }

    &__ticker-inner {
      display: flex;
      flex-direction: column;
      animation: tickerMoveMobile 12s cubic-bezier(0.76, 0, 0.24, 1) infinite;

      @include breakpoint($tabletLandscape) {
        animation-name: tickerMoveDesktop;
      }
    }

    &__ticker-item {
      white-space: nowrap;
      @include font(16px, 1.3, $mainFontName, #2EC4B6, 700);
      height: 21px;

      @include breakpoint($tabletLandscape) {
        font-size: 24px;
        height: 31px;
      }
    }

    &__actions {
      @include flex(flex-start, center);
      flex-direction: column;
      gap: 16px;
      width: 100%;

      @include breakpoint($tabletLandscape) {
        flex-direction: row;
        width: auto;
      }
    }

    &__btn {
      height: 50px;
      padding: 0 24px;
      border-radius: 8px;
      text-decoration: none;
      @include flexCenter();
      @include font(14px, 1.2, $mainFontName, inherit, 600);
      transition: all 0.25s ease;
      cursor: pointer;
      width: 100%;

      @include breakpoint($tabletLandscape) {
        width: auto;
      }

      &--primary {
        background-color: #2EC4B6;
        color: #121212;
        border: 1px solid #2EC4B6;
        &:hover { background-color: transparent; color: #2EC4B6; }
      }
      &--secondary {
        background-color: transparent;
        color: #2EC4B6;
        border: 1px solid #2EC4B6;
        &:hover { background-color: #2EC4B6; color: #121212; }
      }
    }

    &__graphic {
      @include flexCenter();
      flex-shrink: 0;
      position: relative;
      width: 280px;
      height: 280px;

      @include breakpoint($tabletLandscape) {
        width: 440px;
        height: 440px;
      }
    }

    &__sphere {
      border-radius: 50%;
      @include flexCenter();
      box-sizing: border-box;
      position: relative;

      &--outer {
        width: 260px;
        height: 260px;
        border: 1px dashed rgba(46, 196, 182, 0.4);
        animation: rotateSphere 25s linear infinite;

        @include breakpoint($tabletLandscape) {
          width: 400px;
          height: 400px;
        }
      }
      &--middle {
        width: 180px;
        height: 180px;
        border: 1px dashed rgba(255, 255, 255, 0.15);
        animation: rotateSphereCounter 15s linear infinite;

        @include breakpoint($tabletLandscape) {
          width: 280px;
          height: 280px;
        }
      }
      &--inner {
        width: 90px;
        height: 90px;
        border: 1px solid rgba(46, 196, 182, 0.2);
        background: rgba(42, 42, 42, 0.4);
        backdrop-filter: blur(4px);
        box-shadow: inset 0 0 20px rgba(46, 196, 182, 0.1);

        @include breakpoint($tabletLandscape) {
          width: 140px;
          height: 140px;
        }
      }
    }

    &__center-core {
      font-size: 32px;
      animation: pulseCore 2s ease-in-out infinite;

      @include breakpoint($tabletLandscape) {
        font-size: 42px;
      }
    }

    &__tech-tag {
      position: absolute;
      background: #2A2A2A;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      padding: 4px 10px;
      @include font(12px, 1.2, $mainFontName, #E0E0E0, 700);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.4);
      animation: floatTag 3s ease-in-out infinite;

      @include breakpoint($tabletLandscape) {
        font-size: 14px;
        padding: 6px 14px;
      }

      &--nuxt { top: -15px; left: calc(50% - 30px); border-color: #00DC82; color: #00DC82; animation-delay: 0s; }
      &--ts { bottom: -15px; left: calc(50% - 20px); border-color: #3178C6; color: #3178C6; animation-delay: 0.5s; }
      &--vue { top: calc(50% - 15px); left: -25px; border-color: #42B883; color: #42B883; animation-delay: 1s; }
      &--scss { top: calc(50% - 15px); right: -25px; border-color: #CF649A; color: #CF649A; animation-delay: 1.5s; }
    }
  }

  @keyframes tickerMoveMobile {
    0%, 20% { transform: translateY(0); }
    23%, 43% { transform: translateY(-21px); }
    46%, 66% { transform: translateY(-42px); }
    69%, 89% { transform: translateY(-63px); }
    92%, 98% { transform: translateY(-84px); }
    100% { transform: translateY(0); }
  }

  @keyframes tickerMoveDesktop {
    0%, 20% { transform: translateY(0); }
    23%, 43% { transform: translateY(-31px); }
    46%, 66% { transform: translateY(-62px); }
    69%, 89% { transform: translateY(-93px); }
    92%, 98% { transform: translateY(-124px); }
    100% { transform: translateY(0); }
  }

  @keyframes rotateSphere { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes rotateSphereCounter { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
  @keyframes floatTag { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-6px) scale(1.03); } }
  @keyframes pulseCore { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.1); opacity: 1; filter: drop-shadow(0 0 8px #2EC4B6); } }
</style>