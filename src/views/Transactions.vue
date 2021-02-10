<template>
  <div id="report">
    <div v-if="Object.keys(transactions).length > 0">
      <transaction-group-list
        v-for="(transaction, index) in transactions"
        :key="index"
        :title="index"
        :transactions="transaction"
      />
    </div>
    <div v-else-if="errorMessage">{{ errorMessage }}</div>
    <div v-else-if="!loading">Нет записей</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TransactionGroupList from "@/components/TransactionGroupList/index.vue";
import { TransactionService } from "@/services";

@Component({
  components: {
    TransactionGroupList
  }
})
export default class Transactions extends Vue {
  loading = false;
  transactions: Array = [];
  private errorMessage = "";

  created() {
    this.fetchData();
  }

  fetchData() {
    this.loading = true;
    TransactionService.getTransactions({})
      .then((data: any) => {
        this.transactions = data;
        this.loading = false;
      })
      .catch(error => {
        this.errorMessage = error.message;
        this.loading = false;
      });
  }
}
</script>
<style scoped lang="scss">
#report {
  margin: 40px 0;
}
</style>
