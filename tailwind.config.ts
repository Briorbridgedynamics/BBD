import { Open_Sans, Roboto_Condensed, Sofia_Sans_Extra_Condensed, Ultra } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        
      },
      colors: {
        'background':'#00000',
        'dark':'#180000',
        "primary":"#fff8fd",
        "primary-t":"rgba(255,248,253,0.7)",
        'g1':'#21bb4d',
        'g2':'#a6b3f7',
        'g3':'#7db4f4',
        'g4':'#e8b4f5',
        'g5':'#fcc254'

      },
      fontFamily:{
        Open_Sans:['var(--os)'],
        Roboto_Condensed:['var(--roboto_condensed)'],
        // Sofia_Sans_Extra_Condensed:['var(--sof)']
      }
    },
  },
  plugins: [],
};
export default config;
