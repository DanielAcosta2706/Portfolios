/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      content: {
        before: ["absolute, w-20, h-4, bg-[hsl(0,0%, 46%)], left-0, top-4"],
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      fontSize: {
        bigFontSize: "3rem",
        h1Fontsize: "2.25rem",
        h2Fontsize: "1.5rem",
        h3Fontsize: "1.25rem",
        normal: "1rem",
        smallFontSize: "0.875rem",
        smallerFontSize: "0.813rem",
        tinyFontSize: "0.625rem",
      },
      colors: {
        titleColor: "hsl(0,0%, 20%)",
        titleColorDark: "hsl(0,0%, 0%)",
        textColor: "hsl(0,0%, 46%)",
        bodyColor: "hsl(0,0%, 98%)",
        containerColor: "#fff",
      },
      boxShadow: {
        boxShadowCustom: "inset 0 0 0 6px rgba(255, 255, 255, 0.3)",
      },
      height: {
        navHeight: "calc(3rem + 1.5rem)",
      },
      spacing: {
        // Header Height
        headerHeight: "3rem",
        // Magin Bottom
        mbottm025: "0.25rem",
        mbottm05: "0.5rem",
        mbottm075: "0.75rem",
        mbottm1: "1rem",
        mbottm15: "1.5rem",
        mbottm2: "2rem",
        mbottm25: "2.5rem",
        mbottm3: "3rem",
      },
    },
    screens: {
      smx: "350px",
      // => @media (min-width: 350px) { ... }

      sm: "576px",
      // => @media (min-width: 576px) { ... }

      mdx: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lgx: "992px",
      // => @media (min-width: 992px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
