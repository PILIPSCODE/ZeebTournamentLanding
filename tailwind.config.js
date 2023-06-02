/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        nav:['Bruno Ace SC', 'cursive']
      },
      backgroundImage:{
        'HomeBg':"url('/moba.jpg')",
        "bg-yz":"url('/bg-yz.jpg')",
        "Knock":"url('/knockOut.png')",
        "Quater":"url('/QuarterFinal.png')",
        "Semi":"url('/SemiFinal.png')",
        "Final":"url('/Final.png')",
        "bgstats":"url('/bg4.jpg')",
        "GrupA":"url('/GrupA.png')",
        "GrupB":"url('/GrupB.png')",
        "GrupAB":"url('/GrupAb.png')",
      },
    },
  },
  plugins: [require("daisyui")],
}
