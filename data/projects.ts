export interface Project {
  id: number
  slug: string
  title: string
  type: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string
  githubUrl: string
  isOriginalDesign: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'perfumea',
    title: 'Perfumea',
    type: 'Інтернет-магазин парфумерії',
    description:
      'Багатосторінковий інтернет-магазин парфумерії з власною концепцією бренду та дизайном. Реалізовано каталог товарів, фільтрацію, сортування, обране, кошик, сторінки товарів і взаємодію з користувачем.',
    image: '/images/perfumea.png',
    technologies: ['Nuxt 2', 'Vue 2', 'JavaScript', 'Vuex', 'SCSS'],
    demoUrl: 'https://perfumea.vercel.app/',
    githubUrl: 'https://github.com/zaitsevwebdev/perfumea',
    isOriginalDesign: true
  },
  {
    id: 2,
    slug: 'casaroma',
    title: 'CasaRoma',
    type: 'Сайт італійського ресторану',
    description:
      'Багатосторінковий сайт італійського ресторану з авторською назвою, стилістикою та концепцією бренду. Проєкт знайомить з атмосферою закладу, меню, перевагами ресторану та допомагає користувачеві перейти до бронювання або відвідування.',
    image: '/images/casaroma.png',
    technologies: ['Nuxt 3', 'Vue 3', 'TypeScript', 'SCSS'],
    demoUrl: 'https://casa-roma-ten.vercel.app/',
    githubUrl: 'https://github.com/zaitsevwebdev/Casa-roma',
    isOriginalDesign: true,
    featured: true
  },
  {
    id: 3,
    slug: 'nord',
    title: 'Nord',
    type: 'Міні-магазин техніки',
    description:
      'Лаконічний магазин електроніки з каталогом товарів і кошиком. Реалізовано адаптивну сітку товарів, зміну кількості, видалення позицій та автоматичний розрахунок загальної вартості замовлення.',
    image: '/images/nord.png',
    technologies: ['Nuxt 3', 'Vue 3', 'TypeScript', 'SCSS'],
    demoUrl: 'https://nord-indol.vercel.app/',
    githubUrl: 'https://github.com/zaitsevwebdev/Nord',
    isOriginalDesign: true
  },
  {
    id: 4,
    slug: 'petshop',
    title: 'PetShop',
    type: 'Лендинг для зоосервісу',
    description:
      'Адаптивний лендинг для сервісу догляду за домашніми тваринами. Проєкт перенесено з HTML у Nuxt 3 за готовим дизайн-макетом, компонентно структуровано та адаптовано для різних розмірів екрана.',
    image: '/images/petshop.png',
    technologies: ['Nuxt 3', 'Vue 3', 'TypeScript', 'SCSS'],
    demoUrl: 'https://pet-house-one-lime.vercel.app/',
    githubUrl: 'https://github.com/zaitsevwebdev/petHouse',
    isOriginalDesign: false,
    featured: true
  },
  {
    id: 5,
    slug: 'serene',
    title: 'Serene',
    type: 'Багатосторінковий e-commerce',
    description:
      'Інтернет-магазин із власною концепцією бренду та підключенням до публічного API. Дані про товари надходять із зовнішнього сервісу, після чого обробляються та відображаються в каталозі й на окремих сторінках.',
    image: '/images/serene.png',
    technologies: ['Nuxt 2', 'Vue 2', 'JavaScript', 'Vuex', 'REST API', 'SCSS'],
    demoUrl: 'https://serene-azure-one.vercel.app/',
    githubUrl: 'https://github.com/zaitsevwebdev/SERENE',
    isOriginalDesign: true,
  },
  {
    id: 6,
    slug: 'sich',
    title: 'SICH',
    type: 'Лендинг для барбершопу',
    description:
      'Сміливий лендинг барбершопу з авторською назвою, візуальною концепцією та дизайном. Темна палітра, червоний акцент і виразна типографіка формують характер бренду та підкреслюють його сучасний стиль.',
    image: '/images/sich.png',
    technologies: ['Nuxt 3', 'Vue 3', 'TypeScript', 'SCSS'],
    demoUrl: 'https://sich-steel.vercel.app/',
    githubUrl: 'https://github.com/zaitsevwebdev/sich',
    isOriginalDesign: true,
    featured: true
  }
]