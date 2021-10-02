<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    NavBar
  },
  methods: {
    ...mapActions( ['getCategories'] )
  },
  created () {
    this.getCategories()
  }
};
</script>

<style>
*
{
  font-family: 'Poppins', sans-serif;
}

::-webkit-scrollbar 
{
  width: .60rem;
  border-radius: .5rem;
}

::-webkit-scrollbar-thumb 
{
  background-color: #90CAF9;
  border-radius: .5rem;
}

::-webkit-scrollbar-thumb:hover
{
  background-color: #1E88E5;
}
</style>
