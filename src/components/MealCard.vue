<template>
    <v-row class="mt-1">
      <v-col cols="12" class="text-center">
        <h1 class="mb-5">{{ meal.strMeal }}</h1>
        <v-img
          :src="meal.strMealThumb"
          class="meal-img mx-auto mb-2"
        >
        </v-img>
      </v-col>
      <v-col class="text-center mx-auto" cols="12" xs="12" lg="7" >

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
</template>

<script>
export default {
    name: 'MealCard',
    props: {
        meal: Object
    },
    methods: {
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
}
</script>

<style scoped>
.meal-img
{
  width: 525px;
  height: 525px;
  border-radius: 10%;
}

@media only screen and (max-width: 768px) 
{
  .meal-img
  {
    position: relative;
    width: 300px;
    height: 300px;
  }
  .v-btn
  {
    margin-left: 8px;
  }
}
</style>