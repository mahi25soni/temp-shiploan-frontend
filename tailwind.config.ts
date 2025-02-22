import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      borderRadius: {
        "32": "32px",
      },
      borderColor: {
        basic: "var(--border-basic)",
      },
      backgroundColor: {
        "light-skin": "var(--bg-light-skin)",
        "light-purple": "var(--bg-light-purple)",
        "light-green": "var(--bg-light-green)",
        "light-blue": "var(--bg-light-blue)",
      },
      colors: {
        "yellow-orange": "var(--yellow-orange)",
        "light-black": "var(--light-black)",
        "range-line": "var(--range-line)",
        "range-text": "var(--range-text)",
        "light-range": "var(--light-range)",
        "light-gray": "var(--light-gray)",
        "light-skin": "var(--bg-light-skin)",
        "light-purple": "var(--bg-light-purple)",
        "light-green": "var(--bg-light-green)",
        "light-blue": "var(--bg-light-blue)",
        'gray-opacity-5': 'rgba(72, 69, 76, 0.05)',
        'gray-opacity-20': 'rgba(72, 69, 76, 0.2)',

      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
