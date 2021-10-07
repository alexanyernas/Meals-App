<template>
  <v-container class="mt-5">
    <v-row>
      <v-btn 
        elevation="2"
        :to="`/categories/${category}`"
        color="primary"
        outlined
      >
        <v-icon class="mr-1">mdi-arrow-left-bold</v-icon>
        Back
      </v-btn>
    </v-row>
    <MealCard
        class="mt-5" 
        :meal="meal" 
    />
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MealCard from '../components/MealCard.vue'

export default {
    name: 'Meal',
    components: {
      MealCard
    },
    computed: {
      ...mapState(['meal', 'category'])
    },
    methods: {
      ...mapActions(['getMeal']),
    },
    created () {
      this.getMeal( this.$route.params.meal )
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