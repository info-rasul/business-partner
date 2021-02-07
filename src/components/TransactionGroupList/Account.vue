<template>
  <div class="account">{{ accountNumber }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Account"
})
export default class extends Vue {
  @Prop({ required: false }) private accountNumber!: string;
}
</script>
