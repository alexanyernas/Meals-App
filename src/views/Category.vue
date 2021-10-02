<template>
  <v-container class="mt-5">
    <v-row>
      <v-btn 
        elevation="2"
        to="/"
        color="primary"
        outlined
        class="btn" 
      >
        <v-icon class="mr-1">mdi-arrow-left-bold</v-icon>
        Back
      </v-btn>
    </v-row>
    <v-row>
      <v-col class="text-center">
        <h1>{{ category }}</h1>
        <h3>Total meals: {{ meals.length }}</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="totalPages()"
            circle
          ></v-pagination>
        </div>
      </v-col>
      <v-col class="d-flex flex-wrap justify-center">
        <div 
          v-for="(meal, index) in meals.slice(page * totalElements - totalElements, page * totalElements)"
          :key="index"
          class="mr-3 ml-3"
        >
          <Card 
            :img="meal.strMealThumb"
            :title="meal.strMeal"
            btn="Details"
            :to="`/meals/${meal.idMeal}`"
          />
        </div>
      </v-col>
      <v-col cols="12">
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="totalPages()"
            circle
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Card from '../components/Card.vue'

export default {
  name: 'Category',
    computed: {
      ...mapState(['category', 'meals'])
    },
  data () {
    return {
      page: 1,
      totalElements: 6
    }
  },
  components: {
    Card
  },
  methods: {
    ...mapActions(['getCategory', 'getMeals']),
    totalPages () {
      return Math.ceil(this.meals.length / this.totalElements)
    }
  },
  created () {
    this.getCategory( this.$route.params.category )
    this.getMeals()
  }
}
</script>

<style scoped>
@media only screen and (max-width: 600px) 
{
  .v-btn
  {
    margin-left: 8px;
  }
}
</style>