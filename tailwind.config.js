/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#F8FAFC',
        'bg-alt': '#F0F7FF',
        'bg-surface': '#FFFFFF',
        'border-light': '#E2E8F0',
        'border-focus': '#CBD5E1',
        'text-primary': '#0F172A',
        'text-secondary': '#334155',
        'text-muted': '#64748B',
        'accent-primary': '#4F8EF7',
        'accent-hover': '#3B76D8',
        'accent-light': '#EAF6FF',
        'accent-mid': '#7BB6FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        'site': '1200px',
      },
    },
  },
  plugins: [],
}
