export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#1E3A8A',
          'primary-light': '#3B82F6',
          'secondary': '#10B981',
          'accent': '#F59E0B',
          'bg-light': '#F3F4F6',
          'text-dark': '#1F2937',
          'text-muted': '#6B7280'
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
        }
      }
    },
    plugins: []
  }
