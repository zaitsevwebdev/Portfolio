<template>
  <div class="layout">
    <the-head />
    <main class="layout__main">
      <NuxtPage />
    </main>
    <the-footer />
  </div>
</template>

<style lang="scss">
.layout {
  @include flex(space-between, stretch);
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex-grow: 1;
  }
}
</style>
