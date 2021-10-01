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
    <v-row>
      <v-col>

      </v-col>
      
      <v-col>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Meal',
    computed: {
      ...mapState(['meal', 'category'])
    },
    methods: {
      ...mapActions(['getMeal'])
    },
    created () {
      this.getMeal(this.$route.params.meal)
    }
}
</script>