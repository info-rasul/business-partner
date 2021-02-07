<template>
  <div>
    <div class="title">
      <span>{{ title }}</span>
    </div>
    <ul>
      <li
        v-for="(transaction, index) in transactions"
        :key="index"
        class="transaction"
      >
        <details>
          <summary>
            <order
              :eventId="transaction.event_id"
              :eventName="transaction.event_name"
            />
            <created-at :createdAt="transaction.created_at" />
            <account :accountNumber="transaction.account_number" />
            <amount :amount="transaction.amount" :type="transaction.type" />
          </summary>
          <description :description="transaction.description" />
        </details>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Transaction } from "@/models";
import Account from "./Account.vue";
import Amount from "./Amount.vue";
import Description from "./Description.vue";
import Order from "./Order.vue";
import CreatedAt from "./CreatedAt.vue";
import moment from "moment";

@Component({
  name: "TransactionsList",
  components: {
    CreatedAt,
    Account,
    Amount,
    Description,
    Order
  }
})
export default class extends Vue {
  @Prop({ required: true }) transactions!: Transaction;
  @Prop({ required: true }) title!: moment.Moment;
}
</script>

<style scoped lang="scss">
.title {
  padding: 0 10px;
  text-align: left;
  color: #848497;
}
ul {
  li {
    position: relative;
    background: #27283c;
    margin-top: 10px;
    padding: 10px;
    &:before,
    &:after {
      content: "";
      position: absolute;
    }
    &:before {
      $size: 40px;
      width: $size;
      height: $size;
      left: 10px;
      top: 16px;
      border-radius: 50%;
      background-color: #24a84d;
    }
    &:after {
      $size: 36px;
      width: $size;
      height: $size;
      left: 12px;
      top: 18px;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3207673/credit-card--white.svg);
    }
    summary {
      padding-left: 50px;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
      &::-webkit-details-marker {
        display: none;
      }
    }
    div {
      line-height: 26px;
    }
    p {
      text-align: left;
      color: #587d6c;
    }
    .order {
      order: 1;
      flex-basis: 55%;
      text-align: left;
    }
    .amount {
      order: 2;
      font-size: 18px;
      font-weight: 800;
      flex-basis: 45%;
      text-align: right;
      color: #fff;
      &.negative {
        color: #d87822;
        &:before {
          content: "- ";
        }
      }
      &.positive {
        color: #39b27c;
        &:before {
          content: "+ ";
        }
      }
      &.rubles {
        &:after {
          content: " ₽";
        }
      }
    }
    .time {
      order: 3;
      flex-basis: 30%;
      text-align: left;
    }
    .account {
      order: 4;
      flex-basis: 70%;
      text-align: right;
    }
  }
  .description {
    margin-top: 10px;
    padding: 10px;
    background-color: #ccc;
    border-radius: 4px;
    overflow: hidden;
    color: #212121;
    div {
      padding: 10px;
      &:first-child {
        background-color: #58b4b4;
      }
    }
    a {
      color: #9b51e0;
    }
  }
}
</style>
