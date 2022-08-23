<template>
  <ul class="posts">
    <li class="post" v-for="post in allPosts" :key="post.id">
      {{post.title}}
    </li>
  </ul>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "PostsComponent",
  computed: mapGetters(["allPosts"]),
  data() {
    return {
      param: this.$route.params
    }
  }
}
</script>

<style scoped lang="scss">
.posts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  padding: 0;
  list-style: none;
  margin: 20px 0 0;
}
.post {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  border: 1px solid #272727;
  border-radius: 10px;
  padding: 10px;

  font-size: 20px;
  font-family: Inter, Helvetica, Arial, sans-serif;
  color: #272727;
}

@media (max-width: 425px) {
  .post {
    font-size: 12px;
  }
}
</style>
