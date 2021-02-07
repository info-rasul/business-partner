import { BaseService } from "./BaseService";
import { GroupProperty } from "@/models";
import { groupBy } from "@/services/util";
export class TransactionService extends BaseService {
    get entity() {
        return "posts";
    }
    static async getTransactions(parameters) {
        const params = { ...parameters };
        const resp = await super
            .request({ auth: true })
            .get(`cabinet/protected/transactions/page/1`, {
            params
        });
        return groupBy(resp.data.result, GroupProperty.CREATED_AT);
    }
}
//# sourceMappingURL=TransactionService.js.map