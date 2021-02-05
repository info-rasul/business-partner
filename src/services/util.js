import moment from "moment";
export function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        const key = moment(obj[property]).format("DD-MM-YYYY");
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        if (!acc[key]) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            acc[key] = [];
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        acc[key].push(obj);
        return acc;
    }, {});
}
//# sourceMappingURL=util.js.map