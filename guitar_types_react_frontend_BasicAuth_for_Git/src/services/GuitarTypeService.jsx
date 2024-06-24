import axios from "axios";
import {getBasicAuth} from "./RegistrierungsService.jsx";

const BACKEND_URL = 'http://localhost:8080/guitar-types';

export const readGuitarType = (id) => axios.get(BACKEND_URL+'/'+id);
export const updateGuitarType = ( guitarType, id) => axios.put(BACKEND_URL + '/' + id, guitarType);
export const deleteGuitarType = (id) => axios.delete(BACKEND_URL + '/' + id);
export const newGuitarType = (guitarType) => axios.post(BACKEND_URL, guitarType);
export const allGuitarTypes = () => axios.get(BACKEND_URL);

axios.interceptors.request.use(
    function (configuration) {
        configuration.headers['Authorization'] = getBasicAuth();
        return configuration;
}, function (er) {
    return Promise.reject(er);
});
