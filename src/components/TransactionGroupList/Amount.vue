<template>
  <div :class="isPositive() ? 'positive' : 'negative'" class="amount rubles">
    {{ amount }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Type } from "@/models";

@Component({
  name: "Amount"
})
export default class extends Vue {
  @Prop({ required: true }) private amount!: number;
  @Prop({ required: true }) private type!: Type;

  private isPositive() {
    return this.type === Type.PURCHASE;
  }
}
</script>
