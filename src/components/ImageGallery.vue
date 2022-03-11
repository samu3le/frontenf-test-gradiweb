<template>
  <div class="img_gallery">
    <Splide :options="mainOptions" ref="main">
      <SplideSlide>
      
        <img
          src="../assets/product-1.webp"
          alt="slide.alt"
        />
      </SplideSlide>
            <SplideSlide>
        <img
          src="../assets/product-1.webp"
          alt="slide.alt"
        />
      </SplideSlide>
            <SplideSlide>
        <img
          src="../assets/product-1.webp"
          alt="slide.alt"
        />
      </SplideSlide>
      <SplideSlide>
         <img
          src="../assets/product-1.webp"
          alt="slide.alt"
        />
      </SplideSlide>
      <SplideSlide>
         <img
          src="../assets/product-1.webp"
          alt="slide.alt"
        />
      </SplideSlide>
      <SplideSlide>
         <img
          src="../assets/product-1.webp"
          alt="slide.alt"
        />
      </SplideSlide>
    </Splide>

    <Splide :options="thumbsOptions" ref="thumbs">
      <SplideSlide>
         <img
          src="../assets/product-1.webp"
          alt="slide.alt"
        />
      </SplideSlide>
            <SplideSlide>
         <img
          src="../assets/product-1.webp"
          alt="slide.alt"
        />
      </SplideSlide>
            <SplideSlide>
         <img
          src="../assets/product-1.webp"
          alt="slide.alt"
        />
      </SplideSlide>
      <SplideSlide>
         <img
          src="../assets/product-1.webp"
          alt="slide.alt"
        />
      </SplideSlide>
      <SplideSlide>
         <img
          src="../assets/product-1.webp"
          alt="slide.alt"
        />
      </SplideSlide>
      <SplideSlide>
         <img
          src="../assets/product-1.webp"
          alt="slide.alt"
        />
      </SplideSlide>
      
      
    </Splide>
  </div>
</template>

<script>
import { Options } from '@splidejs/splide';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent( {
  name: 'ThumbnailsExample',
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const main = ref();
    const thumbs = ref();
    const mainOptions= {
      perPage   : 1,
      perMove   : 1,
      gap       : '1rem',
      pagination: false,
      arrows : false,
    };
    const thumbsOptions= {
      type        : 'slide',
      rewind      : true,
      gap         : '1rem',
      pagination  : false,
      fixedWidth  : 110,
      fixedHeight : 70,
      cover       : true,
      focus       : 'center',
      isNavigation: true,
      updateOnMove: true,
    };
    onMounted( () => {
      const thumbsSplide = thumbs.value?.splide;
      if ( thumbsSplide ) {
        main.value?.sync( thumbsSplide );
      }
    } );
    return {
      main,
      thumbs,
      mainOptions,
      thumbsOptions,
      Options,
    }
  },
} );
</script>

<style lang="sass"></style>
