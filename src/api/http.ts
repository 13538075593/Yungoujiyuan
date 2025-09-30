import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Base config
const baseURL = import.meta.env.VITE_API_BASE_URL || '/api';
const timeout = 15000;

// Create instance
const http: AxiosInstance = axios.create({ baseURL, timeout, withCredentials: false });

// Request interceptor
http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Attach token if present
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      (config.headers as any).Authorization = `Bearer ${token}`;
    }
    // Example: add locale header if using i18n
    const locale = localStorage.getItem('locale');
    if (locale) {
      config.headers = config.headers || {};
      (config.headers as any)['Accept-Language'] = locale;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
http.interceptors.response.use(
  (response: AxiosResponse) => {
    // Unified success handling
    return response;
  },
  (error) => {
    // Unified error handling
    const { response } = error || {};
    if (response) {
      if (response.status === 401) {
        // Token expired or unauthorized
        // Optionally redirect to login
      }
    }
    return Promise.reject(error);
  }
);

// Helper methods
export async function get<T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<T> {
  const resp = await http.get<T>(url, { params, ...(config || {}) });
  return (resp as AxiosResponse<T>).data;
}

export async function post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  const resp = await http.post<T>(url, data, config);
  return (resp as AxiosResponse<T>).data;
}

export async function put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
  const resp = await http.put<T>(url, data, config);
  return (resp as AxiosResponse<T>).data;
}

export async function del<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const resp = await http.delete<T>(url, config);
  return (resp as AxiosResponse<T>).data;
}

export default http;


