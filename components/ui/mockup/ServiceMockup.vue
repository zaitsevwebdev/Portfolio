<template>
  <div class="service-mockup">
    <div class="service-mockup__sidebar">
      <span />
      <span />
      <span />
      <span />
    </div>

    <div class="service-mockup__content">
      <div class="service-mockup__cards">
        <div v-for="item in 3" :key="item">
          <span />
          <i />
        </div>
      </div>

      <div class="service-mockup__chart">
        <span
          v-for="height in chartBars"
          :key="height"
          :style="{ height: `${height}%` }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const chartBars = [34, 56, 30, 68, 48, 82]
</script>

<style scoped lang="scss">
.service-mockup {
  min-height: 280px;
  padding: 28px;
  gap: 20px;
  box-sizing: border-box;
  @include flex(flex-start, stretch);

  @include breakpoint($tablet) {
    min-height: 325px;
  }

  &__sidebar {
    width: 92px;
    padding-right: 18px;
    border-right: 1px solid rgba($text-light, 0.12);
    gap: 12px;
    @include flex(flex-start, stretch);
    flex-direction: column;

    span {
      display: block;
      width: 68px;
      height: 6px;
      background-color: rgba($text-light, 0.22);
      border-radius: 4px;

      &:nth-child(2) {
        width: 90px;
        background-color: rgba($color-accent, 0.75);
      }
    }
  }

  &__content {
    min-width: 0;
    flex-grow: 1;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;

    div {
      padding: 12px;
      border: 1px solid rgba($text-light, 0.14);
      border-radius: 10px;
    }

    span,
    i {
      display: block;
      height: 6px;
      background-color: rgba($text-light, 0.2);
      border-radius: 4px;
    }

    i {
      width: 55%;
      height: 12px;
      margin-top: 12px;
      background-color: rgba($text-light, 0.7);
    }
  }

  &__chart {
    height: 122px;
    margin-top: 16px;
    padding: 16px;
    gap: 8px;
    border: 1px solid rgba($text-light, 0.14);
    border-radius: 10px;
    box-sizing: border-box;
    @include flex(space-between, flex-end);

    span {
      width: 14%;
      background-color: rgba($text-light, 0.1);

      &:last-child {
        background-color: rgba($color-accent, 0.7);
      }
    }
  }
}
</style>