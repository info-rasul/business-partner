<template>
  <div class="time">
    <time :datetime="birthday">
      {{ birthday | moment }}
    </time>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import moment from "moment";

@Component({
  name: "Birthday",
  filters: {
    moment: function(date: moment.Moment) {
      return moment(date).isValid()
          ? `Birthday: ${moment(date).format("YYYY-MM-DD")}`
          : ''
    }
  }
})
export default class extends Vue {
  @Prop({ required: true }) private birthday!: moment.Moment;
}
</script>
