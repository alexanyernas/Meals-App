<template>
  <v-container class="mt-5">
    <v-row class="justify-center">
      <h1>All Categories</h1>
    </v-row>
    <v-row>
      <v-col class="d-flex flex-wrap justify-center">
        <div 
          v-for="(category, index) in categories"
          :key="index"
          class="mr-3 ml-3"
        >
          <Card 
            :img="category.strCategoryThumb"
            :title="category.strCategory"
            :description="category.strCategoryDescription"
            :to="`/categories/${category.strCategory}`"
            :visible="true"
            btn="Seew meals"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    ...mapState( ['categories'] )
  }
}
</script>