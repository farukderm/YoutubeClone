import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: { geo: "TR", lang: "tr" },
  headers: {
    "x-rapidapi-key": "93a69c40a0mshff4c0e259dfe5b6p1087ffjsncd20470923d7",
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
});
export default api;
