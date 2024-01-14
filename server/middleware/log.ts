export default defineEventHandler((event) => {
  // TODO: if it is cat api then add an x-api header
  console.log('New request: ' + getRequestURL(event));
})