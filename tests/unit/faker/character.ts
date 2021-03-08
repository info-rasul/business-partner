import faker from "faker";
import { Factory } from "rosie";
import moment from "moment";
import { Status } from "@/models";

export const characterFactory = new Factory()
  .attr("char_id", faker.random.number({ min: 10000, max: 99999 }))
  .attr("name", faker.name.findName())
  .attr("birthday", moment(faker.date.past(1)).format("DD-MM-YYYY"))
  .attr("img", faker.image.imageUrl())
  .attr("status", faker.random.arrayElement(Object.values(Status)))
  .attr("nickname", faker.name.firstName());

export function getCharacterList() {
  const matches = [];
  for (let i = 1; i <= 35; i++) {
    matches.push(characterFactory.build());
  }
  return matches;
}
