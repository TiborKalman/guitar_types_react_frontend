import axios from "axios";

const BACKEND_URL_FOR_AUTH = 'http://localhost:8080/guitar-types/authorization';

export const loginToBackend = (userObject) => axios.post(BACKEND_URL_FOR_AUTH+'/login', userObject);
export const newUserAuth = (newUser) => axios.post(BACKEND_URL_FOR_AUTH+'/anmeldung', newUser);

export const isCurrentUserAuthenticated = ()  => {
    const user = sessionStorage.getItem("currentUser");
    return user != null
}

export const logoutCleaner = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload(false);
}

export const getCurrentUser = () => {
    return sessionStorage.getItem("currentUser");
}
export const storeCurrentUser = (currentUser) => sessionStorage.setItem("currentUser", currentUser);

export const getBasicAuth = () => localStorage.getItem("basicauth");
export const saveBasicAuth = (basicauth) => localStorage.setItem("basicauth", basicauth);