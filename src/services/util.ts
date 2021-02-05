import { Transaction, GroupProperty } from "@/models";
import moment from "moment";

export function groupBy(
  objectArray: Array<Transaction>,
  property: GroupProperty
) {
  return objectArray.reduce(function(acc: any, obj) {
    const key = moment(obj[property]).format("DD-MM-YYYY");
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
