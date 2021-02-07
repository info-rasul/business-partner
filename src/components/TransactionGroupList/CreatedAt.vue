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
      return moment(date).format("hh:mm");
    }
  }
})
export default class extends Vue {
  @Prop({ required: true }) private createdAt!: moment.Moment;
}
</script>
