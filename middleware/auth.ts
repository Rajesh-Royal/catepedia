export default defineNuxtRouteMiddleware((to, from) => {
  if(isAuthenticated() === false){
    // alert("You are not authorized to visit this page! returning back to home page");
    console.log(to);
    console.log(from);
    return navigateTo('/');
  }
  // return navigateTo(to)
});

const isAuthenticated = () => true;