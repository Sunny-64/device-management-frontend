import axios from "axios"
import { getItem } from "../utils";
import { LOCAL_KEYS } from "../constants/local-keys";

const BASE_URL = 'http://localhost:3000'

const getHeaders = () => ({
    'content-type': 'Application/json', 
    'authorization': `Bearer ${getItem(LOCAL_KEYS.ACCESS_TOKEN)}`
});

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

    removeDevice(id: string) {
        return axios.delete(`${BASE_URL}/revoke-access/${id}`, { headers: getHeaders() });
    }

    logout() {
        return axios.delete(`${BASE_URL}/user/logout`, { headers: getHeaders() });
    }
}

export const Api = new ApiService();