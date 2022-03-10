<template>
  <div class="container">
    <ImageGallery />
    <LoaderProduct />
  </div>
</template>

<script>
import LoaderProduct from "./components/ArticleDescription.vue";
import ImageGallery from "./components/ImageGallery.vue";

export default {
  name: "Index",
  components: {
    LoaderProduct,
    ImageGallery,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss"></style>
