<template>
  <section id="advantages" class="advantages">
    <div class="advantages__container">
      <h2 class="advantages__main-title">Що ви отримаєте</h2>
      <div class="advantages__grid">

        <div class="advantages__card">
          <div class="advantages__card-header">
            <h3 class="advantages__card-title">Швидкість</h3>
            <div class="advantages__badge">1</div>
          </div>
          <ul class="advantages__list">
            <li class="advantages__item">Сайт швидко завантажується та не змушує клієнта чекати.</li>
            <li class="advantages__item">Все працює стабільно як на комп’ютері, так і на телефоні.</li>
          </ul>
        </div>

        <div class="advantages__card">
          <div class="advantages__card-header">
            <h3 class="advantages__card-title">Зручність</h3>
            <div class="advantages__badge">2</div>
          </div>
          <ul class="advantages__list">
            <li class="advantages__item">Проста структура та зрозуміла навігація, щоб клієнт легко знайшов потрібну інформацію.</li>
            <li class="advantages__item">Особлива увага до мобільної версії.</li>
          </ul>
        </div>

        <div class="advantages__card">
          <div class="advantages__card-header">
            <h3 class="advantages__card-title">Результат</h3>
            <div class="advantages__badge">3</div>
          </div>
          <ul class="advantages__list">
            <li class="advantages__item">Сайт допомагає клієнтам залишити заявку або зв’язатися з вами.</li>
            <li class="advantages__item">Без зайвих елементів — тільки те, що працює.</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .advantages {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #121212;

    @include breakpoint($tabletLandscape) {
      padding-top: 100px;
      padding-bottom: 100px;
    }

    &__container {
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
      padding-left: 24px;
      padding-right: 24px;
      box-sizing: border-box;
    }

    &__main-title {
      @include font(28px, 1.2, $mainFontName, #E0E0E0, 700);
      margin: 0 0 32px 0;
      text-align: center;

      @include breakpoint($tabletLandscape) {
        font-size: 36px;
        margin-bottom: 48px;
      }
    }

    &__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;

      @include breakpoint($tabletSmall) {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }

      @include breakpoint($tabletLandscape) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    &__card {
      background: #2A2A2A;
      border-radius: 12px;
      padding: 24px;
      box-sizing: border-box;
      @include flex(space-between, flex-start);
      flex-direction: column;
      height: auto;
      min-height: 220px;
      gap: 20px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      @include breakpoint($tabletLandscape) {
        height: 260px;
        min-height: auto;
        gap: 0;
      }

      &--featured, &:hover {
        transform: translateY(-4px);
        box-shadow: 0px 0px 20px #333333;
        border: 1px solid rgba(46, 196, 182, 0.2);
      }
    }

    &__card-header {
      width: 100%;
      @include flex(space-between, center);
    }

    &__card-title {
      @include font(24px, 1.2, $mainFontName, #2EC4B6, 700);
      margin: 0;
    }

    &__badge {
      width: 30px;
      height: 30px;
      background: #2EC4B6;
      border-radius: 50%;
      @include flexCenter();
      @include font(14px, 1.2, $mainFontName, #121212, 700);
      flex-shrink: 0;
    }

    &__list {
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      gap: 14px;
    }

    &__item {
      @include font(16px, 1.3, $mainFontName, #E0E0E0, 600);

      &:not(:last-child) {
        padding-bottom: 4px;
      }

      @include breakpoint($tabletLandscape) {
        font-size: 18px;
      }
    }
  }
</style>
