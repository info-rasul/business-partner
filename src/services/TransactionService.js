import { Http } from "./Http";
import { GroupProperty } from "@/models";
import { groupBy } from "@/services/util";
export class TransactionService {
    static get entity() {
        return "cabinet/protected/transactions/page/1";
    }
    static request(status = { auth: true }) {
        const http = new Http(status);
        return http.init();
    }
    static async getTransactionsForAccount(parameters) {
        const params = { ...parameters };
        const resp = await this.request({ auth: true }).get(`${this.entity}`, {
            params
        });
        return groupBy(resp.data.result, GroupProperty.CREATED_AT);
    }
}
//# sourceMappingURL=TransactionService.js.map