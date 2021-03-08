<template>
  <img :src="link" :alt="alt" class="card-image" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "CardImage"
})
export default class extends Vue {
  @Prop({ required: false }) private link!: string;
  @Prop({ required: false }) private alt!: string;
}
</script>

<style lang="scss" scoped>
.card-image {
  width: 100%;
  height: 471px;
  object-fit: cover;
  object-position: top;
  margin-bottom: -7px;
}
</style>
