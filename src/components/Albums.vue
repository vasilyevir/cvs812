<template>
  <div class="album">
    <div class="album__container" v-for="(album, index) in allAlbums" :key="album.id">
      <p class="album__name">{{Object.values(album)[0]}}</p>
      <carousel-component :album="albumsPhotos[index]"></carousel-component>
    </div>
  </div>
</template>

<script>
import CarouselComponent from "@/components/Carousel";
import {mapGetters} from "vuex";

export default {
  name: "AlbumsComponent",
  computed: mapGetters(["albumsPhotos", "allAlbums"]),
  components: {CarouselComponent},
  data() {
    return {
      param: this.$route.params
    }
  }
}
</script>

<style scoped lang="scss">
.album {
  &__container {
    margin-top: 50px;
  }
  &__name {
    font-size: 32px;
    font-family: Inter, Helvetica, Arial, sans-serif;
    color: #272727;
    text-transform: uppercase;
    margin: 0;
   }
}

@media (max-width: 1024px) {
  .album {
    &__name {
      font-size: 24px;
    }
  }
}

@media (max-width: 1024px) {
  .album {
    &__name {
      font-size: 16px;
    }
  }
}
</style>
