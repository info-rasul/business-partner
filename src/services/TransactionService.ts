import { BaseService } from "./BaseService";
import {
  TransactionsResponse,
  GroupProperty,
  TransactionsList
} from "@/models";
import { groupBy } from "@/services/util";

export class TransactionService extends BaseService {
  static get entity() {
    return "cabinet/protected/transactions/page/2";
  }

  static async getTransactions(
    parameters: object
  ): Promise<TransactionsResponse | Error> {
    const params = { ...parameters };

    try {
      const response = await super
        .request({ auth: true })
        .get<TransactionsList>(`${this.entity}`, {
          params
        });
      return groupBy(response.data.result, GroupProperty.CREATED_AT);
    } catch (error) {
      throw new Error(error);
    }
  }
}
