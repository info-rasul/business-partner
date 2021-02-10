import flushPromises from "flush-promises";
import { shallowMount } from "@vue/test-utils";
import Transactions from "@/views/Transactions.vue";
import { getTransactionList } from "./faker/transaction";
import { TransactionService } from "@/services";

const items = getTransactionList();
TransactionService.getTransactions = jest.fn(() => Promise.resolve(items));

describe("Transactions.vue", () => {
  it("renders transactions data after created()", async () => {
    const wrapper = shallowMount(Transactions, {
      mocks: {}
    });

    await flushPromises();
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(wrapper.vm.transactions).toEqual(items);
  });
});
