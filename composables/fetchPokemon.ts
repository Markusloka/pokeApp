import { ref } from "vue";

export function usePokemon() {
  const pokemon = ref<any | null>(null);
  const isLoading = ref(false);
  const errorMessage = ref("");

  const fetchPokemon = async (name: string) => {
    if (!name.trim()) {
      errorMessage.value = "Please enter a Pokémon name.";
      return;
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;

    isLoading.value = true;
    errorMessage.value = "";
    pokemon.value = null;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Pokémon not found.");
      }

      const data = await response.json();
      pokemon.value = data;
      console.log(data);
    } catch (error) {
      errorMessage.value = (error as Error).message;
      console.error("Error fetching Pokémon:", error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    pokemon,
    isLoading,
    errorMessage,
    fetchPokemon,
  };
}
