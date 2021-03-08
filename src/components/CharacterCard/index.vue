<template>
  <div class="character">
    <card-image :link="characters.img" :alt="characters.name" />
    <div class="stats">
      <div class="stats-container">
        <div class="name-wrapper">
          <card-status :status="characters.status" />
          <card-name :name="characters.name" />
        </div>
        <card-nickname :nickname="characters.nickname" />
        <div class="product-options">
          <card-birthday :birthday="characters.birthday" />
          <div class="occupations">
            <div class="c-blue"><span></span></div>
            <div class="c-red"><span></span></div>
            <div class="c-white"><span></span></div>
            <div class="c-green"><span></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Character } from "@/models";
import CardImage from "./Image.vue";
import CardName from "./Name.vue";
import CardNickname from "./Nickname.vue";
import CardBirthday from "./Birthday.vue";
import CardStatus from "./Status.vue";

@Component({
  name: "CharacterCard",
  components: {
    CardImage,
    CardName,
    CardNickname,
    CardBirthday,
    CardStatus,
  }
})
export default class extends Vue {
  @Prop({ required: true }) characters!: Character;
}
</script>

<style scoped lang="scss">
.character {
  margin-bottom: 2%;
  cursor: pointer;
  .stats {
    background: #fff;
    display: flex;
    justify-content: center;
    .stats-container {
      background: #fff;
      width: 100%;
      height: 40px;
      padding: 25px 5px;
      transition: all 200ms ease-out;
      .product-options {
        display: none;
      }
      .name-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  &:hover {
    .stats-container {
      margin-top: -100px;
      transition: all 400ms ease-out;
      height: 140px;
      .product-options {
        display: block;
      }
    }
  }
}
</style>
