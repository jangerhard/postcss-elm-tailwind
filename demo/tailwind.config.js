module.exports = {
  theme: {},
  variants: {
    backgroundColor: [
      "responsive",
      "first",
      "last",
      "hover",
      "focus",
      "even",
      "odd"
    ]
  },
  plugins: [require("@tailwindcss/custom-forms")],
  prefix: "tw-",
  purge: {
    content: ['./index.html', './dist/app.js']
  }
};
