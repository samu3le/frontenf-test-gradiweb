import { computed } from "vue";
import { useStore } from "vuex";

export default () => {
    const module = "article";

    const store = useStore();

    return {
        listFetchingData: computed(() => store.getters[`${module}/listFetchingData`],),
        listErrors: computed(() => store.getters[`${module}/listErrors`]),
        listData: computed(() => store.getters[`${module}/listData`]),
        getList: () => store.dispatch(`${module}/getList`),
    };
};
