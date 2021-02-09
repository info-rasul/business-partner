import { shallowMount } from "@vue/test-utils";
import Amount from "@/components/TransactionGroupList/Amount.vue";

describe("Amount.vue", () => {
  it("renders props.Amount when passed", () => {
    const amount = 1000;
    const type = "PURCHASE";
    const wrapper = shallowMount(Amount, {
      propsData: {
        amount: amount,
        type: type
      }
    });
    expect(wrapper.text()).toMatch(amount.toString());
    expect(wrapper.classes("positive")).toBe(true);
  });

  it("renders props.Amount when passed", () => {
    const amount = 1000;
    const type = "CASUAL";
    const wrapper = shallowMount(Amount, {
      propsData: {
        amount: amount,
        type: type
      }
    });
    expect(wrapper.text()).toMatch(amount.toString());
    expect(wrapper.classes("negative")).toBe(true);
  });
});
