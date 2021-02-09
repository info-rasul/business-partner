import { shallowMount } from "@vue/test-utils";
import Description from "@/components/TransactionGroupList/Description.vue";

describe("Description.vue", () => {
  it("renders props.Description when passed", () => {
    const description = "test description";
    const wrapper = shallowMount(Description, {
      propsData: { description: description }
    });
    expect(wrapper.text()).toMatch(description);
  });
});
