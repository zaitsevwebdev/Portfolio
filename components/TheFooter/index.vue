<template>
  <footer class="footer">
    <div class="footer__container">

      <div class="footer__info">
        <h3 class="footer__name">Alexander Zaitsev</h3>
        <p class="footer__desc">Створюю прості та зрозумілі сайти для малого бізнесу</p>
      </div>

      <div class="footer__nav">
        <h4 class="footer__title">Навігація:</h4>
        <ul class="footer__links">
          <li><a href="#advantages" class="footer__link">Що ви отримаєте?</a></li>
          <li><a href="#portfolio" class="footer__link">Кейси</a></li>
          <li><a href="#workflow" class="footer__link">Як я працюю</a></li>
          <li><a href="#about" class="footer__link">Про мене</a></li>
        </ul>
      </div>

      <div class="footer__contacts">
        <h4 class="footer__title">Контакти:</h4>
        <div class="footer__contacts-data">
          <a href="https://t.me/zaitsev_oleksandr" target="_blank" class="footer__link">Telegram: @zaitsev_oleksandr</a>
          <a href="mailto:szaitsev000@gmail.com" class="footer__link">Email: szaitsev000@gmail.com</a>
        </div>
      </div>

    </div>

    <div class="footer__copyright">
      © 2026 Олександр Зайцев
    </div>
  </footer>
</template>

<style lang="scss">
  .footer {
    background-color: #1a1a1a;
    padding-top: 48px;
    padding-bottom: 24px;
    border-top: 1px solid #333333;

    &__container {
      max-width: 1440px;
      width: 100%;
      margin: 0 auto;
      padding-left: 24px;
      padding-right: 24px;
      box-sizing: border-box;

      @include flex(flex-start, flex-start);
      flex-direction: column;
      gap: 24px;

      @include breakpoint($tabletLandscape) {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 32px;
      }
    }

    &__desc, &__links, &__contacts-data, &__title {
      @include font(14px, 1.2, $mainFontName, #E0E0E0, 600);
    }

    &__info {
      max-width: 263px;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      gap: 14px;
    }

    &__name {
      @include font(24px, 1.2, $mainFontName, #E0E0E0, 600);
      margin: 0;
    }

    &__title {
      margin-top: 0;
      margin-bottom: 14px;
    }

    &__nav {
      @include flex(flex-start, flex-start);
      flex-direction: column;
    }

    &__links {
      list-style: none;
      padding: 0;
      margin: 0;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      gap: 8px;
    }

    &__contacts {
      @include flex(flex-start, flex-start);
      flex-direction: column;
    }

    &__contacts-data {
      @include flex(flex-start, flex-start);
      flex-direction: column;
      gap: 8px;
    }

    &__link {
      color: inherit;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: #2EC4B6;
      }
    }

    &__copyright {
      @include font(14px, 1.2, $mainFontName, #AFAFAF, 600);
      @include flexCenter();
      padding-top: 24px;
      border-top: 1px solid #2d2d2d;
      text-align: center;
      width: 100%;
      margin-top: 32px;

      @include breakpoint($tabletLandscape) {
        margin-top: 48px;
      }
    }
  }
</style>
