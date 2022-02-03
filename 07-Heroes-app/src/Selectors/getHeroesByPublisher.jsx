import { heroes } from '../Data/Heroes';

export const getHeroesByPublisher = (publisher) => {
   const validPublishers = ['DC Comics', 'Marvel Comics'];
   if (!validPublishers.includes(publisher)) {
      throw new Error(`Invalid publisher: ${publisher}`);
   }
   return heroes.filter((hero) => hero.publisher === publisher);
};
