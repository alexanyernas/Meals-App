<template>
  <v-card
    class="card my-2"
    elevation="6"
    outlined
  >
    <v-img
      :src="img"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-divider></v-divider>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, perferendis!
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary"
        :to="`${to}`"
        rounded
      >
        {{ btn }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: 'Card',
    props: {
        img: String,
        title: String,
        btn: String,
        to: String
    }
}
</script>

<style scoped>

.card
{
  width: 344px;
}

@media only screen and (max-width: 600px) 
{
  .card
  {
    width: 300px;
  }
}
</style>