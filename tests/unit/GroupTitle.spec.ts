import { shallowMount } from "@vue/test-utils";
import GroupTitle from "@/components/TransactionGroupList/GroupTitle.vue";
import moment from "moment";

describe("GroupTitle.vue", () => {
  it("renders props.Title when passed", () => {
    const date = "01.01.2021";
    const wrapper = shallowMount(GroupTitle, {
      propsData: { title: date }
    });
    expect(wrapper.text()).toMatch(date);
  });

  it("shows the string 'Today' instead of today's date", () => {
    const date = moment().format("DD-MM-YYYY");
    const wrapper = shallowMount(GroupTitle, {
      propsData: { title: date }
    });
    expect(wrapper.text()).toMatch("Сегодня");
  });

  it("shows the string 'Yesterday' instead of yesterday's date", () => {
    const date = moment()
      .subtract(1, "days")
      .format("DD-MM-YYYY");
    const wrapper = shallowMount(GroupTitle, {
      propsData: { title: date }
    });
    expect(wrapper.text()).toMatch("Вчера");
  });
});
