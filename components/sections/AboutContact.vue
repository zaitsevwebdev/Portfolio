<template>
  <section id="about-contact" class="about-contact">
    <div class="about-contact__container">

      <div id="about" class="about-contact__info">
        <h2 class="about-contact__title">Про мене</h2>
        <div class="about-contact__bio">
          <p>Я Олександр, Frontend Developer з Києва.</p>
          <p>Працюю з малим бізнесом та допомагаю створювати прості та зрозумілі сайти, які зручно використовувати клієнтам.</p>
          <p>Фокусуюсь на простих рішеннях, які дозволяють швидко запустити сайт та отримати перші заявки.</p>
        </div>
      </div>

      <div id="contacts" class="about-contact__block">
        <div class="about-contact__block-form">


        <h3 class="about-contact__form-title">Обговоримо ваш проєкт</h3>
        <p class="about-contact__form-subtitle">Залиште заявку або напишіть мені — відповім найближчим часом</p>

        <form
            action="https://formspree.io/f/xgojznav"
            method="POST"
            class="about-contact__form"
        >
          <div class="about-contact__field">
            <label for="name" class="about-contact__label">Ім’я</label>
            <input
                id="name"
                name="name"
                v-model="formData.name"
                type="text"
                required
                class="about-contact__input"
            />
          </div>

          <div class="about-contact__field">
            <label for="contact" class="about-contact__label">Контакт (Telegram / телефон)</label>
            <input
                id="contact"
                name="contact"
                v-model="formData.contact"
                type="text"
                required
                class="about-contact__input"
            />
          </div>

          <div class="about-contact__field">
            <label for="message" class="about-contact__label">Коротко про задачу</label>
            <textarea
                id="message"
                name="message"
                v-model="formData.message"
                required
                class="about-contact__textarea"
            ></textarea>
          </div>

          <button type="submit" class="about-contact__submit-btn">
            Надіслати заявку
          </button>

          <p class="about-contact__direct-link">
            Або напишіть одразу:<br />
            <a href="https://t.me/zaitsev_oleksandr" target="_blank">Telegram: @zaitsev_oleksandr</a>
          </p>
        </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
  const formData = reactive({
    name: '',
    contact: '',
    message: ''
  })
</script>

<style lang="scss">
  .about-contact {
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
      @include flex(flex-start, flex-start);
      flex-direction: column;
      gap: 60px;

      @include breakpoint($tabletLandscape) {
        flex-direction: row;
        justify-content: space-between;
        gap: 48px;
      }
    }

    &__info {
      width: 100%;

      @include breakpoint($tabletLandscape) {
        flex: 1;
        max-width: 568px;
      }
    }

    &__title {
      @include font(28px, 1.2, $mainFontName, #E0E0E0, 600);
      margin: 0 0 24px 0;

      @include breakpoint($tabletLandscape) {
        font-size: 36px;
      }
    }

    &__bio {
      @include font(18px, 1.2, $mainFontName, #FFFFFF, 400);
      @include flex(flex-start, flex-start);

      flex-direction: column;
      gap: 20px;

      p {
        margin: 0;
      }

      @include breakpoint($tabletLandscape) {
        font-size: 24px;
      }
    }

    &__block {
      width: 100%;

      @include breakpoint($tabletLandscape) {
        flex: 1;
        @include flex(center, center);
      }
    }

    &__block-form {
      width: 100%;
      max-width: 450px;
      margin: 0 auto;
      background: #2A2A2A;
      border-radius: 12px;
      padding: 24px;
      box-sizing: border-box;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      gap: 9px;

      @include breakpoint($tabletLandscape) {
        width: 450px;
        max-width: none;
        margin: 0;
      }
    }

    &__form-title {
      @include font(24px, 1.2, $mainFontName, #E0E0E0, 600);
      margin: 0;
    }

    &__form-subtitle {
      @include font(16px, 1.2, $mainFontName, #AFAFAF, 600);
      margin: 0 0 10px 0;
    }

    &__form {
      width: 100%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      gap: 14px;
    }

    &__field {
      width: 100%;
      @include flex(flex-start, flex-start);
      flex-direction: column;
      gap: 6px;
    }

    &__label {
      @include font(14px, 1.2, $mainFontName, #E0E0E0, 500);
    }

    &__input {
      width: 100%;
      height: 50px;
      background: #FFFFFF;
      border-radius: 8px;
      border: none;
      padding: 0 16px;
      box-sizing: border-box;
      @include font(16px, 1.2, $mainFontName, #121212, 500);
      outline: none;

      &:focus {
        box-shadow: 0px 0px 0px 2px #2EC4B6;
      }
    }

    &__textarea {
      width: 100%;
      height: 100px;
      background: #FFFFFF;
      border-radius: 8px;
      border: none;
      padding: 12px 16px;
      box-sizing: border-box;
      @include font(16px, 1.2, $mainFontName, #121212, 500);
      resize: none;
      outline: none;

      &:focus {
        box-shadow: 0px 0px 0px 2px #2EC4B6;
      }
    }

    &__submit-btn {
      width: 100%;
      height: 50px;
      background: #2EC4B6;
      border-radius: 8px;
      border: 1px solid #2EC4B6;
      @include flexCenter();
      @include font(14px, 1.2, $mainFontName, #121212, 600);
      cursor: pointer;
      transition: all 0.25s ease;
      margin-top: 10px;

      &:hover {
        background: transparent;
        color: #2EC4B6;
      }
    }

    &__direct-link {
      @include font(14px, 1.2, $mainFontName, #AFAFAF, 600);
      margin: 8px 0 0 0;

      a {
        color: #2EC4B6;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
