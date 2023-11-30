import axios from "axios";
const token = localStorage.getItem("accessToken");

export const request = (options: any) => {
  return axios({
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      if (error.response) {
        if (error.response.status === 401) {
          // window.location.replace("/");
          // localStorage.clear();
        }
        return { error: error.response.status, ...error.response.data };
      }
      return { error: "Server Error" };
    });
};
