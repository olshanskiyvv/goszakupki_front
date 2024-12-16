import axios from "axios"

export const baseUrl = 'http://localhost:8080';
// export const baseUrl = 'http://olshanskyvv.ru:8080';

const client = axios.create({
  baseURL: baseUrl
});

export default client;
