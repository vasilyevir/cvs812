<template>
  <router-view></router-view>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'App',
  computed: mapGetters(['allUsers', "amountUsers"]),
  methods: mapActions(['fetchUsers']),
  mounted: async function () {
    await this.fetchUsers();
  }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

body, html {padding: 0; margin: 0;}
</style>
