<template>
  <v-container class="mt-5">
    <v-row>
      <v-btn 
        elevation="2"
        to="/"
        color="primary"
        outlined
        
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
      <v-col class="d-flex flex-wrap justify-center">
        <div 
          v-for="(meal, index) in meals"
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
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Card from '../components/Card.vue'

export default {
  name: 'Category',
  components: {
    Card
  },
  methods: {
    ...mapActions(['getCategory', 'getMeals'])
  },
  computed: {
    ...mapState(['category', 'meals'])
  },
  created () {
    this.getCategory( this.$route.params.category )
    this.getMeals()
  }
}
</script>