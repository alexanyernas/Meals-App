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
        class="mb-2"
      >
        {{ btn }}
      </v-btn>
      <slot v-if="visible">
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          outlined
          rounded
          class="mb-2"
          @click="reveal = true"
        >
          Learn more
        </v-btn>
      </slot>
    </v-card-actions>
    <slot v-if="visible">
      <v-fade-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%;"
        >
          <v-card-text class="pb-0 text-center">
            <p class="text-h4 text--primary">
              Description
            </p>
            <p>
              {{ description }}
            </p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn
              class="ml-3"
              color="red"
              fab
              outlined
              x-small
              @click="reveal = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-fade-transition>
    </slot>
  </v-card>
</template>

<script>
export default {
    name: 'Card',
    props: {
        img: String,
        title: String,
        btn: String,
        to: String,
        description: String,
        visible: Boolean
    },
    data () {
      return {
        reveal: false
      }
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

.v-card--reveal
{
  bottom: 0;
  opacity: 1;
  position: absolute;
  width: 100%;
  overflow: scroll;
}
</style>