import { heroes } from "../Data/Heroes";

export const getHeroById = (id = "") => {
   return heroes.find((hero) => hero.id === id);
};
