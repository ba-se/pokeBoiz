<template>
<div class="home"> 
  <div class="row">
    <div class="card" v-for="(pokemon, index) in pokemonList" :key="pokemon.name"
    @click="clickedCard(pokemon.name)">
      <h3>{{pokemon.name}}</h3>
      <img 
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`"
      :alt="`this is a pokemon whose name is ${pokemon.name}`"
      >
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      pokemonList: []
    };
  },
  async created() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const body = await response.json();
    this.pokemonList = body.results;
  },
  methods: {
    clickedCard(name) {
      // this.$router.push({ name: 'pokemon', params: { name }});
      this.$router.push(`/${name}`); /// ^ these two methods are identical, two different ways of writing this method. 
    }
  }
};
</script>

<style scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    width: 200px;
    height: 200px;
    border: 2px solid grey;
    border-radius: 5px;
    margin: 1em;
    justify-content: center;
    display: flex;
  }
</style>
