export default defineEventHandler(async (event) => {
  const { breed, limit = 9, page = 0 } = getQuery(event);
  const catApiResponse: any = await $fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`);

  const startIndex = Number(page) * Number(limit);
  const results = catApiResponse.slice(
    startIndex,
    startIndex * 1 + Number(limit) * 1
  );

  return {
    success: true,
    results,
    dataCount: catApiResponse.length,
  };
})