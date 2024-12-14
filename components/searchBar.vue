<template>
  <div>
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search for a Pokémon..."
      @keyup.enter="fetchPokemon(searchTerm)"
    />
    <button @click="fetchPokemon(searchTerm)">Search</button>

    <div v-if="isLoading">Loading...</div>

    <div v-else-if="pokemon">
      <h3>{{ pokemon.name }}</h3>
      <img :src="pokemon.sprites.front_default" alt="Pokemon sprite" />
      <p>Height: {{ pokemon.height }}</p>
      <p>Weight: {{ pokemon.weight }}</p>
    </div>

    <div v-else-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { usePokemon } from "@/composables/fetchPokemon";

export default defineComponent({
  name: "PokemonSearch",
  setup() {
    const searchTerm = ref("");
    const { pokemon, isLoading, errorMessage, fetchPokemon } = usePokemon();

    return {
      searchTerm,
      pokemon,
      isLoading,
      errorMessage,
      fetchPokemon,
    };
  },
});
</script>

<style scoped>
input {
  margin-right: 8px;
  padding: 8px;
}

button {
  padding: 8px 16px;
}

h3 {
  margin-top: 16px;
}

img {
  margin-top: 8px;
}
</style>
