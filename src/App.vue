<template>
  <div class="container">
    <ImageGallery :list="listData?.media" />
    <LoaderProduct :list="listData" />
  </div>
</template>

<script>
import { onBeforeMount } from "vue";

import LoaderProduct from "@/components/ArticleDescription.vue";
import ImageGallery from "@/components/ImageGallery.vue";

import useArticle from "@/composables/useArticle.js";

export default {
  name: "Index",
  components: {
    LoaderProduct,
    ImageGallery,
  },
  setup() {
    const { listFetchingData, listErrors, listData, getList } = useArticle();

    onBeforeMount(() => {
      getList();
      console.log(getList());
    });
    return {
      listFetchingData,
      listErrors,
      listData,
    };
  },
};
</script>

<style lang="scss"></style>
