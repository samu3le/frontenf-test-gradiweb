export default {
  fetchingData(state) {
    return state.fetchingData;
  },
  errors(state) {
    return state.errors;
  },

  listFetchingData(state) {
    return state.list.fetchingData;
  },
  listErrors(state) {
    return state.list.errors;
  },
  listData(state) {
    return state.list.data;
  },

  listCartData(state) {
    console.log("listCartData, inside");
    return state.cart_shop.data;
  },
};
