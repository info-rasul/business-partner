import { shallowMount } from "@vue/test-utils";
import TransactionGroup from "@/components/TransactionGroupList/index.vue";
import Account from "@/components/TransactionGroupList/Account.vue";
import Amount from "@/components/TransactionGroupList/Amount.vue";
import CreatedAt from "@/components/TransactionGroupList/CreatedAt.vue";
import Description from "@/components/TransactionGroupList/Description.vue";
import GroupTitle from "@/components/TransactionGroupList/GroupTitle.vue";
import Order from "@/components/TransactionGroupList/Order.vue";

import moment from "moment";
import { transactionFactory } from "./faker/transaction";

describe("index.vue", () => {
  it("renders with mount TransactionGroupList/index.vue", () => {
    const date = moment().format("DD-MM-YYYY");

    const wrapper = shallowMount(TransactionGroup, {
      propsData: {
        transactions: transactionFactory.build(),
        title: date
      }
    });
    expect(wrapper.findComponent(Account).exists()).toBe(true);
    expect(wrapper.findComponent(Amount).exists()).toBe(true);
    expect(wrapper.findComponent(CreatedAt).exists()).toBe(true);
    expect(wrapper.findComponent(Description).exists()).toBe(true);
    expect(wrapper.findComponent(GroupTitle).exists()).toBe(true);
    expect(wrapper.findComponent(Order).exists()).toBe(true);
  });
});
