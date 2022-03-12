<template>
  <div class="img_gallery">
    <Splide :options="mainOptions" ref="main">
      <SplideSlide v-for="image of listData.media" :key="image.position">
        <img :src="image?.preview_image?.src" :alt="image.alt" />
      </SplideSlide>
    </Splide>
    <div class="slider-secondary">
      <Splide
      :options="thumbsOptions"
      ref="thumbs"
      class="img_gallery--splide_slide"
    >
      <SplideSlide v-for="image of listData.media" :key="image.position">
        <img :src="image?.preview_image?.src" :alt="image.alt" />
      </SplideSlide>
    </Splide>
    </div>   
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent, onMounted, ref } from "vue";
import useArticle from "@/composables/useArticle.js";

export default defineComponent({
  name: "ThumbnailsExample",
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const { listData } = useArticle();
    const main = ref();
    const thumbs = ref();
    const mainOptions = {
      perPage: 1,
      perMove: 1,
      gap: "1rem",
      pagination: true,
      arrows: false,
    };
    const thumbsOptions = {
      type: "slide",
      rewind: true,
      gap: "1rem",
      pagination: false,
      fixedWidth: 110,
      fixedHeight: 70,
      cover: true,
      focus: "center",
      isNavigation: true,
      updateOnMove: true,
    };
    onMounted(() => {
      const thumbsSplide = thumbs.value?.splide;
      if (thumbsSplide) {
        main.value?.sync(thumbsSplide);
      }
    });

/*     const getDimensions = () => {
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;
      console.log("width",width); 
      console.log("height",height);
    }; */

    return {
      main,
      thumbs,
      mainOptions,
      thumbsOptions,
      listData,
    };
  },
});
</script>

<style lang="sass"></style>
