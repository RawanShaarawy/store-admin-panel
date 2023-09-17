export default defineNuxtRouteMiddleware((to, from) => {

    // if (to.fullPath == from.fullPath) {
    //     return abortNavigation();
    // }

    debugger;

    const isLoggedIn = useCredentials();

    if(isLoggedIn.email) {
        //redirect to the page we want to go
        return navigateTo(to.fullPath);
    }
    return navigateTo("/login")
    //redirect to a login page
})