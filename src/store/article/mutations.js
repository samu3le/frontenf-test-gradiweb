import * as types from './types'

export default {
    [types.LIST_FETCH_REQUEST](state) {
        state.list.fetchingData = true
        state.list.errors = null
    },
    [types.LIST_FETCH_SUCCESS](state, data) {
        state.list.fetchingData = false
        state.list.errors = null
        state.list.data = data
    },
    [types.LIST_FETCH_FAILURE](state, { errors }) {
        state.list.fetchingData = false
        state.list.errors = errors
    },

    [types.CART_FETCH_SUCCESS](state, data) {
        state.cart_shop.fetchingData = false
        state.cart_shop.errors = null
        state.cart_shop.data = data
    },
}

