/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-sm':
          // "linear-gradient(rgba(0, 0, 0, 0.6), rgba(8, 45, 56, 0.8)), url('/img/steven-kamenar-MMJx78V7xS8-unsplash-sm.jpg')",
          `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/img/harpers-ferry.jpg')`,
        // "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/shenandoah.jpg')",
        // "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/img/shenandoah2.jpg')",
        'hero-md': `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/img/harpers-ferry.jpg')`,
      },
    },
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
