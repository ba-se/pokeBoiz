<template> 
<div class="pokemon">
    <h1>{{pokemon.name}}</h1>
    <img :src="sprite" v-for="sprite in pokemon.sprites" :key="sprite">
</div>
</template>

<script>
export default {
  data() {
    return {
      pokemon: {
        sprites: {}
      }
    };
  },
  async created() {
    try {
      const name = this.$route.params.name;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
      this.pokemon = await response.json();
    } catch (err) {
      console.error(err);
    }
  }
};
</script>

<style scoped>
h1 {
  text-transform: capitalize;
}
</style>