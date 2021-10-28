module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wiggle: "wiggle 1s linear infinite",
        box: "box 3s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        box: {
          "0%, 100%": { transform: "translateX(30px)" },
          "25%": { transform: "translateY(30px)" },
          "50%": { transform: "translateX(-30px)" },
          "75%": { transform: "translateY(-30px)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
