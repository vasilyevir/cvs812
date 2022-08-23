<template>
  <div id="app" class="users">
    <h1 class="users__amount">Users amount: {{amountUsers}}</h1>
    <div class="users__container">
      <router-link
          class="users__card"
          v-for="post in allUsers"
          :to="{ name: 'postsUser', params: { id: post.id }}"
          :key="post.id"
      >
        <p class="users__name">{{post.name}}</p>
        <p class="users__name">{{post.username}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "UsersComponent",
  computed: mapGetters(['allUsers', "amountUsers"]),
  methods: mapActions(['fetchUsers']),
  mounted: async function () {
    await this.fetchUsers();
  }
}
</script>

<style scoped lang="scss">

.users{
  width: 100%;
  height: 100%;
  min-height: 100vh;
  text-decoration: none;
  box-sizing: border-box;
  padding: 20px 200px;
  background: #e6e6e6;
  font-family: Inter, Helvetica, Arial, sans-serif;
  color: #272727;
  &__amount{
    font-size: 32px;
    color: #272727;
    margin: 0 0 20px;
   }
  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  &__card {
    width: 100%;
    border: 1px solid #272727;
    border-radius: 8px;
    box-sizing: border-box;
    text-decoration: none;
    padding: 10px;
  }
  &__name {
    font-size: 24px;
    margin: 0;
    color: #272727;
  }
}

@media (max-width: 1024px) {
  .users {
    padding: 20px 100px;
  }
}

@media (max-width: 768px) {
  .users {
    padding: 20px 40px;
  }
}

@media (max-width: 425px) {
  .users {
    &__name {
      font-size: 12px;
    }
  }
}
</style>
