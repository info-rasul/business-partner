<template>
  <div class="order">
    {{ getEventDescription() }}: <b>{{ eventId }}</b>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { EventDescription, EventName } from "@/models";

@Component({
  name: "Order"
})
export default class extends Vue {
  @Prop({ required: true }) private eventId!: number;
  @Prop({ required: true }) private eventName!: EventName;

  private getEventDescription() {
    return EventDescription[this.eventName];
  }
}
</script>
