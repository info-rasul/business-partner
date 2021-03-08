<template>
  <span class="character_name">
    {{ name }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Name"
})
export default class extends Vue {
  @Prop({ required: false }) private name!: string;
}
</script>
<style scoped lang="scss">
  .character_name {
    font-size: 15px;
    color: #393c45;
    font-weight: 700;
    text-transform: uppercase;
  }
</style>
