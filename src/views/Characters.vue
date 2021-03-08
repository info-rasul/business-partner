<template>
  <div>
    <div v-if="characters.length > 0" class="characters">
      <character-card
        v-for="(transaction, index) in characters"
        :key="index"
        :characters="transaction"
      />
    </div>
    <div v-else-if="errorMessage">{{ errorMessage }}</div>
    <div v-else-if="!loading">Нет записей</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CharacterCard from "@/components/CharacterCard/index.vue";
import { CharacterService } from "@/services";
import { Character } from "@/models";

@Component({
  components: {
    CharacterCard
  }
})
export default class Characters extends Vue {
  loading = false;
  characters: Array<Character> = [];
  private errorMessage = "";

  created() {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    CharacterService.getList({})
      .then((data: any) => {
        this.characters = data;
        this.loading = false;
      })
      .catch(error => {
        this.errorMessage = error.message;
        this.loading = false;
      });
  }
}
</script>
<style scoped lang="scss">
  .characters {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }
</style>
