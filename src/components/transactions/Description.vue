<template>
  <p class="description">
    {{ description }}
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Description"
})
export default class extends Vue {
  @Prop({ required: false }) private description!: string;
}
</script>
