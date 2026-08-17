<template>
  <section id="contacts" class="contact">
    <div class="contact__container">
      <div class="contact__info">
        <div class="contact__eyebrow">
          <svg
            class="contact__eyebrow-icon"
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
            Поговоримо про твій проєкт
          </span>
        </div>

        <h2 class="contact__title">
          Є ідея?
          <br>
          Давай її
          <br>
          реалізуємо.
        </h2>

        <p class="contact__subtitle">
          Розкажи коротко про свій бізнес або задачу.
          Я допоможу зрозуміти, який формат сайту підійде
          і з чого краще почати.
        </p>

        <div class="contact__links">
          <a
            href="https://t.me/zaitsev_oleksandr"
            class="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Telegram</span>

            <strong>
              @zaitsev_oleksandr
            </strong>
          </a>

          <a
            href="mailto:zaitsev.webdev@gmail.com"
            class="contact__link"
          >
            <span>Email</span>

            <strong>
              zaitsev.webdev@gmail.com
            </strong>
          </a>
        </div>
      </div>

      <form
        class="contact__form"
        action="https://formspree.io/f/xgojznav"
        method="POST"
      >
        <input
          type="hidden"
          name="_subject"
          value="Нова заявка із сайту Zaitsev.dev"
        >

        <div class="contact__fields">
          <div class="contact__field">
            <label
              for="name"
              class="contact__label"
            >
              Ім’я
            </label>

            <input
              id="name"
              v-model.trim="formData.name"
              class="contact__input"
              type="text"
              name="name"
              placeholder="Олександр"
              minlength="2"
              autocomplete="name"
              required
            >
          </div>

          <div class="contact__field">
            <label
              for="contact"
              class="contact__label"
            >
              Telegram або телефон
            </label>

            <input
              id="contact"
              v-model.trim="formData.contact"
              class="contact__input"
              type="text"
              name="contact"
              placeholder="@username або +380..."
              autocomplete="tel"
              required
            >
          </div>
        </div>

        <div class="contact__field">
          <label
            for="message"
            class="contact__label"
          >
            Про проєкт
          </label>

          <textarea
            id="message"
            v-model.trim="formData.message"
            class="contact__textarea"
            name="message"
            placeholder="Що потрібно зробити, для кого сайт і який результат хочеш отримати?"
            minlength="10"
            required
          />
        </div>

        <div class="contact__form-footer">
          <button
            type="submit"
            class="contact__submit"
          >
            Надіслати заявку
          </button>

          <span class="contact__note">
            Відповім найближчим часом
          </span>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
interface FormData {
  name: string
  contact: string
  message: string
}

const formData = reactive<FormData>({
  name: '',
  contact: '',
  message: ''
})
</script>

<style lang="scss">
.contact {
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
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;

    @include breakpoint($tablet) {
      padding-right: 32px;
      padding-left: 32px;
    }

    @include breakpoint($tabletLandscape) {
      grid-template-columns: minmax(300px, 0.75fr) minmax(0, 1.1fr);
      align-items: start;
      gap: 64px;
    }

    @include breakpoint($laptop) {
      padding-right: 0;
      padding-left: 0;
    }
  }

  &__info {
    min-width: 0;
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
    max-width: 460px;
    margin: 0 0 24px;
    letter-spacing: -1.8px;

    @include font(44px, 1.02, $mainFontName, $text-light, 700);

    @include breakpoint($tablet) {
      font-size: 52px;
      letter-spacing: -2.2px;
    }

    @include breakpoint($tabletLandscape) {
      font-size: 56px;
    }
  }

  &__subtitle {
    max-width: 420px;
    margin: 0;

    @include font(16px, 1.65, $mainFontName, $text-muted, 400);
  }

  &__links {
    margin-top: 42px;
    overflow: hidden;
    border: 1px solid rgba($text-light, 0.15);
    border-radius: 14px;

    @include breakpoint($tabletLandscape) {
      margin-top: 46px;
    }
  }

  &__link {
    min-height: 58px;
    padding: 0 20px;
    gap: 20px;
    text-decoration: none;
    transition:
      background-color 0.25s ease,
      color 0.25s ease;

    @include flex(space-between, center);

    &:not(:last-child) {
      border-bottom: 1px solid rgba($text-light, 0.12);
    }

    &:hover {
      background-color: rgba($card-bg, 0.25);

      strong {
        color: $color-accent;
      }
    }

    span {
      text-transform: uppercase;
      letter-spacing: 3px;

      @include font(10px, 1.2, monospace, $text-muted, 500);
    }

    strong {
      overflow-wrap: anywhere;
      text-align: right;
      transition: color 0.25s ease;

      @include font(13px, 1.3, $mainFontName, $text-light, 400);

      @include breakpoint($mobile) {
        font-size: 14px;
      }
    }
  }

  &__form {
    width: 100%;
    padding: 28px 20px;
    background-color: rgba($card-bg, 0.12);
    border: 1px solid rgba($text-light, 0.15);
    border-radius: 16px;
    box-sizing: border-box;

    @include breakpoint($mobile) {
      padding: 30px;
    }

    @include breakpoint($tabletLandscape) {
      padding: 36px;
    }
  }

  &__fields {
    display: grid;
    grid-template-columns: 1fr;
    gap: 22px;
    margin-bottom: 26px;

    @include breakpoint($tablet) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 24px;
    }
  }

  &__field {
    width: 100%;
    min-width: 0;

    &:not(:last-child) {
      margin-bottom: 26px;
    }
  }

  &__fields &__field {
    margin-bottom: 0;
  }

  &__label {
    display: block;
    margin-bottom: 10px;

    @include font(13px, 1.3, $mainFontName, $text-muted, 400);
  }

  &__input,
  &__textarea {
    width: 100%;
    color: $text-light;
    background-color: rgba($primary-bg, 0.35);
    border: 1px solid rgba($text-light, 0.16);
    border-radius: 10px;
    outline: none;
    box-sizing: border-box;
    transition:
      border-color 0.25s ease,
      box-shadow 0.25s ease,
      background-color 0.25s ease;

    @include font(15px, 1.5, $mainFontName, $text-light, 400);

    &::placeholder {
      color: rgba($text-muted, 0.7);
    }

    &:hover {
      border-color: rgba($text-light, 0.28);
    }

    &:focus {
      background-color: rgba($primary-bg, 0.55);
      border-color: $color-accent;
      box-shadow: 0 0 0 3px rgba($color-accent, 0.08);
    }
  }

  &__input {
    height: 50px;
    padding: 0 16px;
  }

  &__textarea {
    min-height: 220px;
    padding: 14px 16px;
    resize: vertical;

    @include breakpoint($tabletLandscape) {
      min-height: 310px;
    }
  }

  &__form-footer {
    gap: 24px;
    flex-wrap: wrap;

    @include flex(space-between, center);
  }

  &__submit {
    min-height: 48px;
    padding: 0 26px;
    color: $primary-bg;
    background-color: $color-accent;
    border: 1px solid $color-accent;
    border-radius: 999px;
    cursor: pointer;
    transition:
      color 0.25s ease,
      background-color 0.25s ease,
      transform 0.25s ease;

    @include font(14px, 1.2, $mainFontName, $primary-bg, 600);

    &:hover {
      color: $color-accent;
      background-color: transparent;
      transform: translateY(-2px);
    }
  }

  &__note {
    text-transform: uppercase;
    letter-spacing: 2px;

    @include font(9px, 1.4, monospace, $text-muted, 500);
  }
}
</style>