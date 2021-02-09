import { shallowMount } from "@vue/test-utils";
import Account from "@/components/TransactionGroupList/Account.vue";

describe("Account.vue", () => {
  it("renders props.accountNumber when passed", () => {
    const accountNumber = "521324xxxxxx1882";
    const wrapper = shallowMount(Account, {
      propsData: { accountNumber: accountNumber }
    });
    expect(wrapper.text()).toMatch(accountNumber);
  });
});
