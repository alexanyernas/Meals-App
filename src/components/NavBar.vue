<template>
    <v-app-bar
      app
      color="blue"
      dark
      elevation="6"
      elevate-on-scroll
    >
      <v-toolbar-title>
        Meals App
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        color="#1565C0"
        rounded
        to="/search" 
      >
        Search meal
        <v-icon class="ml-2">mdi-magnify</v-icon>
      </v-btn>
      
      <v-spacer></v-spacer>

      <v-btn
        v-for="( link, index ) in links"
        :key="index"
        :href="link.url"
        target="_BLANK"
        rel="noopener noreferrer"
        text
      >
        <v-icon>
          {{ link.icon }}
        </v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'NavBar',
    data () {
      return {
        links: [
          {
            url: 'https://github.com/alexanyernas/meals-app/',
            icon: 'mdi-github'
          },
          {
            url: 'https://twitter.com/alexanyernas/',
            icon: 'mdi-twitter'
          }
        ]
      }
    }
}
</script>