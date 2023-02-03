<template>
  <b-container>
    <h1>{{ $t('page_2.title')}}</h1>
    <h4>{{ $t('page_2.body')}}</h4>
    <h4>{{ $t('page_2.footer')}}</h4>

    <b-row>
    <b-col cols-3 v-for="(item, i) in $t('page_2.product')" :key="i">
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

        <!-- <nuxt-link> -->
          <b-button href="#" variant="primary">Buy</b-button>
        <!-- </nuxt-link> -->

    </b-card>
    </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
 
}
</script>
