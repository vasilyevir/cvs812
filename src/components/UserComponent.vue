<template>
  <div class="user">
    <div class="user__header">
      <h1 class="user__name">{{selectedUser.name + ' (@' + selectedUser.username + ')'}}</h1>
      <router-link class="user__link user__link_main" to="/">Ко всем пользователям</router-link>
    </div>
    <ul class="user__link-container">
      <li class="user__link-list">
        <router-link class="user__link" :to="{ name: 'postsUser', params: { id: param.id }}" :active-class="'user__link_active'" v-on:click="console.log(param)">Posts</router-link>
      </li>
      <li class="user__link-list">
        <router-link class="user__link" :to="{ name: 'albumsUser', params: { id: param.id }}" :active-class="'user__link_active'" v-on:click="console.log(param)">Albums</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "UserComponent",
  computed: mapGetters(['selectedUser', "allPosts", "albumsPhotos", "allAlbums"]),
  methods: mapActions(['fetchUser', 'fetchPosts', 'fetchAlbums', 'fetchPhotos']),
  data() {
    return {
      param: this.$route.params,
    }
  },
  mounted: async function () {
    await this.fetchUser(this.param.id);
    await this.fetchPosts(this.param.id);
    await this.fetchAlbums(this.param.id).then(() => {
      this.fetchPhotos(this.allAlbums)
    });
  },

}
</script>

<style scoped lang="scss">
.user {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  text-decoration: none;
  box-sizing: border-box;
  padding: 0 200px 20px;
  background: #e6e6e6;
  &__header {
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  &__name {
    font-family: Inter, Helvetica, Arial, sans-serif;
    text-align: start;
    color: #272727;
    font-size: 36px;
    margin: 0;
  }
  &__link {
    font-size: 32px;
    font-family: Inter, Helvetica, Arial, sans-serif;
    color: #272727;
    text-decoration: none;
    &_main {
      font-size: 20px;
    }
    &-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
      gap: 20px;
    }
    &-list {
      list-style-type: none;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #272727;
      height: 40px;
    }
    &_active {
      color: #272727;
      font-weight: bold;
    }
  }
}
@media (max-width: 1024px) {
  .user {
    padding: 0 100px 20px;
    &__header {
      font-size: 28px;
      flex-direction: column;
    }
    &__link {
      font-size: 24px;
    }
  }
}

@media (max-width: 768px) {
  .user {
    padding: 0 40px 20px;
    &__header, .user__name {
      font-size: 20px;
    }
    &__link {
      font-size: 16px;
    }
  }
}

@media (max-width: 425px) {
  .user {
    &__header, .user__name {
      font-size: 14px;
    }
    &__link {
      font-size: 12px;
    }
  }
}
</style>
