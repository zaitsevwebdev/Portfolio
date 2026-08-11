<template>
  <header class="header">
    <div class="header__container">
      <a
        href="/"
        class="header__logo"
        @click="closeMenu"
      >
        Zaitsev<span>.webdev</span>
      </a>

      <nav class="header__desktop-nav" aria-label="Основна навігація">
        <ul class="header__desktop-menu">
          <li
            v-for="block in blocks"
            :key="block.link"
          >
            <a
              :href="block.link"
              class="header__link"
            >
              {{ block.name }}
            </a>
          </li>
        </ul>
      </nav>

      <a
        href="#contacts"
        class="header__contact-button"
      >
        Обговорити проєкт
      </a>

      <button
        class="header__burger"
        :class="{ 'header__burger--active': isMenuOpen }"
        type="button"
        aria-label="Відкрити меню"
        aria-controls="mobile-menu"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        <span />
        <span />
        <span />
      </button>
    </div>

    <div
      id="mobile-menu"
      class="header__mobile"
      :class="{ 'header__mobile--open': isMenuOpen }"
    >
      <nav aria-label="Мобільна навігація">
        <ul class="header__mobile-menu">
          <li
            v-for="block in blocks"
            :key="block.link"
          >
            <a
              :href="block.link"
              class="header__mobile-link"
              @click="closeMenu"
            >
              {{ block.name }}
            </a>
          </li>
        </ul>
      </nav>

      <a
        href="/#contacts"
        class="header__mobile-button"
        @click="closeMenu"
      >
        Обговорити проєкт
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

interface Block {
  name: string
  link: string
}

const blocks: Block[] = [
  { name: 'Головна', link: '/#main' },
  { name: 'Проєкти', link: '/projects' },
  { name: 'Послуги', link: '/services' },
  { name: 'Про мене', link: '/#about' },
  { name: 'Контакти', link: '/#contacts' }
]

const isMenuOpen = ref(false)

const setBodyScroll = (isLocked: boolean) => {
  document.body.style.overflow = isLocked ? 'hidden' : ''
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  setBodyScroll(isMenuOpen.value)
}

const closeMenu = () => {
  isMenuOpen.value = false
  setBodyScroll(false)
}

const handleResize = () => {
  if (window.innerWidth > 1024) {
    closeMenu()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeydown)
  setBodyScroll(false)
})
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  background-color: rgba($primary-bg, 0.94);
  border-bottom: 1px solid rgba($text-light, 0.1);
  backdrop-filter: blur(18px);

  @include breakpoint($tabletLandscape) {
    background-color: rgba($primary-bg, 0.9);
  }

  &__container {
    width: 100%;
    min-height: 80px;
    padding: 0 20px;
    box-sizing: border-box;
    @include flex(space-between, center);

    @include breakpoint($tablet) {
      padding: 0 32px;
    }

    @include breakpoint($tabletLandscape) {
      width: calc(100% - 48px);
      max-width: 1180px;
      margin: 0 auto;
      padding: 0;
    }
}

  &__logo {
    flex-shrink: 0;
    text-decoration: none;
    @include font(15px, 1, $mainFontName, $text-light, 700);

    @include breakpoint($mobile) {
      font-size: 16px;
    }

    span {
      color: $color-accent;
    }
  }

  &__desktop-nav {
    display: none;

    @include breakpoint($tabletLandscape) {
      display: block;
    }
  }

  &__desktop-menu {
    margin: 0;
    padding: 0;
    gap: 34px;
    list-style: none;
    @include flex(center, center);

    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }

  &__link {
    display: block;
    padding: 8px 0;
    text-decoration: none;
    transition: color 0.25s ease;
    @include font(14px, 1.2, $mainFontName, $text-muted, 400);

    &:hover {
      color: $text-light;
    }
  }

  &__contact-button {
    display: none;

    @include breakpoint($tabletLandscape) {
      min-height: 42px;
      padding: 0 20px;
      background-color: transparent;
      border: 1px solid rgba($color-accent, 0.65);
      border-radius: 999px;
      text-decoration: none;
      transition:
        color 0.25s ease,
        background-color 0.25s ease,
        border-color 0.25s ease;

      @include flex(center, center);
      @include font(14px, 1.2, $mainFontName, $color-accent, 500);
    }

    &:hover {
      color: $primary-bg;
      background-color: $color-accent;
      border-color: $color-accent;
    }
  }

  &__burger {
    position: relative;
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    padding: 0;
    gap: 6px;
    flex-direction: column;
    background-color: transparent;
    border: 1px solid rgba($text-light, 0.25);
    border-radius: 50%;
    cursor: pointer;
    transition:
      border-color 0.25s ease,
      box-shadow 0.25s ease;

    @include flex(center, center);

    @include breakpoint($mobile) {
      width: 48px;
      height: 48px;
    }

    @include breakpoint($tabletLandscape) {
      display: none;
    }

    span {
      display: block;
      width: 20px;
      height: 1px;
      background-color: $text-light;
      transition: transform 0.3s ease;
    }

    &:hover {
      border-color: $color-accent;
      box-shadow: 0 0 0 3px rgba($color-accent, 0.1);
    }

    &--active {
      span {
        position: absolute;
        display: none;

        &:first-child {
          transform: rotate(45deg);
          display: block;
        }

        &:last-child {
          transform: rotate(-45deg);
          display: block;
        }
      }
    }
  }

  &__mobile {
    max-height: 0;
    padding: 0 18px;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    border-top: 1px solid transparent;
    box-sizing: border-box;
    transition:
      max-height 0.4s ease,
      padding 0.4s ease,
      opacity 0.25s ease,
      visibility 0.4s,
      border-color 0.25s ease;

    @include breakpoint($mobile) {
      padding-right: 24px;
      padding-left: 24px;
    }

    @include breakpoint($tabletLandscape) {
      display: none;
    }

    &--open {
      max-height: 500px;
      padding-top: 18px;
      padding-bottom: 24px;
      visibility: visible;
      opacity: 1;
      border-color: rgba($text-light, 0.1);
    }
  }

  &__mobile-menu {
    margin: 0 0 28px;
    padding: 0;
    list-style: none;

    li {
      margin: 0;
      padding: 0;
      list-style: none;

      &:not(:last-child) {
        border-bottom: 1px solid rgba($text-light, 0.1);
      }
    }
  }

  &__mobile-link {
    display: block;
    padding: 16px 0;
    text-decoration: none;
    transition:
      color 0.25s ease,
      padding-left 0.25s ease;

    @include font(17px, 1.2, $mainFontName, $text-light, 400);

    @include breakpoint($mobile) {
      padding: 18px 0;
      font-size: 18px;
    }

    &:hover {
      padding-left: 8px;
      color: $color-accent;
    }
  }

  &__mobile-button {
    width: 100%;
    min-height: 48px;
    background-color: $color-accent;
    border-radius: 999px;
    text-decoration: none;
    transition: opacity 0.25s ease;

    @include flex(center, center);
    @include font(14px, 1.2, $mainFontName, $primary-bg, 600);

    &:hover {
      opacity: 0.85;
    }
  }
}
</style>