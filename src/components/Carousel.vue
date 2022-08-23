<template>
  <div class="carousel">
    <carousel :per-page-custom="[[320, 1], [1440, 2]]" :navigationEnabled="true">
      <slide class="carousel__slide" v-for="photo in album" :key="photo.id">
        <img :src="photo.url" class="carousel__image">
      </slide>
    </carousel>
  </div>
</template>

<script>
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import {Carousel, Slide} from "vue-carousel/src";

export default {

  name: "carouselComponent",
  props: ['album'],
  data() {
    return {
      selectedId: 0,
    }
  },
  components: {
    Carousel,
    Slide
  }
}

Vue.use(VueCarousel);
</script>

<style scoped lang="scss">
.carousel {
  width: 1200px;
  max-width: 100%;
  box-sizing: border-box;
  margin: auto;
  &__image {
    width: 100%;
    max-width: 600px;
    height: 100%;
    max-height: 600px;
    margin: auto;
  }
  &__slide {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
</style>
