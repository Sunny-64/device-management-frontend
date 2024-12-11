import axios from "axios"
import { getItem } from "../utils";
import { LOCAL_KEYS } from "../constants/local-keys";

const BASE_URL = 'https://clownfish-app-m5g7p.ondigitalocean.app'

const getHeaders = () => ({
    'content-type': 'Application/json', 
    'authorization': `Bearer ${getItem(LOCAL_KEYS.ACCESS_TOKEN)}`
});

console.log(getHeaders())

class ApiService {
    register(data: any) {
        return axios.post(`${BASE_URL}/auth/register`, data, { headers: getHeaders() });
    }

    login(data: any) {
        return axios.post(`${BASE_URL}/auth/login`, data, { headers: getHeaders() });
    }

    verifyOtp(data: any) {
        return axios.post(`${BASE_URL}/auth/verify-otp`, data, { headers: getHeaders() });
    }

    getActiveDevices() {
        return axios.get(`${BASE_URL}/user/active-devices`, { headers: getHeaders() });
    }

    removeDevice(tokenId: string) {
        return axios.delete(`${BASE_URL}/user/revoke-access/${tokenId}`, { headers: getHeaders() });
    }

    logout() {
        return axios.post(`${BASE_URL}/user/logout`, {}, { headers: getHeaders() });
    }

    getUsername() {
        return axios.get(`${BASE_URL}/user`, { headers: getHeaders() });
    }
}

export const Api = new ApiService();