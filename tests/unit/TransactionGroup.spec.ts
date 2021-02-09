import { shallowMount } from "@vue/test-utils";
import faker from "faker";
import { Factory } from "rosie";
import moment from "moment";
import { EventName, Type } from "@/models";

import TransactionGroup from "@/components/TransactionGroupList/index.vue";

describe("index.vue", () => {
  it("render is components", () => {
    const date = moment(faker.date.past(1)).format("DD-MM-YYYY");
    const transaction = new Factory()
      .attr("event_id", faker.random.number({ min: 10000, max: 99999 }))
      .attr("event_name", faker.random.arrayElement(Object.values(EventName)))
      .attr("type", faker.random.arrayElement(Object.values(Type)))
      .attr("amount", faker.random.number({ min: 10000, max: 99999 }))
      .attr("currency", "RUB")
      .attr("description", faker.lorem.sentence(10, 20))
      .attr("account_number", faker.finance.creditCardNumber())
      .attr("created_at", moment(faker.date.past(1)).format("DD-MM-YYYY"));

    const wrapper = shallowMount(TransactionGroup, {
      propsData: {
        transactions: transaction.build(),
        title: date
      }
    });
    expect(wrapper.is(TransactionGroup)).toBe(true);
  });
});
