import axios from "axios";

///01310930/json

const Api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default Api;