<template>
  <b-container style="text-align: -webkit-center;">
    <div style="max-width: 500px;" class="mt-5">
      <form @submit.prevent="getUser">
        <b-form-input v-model="text" placeholder="Enter your name" required></b-form-input>
      </form>
    </div>

    <h1>{{ $t('page_1.title')}}</h1>
    <h4>{{ $t('page_1.body')}}</h4>
    <h4>{{ $t('page_1.footer')}}</h4>

    <b-row>
    <b-col cols-3 v-for="(item, i) in $t('page_1.product')" :key="i">
        <b-card
        :title="String(item.product_name)"
        :img-src="item.product_img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
    >
        <b-card-text>
            {{ item.product_id }}
        </b-card-text>

        <b-button :to="`users/${i+1}`" variant="info">Buy</b-button>

    </b-card>
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
    }
  },
  computed: {    
    
  },
  methods:{
    getUser(){
      this.$router.push('users/'+this.text)
    }
    
  },
}
</script>
