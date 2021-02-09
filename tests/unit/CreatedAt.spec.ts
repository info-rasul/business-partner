import { shallowMount } from "@vue/test-utils";
import CreatedAt from "@/components/TransactionGroupList/CreatedAt.vue";

describe("CreatedAt.vue", () => {
  it("renders props.CreatedAt when passed", () => {
    const date = "2020-09-30T16:43:31.000+0000";
    const wrapper = shallowMount(CreatedAt, {
      propsData: { createdAt: date }
    });
    expect(wrapper.text()).toMatch("16:43");
  });
});
