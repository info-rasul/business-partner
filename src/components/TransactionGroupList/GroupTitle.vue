<template>
  <div class="title">
    <span>{{ getTitle() }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import moment from "moment";

@Component({
  name: "GroupTitle"
})
export default class extends Vue {
  @Prop({ required: true }) private title!: string;

  private getTitle() {
    const today = moment().format("DD-MM-YYYY");
    const yesterday = moment()
      .subtract(1, "days")
      .format("DD-MM-YYYY");

    switch (this.title) {
      case today:
        return "Сегодня";
      case yesterday:
        return "Вчера";
      default:
        return this.title;
    }
  }
}
</script>
