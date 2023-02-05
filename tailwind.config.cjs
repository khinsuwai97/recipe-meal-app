/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dancingScript: ['Dancing Script'],
        nunitoSans: ['Nunito Sans'],
      },
      screens: {
        xs: '480px',
        ss: '620px',
        sm: '768px',
        md: '1060px',
        lg: '1200px',
        xl: '1700px',
      },
    },
    colors: {
      primary: '#495057',
      secondary: '#51cf66',
      whiteColor: '#ffff',
      whiteShade: '#b3b3b3',
      greenShade: '#1d976c',
      dimWhite: 'rgba(255, 255, 255, 0.7)',
      red: '#E52B50',
    },
  },
  plugins: [],
};
