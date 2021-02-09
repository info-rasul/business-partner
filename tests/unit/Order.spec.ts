import { shallowMount } from "@vue/test-utils";
import Order from "@/components/TransactionGroupList/Order.vue";

describe("Order.vue", () => {
  it("renders props.Order when passed", () => {
    const eventId = 1000;
    const eventName = "BILL_CREATION";
    const eventNameDescription = "Перевод";
    const wrapper = shallowMount(Order, {
      propsData: {
        eventId: eventId,
        eventName: eventName
      }
    });
    expect(wrapper.text()).toMatch(
      `${eventNameDescription}: ${eventId.toString()}`
    );
  });
});
