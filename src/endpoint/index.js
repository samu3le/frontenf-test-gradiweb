import axios from "axios";
import store from "@/store";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const instance = axios.create({
  mode: "cors",
  cache: "no-cache",
  headers,
  redirect: "follow",
  referrerPolicy: "no-referrer",
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    const { data, status } = response;

    const { errors } = data;

    const res = {};

    switch (status) {
      case 401:
        store.dispatch("auth/clean");
        res["errors"] = errors ? errors : data;
        break;

      case 422:
        res["errors"] = errors ? errors : data;
        break;

      case 419:
        window.location.reload();
        break;

      default:
        res["errors"] = ["Error no controlado"];
        break;
    }

    return Promise.reject(res);
  }
);

export default {
  get({ url, params }) {
    return instance.get(url, {
      params: {
        ...params,
      },
    });
  },
};
