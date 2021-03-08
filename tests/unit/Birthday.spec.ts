import { shallowMount } from "@vue/test-utils";
import Birthday from "@/components/CharacterCard/Birthday.vue";

describe("Birthday.vue", () => {
    it("renders props.Birthday when passed", () => {
        const date = "09-07-1958";
        const wrapper = shallowMount(Birthday, {
            propsData: { birthday: date }
        });
        expect(wrapper.text()).toMatch("1958-09-07");
    });
});
