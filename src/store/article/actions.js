import * as types from "./types";
import endpoint from "@/endpoint";

export default {
    setFetchingData({ commit }, data) {
        console.log("setFetchingData, inside", data);
        commit(types.CART_FETCH_SUCCESS, data);
    },
    getList({ state, commit }) {
        console.log(state, "print state");
        commit(types.LIST_FETCH_REQUEST);
        return endpoint
            .get({
                url: `https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js`,
            })
            .then(({ data }) => {
                commit(types.LIST_FETCH_SUCCESS, data);
                return data;
            })
            .catch((err) => {
                console.log("err", err);
                commit(types.LIST_FETCH_FAILURE, { err: err.errors });
                return Promise.reject(err);
            });
    },
};