<template>
  <b-container style="text-align: -webkit-center;">
    <div style="max-width: 500px;" class="mt-5">
      <form @submit.prevent="getUser">
        <b-form-input v-model="text" placeholder="Enter your name" required></b-form-input>
      </form>
    </div>

    <pre>
      <!-- {{ items }} -->
    </pre>
    
  
    <b-row>
    <b-col cols-3 v-for="(item, i) in user.data" :key="i">
      {{ item }}
        <!-- <b-card
        :title="String(item.product_name)"
        :img-src="item.product_img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
        <b-card-text>
            {{ item.fullname }}
        </b-card-text>
        <b-button :to="`users/${i+1}`" variant="info">Buy</b-button>
    </b-card> -->
    </b-col>
    </b-row>
    
  </b-container>
</template>
<script>
export default {
  layout: "default",
  data(){
    return {
      text: '',
      items: '',
    }
  },
  
  async mounted() {
    // await this.fetchUser();
    this.items = this.user.data;
  },
  async asyncData({ $axios }) {
    var user = [];
    user = await $axios.$get('http://localhost:8091/api/user/getAllUser', { headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzNmRjMzdmZWVlZDRhZWZhMjZkMTE0ZjIwYzk1YjE2IiwidXNlcm5hbWUiOiJyb290IiwiZW1haWwiOiJraXRzYW5hcG9uZy53QG11bHRpcGx5Ynk4LmNvbSIsIm5hbWUiOiLguYHguJrguIfguITguYwiLCJyb2xlcyI6InJvb3QiLCJpYXQiOjE2NzU0MTU0NTIsImV4cCI6MTY3NTQ0Nzg1Mn0.X6wQx3OavfvVlLnbO3511NhyI5HlEcerzKP8IZOI69M'}})
    return { user }
  },
  
  methods:{
    getUser(){
      this.$router.push('users/'+this.text)
    },
    // async fetchUser(){
    //   try {
    //     let temp = await this.$axios.$get('http://localhost:8091/api/user/getAllUser', { headers: {'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQzNmRjMzdmZWVlZDRhZWZhMjZkMTE0ZjIwYzk1YjE2IiwidXNlcm5hbWUiOiJyb290IiwiZW1haWwiOiJraXRzYW5hcG9uZy53QG11bHRpcGx5Ynk4LmNvbSIsIm5hbWUiOiLguYHguJrguIfguITguYwiLCJyb2xlcyI6InJvb3QiLCJpYXQiOjE2NzU0MTU0NTIsImV4cCI6MTY3NTQ0Nzg1Mn0.X6wQx3OavfvVlLnbO3511NhyI5HlEcerzKP8IZOI69M'}})
    //     console.log(temp);
    //   } catch (error) {
    //     alert('data not found!')
    //   }
    // }
    
  },
}
</script>
