<template>
  <section id="portfolio" class="portfolio">
    <div class="portfolio__container">
      <div class="portfolio__header">
        <h2 class="portfolio__main-title">Мої роботи</h2>
        <p class="portfolio__subtitle">Приклади сайтів, які я створюю для малого бізнесу</p>
      </div>

      <div class="portfolio__grid">

        <div class="portfolio__card">
          <div class="portfolio__preview"><img src="" alt="" class="portfolio__img" /></div>
          <div class="portfolio__info">
            <h3 class="portfolio__card-title">Сайт для кав’ярні</h3>
            <p class="portfolio__card-desc">Простий лендинг з меню, контактами та кнопкою швидкого зв’язку</p>
            <a href="#" target="_blank" class="portfolio__btn">Переглянути</a>
          </div>
        </div>

        <div class="portfolio__card">
          <div class="portfolio__preview"><img src="" alt="" class="portfolio__img" /></div>
          <div class="portfolio__info">
            <h3 class="portfolio__card-title">Сайт для барбершопу (концепт)</h3>
            <p class="portfolio__card-desc">Зручний сайт для швидкого доступу до меню та контактів</p>
            <a href="#" target="_blank" class="portfolio__btn">Переглянути</a>
          </div>
        </div>

        <div class="portfolio__card">
          <div class="portfolio__preview"><img src="" alt="" class="portfolio__img" /></div>
          <div class="portfolio__info">
            <h3 class="portfolio__card-title">Сайт для сервісу</h3>
            <p class="portfolio__card-desc">Простий лендинг з меню, контактами та кнопкою зв’язку</p>
            <a href="#" target="_blank" class="portfolio__btn">Переглянути</a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .portfolio {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #121212;

    @include breakpoint($tabletLandscape) {
      padding-top: 100px;
      padding-bottom: 100px;
    }

    &__container {
      max-width: 1440px;
      width: 100%;
      margin: 0 auto;
      padding-left: 24px;
      padding-right: 24px;
      box-sizing: border-box;
    }

    &__header {
      text-align: center;
      margin-bottom: 32px;

      @include breakpoint($tabletLandscape) {
        margin-bottom: 48px;
      }
    }

    &__main-title {
      @include font(28px, 1.2, $mainFontName, #E0E0E0, 700);
      margin: 0 0 12px 0;

      @include breakpoint($tabletLandscape) {
        font-size: 36px;
      }
    }

    &__subtitle {
      @include font(15px, 1.2, $mainFontName, #AFAFAF, 500);
      margin: 0;

      @include breakpoint($tabletLandscape) {
        font-size: 18px;
      }
    }

    &__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;

      @include breakpoint($tabletLandscape) {
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }
    }

    &__card {
      background: #2A2A2A;
      border-radius: 12px;
      padding: 24px;
      box-sizing: border-box;
      @include flex(space-between, flex-start);
      flex-direction: column;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      height: auto;
      gap: 20px;

      @include breakpoint($tabletLandscape) {
        height: 380px;
        gap: 0;
      }

      &--featured, &:hover {
        transform: translateY(-4px);
        box-shadow: 0px 0px 20px #333333;
        border: 1px solid rgba(46, 196, 182, 0.15);
      }
    }

    &__preview {
      width: 100%;
      height: 160px;
      background: #FFFFFF;
      border-radius: 12px;
      overflow: hidden;
      @include flexCenter();
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    &__info {
      width: 100%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      flex-grow: 1;
      margin-top: 20px;
    }

    &__card-title {
      @include font(18px, 1.2, $mainFontName, #E0E0E0, 600);
      margin: 0 0 10px 0;
      min-height: 22px;
    }

    &__card-desc {
      @include font(14px, 1.2, $mainFontName, #E0E0E0, 600);
      margin: 0 0 20px 0;
      flex-grow: 1;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    &__btn {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      padding: 0 24px;
      background: #2EC4B6;
      border-radius: 8px;
      text-decoration: none;
      @include font(14px, 1.2, $mainFontName, #121212, 600);
      transition: all 0.25s ease;
      border: 1px solid #2EC4B6;
      cursor: pointer;
      width: 100%;

      @include breakpoint($tabletLandscape) {
        width: auto;
      }

      &:hover {
        background: transparent;
        color: #2EC4B6;
      }
    }
  }
</style>
