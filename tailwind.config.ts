import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        "loop-scroll":"loop-scroll 50s linear infinite",
        "loop-scroll-neg":"loop-scroll-neg 50s linear infinite"
      },
      keyframes:{
        "loop-scroll":{
          from:{transform:"translateX(0)"},
          to: {transform:"translateX(-80%)"}
        },
        "loop-scroll-neg":{
          from:{transform:"translateX(-80%)"},
          to: {transform:"translateX(0)"}
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
      colors: {
        'background':'#00000',
        'dark':'#1a0001',
        "primary":"#fff8fd",
        "primary-t":"rgba(255,248,253,0.9)",
        'g1':'#21bb4d',
        'g2':'#a6b3f7',
        'g3':'#7db4f4',
        'g4':'#e8b4f5',
        'g5':'#fcc254',
        'g6':'#e4d2e0',
        'lightb':'#ffe9e5',
        'br':'#1a0001',
        'card':'#e5d0c9',
        'footer':'#98bbf3'

      },
      fontFamily:{
        os:['var(--os)'],
        R:['var(--roboto_condensed)'],
        // Sofia_Sans_Extra_Condensed:['var(--sof)']
      }
    },
  },
  plugins: [],
};
export default config;
