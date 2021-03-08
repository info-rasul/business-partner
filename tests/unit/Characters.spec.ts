import flushPromises from "flush-promises";
import { shallowMount } from "@vue/test-utils";
import Characters from "@/views/Characters.vue";
import { getCharacterList } from "./faker/character";
import { CharacterService } from "@/services";

const items = getCharacterList();
CharacterService.getList = jest.fn(() => Promise.resolve(items));

describe("Characters.vue", () => {
  it("renders transactions data after created()", async () => {
    const wrapper = shallowMount(Characters, {
      mocks: {}
    });

    await flushPromises();
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    expect(wrapper.vm.characters).toEqual(items);
  });
});
