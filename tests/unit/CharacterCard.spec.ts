import { shallowMount } from "@vue/test-utils";
import { getCharacterList } from "./faker/character";

import CharacterCard from "@/components/CharacterCard/index.vue";
import CardImage from "@/components/CharacterCard/Image.vue";
import CardName from "@/components/CharacterCard/Name.vue";
import CardNickname from "@/components/CharacterCard/Nickname.vue";
import CardBirthday from "@/components/CharacterCard/Birthday.vue";
import CardStatus from "@/components/CharacterCard/Status.vue";

describe("index.vue", () => {
  it("renders with mount CharacterCard/index.vue", () => {
    const wrapper = shallowMount(CharacterCard, {
      propsData: {
        characters: getCharacterList(),
      }
    });
    expect(wrapper.findComponent(CardImage).exists()).toBe(true);
    expect(wrapper.findComponent(CardName).exists()).toBe(true);
    expect(wrapper.findComponent(CardNickname).exists()).toBe(true);
    expect(wrapper.findComponent(CardBirthday).exists()).toBe(true);
    expect(wrapper.findComponent(CardStatus).exists()).toBe(true);
  });
});
