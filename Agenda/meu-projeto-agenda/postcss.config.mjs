const postcssConfig = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- Mudamos de 'tailwindcss' para '@tailwindcss/postcss'
    autoprefixer: {},
  },
};

export default postcssConfig;