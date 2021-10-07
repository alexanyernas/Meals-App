<template>
  <v-container class="mt-5">
    <v-row class="mb-5">
      <v-btn 
        elevation="2"
        to="/"
        color="primary"
        outlined
        class="btn" 
      >
        <v-icon class="mr-1">mdi-arrow-left-bold</v-icon>
        Home
      </v-btn>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" lg="6" class="mx-auto">
        <h1 class="text-center">Search a meal <v-icon color="red">mdi-cards-heart</v-icon></h1>
        <v-form 
            class="text-center"
            @submit.prevent="validate"
        >
            <v-text-field
                v-model.trim="input"
                clearable
            >
              <template #label>
                <span class="red--text"><strong>* </strong></span>Meal name
              </template>
            </v-text-field>
            <v-btn
                color="primary"
                class="mr-4 mt-3"
                type="submit"
            >
                Search
            </v-btn>
            <div v-if="warning" class="mt-5">
              <v-alert
                dense
                outlined
                type="error"
              >
                The meal is <strong> not registered</strong>.
              </v-alert>
            </div>
            <div v-if="loading" class="text-center mt-10">
              <v-progress-linear
                indeterminate
                color="primary"
              ></v-progress-linear>
            </div>
        </v-form>        
      </v-col>
    </v-row>
    <slot v-if="mealResult">
      <MealCard 
        :meal="mealResult"
      />
    </slot>
  </v-container>
</template>

<script>
const axios = require('axios');
import MealCard from '../components/MealCard.vue'

export default {
    name: 'Search',
    components: {
        MealCard
    },
    data () {
        return {
            input: '',
            warning: false,
            loading: false,
            mealResult: null
        }
    },
    methods: {
      getMealSearch ( search ) {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
          .then( ( { data } ) => {
            this.warning = false
            this.mealResult = data.meals[0]
            this.input = ''
          })
          .catch( () => {
            this.warning = true
            this.mealResult = null
          })
          .finally( () => {
            this.loading = false
          });
      },
      validate () {
        if ( this.input ) {
          this.loading = true
          this.getMealSearch( this.input )
        }
      }
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