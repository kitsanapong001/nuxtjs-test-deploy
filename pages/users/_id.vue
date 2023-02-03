<template>
  <b-container>
    <div v-if="profile">
      <div class="text-center">
        <b-img :src="profile.avatar_url" rounded="circle" alt="" width="250"></b-img>
        <h5 class="mt-3">Welcome : {{ $route.params.id }}</h5>
        <a :href="profile.html_url" target="_blank">Link github</a>
      </div>
      <pre>{{ profile }}</pre>
    </div>
    <div v-if="!profile">
      <h5>loading.....</h5>
    </div>


    <div class="text-center">
      <nuxt-link to="/">Back Home</nuxt-link>
    </div>
    
  </b-container>
</template>

<script>
export default {
  data(){
    return {
      profile: '',
      id: this.$route.params.id,
    }
  },
  async mounted(){
    await this.fetchUser()
  },
  methods: {
    async fetchUser() {
      try {
        this.profile = await this.$axios.$get('https://api.github.com/users/'+this.$route.params.id)
      } catch (error) {
        alert('data not found!')
        this.$router.push("/");
      }
    }
  }
}
</script>

<style>

</style>