import axios from "axios";
const token = localStorage.getItem("accessToken");

export const request = (options: any) => {
  return axios({
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    },
  })
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      if (error.response) {
        if (error.response.status === 401) {
          // window.location.replace("/login");
          localStorage.clear();
        }
        return { error: error.response.status, ...error.response.data };
      }
      return { error: "Server Error" };
    });
};
