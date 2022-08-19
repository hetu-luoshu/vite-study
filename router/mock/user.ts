import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/info",
    method: "get",
    response: () => {
      return {
        code: 0,
        message: "请求成功",
        type: "success",
        result: {
          name: "河图洛书",
          age: 18,
          avater: "/hello.jpg",
        },
      };
    },
  },
] as MockMethod[];
