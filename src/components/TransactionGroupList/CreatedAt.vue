<template>
  <div class="time">
    <time :datetime="createdAt">{{ createdAt | moment }}</time>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import moment from "moment";

@Component({
  name: "CreatedAt",
  filters: {
    moment: function(date: moment.Moment) {
      return moment(date)
        .utcOffset("+0000")
        .format("HH:mm");
    }
  }
})
export default class extends Vue {
  @Prop({ required: true }) private createdAt!: moment.Moment;
}
</script>
