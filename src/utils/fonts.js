
import {
    Open_Sans,
    Roboto_Condensed,
    Sofia_Sans_Extra_Condensed,
    Bebas_Neue
  } from "next/font/google";

const os_init = Open_Sans({
    subsets: ["latin"],
    weight: ["800"],
    variable: "--os",
  });
  const robot_init = Roboto_Condensed({
    subsets: ["latin"],
    weight: [ "900"],
    variable: "--roboto_condensed",
  });
  const sofia_init = Sofia_Sans_Extra_Condensed({
    subsets: ["latin"],
    weight: ["900"],
    variable: "--sof",
  });
  const bebas_init=Bebas_Neue({
    subsets:["latin"],
    weight:["400"]
  })

export const robot=robot_init.className; 
export const sofia=sofia_init.className; 
export const os=os_init.className; 
export const bebas=bebas_init.className; 