import catBreedData from '../../../assets/catBreeds.json';
import Fuse from 'fuse.js'; 

const fuse = new Fuse(catBreedData, {keys: ['name'], threshold: 0.3});

export default defineEventHandler(async (event) => {
  const { breed: breedQuery, limit = 9, page = 0 } = getQuery(event);
  // const catApiResponse: any = await $fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`);

  const catApiResponse = fuse.search(breedQuery as string)?.map((result) => result.item);

  const startIndex = Number(page) * Number(limit);
  const results = catApiResponse.slice(
    startIndex,
    startIndex * 1 + Number(limit) * 1
  );

  let status = 200;

  if(catApiResponse.length === 0) { 
    status = 404;
  }

  return {
    status,
    success: true,
    results,
    dataCount: catApiResponse.length,
  };
})