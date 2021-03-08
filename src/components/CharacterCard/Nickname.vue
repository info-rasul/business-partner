<template>
  <p class="nickname">
    {{ nickname }}
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Nickname"
})
export default class extends Vue {
  @Prop({ required: false }) private nickname!: string;
}
</script>
