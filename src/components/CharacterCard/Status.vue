<template>
  <div class="status" :class="getStatus()" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Status } from "@/models";

@Component({
  name: "Status"
})
export default class extends Vue {
  @Prop({ required: true }) private status!: Status;

  private getStatus() {
    switch (this.status) {
      case Status.ALIVE:
        return "alive";
      case Status.DECEASED:
        return "deceased"
      case Status.PRESUMED_DEAD:
        return "dead"
      case Status.UNKNOWN:
        return "unknown"
      default:
        return "unknown"
    }
  }
}
</script>
<style scoped lang="scss">
.status {
  width: 11px;
  height: 11px;
  margin-right: 5px;
  &.alive {
    background: #39b27c;
  }
  &.deceased {
    background: #1e1d2f;
  }
  &.dead {
    background: black;
  }
  &.unknown {
    background: #cccccc;
  }
}
</style>
