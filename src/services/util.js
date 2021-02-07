import moment from "moment";
export function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        const key = moment(obj[property]).format("DD-MM-YYYY");
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}
//# sourceMappingURL=util.js.map