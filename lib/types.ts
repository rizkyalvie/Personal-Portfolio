import { links } from "./data"

//Create a new type called SectionName with every links properties as type so TypeScript will know that there will be no other value for SectionName
export type SectionName = typeof links[number]["name"]