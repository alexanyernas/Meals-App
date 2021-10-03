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
    <v-row class="mt-5">
      <v-col>
        <v-img
          :src="meal.strMealThumb"
          class="meal-img mx-auto"
        >
        </v-img>
      </v-col>
      <v-col class="text-center">
        <h2 class="mb-5">{{ meal.strMeal }}</h2>

        <v-expansion-panels>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <span><v-icon class="mr-2">mdi-map-marker-radius</v-icon>Area</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ meal.strArea }}
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <span><v-icon class="mr-2">mdi-format-list-checks</v-icon>Category</span>
            </v-expansion-panel-header>            
            <v-expansion-panel-content>
              {{ meal.strCategory }}
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <span><v-icon class="mr-2">mdi-playlist-edit</v-icon>Ingredients</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <ul>
                <v-list-item 
                  v-for="( item, index ) in getIngredients()" 
                  :key="index"
                  v-if="item[0]" 
                >
                  <v-list-item-content 
                    class="justify-center"
                  >
                    {{ item[0] }} - {{ item[1] }}
                  </v-list-item-content>
                </v-list-item>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>
              <span><v-icon class="mr-2">mdi-information-outline</v-icon>Instructions</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ meal.strInstructions }}
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel v-if="meal.strTags">
            <v-expansion-panel-header>
              <span><v-icon class="mr-2">mdi-pound</v-icon>Tags</span>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ meal.strTags }}
            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-expansion-panels>
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
      ...mapActions(['getMeal']),
      getIngredients () {
        const ingredients = []
        const measures = []
        const data = []
        
        for ( let key in this.meal ) {
          if ( key.includes( 'strIngredient' ) ) {
            ingredients.push( this.meal[key] )
          } else if ( key.includes( 'strMeasure' ) ) {
            measures.push( this.meal[key] )
          }
        }

        for (let i = 0; i < ingredients.length; i++) {
          data.push([ingredients[i], measures[i]])
        }

        return data
      }
    },
    created () {
      this.getMeal( this.$route.params.meal )
    }
}
</script>

<style scoped>
.meal-img
{
  width: 550px;
  height: 550px;
  border-radius: 10%;
}

@media only screen and (max-width: 600px) 
{
  .meal-img
  {
    width: 300px;
    height: 300px;
  }
  .v-btn
  {
    margin-left: 8px;
  }
}
</style>