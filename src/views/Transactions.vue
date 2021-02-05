<template>
  <div id="report">
    <div>
      <transaction-group-list
        v-for="(transaction, index) in transactions"
        :key="index"
        :title="index"
        :transactions="transaction"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TransactionGroupList from "@/components/TransactionGroupList.vue";
import { TransactionService } from "@/services";

@Component({
  components: {
    TransactionGroupList
  }
})
export default class Transactions extends Vue {
  transactions = [];
  error: false;
  loading: false;
  page: 1;

  created() {
    this.fetchData();
  }

  async fetchData() {
    this.loading = true;

    try {
      TransactionService.getTransactionsForAccount({ page: this.page }).then(
        (data: any) => {
          this.transactions = data;
        }
      );
    } catch (e) {
      this.error = e.message;
      this.loading = false;
      console.log(e);
    } finally {
      this.loading = false;
    }
  }
}
</script>
<style scoped lang="scss">
#report {
  margin: 40px 0;
}
</style>
