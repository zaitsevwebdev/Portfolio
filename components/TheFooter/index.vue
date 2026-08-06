<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__main">
        <div class="footer__brand">
          <a
            href="/"
            class="footer__logo"
          >
            Zaitsev<span>.webdev</span>
          </a>

          <p class="footer__description">
            Прості та зрозумілі сайти для малого бізнесу —
            від структури до запуску.
          </p>
        </div>

        <nav
          class="footer__navigation"
          aria-label="Навігація у футері"
        >
          <h3 class="footer__heading">
            Навігація
          </h3>

          <ul class="footer__links">
            <li>
              <a href="/#main" class="footer__link">
                Головна
              </a>
            </li>

            <li>
              <a href="/#projects" class="footer__link">
                Проєкти
              </a>
            </li>

            <li>
              <a href="/#about" class="footer__link">
                Про мене
              </a>
            </li>

            <li>
              <a href="/#contacts" class="footer__link">
                Контакти
              </a>
            </li>
          </ul>
        </nav>

        <div class="footer__contacts">
          <h3 class="footer__heading">
            Контакти
          </h3>

          <div class="footer__contact-list">
            <a
              href="https://t.me/zaitsev_oleksandr"
              class="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>

            <a
              href="mailto:zaitsev.webdev@gmail.com"
              class="footer__link"
            >
              zaitsev.webdev@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>
          © {{ currentYear }} Олександр Зайцев
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style lang="scss">
.footer {
  background-color: $primary-bg;
  border-top: 1px solid rgba($text-light, 0.1);

  &__container {
    width: 100%;
  }

  &__main {
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 60px 20px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;

    @include breakpoint($tablet) {
      padding-right: 32px;
      padding-left: 32px;
      grid-template-columns: 1.5fr 1fr 1fr;
      gap: 60px;
    }

    @include breakpoint($tabletLandscape) {
      padding-top: 64px;
      padding-bottom: 58px;
      grid-template-columns: minmax(0, 1.8fr) 0.85fr 1fr;
      gap: 100px;
    }

    @include breakpoint($laptop) {
      padding-right: 0;
      padding-left: 0;
    }
  }

  &__brand {
    max-width: 330px;
  }

  &__logo {
    display: inline-block;
    margin-bottom: 22px;
    text-decoration: none;

    @include font(
      17px,
      1,
      $mainFontName,
      $text-light,
      700
    );

    span {
      color: $color-accent;
    }
  }

  &__description {
    max-width: 310px;
    margin: 0;

    @include font(
      14px,
      1.65,
      $mainFontName,
      $text-muted,
      400
    );
  }

  &__navigation {
    min-width: 0;
  }

  &__heading {
    margin: 0 0 22px;
    text-transform: uppercase;
    letter-spacing: 4px;

    @include font(
      10px,
      1.3,
      monospace,
      $text-muted,
      500
    );
  }

  &__links {
    margin: 0;
    padding: 0;
    gap: 16px;
    list-style: none;
    flex-direction: column;
    @include flex(flex-start, flex-start);

    li {
      margin: 0;
      padding: 0;
    }
  }

  &__contacts {
    min-width: 0;
  }

  &__contact-list {
    gap: 16px;
    flex-direction: column;
    @include flex(flex-start, flex-start);
  }

  &__link {
    position: relative;
    display: inline-block;
    text-decoration: none;
    transition:
      color 0.25s ease,
      transform 0.25s ease;

    @include font(
      14px,
      1.3,
      $mainFontName,
      $text-light,
      400
    );

    &:hover {
      color: $color-accent;
      transform: translateX(3px);
    }
  }

  &__bottom {
    width: 100%;
    border-top: 1px solid rgba($text-light, 0.1);

    p {
      width: 100%;
      max-width: 1180px;
      margin: 0 auto;
      padding: 24px 20px;
      box-sizing: border-box;
      letter-spacing: 0.4px;

      @include font(
        11px,
        1.3,
        monospace,
        $text-muted,
        400
      );

      @include breakpoint($tablet) {
        padding-right: 32px;
        padding-left: 32px;
      }

      @include breakpoint($laptop) {
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
}
</style>