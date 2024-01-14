export default defineEventHandler(async (event) => {
  const {breed} = getQuery(event);
  const data = await $fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`);

  return data;
})