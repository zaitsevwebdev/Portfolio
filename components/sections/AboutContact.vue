<template>
  <section id="contacts" class="contact">
    <div class="contact__container">
      <div class="contact__info">
        <h2 class="contact__title">
          Обговоримо ваш проєкт
        </h2>

        <p class="contact__subtitle">
          Залиште заявку або напишіть мені — відповім найближчим часом.
        </p>

        <div class="contact__links">
          <a
            href="https://t.me/zaitsev_oleksandr"
            class="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Telegram</span>
            <strong>@zaitsev_oleksandr</strong>
          </a>

          <a
            href="mailto:zaitsev.webdev@gmail.com"
            class="contact__link"
          >
            <span>Email</span>
            <strong>zaitsev.webdev@gmail.com</strong>
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
            Повідомлення
          </label>

          <textarea
            id="message"
            v-model.trim="formData.message"
            class="contact__textarea"
            name="message"
            placeholder="Коротко розкажіть про задачу, терміни та бажаний результат"
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
    padding: 96px 0 108px;
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

  &__title {
    max-width: 440px;
    margin: 0 0 20px;
    letter-spacing: -1.8px;

    @include font(
      42px,
      1.04,
      $mainFontName,
      $text-light,
      700
    );

    @include breakpoint($tablet) {
      font-size: 48px;
    }
  }

  &__subtitle {
    max-width: 400px;
    margin: 0;

    @include font(
      16px,
      1.6,
      $mainFontName,
      $text-muted,
      400
    );
  }

  &__links {
    margin-top: 40px;
    overflow: hidden;
    border: 1px solid rgba($text-light, 0.15);
    border-radius: 14px;

    @include breakpoint($tabletLandscape) {
      margin-top: 42px;
    }
  }

  &__link {
    min-height: 58px;
    padding: 0 20px;
    gap: 20px;
    text-decoration: none;
    transition: background-color 0.25s ease;

    @include flex(space-between, center);

    &:not(:last-child) {
      border-bottom: 1px solid rgba($text-light, 0.12);
    }

    &:hover {
      background-color: rgba($card-bg, 0.25);
    }

    span {
      text-transform: uppercase;
      letter-spacing: 3px;

      @include font(
        10px,
        1.2,
        monospace,
        $text-muted,
        500
      );
    }

    strong {
      overflow-wrap: anywhere;
      text-align: right;

      @include font(
        13px,
        1.3,
        $mainFontName,
        $text-light,
        400
      );

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

    @include font(
      13px,
      1.3,
      $mainFontName,
      $text-muted,
      400
    );
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
      box-shadow 0.25s ease;

    @include font(
      15px,
      1.5,
      $mainFontName,
      $text-light,
      400
    );

    &::placeholder {
      color: rgba($text-muted, 0.7);
    }

    &:hover {
      border-color: rgba($text-light, 0.28);
    }

    &:focus {
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
    @include flex(space-between, center);
    flex-wrap: wrap;
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

    @include font(
      14px,
      1.2,
      $mainFontName,
      $primary-bg,
      600
    );

    &:hover {
      color: $color-accent;
      background-color: transparent;
      transform: translateY(-2px);
    }
  }

  &__note {
    text-transform: uppercase;
    letter-spacing: 2px;

    @include font(
      9px,
      1.4,
      monospace,
      $text-muted,
      500
    );
  }
}
</style>