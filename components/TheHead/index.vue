<template>
  <header class="header">
    <div class="header__container">

      <a href="#" class="header__logo">
        Zaitsev<span>.dev</span>
      </a>

      <nav class="header__nav">
        <ul class="header__menu">
          <li><a href="#advantages" class="header__link">Що ви отримаєте?</a></li>
          <li><a href="#portfolio" class="header__link">Кейси</a></li>
          <li><a href="#workflow" class="header__link">Як я працюю</a></li>
          <li><a href="#about" class="header__link">Про мене</a></li>
          <li><a href="#contacts" class="header__link header__link--btn">Зв'язатися</a></li>
        </ul>
      </nav>

      <button
          class="header__burger"
          :class="{ 'header__burger--active': isMenuOpen }"
          aria-label="Toggle menu"
          @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="header__mobile-overlay" :class="{ 'header__mobile-overlay--open': isMenuOpen }">
        <nav class="header__mobile-nav">
          <ul class="header__mobile-menu">
            <li><a href="#advantages" class="header__mobile-link" @click="closeMenu">Що ви отримаєте?</a></li>
            <li><a href="#portfolio" class="header__mobile-link" @click="closeMenu">Кейси</a></li>
            <li><a href="#workflow" class="header__mobile-link" @click="closeMenu">Як я працюю</a></li>
            <li><a href="#about" class="header__mobile-link" @click="closeMenu">Про мене</a></li>
            <li><a href="#contacts" class="header__mobile-link header__mobile-link--btn" @click="closeMenu">Зв'язатися</a></li>
          </ul>
        </nav>
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleResize = () => {
  if (window.innerWidth >= 1024 && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<style lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: rgba(18, 18, 18, 0.9);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    z-index: 1000;
    @include flex(center, center);

    &__container {
      max-width: 1440px;
      width: 100%;
      padding: 0 24px;
      @include flex(space-between, center);
      position: relative;
      box-sizing: border-box;
    }

    &__logo {
      @include font(22px, 1.2, $mainFontName, #E0E0E0, 700);
      text-decoration: none;
      z-index: 1001;
      span { color: #2EC4B6; }
    }

    &__nav {
      display: none;

      @include breakpoint($tabletLandscape) {
        display: block;
      }
    }

    &__menu {
      list-style: none;
      padding: 0;
      margin: 0;
      @include flex(flex-start, center);
      gap: 32px;
    }

    &__link {
      @include font(15px, 1.2, $mainFontName, #E0E0E0, 600);
      text-decoration: none;
      transition: color 0.25s ease;

      &:hover { color: #2EC4B6; }

      &--btn {
        background: rgba(46, 196, 182, 0.1);
        border: 1px solid #2EC4B6;
        padding: 10px 20px;
        border-radius: 6px;
        color: #2EC4B6;

        &:hover {
          background: #2EC4B6;
          color: #121212;
        }
      }
    }

    &__burger {
      @include flex(space-between, transparent);
      flex-direction: column;
      background: transparent;
      border: none;
      width: 35px;
      height: 20px;
      position: relative;
      cursor: pointer;
      z-index: 1001;

      @include breakpoint($tabletLandscape) {
        display: none;
      }

      span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: #E0E0E0;
        border-radius: 2px;
        transition: transform 0.3s ease, opacity 0.3s ease, background-color 0.3s ease;
      }

      &--active {
        span {
          background-color: #2EC4B6;
          &:nth-child(1) { transform: translateY(9px) rotate(45deg); }
          &:nth-child(2) { opacity: 0; }
          &:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
        }
      }
    }

    &__mobile-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #121212;
      z-index: 1000;
      transform: translateX(100%);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      @include flexCenter();

      &--open { transform: translateX(0); }

      @include breakpoint($tabletLandscape) {
        display: none;
      }
    }

    &__mobile-menu {
      list-style: none;
      padding: 0;
      margin: 0;
      @include flex(center, center);
      flex-direction: column;
      gap: 32px;
    }

    &__mobile-link {
      @include font(24px, 1.2, $mainFontName, #E0E0E0, 600);
      text-decoration: none;
      transition: color 0.25s ease;

      &:hover { color: #2EC4B6; }

      &--btn {
        background: #2EC4B6;
        color: #121212 !important;
        padding: 14px 40px;
        border-radius: 8px;
        margin-top: 40px;
      }
    }
  }
</style>