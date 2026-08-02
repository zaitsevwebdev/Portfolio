<template>
  <div class="cafe-mockup">
    <div class="cafe-mockup__header">
      <span>CAFE</span>

      <div class="cafe-mockup__navigation">
        <i />
        <i />
        <i />
      </div>
    </div>

    <div class="cafe-mockup__content">
      <div class="cafe-mockup__copy">
        <span />
        <span />
        <span />
        <span />
        <button type="button" tabindex="-1" />
      </div>

      <div class="cafe-mockup__cards">
        <div
          v-for="item in 4"
          :key="item"
          class="cafe-mockup__card"
        >
          <span />
          <i />
          <i />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cafe-mockup {
  min-height: 280px;
  padding: 28px;
  box-sizing: border-box;

  @include breakpoint($tablet) {
    min-height: 325px;
  }

  &__header {
    padding-bottom: 18px;
    border-bottom: 1px solid rgba($text-light, 0.12);
    @include flex(space-between, center);

    span {
      @include font(12px, 1, $mainFontName, $text-light, 500);
    }
  }

  &__navigation {
    gap: 14px;
    @include flex(flex-start, center);

    i {
      display: block;
      width: 30px;
      height: 4px;
      background-color: rgba($text-light, 0.2);
      border-radius: 4px;
    }
  }

  &__content {
    padding-top: 24px;
    gap: 24px;
    @include flex(space-between, stretch);
  }

  &__copy {
    width: 52%;
    gap: 10px;
    @include flex(flex-start, stretch);
    flex-direction: column;

    span {
      display: block;
      height: 6px;
      background-color: rgba($text-light, 0.22);
      border-radius: 4px;

      &:first-child {
        width: 85%;
        height: 12px;
        background-color: rgba($text-light, 0.85);
      }

      &:nth-child(2) {
        width: 65%;
        height: 11px;
        margin-bottom: 12px;
        background-color: rgba($text-light, 0.55);
      }

      &:nth-child(4) {
        width: 80%;
      }
    }

    button {
      width: 128px;
      height: 32px;
      margin-top: 12px;
      padding: 0;
      pointer-events: none;
      background-color: rgba($color-accent, 0.85);
      border: 0;
      border-radius: 999px;
    }
  }

  &__cards {
    width: 44%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  &__card {
    padding: 12px;
    border: 1px solid rgba($text-light, 0.14);
    border-radius: 10px;

    span {
      display: block;
      height: 40px;
      margin-bottom: 10px;
      background-color: rgba($text-light, 0.08);
      border-radius: 4px;
    }

    i {
      display: block;
      width: 70%;
      height: 5px;
      margin-top: 7px;
      background-color: rgba($text-light, 0.2);
      border-radius: 4px;

      &:last-child {
        width: 35%;
        background-color: rgba($color-accent, 0.7);
      }
    }
  }
}
</style>