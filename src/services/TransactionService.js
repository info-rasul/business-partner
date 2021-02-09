import { BaseService } from "./BaseService";
import { GroupProperty } from "@/models";
import { groupBy } from "@/services/util";
export class TransactionService extends BaseService {
    static get entity() {
        return "cabinet/protected/transactions/page/1";
    }
    static async getTransactions(parameters) {
        const params = { ...parameters };
        try {
            const response = await super
                .request({ auth: true })
                .get(`${this.entity}`, {
                params
            });
            return groupBy(response.data.result, GroupProperty.CREATED_AT);
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
//# sourceMappingURL=TransactionService.js.map