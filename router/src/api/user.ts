import http from "@/plugin/axios"

interface User {
  name: string;
  age: number;
  avater: string;
}

export const info = () => http.request<User>({ url: '/info' });