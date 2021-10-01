const axios = require('axios');
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use ( Vuex )

export default new Vuex.Store({
  state: {
    categories: [],
    category: '',
    meals: [],
    meal: ''
  },
  mutations: {
    setCategories ( state, payload ) {
      state.categories = payload
    },
    setCategory ( state, payload ) {
      state.category = payload
    },
    setMeals ( state, payload ) {
      state.meals = payload
    },
    setMeal ( state, payload ) {
      state.meal = payload
    }
  },
  actions: {
    getCategories ( { commit } ) {
      axios.get( 'https://www.themealdb.com/api/json/v1/1/categories.php' )
        .then(( { data } ) => {
          commit( 'setCategories', data.categories )
        })
    },
    getCategory ( { commit }, category ) {
      commit('setCategory', category)
    },
    getMeals ( { state, commit } ) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${state.category}`)
        .then(( { data } ) => {
          commit( 'setMeals', data.meals )
        })
    },
    getMeal ( { commit }, meal ) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
        .then(( { data } ) => {
          commit( 'setMeal', data )
        })
    }
  }
})
