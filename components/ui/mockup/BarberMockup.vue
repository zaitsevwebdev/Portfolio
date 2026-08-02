<template>
  <div class="barber-mockup">
    <div class="barber-mockup__top">
      <div class="barber-mockup__copy">
        <i />
        <span />
        <span />
      </div>

      <b />
    </div>

    <div class="barber-mockup__prices">
      <div v-for="item in 3" :key="item">
        <span />
        <i />
      </div>
    </div>

    <div class="barber-mockup__actions">
      <button type="button" tabindex="-1" />
      <button type="button" tabindex="-1" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.barber-mockup {
  min-height: 280px;
  padding: 28px;
  box-sizing: border-box;

  @include breakpoint($tablet) {
    min-height: 325px;
  }

  &__top {
    padding-bottom: 26px;
    @include flex(space-between, flex-start);

    b {
      display: block;
      width: 76px;
      height: 76px;
      border: 1px solid rgba($color-accent, 0.6);
      border-radius: 50%;
    }
  }

  &__copy {
    width: 75%;
    gap: 12px;
    @include flex(flex-start, stretch);
    flex-direction: column;

    i,
    span {
      display: block;
      height: 10px;
      background-color: rgba($text-light, 0.55);
      border-radius: 6px;
    }

    i {
      width: 18%;
      height: 7px;
      background-color: rgba($color-accent, 0.75);
    }

    span:first-of-type {
      width: 95%;
      height: 16px;
      background-color: rgba($text-light, 0.85);
    }

    span:last-of-type {
      width: 72%;
    }
  }

  &__prices {
    border-top: 1px solid rgba($text-light, 0.12);

    div {
      min-height: 40px;
      border-bottom: 1px solid rgba($text-light, 0.12);
      @include flex(space-between, center);
    }

    span,
    i {
      display: block;
      width: 52px;
      height: 6px;
      background-color: rgba($text-light, 0.22);
      border-radius: 4px;
    }

    i {
      width: 28px;
    }
  }

  &__actions {
    margin-top: 24px;
    gap: 12px;
    @include flex(flex-start, center);

    button {
      width: 144px;
      height: 34px;
      padding: 0;
      pointer-events: none;
      background-color: transparent;
      border: 1px solid rgba($color-accent, 0.7);
      border-radius: 999px;

      &:last-child {
        width: 96px;
        background-color: rgba($text-light, 0.08);
        border-color: transparent;
      }
    }
  }
}
</style>