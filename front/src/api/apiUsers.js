import axios from "axios";

if (localStorage.token != undefined) {
  var token = JSON.parse(localStorage.token);
}
console.log(token);
// let timer = setInterval(() => {
//   if (JSON.parse(localStorage.token) != undefined) {
//     token = JSON.parse(localStorage.token);
//     clearInterval(timer);
//   }
// }, 1000);

const axiosUser = axios.create({
  baseURL: `http://127.0.0.1:3005/api/v1/users`,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosUser.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res.status === 401) {
      window.location.href = "http://127.0.0.1:3005";
    }
    console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

export default axiosUser;
